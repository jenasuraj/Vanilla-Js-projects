let refresh =document.getElementById("refresh");
let final=document.getElementById("final");
let yourChoice;
let pcChoice;
document.getElementById("box1").addEventListener('click', function() {
    console.log("Rock got clicked");
    yourChoice="rock";
    //console.log(yourChoice);
    perform(yourChoice);
});

document.getElementById("box2").addEventListener('click', function() {
    console.log("Paper got clicked");
    yourChoice="paper";
   // console.log(yourChoice);
    perform(yourChoice);
});

document.getElementById("box3").addEventListener('click', function() {
    console.log("Scissor got clicked");
    yourChoice="scissor";
    //console.log(yourChoice);
    perform(yourChoice);;
});
function perform(yourChoice)
{ 
    const arr=["rock","paper", "scissor"];
    pcChoice=Math.floor(Math.random()*arr.length);


    console.log("user has chose" + yourChoice)
    console.log("pc has chose "+ arr[pcChoice]);

  
    // to make user win
    if(yourChoice=="rock" &&  arr[pcChoice]=="scissor" ||
     yourChoice=="paper" &&  arr[pcChoice]=="rock" ||
      yourChoice=="scissor" &&  arr[pcChoice]=="paper" )
    {
        final.textContent=`Your choice is ${yourChoice} and pc choice 
        is ${arr[pcChoice]} so You  won`
    }
    //to make pc win
    if(yourChoice=="rock" &&  arr[pcChoice]=="paper" ||
     yourChoice=="paper" &&  arr[pcChoice]=="scissor" ||
      yourChoice=="scissor" &&  arr[pcChoice]=="rock" )
    {
        final.textContent=`Your choice is ${yourChoice} and pc choice 
        is ${arr[pcChoice]} so Pc won`
    }
    //what if both becomes equal:

    if(yourChoice=="rock" &&  arr[pcChoice]=="rock" ||
     yourChoice=="paper" &&  arr[pcChoice]=="paper" ||
      yourChoice=="scissor" &&  arr[pcChoice]=="scissor" )
    {
        final.textContent=`Your choice is ${yourChoice} and pc choice 
        is ${arr[pcChoice]} so Try again buddy`
    }
    refresh.addEventListener('click',function()
    {
        location.reload();
    })
    
}
