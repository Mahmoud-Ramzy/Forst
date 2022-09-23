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
    /*
    let width=this.window.innerWidth;
    if (y<480){
        text.style.top=50 + (-0.23*y)+"%"
        bird1.style.top = y*-1.5 +"px";
        bird1.style.left = y*1.5 +"px";
        bird2.style.top = y*-1.5 +"px";
        bird2.style.left = y*-2.2 +"px";
        btn.style.marginTop= y *1.5 +"px";
        rock.style.top= y *-0.11 +"px";
        tree.style.top=y*0.25+"px";
        header.style.top = y *0.6 +"px";
    }
    /*
    if (width>906){
        viweportSectionWide(y);
    }
    else if(width>617){
        viweportSectionMiddle(y);
    }
    else if(width>582){
        viweportSectionSmall(y,330, 920, 1550, 2050, 2850);
    }
    else if(width>520){
        viweportSectionSmall(y,300, 910, 1450, 2000, 2650);
    }
    else if(width>440){
        viweportSectionSmall(y,330, 920, 1550, 2050, 2850);
    }
    else if(width>380){
        viweportSectionSmall(y,330, 920, 1550, 2050, 2850);
    }
    else if(width<380){
        viweportSectionSmall(y,330, 920, 1550, 2050, 2850);
    }

    // console.log(width)
    */
   console.log(y)
});
const about=document.getElementById("about");
const porto=document.getElementById("Portfolio");
const contact=document.getElementById("Contact");

ScrollReveal({
    reset:true,
    distance:'3000px',
    duration:900,
    delay:400
});

ScrollReveal().reveal('.me-article, .proto1, .proto3', { delay: 100, origin: 'left' });
ScrollReveal().reveal(' .contact-me', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.proto2, .me-img', { delay: 100, origin: 'right' });




/*

function viweportSectionWide(y){
    if( y>330 && y<860 ){//1120
        document.querySelector("article").style.left="0";
        document.querySelector("figure").style.right="0";
        console.log("1 in vp")
        return;
    }else if( y>860 &&y<1500  ){
        document.querySelector(".proto1").style.left="0";
        document.querySelector(".proto2").style.bottom="0";
        document.querySelector(".proto3").style.right="0";
        console.log("2 in vp")
        return;
    }
    else if( y>1500 ){
        document.querySelector(".contact-me").style.bottom="0";
        console.log("3 in vp")
        return;
    }
}

function viweportSectionMiddle(y){
    if( y>310 && y<900 ){//1120
        document.querySelector("article").style.left="0";
        document.querySelector("figure").style.right="0";
        console.log("1 in vp")
        return;
    }else if( y>900 &&y<1860  ){
        document.querySelector(".proto1").style.left="0";
        document.querySelector(".proto2").style.bottom="0";
        if(y>1230){
            document.querySelector(".proto3").style.right="0";
        }
        console.log("2 in vp")
        return;
    }
    else if( y>1860 ){
        document.querySelector(".contact-me").style.bottom="0";
        console.log("3 in vp")
        return;
    }
}
function viweportSectionSmall(y, art1, port1, port2, port3, cont){
    if( y>art1 && y<port1 ){//1120
        articl();
        return;
    }else if( y>port1 &&y<cont  ){
        p1();
        if(y>port2){
        p2();
        }
        if(y>port3){
        p3();
        }
        console.log("2 in vp")
    }
    else if( y>cont ){
        contac();
    }
    return;
}

function p1(){
    document.querySelector(".proto1").style.left="0";
}
function p2(){
    document.querySelector(".proto2").style.bottom="0";
}
function p3(){
    document.querySelector(".proto3").style.right="0";
}
function articl(){
    document.querySelector("article").style.left="0";
    document.querySelector("figure").style.right="0";
    console.log("1 in vp")
}
function contac(){
    document.querySelector(".contact-me").style.bottom="0";
    console.log("3 in vp")
}*/
