

let mm=gsap.matchMedia()
mm.add("(min-width:800px)",()=>{
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
})










var students=setInterval(studentsDone, 10)
var branches=setInterval(branchesDone,200)
var teachers=setInterval(teachersDone,150)

var count1=1
var count2=1
var count3=1
function studentsDone(){
    count1++
    document.getElementById("count1").innerHTML=count1+"+";
    if(count1===500){
        clearInterval(students)
    }

}
function branchesDone(){
    count2++
    document.getElementById("count2").innerHTML=count2;
    if(count2===9){
        clearInterval(branches)
    }
}
function teachersDone(){
    count3++
    document.getElementById("count3").innerHTML=count3;
    if(count3===26){
        clearInterval(teachers)
    }
}

let button =document.querySelector("#menu")
let close =document.querySelector("#close")
button.addEventListener("click",function(){
    document.querySelector("ul").style.top="0%"
    button.style.display="none"
  
})
close.addEventListener("click",()=>{
    document.querySelector("ul").style.top="-50vh"
    button.style.display="block"

})


// GSAP
document.addEventListener("mousemove",function(delt){
gsap.to("#cursor",{
    x:delt.x,
    y:delt.y,
rotate:delt.x,


})
})
var tl =gsap.timeline()

tl.from(".loading-sides span",{
    y:50,
    x:-50,
    duration:.5,
    stagger:.30,
    opacity:0
})
tl.to(".loading-sides span",{
    y:-50,
    
    duration:.5,
    stagger:.20,
    opacity:0
})

tl.to(".loading-sides",{
    transform:"translateY(-100%)",
    stagger:.15,
  
    duration:.5
})
tl.from("nav",{
    opacity:0
})

tl.to("#loading",{
    display:"none"
})


