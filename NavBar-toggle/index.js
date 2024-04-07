const navToggle=document.querySelector(".nav-toggle");
const links=document.querySelector(".links");

navToggle,addEventListener("click", function()
{
 /*
 //one method to toggle...

 //classlist=show/gets all classes...
 //contains= check classlist  for specific class
  console.log(links.classlist.contains("show-links")); //returns true or false wheither show list class is contained by 
  //classlist or not?

  
 if(links.classList.contains("show-links"))
  {
    links.classList.remove("show-links");
  }
  else{
    links.classList.add("show-links");
  }*/

  //second method to toggle using toggle 
  links.classList.toggle("show-links");
});