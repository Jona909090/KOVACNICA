import type { OrnamentStyle } from './types';

export function OrnamentSvg({style,horizontal=false}: {style:OrnamentStyle;horizontal?:boolean}){
 const common={fill:'none',stroke:'currentColor',strokeWidth:7,strokeLinecap:'round' as const,strokeLinejoin:'round' as const};
 return <svg className="ornamentSvg" viewBox={horizontal?'0 0 700 300':'0 0 300 700'} aria-hidden="true">
  <g transform={horizontal?'translate(700 0) rotate(90)':undefined} {...common}>
   {style==='scroll-cross'&&<><path d="M150 40V660"/><path d="M150 210C105 160 45 178 62 235C72 266 112 255 104 227"/><path d="M150 210C195 160 255 178 238 235C228 266 188 255 196 227"/><path d="M150 390C92 330 32 365 54 430C68 471 114 451 104 415"/><path d="M150 390C208 330 268 365 246 430C232 471 186 451 196 415"/><circle cx="150" cy="300" r="18"/></>}
   {style==='diamond-scroll'&&<><path d="M150 30V670"/><path d="M150 170L90 280L150 390L210 280Z"/><path d="M90 280C48 238 30 291 59 310"/><path d="M210 280C252 238 270 291 241 310"/><path d="M150 390C105 435 70 413 77 380"/><path d="M150 390C195 435 230 413 223 380"/><circle cx="150" cy="170" r="15"/><circle cx="150" cy="390" r="15"/></>}
   {style==='ring-panel'&&<><path d="M150 30V120M150 580V670"/><path d="M108 120H192Q225 120 225 155V545Q225 580 192 580H108Q75 580 75 545V155Q75 120 108 120Z"/><circle cx="150" cy="350" r="62"/><path d="M75 175Q45 195 75 220M225 480Q255 505 225 530"/></>}
   {style==='heart-scroll'&&<><path d="M150 30V670"/><path d="M150 230C105 145 35 180 61 254C79 304 126 330 150 365C174 330 221 304 239 254C265 180 195 145 150 230Z"/><path d="M150 365C112 405 73 433 68 486C62 551 129 555 150 495C171 555 238 551 232 486C227 433 188 405 150 365Z"/><circle cx="150" cy="365" r="15"/></>}
   {style==='double-s'&&<><path d="M150 30V670"/><path d="M150 135C260 90 270 235 177 260C87 285 83 389 150 405"/><path d="M150 295C40 250 30 395 123 420C213 445 217 549 150 565"/><path d="M150 135C112 110 90 132 102 158M150 565C188 590 210 568 198 542"/></>}
   {style==='spear-scroll'&&<><path d="M150 40L120 135L150 185L180 135Z" fill="currentColor"/><path d="M150 185V670"/><path d="M150 250C105 195 42 222 67 274C80 302 115 286 107 260"/><path d="M150 250C195 195 258 222 233 274C220 302 185 286 193 260"/><path d="M150 420L105 485L150 540L195 485Z"/><circle cx="150" cy="340" r="18"/></>}
  </g>
 </svg>
}
