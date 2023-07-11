// бургер
const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});


// картинки
function b() {
    const elem = document.querySelectorAll(".service__item");
    const btn1 = document.querySelector(".btn__project__1");
    const btn2 = document.querySelector(".btn__project__2");
    const btn3 = document.querySelector(".btn__project__3");

    console.log(elem)

    btn1.addEventListener('click', function () {

        const divs = document.querySelectorAll('.planting')

        divs.forEach(function (control) {

            control.classList.add('blur_item')
        })
        const divs1 = document.querySelectorAll('.lawn')

        divs1.forEach(function (control) {

            control.classList.add('blur_item')
        })
        const divs2 = document.querySelectorAll('.garden')
        divs2.forEach(function (control) {

            control.classList.remove('blur_item')
        })
    })
    btn2.addEventListener('click', function () {
        const divs = document.querySelectorAll('.planting')

        divs.forEach(function (control) {

            control.classList.add('blur_item')
        })
        const divs1 = document.querySelectorAll('.garden')

        divs1.forEach(function (control) {

            control.classList.add('blur_item')
        })
        const divs2 = document.querySelectorAll('.lawn')
        divs2.forEach(function (control) {

            control.classList.remove('blur_item')
        })
    })
    btn3.addEventListener('click', function () {
        const divs = document.querySelectorAll('.planting')

        divs.forEach(function (control) {

            control.classList.add('blur_item')
        })
        const divs1 = document.querySelectorAll('.lawn')

        divs1.forEach(function (control) {

            control.classList.add('blur_item')
        })
        const divs2 = document.querySelectorAll('.planting')
        divs2.forEach(function (control) {

            control.classList.remove('blur_item')
        })
    })
}
b()

