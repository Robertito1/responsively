const hamburger = document.querySelector(".hamburger")
const ul = document.querySelector(".nav-links")

hamburger.addEventListener('click', function (){
        ul.classList.toggle("show")
})
