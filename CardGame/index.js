    
  let player= {name:"Suraj",
  chips:200                    
}

//let card1=10;

//to get random card comment out upper and use
let card1=getRandomCard()
//let card2=12;
let card2=getRandomCard()
let alive= true
let blackjack=false

//create array to hold cards
let cards=[card1,card2]
let sum=card1+card2;
let messagel=document.getElementById("message");
let collection=document.getElementById("collection");
let fashion=document.getElementById("fashion");
let pchange=document.getElementById("para");
let playerEl=document.getElementById("playerk");



playerEl.textContent=player.name + ":  $:"+player.chips

function game()
{

if (sum>21)
{
message="youre out of the game!"
alive =false
blackjack=true
playerEl.textContent-=player.name + ":  $:"+player.chips*2

}
else if(sum==21)
{
message="you got a jackpot"
blackjack=false
playerEl.textContent+=player.name + ":  $:"+player.chips*8
}
else
{
message="youre won"
alive=true
playerEl.textContent+=player.name + ":  $:"+player.chips*2
}

messagel.textContent=message;

collection.textContent="Sum:"+sum;

//this is without array
//fashion.textContent="Cards:"+ cards + " " + card2
fashion.textContent="cards: "//+ cards[0] + " " +cards[1]


//remove ipper array values and use loop and array
for(let i=0; i<cards.length; i++)
{
fashion.textContent+=cards[i] + " ";
}
}
function play()
{
if(alive==true && blackjack==false)
{
//let card=10
let card=getRandomCard()
sum+=card
//push a new element to cards... by array method
cards.push(card)
console.log(cards)

game()
}
if(alive==false && blackjack==true)
{
pchange.textContent=" you lost!! you cant play further!!!"
}
}
function getRandomCard()
{//to get value betn 0-13
return Math.floor(Math.random()*13)+1

}


//arrays implementation

//let suraj=["jena ", "kumar ", "suraj"]
//let newsuraj="legend";
//suraj.push(newsuraj);
//console.log(suraj);
//the output will be with legend...

//to delete the element from array use pop i.e

//suraj.pop()
//console.log(suraj);

