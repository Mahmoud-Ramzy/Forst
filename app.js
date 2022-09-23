/* Start Landing page Scroll animation*/
let text=document.querySelector(".text");
let bird1=document.getElementById("bird1");
let bird2=document.getElementById("bird2");
let tree=document.getElementById("tree");
let rock=document.getElementById("rock");
let water=document.getElementById("water");
let btn=document.getElementById("btn");
let header=document.querySelector("header");

/*get if mobile */
let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if(isMobileDevice){
    text.style.top=35+"%"
}

window.addEventListener("scroll",function(){
    let y =window.scrollY;
    
    let width=this.window.innerWidth;
    if (y<480 && !isMobileDevice){
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
    console.log(y)
});
/* End Landing page Scroll animation*/

/*Start reveal*/
ScrollReveal({
    reset:true,
    distance:'3000px',
    duration:900,
    delay:400
});
const about=document.getElementById("about");
const porto=document.getElementById("Portfolio");
const contact=document.getElementById("Contact");
ScrollReveal().reveal('.me-article, .proto1', { delay: 100, origin: 'left' });
ScrollReveal().reveal(' .contact-me', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.me-img, .proto3', { delay: 100, origin: 'right' });
if(window.innerWidth > 906){
    ScrollReveal().reveal('.proto2', { delay: 100, origin: 'bottom' });
}
else{
    ScrollReveal().reveal('.proto2', { delay: 100, origin: 'right' });
}
/*End reveal*/

