const btnNav = document.getElementById('btnNav');
const showNav = document.getElementById('showNav');

btnNav.addEventListener('click', () => {
    showNav.classList.toggle('active');
});