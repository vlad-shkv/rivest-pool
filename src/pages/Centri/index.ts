import { helpCreateEl } from '../home/index';

let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let piscineButton = document.querySelector('#PISCINE');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'CENTRI BENESSERE';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.style.marginTop = '50px';
termsText3.style.textAlign = 'center';
termsText3.style.marginBottom = '60px';
termsText3.innerHTML =
    'Un centro benessere è un perfetto equilibrio tra tecnologia ed estetica, tradizione e innovazione, caldo e freddo, colori e musica. L’acqua è fonte di vita. Sin dai tempi dei greci e dei romani vi è stata la consapevolezza della sacralità di questo elemento. L’abbraccio distensivo di un idromassaggio dona benessere e vitalità.<br><br>Belli e rilassanti i Centri Benessere sono un piacevole e perfetto ambiente dove iniziare o concludere la tua giornata.<br><br><br>Lasciati guidare nella realizzazione del tuo sogno. Non sarai mai lasciato a te stesso, neanche nel post vendita poiché, tramite la nostra assistenza e manutenzione straordinaria e tramite il nostro partner strategico aquaclinic.it/, sarai seguito per tutto il corso della vita del tuo Centro Benessere.<br><br>Una lifelong pool policy che ci contraddistingue.';

let pageImg = helpCreateEl('div', 'page-img');

termsContainer.append(termsText3, pageImg);

export function goCentri() {
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
