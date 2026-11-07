/**
 * The file storage the store uploads `T.file()` values through. A package
 * that stores files (an asset service, a bucket) registers its provider
 * here; without one, blobs stay on the row untouched and the adapter decides
 * what to do with them.
 */

import { schemaField } from "./fields.js";

                                                                            

let storage                     = null;

export const setFileStorage = (provider                    )       => { storage = provider; };

export const getFileStorage = ()                     => storage;

const isDataUrl = (value         )                  => typeof value === "string" && value.startsWith("data:");

const dataUrlToBlob = (dataUrl        )       => {
  const [header = "", base64 = ""] = dataUrl.split(",");
  const mime = header.match(/:(.*?);/)?.[1] || "application/octet-stream";
  const bytes = atob(base64);
  const arr = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
  return new Blob([arr], { type: mime });
};

const uploadOne = async (provider             , item         , where                                  )                   => {
  const blob = isDataUrl(item) ? dataUrlToBlob(item) : item;
  if (!(blob instanceof Blob)) return item;
  return (await provider.upload(blob, where)).url;
};

const uploadAll = (provider             , items           , where                                  )                     =>
  new Promise((resolve, reject) => {
    const urls            = [...items];
    let left = items.length;
    if (left === 0) resolve(urls);
    items.forEach((item, index) => {
      uploadOne(provider, item, where).then((url) => {
        urls[index] = url;
        left -= 1;
        if (left === 0) resolve(urls);
      }, reject);
    });
  });

/**
 * Send every `T.file()` / `T.files()` value of a row through the registered
 * storage and put the answered url in its place. Without a provider the row
 * comes back untouched.
 */
export const uploadFiles = async (schema                         , model        , row     )               => {
  if (!storage || !schema) return row;
  const provider = storage;
  const uploaded                      = [];
  for (const field of Object.keys(schema)) {
    if (field.startsWith("$")) continue;
    const kind = (schemaField(schema, field)              ).fieldType;
    const value = row[field];
    if (kind === "file") uploaded.push([field, await uploadOne(provider, value, { field, model })]);
    else if (kind === "files" && Array.isArray(value)) uploaded.push([field, await uploadAll(provider, value, { field, model })]);
  }
  return Object.fromEntries([...Object.entries(row), ...uploaded]);
};
