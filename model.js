const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const open4 = document.getElementById('open4');
const open5 = document.getElementById('open5');
const open6 = document.getElementById('open6');
const modal_container1 = document.getElementById('modal_container1');
const modal_container2 = document.getElementById('modal_container2');
const modal_container3 = document.getElementById('modal_container3');
const modal_container4 = document.getElementById('modal_container4');
const modal_container5 = document.getElementById('modal_container5');
const modal_container6 = document.getElementById('modal_container6');
const close1 = document.getElementById('close1');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');
const close4 = document.getElementById('close4');
const close5 = document.getElementById('close5');
const close6 = document.getElementById('close6');

open1.addEventListener('click', () => {
    modal_container1.classList.add('show-m');
});

open2.addEventListener('click', () => {
    modal_container2.classList.add('show-m');
});

open3.addEventListener('click', () => {
    modal_container3.classList.add('show-m');
});

open4.addEventListener('click', () => {
    modal_container4.classList.add('show-m');
});

open5.addEventListener('click', () => {
    modal_container5.classList.add('show-m');
});

open6.addEventListener('click', () => {
    modal_container6.classList.add('show-m');
});

close1.addEventListener('click', () => {
    modal_container1.classList.remove('show-m');
});

close2.addEventListener('click', () => {
    modal_container2.classList.remove('show-m');
});

close3.addEventListener('click', () => {
    modal_container3.classList.remove('show-m');
});

close4.addEventListener('click', () => {
    modal_container4.classList.remove('show-m');
});

close5.addEventListener('click', () => {
    modal_container5.classList.remove('show-m');
});

close6.addEventListener('click', () => {
    modal_container6.classList.remove('show-m');
});