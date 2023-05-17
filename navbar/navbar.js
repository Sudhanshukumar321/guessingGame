let navhide = document.querySelector('.nav-hide');
let menu =document.querySelector(".menu");


const navbar_popup = () =>{
        navhide.classList.toggle('nav-hide');
}

menu.addEventListener('click',navbar_popup);