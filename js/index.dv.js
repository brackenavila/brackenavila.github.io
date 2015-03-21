F=function(v,f){return Function(v,f)}
f=/fire/i.test(navigator.userAgent)
i={
 d:document,
 中:'一二三四五'.split(''),
 s:"div,a{border-radius:0 5em;text-shadow:0 0 10px}#b{font:"+(f?1.4:2)+"em Segoe UI Symbol}#b{background:url(img/wo4.jpg),repeating-linear-gradient(90deg,#A40,#000 1em);min-height:3px;overflow:hidden;text-align:center}#b>*{float:left}#师{background:url(img/wo12.jpg),repeating-linear-gradient(rgba(166,100,19,.5),rgba(255,255,255,.5)1em),repeating-linear-gradient(90deg,#A61,#FFF 1em);height:480%;width:85%}#师>*{background:linear-gradient(91deg,#FED,#555 3%,rgba(205,160,70,.5)10%),url(img/wa2.jpg);border:#930 10px ridge;height:"+(f?19.75:20)+"%;left:10%;position:relative;width:80%}img{border-radius:5em;border-top:rgba(195,115,24,.1) 10px double;box-shadow:-10px 10px 10px 5px,rgba(0,0,0,.1)-20px 20px 3px 10px;opacity:.85}#师>:nth-child(1):after{content:'Page No. 1'}#师>:nth-child(2):after{content:'Page No. 2'}#师>:nth-child(3):after{content:'Page No. 3'}#师>:nth-child(4):after{content:'Page No. 4'}#师>:nth-child(5):after{content:'Page No. 5'}#师>*:after{content:'';font-family:Edwardian Script ITC,esi}#师>:nth-child(-n+2) em:before{content:'200'}a{display:block;font-family:Miriam Fixed,Segoe UI Symbol}#b>:last-child{background:rgba(0,0,0,.25);box-shadow:-1em 1em 9px 1px;height:98%;width:15%;transform:translateZ(0);z-index:1}button{background:url(img/wa2.jpg),#FFF;color:rgba(124,124,124,.5);border-radius:3em;height:2.5em;font:2."+(f?15:0)+"em Segoe UI Symbol,SUS613;margin-bottom:-.5em;opacity:.5;outline:0;transition:1s;width:2.5em}button:hover{opacity:.9}button:focus{box-shadow:#000 -25px 25px 20px 10px;opacity:1;color:rgba(0,0,0,.5);text-shadow:rgba(167,68,35,.6)0 3px 9px}button:nth-child(even){float:left}button:nth-child(odd){float:right}.一{transform:translateY(0%)}.二{transform:translateY(-20.55%)}.三{transform:translateY(-41.1%)}.四{transform:translateY(-61.65%)}.五{transform:translateY(-82.2%)}:not(button){transition:1s cubic-bezier(1,-.6,.03,1.5)",
 set:F('s',
  'i.bs.height=innerHeight+"px",'+
  'i.bs.width=innerWidth+"px"'),
 sty:F('s,e,l',
  's=s.split("}"),'+
  'e=i.d.styleSheets[0];'+
  'for(l in s)e.insertRule(s[l],e.cssRules.length)'),
 init:function(){
  i.set(i.bs=i.d.body.style)
  b=i.d.body.lastChild.children
  b[0].focus()
  for(l in i.中)b[l].onclick=F('v','师.className="'+i.中[l]+'"')
  i.sty(i.s)
  onresize=i.set
  onkeydown=F('e','/3|4/.test(e.which)&&e.preventDefault()')
  scroll(0,0)
  setTimeout(F('v',
   'i.sty("@font-face{font-family:esi;src:url(css/esi.woff)}@font-face{font-family:SUS613;src:url(css/SUS613.ttf)"),'+
   'i.d.scripts[0].remove(),'+
   'console.clear()'),1e3)}}
onload=i.init