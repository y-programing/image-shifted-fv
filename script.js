const ham = document.querySelector("#c-hamburger")
const nav = document.querySelector('.l-header__nav');

ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});