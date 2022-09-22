let text=document.querySelector(".text");
let bird1=document.getElementById("bird1");
let bird2=document.getElementById("bird2");
let tree=document.getElementById("tree");
let rock=document.getElementById("rock");
let water=document.getElementById("water");
let btn=document.getElementById("btn");
let header=document.querySelector("header");
window.addEventListener("scroll",function(){
    let y =window.scrollY;

    text.style.top=50 + (-0.23*y)+"%"
    bird1.style.top = y*-1.5 +"px";
    bird1.style.left = y*1.5 +"px";
    bird2.style.top = y*-1.5 +"px";
    bird2.style.left = y*-2.2 +"px";
    btn.style.marginTop= y *1.5 +"px";
    rock.style.top= y *-0.11 +"px";
    tree.style.top=y*0.25+"px";
    header.style.top = y *0.6 +"px";
    if(y>600){
        btn.style.display="none";
    }
    else{
        btn.style.display="block";
    }
})