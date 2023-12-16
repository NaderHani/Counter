let num = 0 ; 
let numPrint=document.getElementById('num');
function counter(x){
    if(x =="DECREASE")
    {
        num--
    }
    else if(x =="INCREASE")
    {
        num++
    }
    else{
        num =0 
    }
    numPrint.innerHTML=num
    if(num<0){
        numPrint.style.color="red"
    }
    else if(num>0)
    {
        numPrint.style.color="white"
    }
    else{
        numPrint.style.color="gray"
    }
}