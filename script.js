const home = document.querySelector('#home')
const services = document.querySelector('#services')
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')

const carousel = document.querySelector('.carousel')

const contentHome = document.querySelector('.content-home')
const contentServices = document.querySelector('.content-services')
const contentAbout = document.querySelector('.content-about')
const contentContact = document.querySelector('.content-contact')

//toogle display of main
function toggleDisplay(page,btn) {
        const allcontent = document.querySelector('.main').children
        for (let i = 0; i < allcontent.length; i++) {
            allcontent[i].style.display = 'none'
        }
        page.style.display = 'flex'
        carousel.style.display = ''

        const allbuttons = document.querySelector('.menu-container').children
        for (let i = 0; i < allbuttons.length; i++) {
            allbuttons[i].style.borderBottom  = ''
        }
        btn.style.borderBottom  = '3px rgb(227, 149, 6) solid'
}

home.addEventListener('click',() => toggleDisplay(contentHome, home))
services.addEventListener('click',() => toggleDisplay(contentServices, services))
about.addEventListener('click',() => toggleDisplay(contentAbout, about))
contact.addEventListener('click',() => toggleDisplay(contentContact, contact))


//carousel 

const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
let idx = 0;

function run() {
    idx++
    if(idx > img.length-1) {
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 700}px)`;
}
setInterval(run, 6000);

//weld funcionality
const main = document.querySelector('.main')
document.querySelector('.logo-bottom').addEventListener('click', () => main.style.color == 'orange' ? main.style.color = 'aliceblue' : main.style.color = 'orange')
