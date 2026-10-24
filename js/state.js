export const COLORS = ["#A78BFA","#67E8F9","#34D399","#FBBF24","#FB7185","#60A5FA","#F472B6","#A3E635"];
export const NODE_TYPES = ["Idea","Note","Topic","Question","Resource","Task","Reference"];
export const uid = (prefix="id") => `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;
export function makeNode(title="New idea", x=0, y=0, extra={}) {
  const now = new Date().toISOString();
  return {id:uid("node"),title,description:"",type:"Idea",x,y,w:184,h:104,color:COLORS[0],tags:[],url:"",createdAt:now,updatedAt:now,...extra};
}
export function makeEdge(source,target,label="") { return {id:uid("edge"),source,target,label,style:"solid",directed:false}; }
export function makeMap(name="Untitled map", nodes=[], edges=[]) {
  const now=new Date().toISOString();
  return {id:uid("map"),name,nodes,edges,createdAt:now,updatedAt:now,favorite:false,viewport:{x:0,y:0,scale:1},deleted:false};
}
export function starterMap() {
  const m=makeMap("Learning Universe");
  m.nodes=[
    makeNode("Learning Universe",-15,-25,{type:"Topic",description:"A connected space for ideas, questions, and discoveries.",color:"#A78BFA",w:210,h:112,tags:["overview"]}),
    makeNode("Core concepts",-285,-160,{type:"Topic",description:"The foundations I want to understand.",color:"#67E8F9",tags:["study"]}),
    makeNode("Questions to explore",245,-155,{type:"Question",description:"Curiosities that lead to deeper learning.",color:"#FBBF24",tags:["curiosity"]}),
    makeNode("Useful resources",-285,125,{type:"Resource",description:"Articles, videos, and reference materials.",color:"#34D399",tags:["reading"]}),
    makeNode("Next steps",245,125,{type:"Task",description:"Turn insights into small, actionable tasks.",color:"#FB7185",tags:["action"]})
  ];
  m.edges=[makeEdge(m.nodes[0].id,m.nodes[1].id,"builds on"),makeEdge(m.nodes[0].id,m.nodes[2].id,"asks"),makeEdge(m.nodes[0].id,m.nodes[3].id,"supported by"),makeEdge(m.nodes[0].id,m.nodes[4].id,"leads to")];
  m.viewport={x:0,y:0,scale:1};return m;
}
export function defaultWorkspace(){const m=starterMap();return {version:1,settings:{theme:"dark",showMiniMap:true},maps:[m],currentMapId:m.id,recentMapIds:[m.id],trash:[]};}
export function validateWorkspace(raw){
  if(!raw||typeof raw!=="object"||!Array.isArray(raw.maps))throw new Error("This file is not a valid MindMap Universe workspace.");
  const maps=raw.maps.filter(m=>m&&typeof m.id==="string"&&typeof m.name==="string"&&Array.isArray(m.nodes)&&Array.isArray(m.edges)).map(m=>{
    const ids=new Set();const nodes=m.nodes.filter(n=>n&&typeof n.id==="string"&&typeof n.title==="string"&&Number.isFinite(n.x)&&Number.isFinite(n.y)).map(n=>({...n,w:Number(n.w)||184,h:Number(n.h)||104,tags:Array.isArray(n.tags)?n.tags.filter(t=>typeof t==="string"):[],color:COLORS.includes(n.color)?n.color:"#A78BFA",type:NODE_TYPES.includes(n.type)?n.type:"Idea"})).filter(n=>{if(ids.has(n.id))return false;ids.add(n.id);return true;});
    const edges=m.edges.filter(e=>e&&typeof e.id==="string"&&ids.has(e.source)&&ids.has(e.target)&&e.source!==e.target).filter((e,i,a)=>a.findIndex(x=>x.source===e.source&&x.target===e.target)===i);
    return {...m,nodes,edges,viewport:m.viewport||{x:0,y:0,scale:1},favorite:!!m.favorite,deleted:!!m.deleted};
  });
  if(!maps.length)throw new Error("No valid maps were found in this file.");
  const ids=new Set(maps.map(m=>m.id));return {version:1,settings:{theme:raw.settings?.theme==="light"?"light":"dark",showMiniMap:raw.settings?.showMiniMap!==false},maps,currentMapId:ids.has(raw.currentMapId)?raw.currentMapId:maps[0].id,recentMapIds:Array.isArray(raw.recentMapIds)?raw.recentMapIds.filter(id=>ids.has(id)):[],trash:Array.isArray(raw.trash)?raw.trash:[]};
}