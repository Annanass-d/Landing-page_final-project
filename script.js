const buttons = document.querySelectorAll('.rating_sign_input');

buttons.forEach((radio) => {
    radio.addEventListener('change', function (e) {
        const checkedNumber = document.querySelector('.rating_sign_input:checked').value || undefined;

        buttons.forEach((item) => {
            const currentLabel = item.previousElementSibling.firstChild;
            if (item.value <= checkedNumber) {
                currentLabel.classList.add('check');
            } else {
                currentLabel.classList.remove('check');
            }
        });
    });
});


const passwordEl = document.querySelector('#password');
const passwordRetryEl = document.querySelector('#password-retry');
const buttonFormEl = document.querySelector('.form__button');
const inputEl = document.querySelectorAll('.contact__input');
const formEl = document.querySelector('.contact__form');

passwordRetryEl.addEventListener('input', function (e) {
    if (passwordRetryEl.value === '') {
        passwordEl.style.border = '1px solid #D9D9D9';
        passwordRetryEl.style.border = '1px solid #D9D9D9';
    } else if (passwordEl.value !== passwordRetryEl.value) {
        passwordEl.style.border = '1px solid red';
        passwordRetryEl.style.border = '1px solid red';
    } else {
        passwordEl.style.border = '1px solid green';
        passwordRetryEl.style.border = '1px solid green';
    }
});

formEl.addEventListener('submit', function (e) {
    inputEl.forEach(element => {
        if (element.value === '') {
            e.preventDefault();
            element.style.border = '1px solid red';
        }
    });

    if (passwordEl.value !== passwordRetryEl.value) {
        e.preventDefault();
        passwordEl.style.border = '1px solid red';
        passwordRetryEl.style.border = '1px solid red';
    } 
});

const menuIcon = document.querySelector('.header__menu-icon');
const menuHidden = document.querySelector('.menu-hidden-box');

menuIcon.addEventListener('click', function (e) {
    menuHidden.classList.toggle('hidden'); 
});

