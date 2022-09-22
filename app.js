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
});
const about=document.getElementById("about");
const porto=document.getElementById("Portfolio");
const contact=document.getElementById("Contact");


document.addEventListener('scroll', viweportSection);
//function see if the section is in the view port then make it active.  
function viweportSection(){
    if(isElementInViewport(about)){
        document.querySelector("article").style.left="0";
        document.querySelector("figure").style.right="0";
        console.log("1 in vp")
        return;
    }else if(isElementInViewport(porto)){
        document.querySelector(".proto1").style.left="0";
        document.querySelector(".proto2").style.bottom="0";
        document.querySelector(".proto3").style.right="0";
        console.log("2 in vp")
        return;
    }
    else if(isElementInViewport(contact)){
        document.querySelector(".contact-me").style.bottom="0";
        console.log("3 in vp")
        return;
    }
}

//function check if the element in viewport or not.
/*
function isInViewport(el,num) {
    const element = el.getBoundingClientRect();
    console.log(`Top = ${element.top}`)
    console.log(`Height = ${el.clientHeight}`)
    if(num===1){
        return (
            element.top >= -(el.clientHeight-70) &&
            element.top <= (el.clientHeight-70) 
        );
    }
    else if(num===2 || num===3){
        return (
            element.top >= -(el.clientHeight) &&
            element.top <= (el.clientHeight) 
        );
    }
}*/
function isElementInViewport (el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight+100 || document.documentElement.clientHeight) /* or $(window).height() */
        );
}