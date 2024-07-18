// alert("hello")
function redirect(){
    window.location.href = "mailto:subratiswaroop15@gmail.com";
}
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  burger.classList.toggle('toggle');
});


const scrollLinks = document.querySelectorAll('.scrollLink');
