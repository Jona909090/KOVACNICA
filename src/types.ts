export type Orientation = 'horizontal' | 'vertical';
export interface Material { code:string; name:string; size:string; pricePerMeter:number; shape:'square'|'rect'|'angle'|'solid' }
export interface FenceElement { id:string; type:'profile'; materialCode:string; name:string; size:string; lengthMm:number; orientation:Orientation; positionX:number; positionY:number; pricePerMeter:number }
