
const transition_el = document.querySelector('.transition-1');
const heading1 = document.querySelector('.wrapper1');
const anchors = document.querySelectorAll('wrapper1')
const heading = document.querySelector('.wrapper4');
const inputField = document.querySelector ('input.inputField');
const button = document.querySelector ('button.firstButton');
const button2 = document.querySelector ('button.secondButton');
const button3 = document.querySelector ('button.thirdButton');
const button4 = document.querySelector ('button.fourthButton');
const button5 = document.querySelector ('button.fifthButton');
const button6 = document.querySelector ('button.sixthButton');
const music = document.querySelector ('.wrapper34');
const animation1 = document.querySelector ('img.Ani1');
const body = document.querySelector ('body');
const vapor = document.querySelector ('.vapor');
const vapor2 = document.querySelector ('.vapor2');
const vapor3 = document.querySelector ('.vapor3');
const vapor4 = document.querySelector ('.vapor4');
const vapor5 = document.querySelector ('.vapor5');
const vapor6 = document.querySelector ('.vapor6');
const vapor7 = document.querySelector ('.vapor7');
const vapor8 = document.querySelector ('.vapor8');
const vapor9 = document.querySelector ('.vapor9');
const vapor10 = document.querySelector ('.vapor10');
const vapor11 = document.querySelector ('.vapor11');
const vapor12 = document.querySelector ('.vapor12');
const vapor13 = document.querySelector ('.vapor13');
const vapor14 = document.querySelector ('.vapor14');
const vapor15 = document.querySelector ('.vapor15');
const vapor16 = document.querySelector ('.vapor16');
const vapor17 = document.querySelector ('.vapor17');
const vapor18 = document.querySelector ('.vapor18');
const button7 = document.querySelector ('button.seventhButton');
const button8 = document.querySelector ('button.eigthButton');
const map = document.querySelector ('.wrapper36');
const text = document.querySelector ('.wrapper39');


let innerCursor = document.querySelector('.innercursor');
let outerCursor = document.querySelector('.outercursor');

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

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

button3.addEventListener('click', ()=> {
    vapor.style.display = 'block'
    vapor2.style.display = 'block'
    vapor3.style.display = 'block'
    vapor4.style.display = 'block'
    vapor5.style.display = 'block'
    vapor6.style.display = 'block'
    vapor7.style.display = 'block'
    vapor8.style.display = 'block'
    vapor9.style.display = 'block'
    vapor10.style.display = 'block'
    vapor11.style.display = 'block'
    vapor12.style.display = 'block'
    vapor13.style.display = 'block'
    vapor14.style.display = 'block'
    vapor15.style.display = 'block'
    vapor16.style.display = 'block'
    vapor17.style.display = 'block'
    vapor18.style.display = 'block'
button4.style.display = "block"
button3.style.display = "none"
})
button4.addEventListener('click', ()=> {
    vapor.style.display = 'none'
    vapor2.style.display = 'none'
    vapor3.style.display = 'none'
    vapor4.style.display = 'none'
    vapor5.style.display = 'none'
    vapor6.style.display = 'none'
    vapor7.style.display = 'none'
    vapor8.style.display = 'none'
    vapor9.style.display = 'none'
    vapor10.style.display = 'none'
    vapor11.style.display = 'none'
    vapor12.style.display = 'none'
    vapor13.style.display = 'none'
    vapor14.style.display = 'none'
    vapor15.style.display = 'none'
    vapor16.style.display = 'none'
    vapor17.style.display = 'none'
    vapor18.style.display = 'none'
button3.style.display = "block"
button4.style.display = "none"
})  

button5.addEventListener('click', ()=> {

music.style.display = "block"
button6.style.display = "block"
button5.style.display = "none"

})

button6.addEventListener('click', ()=> {

    music.style.display = "none"
    button5.style.display = "block"
    button6.style.display = "none"
    
    })



    window.onload = () => {

        setTimeout (() => {
            transition_el.classList.remove('is-active')
        }, 2000);


        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors [i];
            
            anchor.addEventListener('click', e => {
                e.preventDefault();
                let target = e.target.href;

                transition_el.classList.add('is-active');
                transition_el2.classList.add('is-active');

                setTimeout (() => {
                    window.location.href = target;
                }, 2000)
            })
        }

    }

    button7.addEventListener('click', ()=> {

        map.style.display = "block"
        button8.style.display = "block"
        button7.style.display = "none"
        text.style.display = "block"
        })

    button8.addEventListener('click', ()=> {

        map.style.display = "none"
        button7.style.display = "block"
        button8.style.display = "none"
        text.style.display = "none"
        })