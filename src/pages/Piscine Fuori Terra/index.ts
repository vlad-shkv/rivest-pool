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
termsText3.style.marginTop = '50px';
termsText3.style.textAlign = 'center';
termsText3.style.marginBottom = '60px';
termsText3.innerHTML =
    'Una lifelong pool policy per le fuori terra che ci contraddistingue. Potremo decidere insieme design, materiali, accessori e anche in ambito post-vendita non sarai mai lasciato solo, poiché i servizi Acqua Sport comprendono tutta la vita di una piscina, dalla sua manutenzione alla ristrutturazione al trattamento acqua (fornito dai nostri partner di AquaClinic Srl).<br><br>Costruire una piscina fuori terra è sicuramente una delle soluzioni più semplici, economiche e meno invasive per chi voglia farsi un bagno in giardino. Esse possono essere realizzate con diversi materiali a seconda delle vostre richieste e della conformazione del terreno. Pietra, sabbia, cemento, erba, legno, plastica in vari colori e design, Acqua Sport ti aiuterà a raggiungere il risultato desiderato. Scrivici utilizzando il modulo contatti oppure chiama i nostri al +39 335 465260 o al +39 335 7385678!';

let pageImg = helpCreateEl('div', 'page-img');

termsContainer.append(termsText3, pageImg);

export function goTerra() {
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
