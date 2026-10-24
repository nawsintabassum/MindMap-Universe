import {defaultWorkspace,validateWorkspace} from "./state.js";
const KEY="mindmap-universe.workspace.v1";
export function loadWorkspace(){try{const raw=localStorage.getItem(KEY);if(!raw)return defaultWorkspace();return validateWorkspace(JSON.parse(raw));}catch(error){console.warn("MindMap storage recovery:",error);return defaultWorkspace();}}
export function saveWorkspace(workspace){try{localStorage.setItem(KEY,JSON.stringify(workspace));return true;}catch(error){console.error(error);return false;}}
