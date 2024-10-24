// function navbarToggle() {
//     const navbar = document.getElementById('navbar');
//     navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
//   }
  
/* CHAT gpt Soln For Nav bar*/
let navbar = document.querySelector('.navbar');
let navToggle = document.querySelector('#menu-btn');

navToggle.addEventListener('click', () =>{
  navbar.classList.toggle('active');
});