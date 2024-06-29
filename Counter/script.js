const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");
const increase=document.getElementById("increase");
const display = document.getElementById("display");
let count=0;

increase.onclick = function(){
  count++;
  display.textContent=count;
}

reset.onclick = function(){
  count=0;
  display.textContent=count;
}

decrease.onclick = function(){
  count--;
  display.textContent=count;
}
