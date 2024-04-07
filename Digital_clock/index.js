function updatec()
{
const mon= [ "January","February",",March","April","May","June","July","August","September",
           "October","November","December",];

const da=["Sunday","Monday" ,"Tuesday" ,"Wednesday", "Thursday", "Friday", "Saturday",];   
const now =new Date();
let  timeString ;
const year=now.getFullYear();
const month=now.getMonth();
const day=now.getDate();
const dayy=now.getDay();
const hours=now.getHours();
const minutes=String(now.getMinutes()).padStart(2,'0');
const seconds=String(now.getSeconds()).padStart(2,'0');
if(hours>12)
{
    const actual=hours- 12;
     timeString = `${actual}:${minutes}:${seconds}`;
}
else if(hours==12)
{
    timeString = `${hours}:${minutes}:${seconds}`; 
}
else
{
 timeString = `${hours}:${minutes}:${seconds}`;
}
const timeString2 = `${year}:${mon[month]} :${day} : ${da[dayy]}`;
document.getElementById('jena').innerText =timeString; 
document.getElementById('suraj').innerText =timeString2; 
}

//updatec()
setInterval(updatec,1000);