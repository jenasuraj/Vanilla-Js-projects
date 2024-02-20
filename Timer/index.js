let heading =document.querySelector("#heading");

let timerElement=document.querySelector("#timer");

let btn =document.getElementById("btn");

let herr= document.getElementById("herr");
let time ;


//enter the code to set the time ...
  
function btn1()
{
    let text1=document.getElementById("text1").value;
    herr.innerHTML=text1;
    if(document.body.style.backgroundColor != "red")
    {
        document.body.style.backgroundColor="white";
    }
    
    time=parseInt(text1); //to pass the int value to a variable...
    tapit()
}
function tapit()
{
    
    let count=setInterval(countt,1000); 
}
function countt()
{    if (time > 0) {
                time--;
                timerElement.textContent = time;
            }
    if(time==0)
    {
        
        clearInterval(count);
        
    }
}