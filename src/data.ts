import type { FenceElement, Material, OrnamentStyle } from './types';
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

export interface OrnamentCatalogItem{code:string;name:string;widthMm:number;heightMm:number;pricePerPiece:number;style:OrnamentStyle}
export const ornaments:OrnamentCatalogItem[]=[
 {code:'OR-001',name:'Četiri volute',widthMm:220,heightMm:520,pricePerPiece:12.5,style:'scroll-cross'},
 {code:'OR-002',name:'Romb sa volutama',widthMm:240,heightMm:600,pricePerPiece:15.8,style:'diamond-scroll'},
 {code:'OR-003',name:'Panel sa prstenom',widthMm:200,heightMm:650,pricePerPiece:14.2,style:'ring-panel'},
 {code:'OR-004',name:'Dvostruko srce',widthMm:260,heightMm:620,pricePerPiece:17.5,style:'heart-scroll'},
 {code:'OR-005',name:'Dvostruka S-voluta',widthMm:280,heightMm:700,pricePerPiece:18.9,style:'double-s'},
 {code:'OR-006',name:'Kovani vrh sa volutama',widthMm:230,heightMm:650,pricePerPiece:16.4,style:'spear-scroll'},
];
