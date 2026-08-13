import { useEffect, useRef, useState } from 'react';
import type { FenceElement } from './types';

type DragState={id:string;pointerId:number;offsetX:number;offsetY:number;rect:DOMRect};
type Props={els:FenceElement[];selected:string;setSelected:(id:string)=>void;updateElement:(id:string,x:number,y:number)=>void};

export function DraggableCanvas({els,selected,setSelected,updateElement}:Props){
 const [drag,setDrag]=useState<DragState|null>(null);
 const elementsRef=useRef(els); const updateRef=useRef(updateElement);
 elementsRef.current=els; updateRef.current=updateElement;

 useEffect(()=>{if(!drag)return;
  const move=(event:PointerEvent)=>{if(event.pointerId!==drag.pointerId)return;event.preventDefault();const item=elementsRef.current.find(e=>e.id===drag.id);if(!item)return;const pointerX=(event.clientX-drag.rect.left)/drag.rect.width*3000;const pointerY=(event.clientY-drag.rect.top)/drag.rect.height*1800;const thickness=Number(item.size.match(/\d+/)?.[0]??40);const maxX=Math.max(0,3000-(item.orientation==='horizontal'?item.lengthMm:thickness));const maxY=Math.max(0,1800-(item.orientation==='vertical'?item.lengthMm:thickness));const x=Math.round(Math.max(0,Math.min(maxX,pointerX-drag.offsetX)));const y=Math.round(Math.max(0,Math.min(maxY,pointerY-drag.offsetY)));updateRef.current(item.id,x,y)};
  const stop=(event:PointerEvent)=>{if(event.pointerId===drag.pointerId)setDrag(null)};
  window.addEventListener('pointermove',move,{passive:false});window.addEventListener('pointerup',stop);window.addEventListener('pointercancel',stop);
  return()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',stop);window.removeEventListener('pointercancel',stop)};
 },[drag]);

 return <div className="canvasWrap"><div className="ruler top">{[0,500,1000,1500,2000,2500,3000].map(n=><span key={n}>{n}</span>)}</div><div className="ruler side">{[0,300,600,900,1200,1500,1800].map(n=><span key={n}>{n}</span>)}</div><div className={`canvas ${drag?'dragging':''}`} onClick={()=>setSelected('')}><div className="dimension width"><span>3.000 mm</span></div><div className="dimension height"><span>1.800 mm</span></div>{els.map(element=>{const horizontal=element.orientation==='horizontal';return <button aria-label={`${element.name} ${element.lengthMm} mm`} key={element.id} onClick={event=>event.stopPropagation()} onPointerDown={event=>{if(event.button!==0)return;event.preventDefault();event.stopPropagation();const canvas=event.currentTarget.parentElement!;const rect=canvas.getBoundingClientRect();const pointerX=(event.clientX-rect.left)/rect.width*3000;const pointerY=(event.clientY-rect.top)/rect.height*1800;setSelected(element.id);setDrag({id:element.id,pointerId:event.pointerId,offsetX:pointerX-element.positionX,offsetY:pointerY-element.positionY,rect})}} className={`beam ${selected===element.id?'selected':''} ${drag?.id===element.id?'isDragging':''}`} style={{left:`${element.positionX/3000*100}%`,top:`${element.positionY/1800*100}%`,width:horizontal?`${element.lengthMm/3000*100}%`:'12px',height:horizontal?'12px':`${element.lengthMm/1800*100}%`}}><span>{selected===element.id?`${element.lengthMm} mm · X ${element.positionX} · Y ${element.positionY}`:''}</span></button>})}</div></div>
}
