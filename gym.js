function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

let list = document.querySelector('.slider .list ');
let items = document.querySelectorAll('.slider .list .item ');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let on = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if(on + 1 > lengthItems) {
        on = 0;
    }else {
        on =+ on + 1;
    };
    reloadSlider();
}
prev.onclick = function() {
    if(on - 1 < 0) {
        on = lengthItems
    }else {
        on = on - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(()=> {next.click()} , 5000);

function reloadSlider() {
    let checkLeft = items[on].offsetLeft;
    list.style.left = -checkLeft + 'px';
    
    let lastActiveDot = document.querySelector('.slider .dots li.on');
    lastActiveDot.classList.remove('on');
    dots[on].classList.add('on');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()} , 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click' , function() {
        on = key
        reloadSlider();
    })
})