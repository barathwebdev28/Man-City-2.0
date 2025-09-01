const burger=document.getElementById('burgir');
const menuIcon = document.querySelector('.nav-elements-mobile');

menuIcon.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

// Optional: close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!burger.contains(e.target)) {
        burger.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});