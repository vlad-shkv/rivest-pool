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
termsText3.style.marginTop = '50px';
termsText3.style.textAlign = 'center';
termsText3.style.marginBottom = '60px';
termsText3.innerHTML =
    'La tua meravigliosa casa attende solo di essere impreziosita. Fallo con le nostre meravigliose piscine residenziali. Insieme a noi deciderai il pooldesign (piscina interrata o piscina fuori terra), i materiali, le dimensioni, gli accessori e tutti i servizi di cui vorrai usufruire. Inoltre, se entrerai nel mondo Acqua Sport by AS Group avrai a disposizione un servizio a 360° che va ben oltre la realizzazione della piscina.<br><br>Vuoi costruire una piscina in giardino? Hai bisogno di uno spazio dove rilassarti insieme ai tuoi amici o alla tua famiglia. Acqua Sport fa al caso tuo. Dopo la vendita non sarai mai lasciato a te stesso poiché la nostra assistenza, manutenzione e trattamento acqua è gestita dai Tecnici specializzati del nostro partner strategico Aquaclinic Srl.<br><br>Non paghi di ciò abbiamo sviluppato un nuovo sistema di gestione da remoto, Pool Handler, ed un sistema di gestione domotica: Pool Manager. Scopri la lifelong pool policy che ci contraddistingue.';

let pageImg = helpCreateEl('div', 'page-img');

termsContainer.append(termsText3, pageImg);

export function goResiden() {
    header?.classList.add('header_white');
    buttons.forEach((el) => {
        el.classList.remove('active');
        el.classList.add('naw__button_blue');
        main.style.backgroundColor = 'rgb(101 149 168)';
        main.style.boxShadow = 'inset rgb(147 147 147 / 56%) 0px 2px 20px 0px';
    });
    piscineButton?.classList.add('active');
    main.append(termsText, termsContainer);
}
