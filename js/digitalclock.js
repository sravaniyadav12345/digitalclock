
function todaysDay()
{
    var currentDate=new Date();
    var hh=currentDate.getHours();
    var mm=currentDate.getMinutes();
    var ss=currentDate.getSeconds();
    var dd=currentDate.getDate();
    var mo=currentDate.getMonth();
    var dy=currentDate.getDay();
    var yy=currentDate.getFullYear();


    var daysImg=
    ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    // document.body.style.backgroundImage=`url(../${Asset/img1[dy]}.jpg)`
    document.body.style.backgroundColor="black";

    var am_pm="Am";

    if(hh>=12){
        am_pm="Pm"
       
        if(hh>=13){
            hh-=12;
        }
    }
    if(hh==0){
        hh=12;
    }
    console.log(hh,am_pm);
    var month=
    ["Jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    mo=month[mo];
    var days=
    ["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"]

    dy=days[dy]
    if(hh<10){
        hh="0"+hh
    }
    if(mm<10){
        mm="0"+mm
    }
    if(ss<10){
        ss="0"+ss
    }
    if(dd<10){
        dd="0"+dd
    }
    var time=`${hh}:${mm} ${am_pm}`
    document.querySelector("#hours12").innerHTML=time;


   var curDate=`${dd}/${mo}/${yy}`
   document.querySelector("#date").innerHTML=curDate

   document.querySelector("#day").innerHTML=dy

   document.querySelector("#sec").innerHTML=ss;

   setTimeout(todaysDay,1000);
}
todaysDay()


function dateotput24(){
   var date=new Date();
   var hh=date.getHours();
   var mm=date.getMinutes();
   var ss=date.getSeconds();
   var curdate=hh+":"+mm;
   document.querySelector("#hours24").innerHTML=curdate;
}
setInterval(dateotput24,1000);
var num=0;
function toggleButton(){
    num++;
    if(num%2==0)
        {
            document.getElementById("button").style.left="0px";
            document.getElementById("button").style.backgroundColor="black";
            document.getElementById("toggle").style.backgroundColor="whigte";
            document.getElementById("hours12").style.display="block";

            document.getElementById("hours24").style.display="none";

        }
        else{
            document.getElementById("button").style.left="0px";
            document.getElementById("button").style.backgroundColor="white";
            document.getElementById("toggle").style.backgroundColor="black";
            document.getElementById("hours12").style.display="none";

            document.getElementById("hours24").style.display="block";

        }
        
}
var audio=new Audio("../asset/alrm.mp3")
var allInp=document.querySelectorAll("input");
function userData(){
var currentdt=new Date();
var dd=currentdt.getDate();
var mo=currentdt.getMonth()+1;
var yy=currentdt.getFullYear();
var hh=currentdt.getHours();
var mm=currentdt.getMinutes();
// var ss=currentdt.getSeconds();
// dy=days[dy]
if(dd<=9)
    {
        dd="0"+dd
    }
    if(mo<=9)
        {
            mo="0"+mo
        }
        if(mm<=9)
            {
                mm="0"+mm
            }
            if(hh<=9)
                {
                    hh="0"+hh
                }
                var curentddmmyy=`${yy}-${mo}-${dd}`;
                var curenttime=`${hh}:${mm}`;

                var userDate=allInp[1].value;
                var userTime=allInp[2].value;
                if(curentddmmyy==userDate && userTime==curenttime)
                    {
                        // window.alert("wake up!!!")
                        audio.play();
                    }

}
setInterval(userData,1000);

function bgImg(){
    var date=new Date();
    var dy=date.getDay();
    console.log(dy);
    var arrImg=["img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg","img5.jpeg","img6.jpeg","img7.jpeg"];
    console.log(arrImg);
    document.body.style.backgroundImage=`url(./asset/${arrImg[dy]})`;
}
function closeAlarmWindow(){
   document.querySelector("#containerAlarm").style.display="none";
}
function openAlarmWindow(){
   document.querySelector("#containerAlarm").style.display="flex";
}

   
