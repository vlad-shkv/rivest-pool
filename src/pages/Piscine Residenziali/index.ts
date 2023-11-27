import { helpCreateEl } from '../home/index';

let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let piscineButton = document.querySelector('#PISCINE');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'PRISCINE RESIDENZIALI';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.style.textAlign = 'center';
termsText3.innerHTML =
    'La tua meravigliosa casa attende solo di essere impreziosita. Fallo con le nostre meravigliose piscine residenziali. Insieme a noi deciderai il pooldesign (piscina interrata o piscina fuori terra), i materiali, le dimensioni, gli accessori e tutti i servizi di cui vorrai usufruire. Inoltre, se entrerai nel mondo Acqua Sport by AS Group avrai a disposizione un servizio a 360° che va ben oltre la realizzazione della piscina.<br><br>Vuoi costruire una piscina in giardino? Hai bisogno di uno spazio dove rilassarti insieme ai tuoi amici o alla tua famiglia. Acqua Sport fa al caso tuo. Dopo la vendita non sarai mai lasciato a te stesso poiché la nostra assistenza, manutenzione e trattamento acqua è gestita dai Tecnici specializzati del nostro partner strategico Aquaclinic Srl.<br><br>Non paghi di ciò abbiamo sviluppato un nuovo sistema di gestione da remoto, Pool Handler, ed un sistema di gestione domotica: Pool Manager. Scopri la lifelong pool policy che ci contraddistingue.';

let imgContainer = helpCreateEl('div', 'img-container');
let pageImg1 = helpCreateEl('div', 'page-img');
pageImg1.classList.add('piscine1');
let pageImg2 = helpCreateEl('div', 'page-img');
pageImg2.classList.add('piscine2');
let pageImg3 = helpCreateEl('div', 'page-img');
pageImg3.classList.add('piscine3');
let pageImg4 = helpCreateEl('div', 'page-img');
pageImg4.classList.add('piscine4');
let pageImg5 = helpCreateEl('div', 'page-img');
pageImg5.classList.add('piscine5');
let pageImg6 = helpCreateEl('div', 'page-img');
pageImg6.classList.add('piscine6');
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

export function goResiden() {
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
