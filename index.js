// Import stylesheets
import './style.css';

// Write Javascript code!
var arregloNum=[];
var big=0;
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
  let size=document.getElementById("size");
  if(size.value===""){
   size.setAttribute("placeholder","Add an array size");
   size.classList.add("error");
   return false;
  }else{
  valores(size.value)
  clean();
  let btnenviar=document.getElementById("btn-enviar");
  btnenviar.innerHTML="<button class='btn' id='btn-send'>Calcular</button>";
  let btnCal=document.getElementById("btn-send");
  btnCal.addEventListener("click",()=>{
  
    for(let i=0;i<size.value;i++){
      let val=document.getElementById(i);
      if(val.value===""){
        val.setAttribute("placeholder","Add a value");
        return false;
      }
      arregloNum.push(document.getElementById(i).value)
    }
  arregloNum.map(num=>Number(num)).filter((val)=>{
      if (val>big){
        big=val;
      }
  })
    console.log(arregloNum)
    console.log(big);
    let result=document.getElementById("result");
    let nuevo=document.getElementById("new");
    result.innerHTML=`The largest number is: ${big}`;
    nuevo.innerHTML="<button class='btn' id='btn-new' onclick='location.reload()'>New</button>"
  })

  }
 
})

const valores=function(size){
  for (let i=0; i<size;i++){
    let val=document.getElementById("val");
    val.innerHTML+=`<input id=${i} type="number"  class="size"  placeholder="ingrese el valor ${i}">`
  }
}
function clean(){
  document.getElementById("size").setAttribute("disabled","disabled")
 
  document.getElementById("btn").setAttribute("disabled","disabled");
  document.getElementById("title").style.display="block";

}


