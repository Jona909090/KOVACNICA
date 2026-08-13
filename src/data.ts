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

export interface OrnamentCatalogItem{code:string;name:string;widthMm:number;heightMm:number;pricePerPiece:number;style:OrnamentStyle;variant:number}
const ornamentFamilies:{style:OrnamentStyle;name:string;width:number;height:number;price:number}[]=[
 {style:'scroll-cross',name:'Volute',width:220,height:560,price:12.5},
 {style:'diamond-scroll',name:'Romb i volute',width:240,height:620,price:15.8},
 {style:'ring-panel',name:'Panel s prstenom',width:210,height:680,price:14.2},
 {style:'heart-scroll',name:'Srce',width:260,height:640,price:17.5},
 {style:'double-s',name:'S-voluta',width:280,height:700,price:18.9},
 {style:'spear-scroll',name:'Kovani vrh',width:230,height:660,price:16.4},
 {style:'basket',name:'Kovana košara',width:190,height:650,price:19.2},
 {style:'leaf-panel',name:'Panel s listovima',width:300,height:720,price:22.4},
 {style:'lyre',name:'Lira',width:270,height:680,price:20.6},
 {style:'spiral-branch',name:'Spiralna grana',width:320,height:700,price:21.8},
];
const variantNames=['jednostruka','dvostruka','s rombom','s prstenovima','s listovima'];
export const ornaments:OrnamentCatalogItem[]=ornamentFamilies.flatMap((family,familyIndex)=>Array.from({length:5},(_,variantIndex)=>{const variant=variantIndex+1;const number=familyIndex*5+variant;return {code:`OR-${String(number).padStart(3,'0')}`,name:`${family.name} — ${variantNames[variantIndex]}`,widthMm:family.width+(variantIndex%3)*20,heightMm:family.height+(variantIndex%2)*40,pricePerPiece:Number((family.price+variantIndex*1.35).toFixed(2)),style:family.style,variant}}));
