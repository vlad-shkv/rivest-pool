import { helpCreateEl } from '../home/index';

let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let piscineButton = document.querySelector('#PISCINE');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'PISCINE SPORTIVE';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.style.marginTop = '50px';
termsText3.style.textAlign = 'center';
termsText3.style.marginBottom = '60px';
termsText3.innerHTML =
    'Piscine sportive, olimpioniche, grandi vasche per le competizioni agonistiche natatorie o anche per la semplice fruizione. Possiamo realizzarle al chiuso o all’aperto e aggiungere tutti gli accessori di cui si ha bisogno. I nostro professionisti vi aiuteranno sin dalla progettazione, la rilevazione delle misure, delle condizioni ambientali, vi seguiranno in corso d’opera con visite continue in cantiere, fino alle prove di collaudo, la revisione finale, la consegna dei certificati di garanzia e messa a norma e anche nei servizi post-vendita di manutenzione e trattamento acqua.';

let pageImg = helpCreateEl('div', 'page-img');

termsContainer.append(termsText3, pageImg);

export function goSportive() {
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
