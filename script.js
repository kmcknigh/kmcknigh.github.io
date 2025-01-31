const heading = document.querySelector('.wrapper4');
const inputField = document.querySelector ('input.inputField');
const button = document.querySelector ('button.firstButton');
const button2 = document.querySelector ('button.secondButton');
const body = document.querySelector ('body');


button.addEventListener('click', ()=> {
heading.style.display = 'block';
button2.style.display = 'block'
button.style.display = 'none'

})

button2.addEventListener('click', ()=> {
    heading.style.display = 'none';
    button.style.display = 'block'
    button2.style.display = 'none'
    
    })