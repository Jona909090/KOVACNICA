export type Orientation = 'horizontal' | 'vertical';
export interface Material { code:string; name:string; size:string; pricePerMeter:number; shape:'square'|'rect'|'angle'|'solid' }
export interface FenceElement { id:string; type:'profile'; materialCode:string; name:string; size:string; lengthMm:number; orientation:Orientation; positionX:number; positionY:number; pricePerMeter:number; shape?:'straight'|'arc'; bendRiseMm?:number }

export function developedLengthMm(element:FenceElement){
 const rise=element.shape==='arc'?Math.min(element.lengthMm/2,Math.max(0,element.bendRiseMm??0)):0;
 if(!rise)return element.lengthMm;
 const chord=element.lengthMm;
 const radius=(chord*chord)/(8*rise)+rise/2;
 const ratio=Math.min(1,chord/(2*radius));
 return radius*2*Math.asin(ratio);
}

export function bendRadiusMm(element:FenceElement){
 const rise=element.shape==='arc'?Math.min(element.lengthMm/2,Math.max(0,element.bendRiseMm??0)):0;
 return rise?(element.lengthMm*element.lengthMm)/(8*rise)+rise/2:0;
}
