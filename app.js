const DB={
CAT395:{OHT773:{ct:7,vessel:24},TR50D:{ct:7,vessel:22}},
ZX870:{OHT773:{ct:6.6,vessel:24},TR50D:{ct:6.6,vessel:22}}
};
const f=n=>Number(n).toFixed(2);
function travel(m,kph){return (m/1000)/kph*60;}
function calc(type){
 const ex=excavator.value;
 const d=+distance.value,l=+loaded.value,e=+empty.value;
 const tl=travel(d,l),te=travel(d,e);
 const ctn=DB[ex][type].ct;
 const ct=tl+te+ctn;
 const rit=60/ct;
 const prod=rit*DB[ex][type].vessel;
 return {tl,te,ctn,ct,rit,prod};
}
function fill(prefix,r,qty){
 document.getElementById(prefix+"_tl").textContent=f(r.tl)+" min";
 document.getElementById(prefix+"_te").textContent=f(r.te)+" min";
 document.getElementById(prefix+"_ctn").textContent=f(r.ctn)+" min";
 document.getElementById(prefix+"_ct").textContent=f(r.ct)+" min";
 document.getElementById(prefix+"_rit").textContent=f(r.rit);
 document.getElementById(prefix+"_prod").textContent=f(r.prod)+" BCM/Hr";
 document.getElementById(prefix+"_total").textContent=f(r.prod*qty)+" BCM/Hr";
 return r.prod*qty;
}
function calculate(){
 const o=calc("OHT773"),t=calc("TR50D");
 const total=fill("o",o,+qtyOHT.value)+fill("t",t,+qtyTR.value);
 loader.textContent=f(total)+" BCM/Hr";
}
function resetForm(){distance.value=3000;loaded.value=16;empty.value=18;qtyOHT.value=3;qtyTR.value=4;excavator.value="CAT395";calculate();}
calculate();
