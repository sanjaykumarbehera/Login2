// console.log("Jay Jagannath");
let moon  = document.querySelector(".moon");
// console.log(moon)
let container = document.querySelector(".container");
let imgage = document.querySelector(".imgs")
let main = document.querySelector(".main");
let low = document.querySelector(".low");
let icons = document.querySelectorAll("i");
let btn = document.querySelector(".btn");
let p = document.querySelector("p");
let sun = document.querySelector(".sun")
console.log(sun);
moon.addEventListener("click",()=>{
    for(let i of icons){
        i.classList.toggle("col-White");
    }
    main.classList.toggle("bgc-Black");
    p.classList.toggle("col-White")
    imgage.classList.toggle("bor-White");
    low.classList.toggle("bgc-White");
    btn.classList.toggle("bgc-White" );
    btn.classList.toggle("col-Black" );
    moon.classList.toggle("dis-None");
    sun.classList.toggle("dis-Block");

})


sun.addEventListener("click",()=>{
    for(let i of icons){
        i.classList.toggle("col-White");
    }
    main.classList.toggle("bgc-Black");
    p.classList.toggle("col-White")
    imgage.classList.toggle("bor-White");
    low.classList.toggle("bgc-White");
    btn.classList.toggle("bgc-White" );
    btn.classList.toggle("col-Black" );
    moon.classList.toggle("dis-None");
    sun.classList.toggle("dis-Block");

})
