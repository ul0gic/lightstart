/**
 * The model layer's cross-runtime commands: what the frontend registry sends
 * the db-worker (`$APP.worker.request(MODEL_QUERY, { model, opts })`) and
 * what `bootstrapp/model/backend` answers. Import-only, like every commands.js.
 */
export declare const MODEL_GET = "MODEL:GET";
export declare const MODEL_QUERY = "MODEL:QUERY";
export declare const MODEL_COUNT = "MODEL:COUNT";
export declare const MODEL_EXISTS = "MODEL:EXISTS";
export declare const MODEL_FACETS = "MODEL:FACETS";
export declare const MODEL_ADD = "MODEL:ADD";
export declare const MODEL_ADD_MANY = "MODEL:ADD_MANY";
export declare const MODEL_EDIT = "MODEL:EDIT";
export declare const MODEL_REMOVE = "MODEL:REMOVE";
export declare const MODEL_REMOVE_MANY = "MODEL:REMOVE_MANY";
