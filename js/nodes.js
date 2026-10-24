import {makeNode} from "./state.js";
export function createNode(map,title,x,y,extra={}){const n=makeNode(title,x,y,extra);map.nodes.push(n);return n;}
export function removeNodes(map,ids){const set=new Set(ids);map.nodes=map.nodes.filter(n=>!set.has(n.id));map.edges=map.edges.filter(e=>!set.has(e.source)&&!set.has(e.target));}
export function duplicateNode(map,node,offset=28){const copy={...structuredClone(node),id:`node_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`,title:`${node.title} copy`,x:node.x+offset,y:node.y+offset,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};map.nodes.push(copy);return copy;}
