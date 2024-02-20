let list=document.getElementById("list");
        
let btn=document.querySelector("#btn");
let li1=document.getElementById("li1");
let btn1=document.getElementById("btn1");  
let btn2=document.getElementById("btn2"); 

function fun()
{           
if(text1!==" ")
{
    let text1=document.querySelector("#text1").value.trim();  
let li=document.createElement("li");
li.textContent=text1;
list.appendChild(li);
document.getElementById("text1").value==" ";     
}  
}
function dis()
{
    if (list.lastElementChild) { // Check if there is at least one list item
        list.removeChild(list.lastElementChild); // Remove the last list item
    }
}
function remove()
{
    list.innerHTML=" ";
}
