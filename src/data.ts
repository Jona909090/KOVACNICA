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

export interface OrnamentCatalogItem{code:string;name:string;widthMm:number;heightMm:number;pricePerPiece:number;style:OrnamentStyle;variant:number;assetPath?:string}
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

const spearCodes=['124/1','124/2','124/9','124/3','124/4','124/5','727/7','727/8','727/9','125/1','K48/33A','K48/33B','124/6','124/8','K48/38A','126/B/5','126/C/3','126/C/4','126/C/5','K48/42A','K48/42B','K48/42C','123/5','K/LIS06B','K/LIS06A','122/A/1','K48/56','K48/57'];
const spearheads:OrnamentCatalogItem[]=spearCodes.map((code,index)=>({code:`VR-${code}`,name:`Kovani vrh ${code}`,widthMm:45+(index%7)*10,heightMm:120+(index%6)*18,pricePerPiece:Number((4.8+(index%8)*.75).toFixed(2)),style:'spearhead',variant:index+1}));
const baskets:OrnamentCatalogItem[]=[
 {code:'KO-158-B7',name:'Kovana kuglasta košara',widthMm:70,heightMm:70,pricePerPiece:9.8,style:'basket-piece',variant:1},
 {code:'KO-159-3',name:'Kovana košara 130',widthMm:60,heightMm:130,pricePerPiece:11.5,style:'basket-piece',variant:2},
 {code:'KO-159-5',name:'Kovana košara 145',widthMm:75,heightMm:145,pricePerPiece:13.2,style:'basket-piece',variant:3},
 {code:'KO-159-7',name:'Kovana košara 210',widthMm:95,heightMm:210,pricePerPiece:16.9,style:'basket-piece',variant:4},
];
const cDimensions=[[73,120],[60,100],[70,115],[80,137],[110,190],[95,350],[110,160],[115,180],[80,137],[80,137],[75,125],[90,150]];
const cScrolls:OrnamentCatalogItem[]=cDimensions.map(([width,height],index)=>({code:`CV-${String(index+1).padStart(2,'0')}`,name:`C-voluta ${index+1}`,widthMm:width,heightMm:height,pricePerPiece:Number((3.7+index*.38).toFixed(2)),style:'c-scroll',variant:index+1}));
const sDimensions=[[100,275],[100,275],[120,265],[120,265],[140,325],[140,325],[105,410],[105,410],[115,395],[115,395],[130,380],[130,380],[110,300],[110,330],[110,330],[245,490],[245,490],[90,250],[90,250],[275,775]];
const sScrolls:OrnamentCatalogItem[]=sDimensions.map(([width,height],index)=>({code:`SV-${String(index+1).padStart(2,'0')}`,name:`S-voluta ${index+1}`,widthMm:width,heightMm:height,pricePerPiece:Number((5.2+index*.42).toFixed(2)),style:'s-scroll',variant:index+1}));
ornaments.push(...spearheads,...baskets,...cScrolls,...sScrolls);

type ExtraSpec=[string,string,number,number,OrnamentStyle];
const extraSpecs:ExtraSpec[]=[
 ['K22/3','Panel s košarom',230,1000,'catalog-panel'],['K25/3','Panel s dvostrukim volutama',275,1000,'catalog-panel'],['K26/7','Galvanizirani centralni panel',200,650,'catalog-panel'],['49/3','Panel s tri srca',175,1000,'catalog-panel'],
 ['48/1','Šipka s jednom košarom',55,1000,'decorated-bar'],['48/2','Šipka s dvije košare',65,1050,'decorated-bar'],['K24/5','Velika spiralna S-šipka',175,1000,'catalog-panel'],['K52/2','Panel s listovima',235,1000,'catalog-panel'],['K25/4','Lepezasti panel',200,1000,'catalog-panel'],['52/F/1','Dvostruki lepezasti panel',250,1000,'catalog-panel'],
 ['K26/24A','Panel s cvjetovima',260,1000,'catalog-panel'],['64/F/2','Šipka s dvostrukim listom',90,1000,'decorated-bar'],['64/F/4','Šipka s vrhom lista',70,1000,'decorated-bar'],['K22/1','Panel dvostruki okvir',220,1000,'catalog-panel'],['K9/48','Masivna balustrada 35',90,1035,'decorated-bar'],['K9/46','Balustrada kvadratna 14',70,1000,'decorated-bar'],['64/I/3R','Okrugla ukrasna šipka 14',55,1000,'decorated-bar'],['64/G/1','Panel s kopljem',225,900,'catalog-panel'],
 ['K9/44','Šipka s ovalnim čvorom 12',70,1000,'decorated-bar'],['K9/45','Šipka s ovalnim čvorom 16',80,1000,'decorated-bar'],['K15/6A','Valovita šipka kovana',200,1000,'wave-bar'],['K14/1A','Valovita šipka 200',200,1000,'wave-bar'],
 ['K25/2','Panel sa šest voluta',300,1000,'catalog-panel'],['K23/1A','Panel sa srcima i rombom',165,1000,'catalog-panel'],['K23/3A','Panel pravokutni s rombom',175,1000,'catalog-panel'],['113/2','Šipka s velikim rombom',90,1100,'decorated-bar'],['K26/4','Široki simetrični panel',270,1000,'catalog-panel'],['K24/4','Velika asimetrična voluta',240,1000,'catalog-panel'],['64/F/9','Uvijena šipka s medaljonom',110,900,'decorated-bar'],['64/I/2R','Okrugla šipka s dva vrha',45,1000,'decorated-bar'],['KL/321','Veliki lira panel',250,1100,'catalog-panel'],
 ['112/6','Kvadratna šipka 30 s prstenom',50,1200,'decorated-bar'],['112/7','Kvadratna šipka 25 s čvorom',48,1200,'decorated-bar'],['105/2','Okrugla šipka 14 s čvorom',42,1000,'decorated-bar'],['105/1','Okrugla šipka 14 dvostruki čvor',42,1000,'decorated-bar'],
];
const extraCatalog:OrnamentCatalogItem[]=extraSpecs.map(([code,name,widthMm,heightMm,style],index)=>({code:`KT-${code}`,name,widthMm,heightMm,pricePerPiece:Number((12.5+(index%11)*1.15).toFixed(2)),style,variant:index+1,assetPath:`${import.meta.env.BASE_URL}catalog/kt-${String(index+1).padStart(2,'0')}.png`}));
ornaments.push(...extraCatalog);
