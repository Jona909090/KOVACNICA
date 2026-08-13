import { useEffect, useRef, useState } from 'react';
import { OrnamentSvg } from './OrnamentSvg';
import type { FenceElement } from './types';

type DragState={id:string;pointerId:number;offsetX:number;offsetY:number;rect:DOMRect};
type Props={els:FenceElement[];selected:string;setSelected:(id:string)=>void;updateElement:(id:string,x:number,y:number)=>void};

function elementBounds(item:FenceElement){
 if(item.type==='ornament'){
  const vertical=item.orientation==='vertical';
  return {width:vertical?(item.widthMm??220):item.lengthMm,height:vertical?item.lengthMm:(item.widthMm??220)};
 }
 const thickness=item.lineThicknessMm??Number(item.size.match(/\d+/)?.[0]??40);
 const rise=item.shape==='arc'?Math.min(item.lengthMm/2,Math.max(0,item.bendRiseMm??0)):0;
 return {width:item.orientation==='horizontal'?item.lengthMm:thickness+rise,height:item.orientation==='vertical'?item.lengthMm:thickness+rise};
}

export function DraggableCanvas({els,selected,setSelected,updateElement}:Props){
 const [drag,setDrag]=useState<DragState|null>(null);
 const elementsRef=useRef(els);const updateRef=useRef(updateElement);
 elementsRef.current=els;updateRef.current=updateElement;

 useEffect(()=>{if(!drag)return;
  const move=(event:PointerEvent)=>{if(event.pointerId!==drag.pointerId)return;event.preventDefault();const item=elementsRef.current.find(e=>e.id===drag.id);if(!item)return;const pointerX=(event.clientX-drag.rect.left)/drag.rect.width*3000;const pointerY=(event.clientY-drag.rect.top)/drag.rect.height*1800;const bounds=elementBounds(item);const x=Math.round(Math.max(0,Math.min(3000-bounds.width,pointerX-drag.offsetX)));const y=Math.round(Math.max(0,Math.min(1800-bounds.height,pointerY-drag.offsetY)));updateRef.current(item.id,x,y)};
  const stop=(event:PointerEvent)=>{if(event.pointerId===drag.pointerId)setDrag(null)};
  window.addEventListener('pointermove',move,{passive:false});window.addEventListener('pointerup',stop);window.addEventListener('pointercancel',stop);
  return()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',stop);window.removeEventListener('pointercancel',stop)};
 },[drag]);

 return <div className="canvasWrap"><div className="ruler top">{[0,500,1000,1500,2000,2500,3000].map(n=><span key={n}>{n}</span>)}</div><div className="ruler side">{[0,300,600,900,1200,1500,1800].map(n=><span key={n}>{n}</span>)}</div><div className={`canvas ${drag?'dragging':''}`} onClick={()=>setSelected('')}><div className="dimension width"><span>3.000 mm</span></div><div className="dimension height"><span>1.800 mm</span></div>{els.map(element=>{
  const horizontal=element.orientation==='horizontal';const bounds=elementBounds(element);const thickness=element.lineThicknessMm??Number(element.size.match(/\d+/)?.[0]??40);const rise=element.shape==='arc'?Math.min(element.lengthMm/2,Math.max(0,element.bendRiseMm??0)):0;const curved=element.type==='profile'&&rise>0;const path=horizontal?`M ${thickness/2} ${bounds.height-thickness/2} Q ${bounds.width/2} ${thickness/2} ${bounds.width-thickness/2} ${bounds.height-thickness/2}`:`M ${thickness/2} ${thickness/2} Q ${bounds.width-thickness/2} ${bounds.height/2} ${thickness/2} ${bounds.height-thickness/2}`;const profileShade=`shade-${element.materialCode.toLowerCase()}`;
  return <button aria-label={`${element.name} ${element.lengthMm} mm`} key={element.id} onClick={event=>event.stopPropagation()} onPointerDown={event=>{if(event.button!==0)return;event.preventDefault();event.stopPropagation();const canvas=event.currentTarget.parentElement!;const rect=canvas.getBoundingClientRect();const pointerX=(event.clientX-rect.left)/rect.width*3000;const pointerY=(event.clientY-rect.top)/rect.height*1800;setSelected(element.id);setDrag({id:element.id,pointerId:event.pointerId,offsetX:pointerX-element.positionX,offsetY:pointerY-element.positionY,rect})}} className={`beam ${element.type==='profile'?profileShade:''} ${curved?'curved':''} ${element.type==='ornament'?'ornamentBeam':''} ${selected===element.id?'selected':''} ${drag?.id===element.id?'isDragging':''}`} style={{left:`${element.positionX/3000*100}%`,top:`${element.positionY/1800*100}%`,width:`${bounds.width/3000*100}%`,height:`${bounds.height/1800*100}%`}}>{curved&&<svg viewBox={`0 0 ${bounds.width} ${bounds.height}`} preserveAspectRatio="none"><path d={path} style={{strokeWidth:`${Math.max(2,thickness/4)}px`}}/></svg>}{element.type==='ornament'&&element.ornamentStyle&&<OrnamentSvg style={element.ornamentStyle} variant={element.ornamentVariant??1} horizontal={horizontal}/>}{selected===element.id&&<span>{`${element.type==='ornament'?'UKRAS':curved?'LUK':'PROFIL'} · ${element.lengthMm} mm · X ${element.positionX} · Y ${element.positionY}`}</span>}</button>
 })}</div></div>
}
