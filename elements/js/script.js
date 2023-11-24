'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');
    

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = `background-color: green; width: 500px`

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);
// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1])
// circles[0].remove();
// wrapper.removeChild(hearts[1]);
hearts[0].replaceWith(circles[0]);

// div.innerHTML = "<h1>helloworld</h1>";
div.textContent = "helloworld";

div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');