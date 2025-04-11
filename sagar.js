const textbox=document.getElementById("textbox");
const tocelsius=document.getElementById("tocelsius");
const tofarenhit=document.getElementById("tofarenhit");
const result=document.getElementById("result")
let temp;
function convert(){
    if(tocelsius.checked){
        temp=Number(textbox.value);
        temp=temp*9/5 +32;
        result.textContent=temp.toFixed(1) + "f";               
    }
    else if(tofarenhit.checked)
        {
            temp=Number(textbox.value);
            temp=(temp-32)*5/9;
            result.textContent=temp.toFixed(1)+"c";
    }
    else{
        result.textContent="select a unit";
    }
}       