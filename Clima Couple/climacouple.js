const hamburguesa = document.querySelector('.header .nav-bar .list .hamburguesa');
const menu_mobile = document.querySelector('.header .nav-bar .list ul');
const header = document.querySelector('.header');
const items_menu = document.querySelectorAll('.header .nav-bar .list ul li a')

hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('active');
    menu_mobile.classList.toggle('active');
});

items_menu.forEach(item=>{
    item.addEventListener('click', () => {
        hamburguesa.classList.toggle('active');
        menu_mobile.classList.toggle('active');
    });
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'grey';
    }
});