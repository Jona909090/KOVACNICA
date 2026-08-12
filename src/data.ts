import type { FenceElement, Material } from './types';
export const materials: Material[] = [
  {code:'P4040',name:'Kvadratni profil',size:'40 × 40 mm',pricePerMeter:4.8,shape:'square'},
  {code:'P4060',name:'Pravougaoni profil',size:'40 × 60 mm',pricePerMeter:6.2,shape:'rect'},
  {code:'L1515',name:'L-profil',size:'15 × 15 mm',pricePerMeter:2.1,shape:'angle'},
  {code:'S1212',name:'Puna šipka',size:'12 × 12 mm',pricePerMeter:2.8,shape:'solid'},
];
const p=materials[0];
export const initialElements:FenceElement[]=[
  {id:'frame-top',type:'profile',materialCode:p.code,name:p.name,size:p.size,lengthMm:3000,orientation:'horizontal',positionX:0,positionY:0,pricePerMeter:p.pricePerMeter},
  {id:'frame-bottom',type:'profile',materialCode:p.code,name:p.name,size:p.size,lengthMm:3000,orientation:'horizontal',positionX:0,positionY:1760,pricePerMeter:p.pricePerMeter},
  {id:'frame-left',type:'profile',materialCode:p.code,name:p.name,size:p.size,lengthMm:1800,orientation:'vertical',positionX:0,positionY:0,pricePerMeter:p.pricePerMeter},
  {id:'frame-right',type:'profile',materialCode:p.code,name:p.name,size:p.size,lengthMm:1800,orientation:'vertical',positionX:2960,positionY:0,pricePerMeter:p.pricePerMeter},
];
