window.addEventListener("load",function(){

    // page loader
   // document.querySelector(".page-loader").classList.add("fade-out");

    setTimeout(function(){
        document.querySelector(".page-loader").style.display = "none"
    },600);

    // animation on scroll

    AOS.init();
});

// toggle navbar  // 250

const navToggle=document.querySelector(".nav-toggler");
navToggle.addEventListener("click",toggleNav);

function toggleNav() {

    navToggle.classList.toggle("active"); 
    document.querySelector(".nav").classList.toggle("open");
}

// close nav when clicking in a nav item

document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});

// //stricky header
// window.addEventListener("scroll",function(){
//     if(this.pageXOffset > 60) {
//         document.querySelector(".header").classList.add("stricky");
//     }
//     else {
//         document.querySelector(".header").classList.remove("stricky");
//     }
// });

// menu tabs



const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");

        //animaton on scroll
        
        AOS.init();
    }
});
