import type { OrnamentStyle } from './types';

export function OrnamentSvg({style,variant=1,horizontal=false}: {style:OrnamentStyle;variant?:number;horizontal?:boolean}){
 const common={fill:'none',stroke:'currentColor',strokeWidth:7,strokeLinecap:'round' as const,strokeLinejoin:'round' as const};
 return <svg className="ornamentSvg" viewBox={horizontal?'0 0 700 300':'0 0 300 700'} preserveAspectRatio="none" aria-hidden="true">
  <g transform={horizontal?'translate(700 0) rotate(90)':undefined} {...common}>
   {style==='scroll-cross'&&<><path d="M150 40V660"/><path d="M150 210C105 160 45 178 62 235C72 266 112 255 104 227"/><path d="M150 210C195 160 255 178 238 235C228 266 188 255 196 227"/><path d="M150 390C92 330 32 365 54 430C68 471 114 451 104 415"/><path d="M150 390C208 330 268 365 246 430C232 471 186 451 196 415"/><circle cx="150" cy="300" r="18"/></>}
   {style==='diamond-scroll'&&<><path d="M150 30V670"/><path d="M150 170L90 280L150 390L210 280Z"/><path d="M90 280C48 238 30 291 59 310"/><path d="M210 280C252 238 270 291 241 310"/><path d="M150 390C105 435 70 413 77 380"/><path d="M150 390C195 435 230 413 223 380"/><circle cx="150" cy="170" r="15"/><circle cx="150" cy="390" r="15"/></>}
   {style==='ring-panel'&&<><path d="M150 30V120M150 580V670"/><path d="M108 120H192Q225 120 225 155V545Q225 580 192 580H108Q75 580 75 545V155Q75 120 108 120Z"/><circle cx="150" cy="350" r="62"/><path d="M75 175Q45 195 75 220M225 480Q255 505 225 530"/></>}
   {style==='heart-scroll'&&<><path d="M150 30V670"/><path d="M150 230C105 145 35 180 61 254C79 304 126 330 150 365C174 330 221 304 239 254C265 180 195 145 150 230Z"/><path d="M150 365C112 405 73 433 68 486C62 551 129 555 150 495C171 555 238 551 232 486C227 433 188 405 150 365Z"/><circle cx="150" cy="365" r="15"/></>}
   {style==='double-s'&&<><path d="M150 30V670"/><path d="M150 135C260 90 270 235 177 260C87 285 83 389 150 405"/><path d="M150 295C40 250 30 395 123 420C213 445 217 549 150 565"/><path d="M150 135C112 110 90 132 102 158M150 565C188 590 210 568 198 542"/></>}
   {style==='spear-scroll'&&<><path d="M150 40L120 135L150 185L180 135Z" fill="currentColor"/><path d="M150 185V670"/><path d="M150 250C105 195 42 222 67 274C80 302 115 286 107 260"/><path d="M150 250C195 195 258 222 233 274C220 302 185 286 193 260"/><path d="M150 420L105 485L150 540L195 485Z"/><circle cx="150" cy="340" r="18"/></>}
   {style==='basket'&&<><path d="M150 30V210M150 490V670"/><path d="M150 185C85 205 75 315 150 360C225 315 215 205 150 185Z"/><path d="M150 340C88 360 82 455 150 500C218 455 212 360 150 340Z"/><path d="M110 215L190 325M190 215L110 325M112 370L188 470M188 370L112 470"/></>}
   {style==='leaf-panel'&&<><path d="M150 25V675"/><path d="M150 180C95 120 45 160 65 220C80 265 120 250 105 215"/><path d="M150 180C205 120 255 160 235 220C220 265 180 250 195 215"/><path d="M150 390C75 300 35 390 72 458C94 497 126 468 110 430"/><path d="M150 390C225 300 265 390 228 458C206 497 174 468 190 430"/><path d="M92 285Q55 260 68 225Q110 235 112 278ZM208 285Q245 260 232 225Q190 235 188 278Z" fill="currentColor"/></>}
   {style==='lyre'&&<><path d="M150 30V670"/><path d="M150 170C100 90 35 155 72 235C96 285 130 310 150 350C170 310 204 285 228 235C265 155 200 90 150 170Z"/><path d="M150 350C115 395 92 465 108 535M150 350C185 395 208 465 192 535"/><path d="M108 535C75 565 55 530 73 505M192 535C225 565 245 530 227 505"/></>}
   {style==='spiral-branch'&&<><path d="M72 650C75 510 95 420 150 345C205 270 232 180 220 55"/><path d="M150 345C80 310 48 365 78 410C98 440 130 420 116 390"/><path d="M150 345C220 380 252 325 222 280C202 250 170 270 184 300"/><path d="M102 485C45 465 30 515 58 542C78 560 98 540 86 520"/><path d="M198 205C255 225 270 175 242 148C222 130 202 150 214 170"/></>}
   {variant===2&&<><path d="M115 305Q150 270 185 305Q150 340 115 305Z"/><path d="M115 430Q150 395 185 430Q150 465 115 430Z"/></>}
   {variant===3&&<><path d="M150 285L112 350L150 415L188 350Z"/><circle cx="150" cy="350" r="12"/></>}
   {variant===4&&<><circle cx="150" cy="260" r="35"/><circle cx="150" cy="455" r="35"/><path d="M115 260H70M185 260H230M115 455H70M185 455H230"/></>}
   {variant===5&&<><path d="M108 285Q60 245 55 305Q82 322 112 305ZM192 285Q240 245 245 305Q218 322 188 305ZM105 455Q60 420 58 478Q85 494 113 474ZM195 455Q240 420 242 478Q215 494 187 474Z" fill="currentColor"/></>}
  </g>
 </svg>
}
