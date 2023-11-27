import { helpCreateEl } from '../home/index';

let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let piscineButton = document.querySelector('#PISCINE');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'PISCINE FUORI TERRA';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.style.textAlign = 'center';
termsText3.innerHTML =
    'Una lifelong pool policy per le fuori terra che ci contraddistingue. Potremo decidere insieme design, materiali, accessori e anche in ambito post-vendita non sarai mai lasciato solo, poiché i servizi Acqua Sport comprendono tutta la vita di una piscina, dalla sua manutenzione alla ristrutturazione al trattamento acqua (fornito dai nostri partner di AquaClinic Srl).<br><br>Costruire una piscina fuori terra è sicuramente una delle soluzioni più semplici, economiche e meno invasive per chi voglia farsi un bagno in giardino. Esse possono essere realizzate con diversi materiali a seconda delle vostre richieste e della conformazione del terreno. Pietra, sabbia, cemento, erba, legno, plastica in vari colori e design, Acqua Sport ti aiuterà a raggiungere il risultato desiderato. Scrivici utilizzando il modulo contatti oppure chiama i nostri al +39 335 465260 o al +39 335 7385678!';

let imgContainer = helpCreateEl('div', 'img-container');
let pageImg1 = helpCreateEl('div', 'page-img');
pageImg1.classList.add('fuori1');
let pageImg2 = helpCreateEl('div', 'page-img');
pageImg2.classList.add('fuori2');
let pageImg3 = helpCreateEl('div', 'page-img');
pageImg3.classList.add('fuori3');
let pageImg4 = helpCreateEl('div', 'page-img');
pageImg4.classList.add('fuori4');
let pageImg5 = helpCreateEl('div', 'page-img');
pageImg5.classList.add('fuori5');
let pageImg6 = helpCreateEl('div', 'page-img');
pageImg6.classList.add('fuori6');
let pageImgs = [pageImg1, pageImg2, pageImg3, pageImg4, pageImg5, pageImg6];

pageImg1.classList.add('img-active');

pageImgs.forEach((el) => {
    el.addEventListener('click', () => {
        imgContainer.style.opacity = '0';
        setTimeout(() => {
            pageImgs.forEach((im) => {
                im.classList.remove('img-active');
                im.style.transition = '0s';
            });
            el.classList.add('img-active');
        }, 300);
        setTimeout(() => {
            imgContainer.style.opacity = '1';
            pageImgs.forEach((im) => {
                im.style.transition = '0.23s';
            });
        }, 700);
    });
});

imgContainer.append(pageImg1, pageImg2, pageImg3, pageImg4, pageImg5, pageImg6);

termsContainer.append(termsText3, imgContainer);

export function goTerra() {
    header?.classList.add('header_white');
    buttons.forEach((el) => {
        el.classList.remove('active');
        el.classList.add('naw__button_blue');
        main.style.backgroundColor = '#e1dbc9';
        main.style.boxShadow = 'rgb(152 120 71 / 36%) 0px 5px 7px 0px inset';
    });
    piscineButton?.classList.add('active');
    main.append(termsText, termsContainer);
    main.style.paddingTop = '';
    main.classList.add('back-none');
    window.scrollTo(0, 0);
}
