"use sctrict";

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


//box.style.background = "yellow";
//box.style.height = "550px";

box.style.cssText = `background-color: blue; width: 1400px;`;

/*for(let i = 0; i < btns.length; i ++){
    btns[i].style.borderRadius = "50%";
}*/

hearts.forEach(item =>{
    item.style.backgroundColor = "green"; 
});

const div = document.createElement('div');
div.classList.add('black');

wrapper.append(div);
div.innerHTML="<h1>Hello World</h1>";

div.insertAdjacentHTML('beforebegin', '<p>Hagmkk</p>');