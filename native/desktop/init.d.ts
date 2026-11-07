/**
 * @bootstrapp/light/native/desktop/init: the script the shell installs into every page load
 * before the page's own scripts run. It gives the page the event side of the bridge: a listener
 * table and a queue for events that arrive before a listener does, so a reload keeps working and
 * nothing emitted early is lost. The call side, `window.__desktop`, is the webview's own binding.
 */
export const initScript: "(() => {\n  if (window.__desktopEmit) return;\n  const listeners = new Map();\n  const queued = [];\n  window.__desktopListen = (name, fn) => {\n    let set = listeners.get(name);\n    if (!set) {\n      set = new Set();\n      listeners.set(name, set);\n    }\n    set.add(fn);\n    const kept = [];\n    for (const entry of queued) if (entry[0] === name) fn(entry[1]); else kept.push(entry);\n    queued.length = 0;\n    for (const entry of kept) queued.push(entry);\n  };\n  window.__desktopUnlisten = (name, fn) => {\n    const set = listeners.get(name);\n    if (set) set.delete(fn);\n  };\n  window.__desktopEmit = (name, value) => {\n    const set = listeners.get(name);\n    if (!set || set.size === 0) {\n      if (queued.length < 256) queued.push([name, value]);\n      return;\n    }\n    for (const fn of [...set]) fn(value);\n  };\n})();";
