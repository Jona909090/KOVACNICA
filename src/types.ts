export type Orientation = 'horizontal' | 'vertical';
export interface Material { code:string; name:string; size:string; pricePerMeter:number; shape:'square'|'rect'|'angle'|'solid' }
export type OrnamentStyle='scroll-cross'|'diamond-scroll'|'ring-panel'|'heart-scroll'|'double-s'|'spear-scroll';
export interface FenceElement { id:string; type:'profile'|'ornament'; materialCode:string; name:string; size:string; lengthMm:number; orientation:Orientation; positionX:number; positionY:number; pricePerMeter:number; shape?:'straight'|'arc'; bendRiseMm?:number; widthMm?:number; pricePerPiece?:number; ornamentStyle?:OrnamentStyle }

export function developedLengthMm(element:FenceElement){
 if(element.type==='ornament')return 0;
 const rise=element.shape==='arc'?Math.min(element.lengthMm/2,Math.max(0,element.bendRiseMm??0)):0;
 if(!rise)return element.lengthMm;
 const chord=element.lengthMm;
 const radius=(chord*chord)/(8*rise)+rise/2;
 const ratio=Math.min(1,chord/(2*radius));
 return radius*2*Math.asin(ratio);
}

export function elementCost(element:FenceElement){return element.type==='ornament'?(element.pricePerPiece??0):developedLengthMm(element)/1000*element.pricePerMeter}

export function bendRadiusMm(element:FenceElement){
 const rise=element.shape==='arc'?Math.min(element.lengthMm/2,Math.max(0,element.bendRiseMm??0)):0;
 return rise?(element.lengthMm*element.lengthMm)/(8*rise)+rise/2:0;
}
