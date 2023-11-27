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
termsText3.style.textAlign = 'center';
termsText3.innerHTML =
    'Un centro benessere è un perfetto equilibrio tra tecnologia ed estetica, tradizione e innovazione, caldo e freddo, colori e musica. L’acqua è fonte di vita. Sin dai tempi dei greci e dei romani vi è stata la consapevolezza della sacralità di questo elemento. L’abbraccio distensivo di un idromassaggio dona benessere e vitalità.<br><br>Belli e rilassanti i Centri Benessere sono un piacevole e perfetto ambiente dove iniziare o concludere la tua giornata.<br><br><br>Lasciati guidare nella realizzazione del tuo sogno. Non sarai mai lasciato a te stesso, neanche nel post vendita poiché, tramite la nostra assistenza e manutenzione straordinaria e tramite il nostro partner strategico aquaclinic.it/, sarai seguito per tutto il corso della vita del tuo Centro Benessere.<br><br>Una lifelong pool policy che ci contraddistingue.';

let imgContainer = helpCreateEl('div', 'img-container');
let pageImg1 = helpCreateEl('div', 'page-img');
pageImg1.classList.add('benessere1');
let pageImg2 = helpCreateEl('div', 'page-img');
pageImg2.classList.add('benessere2');
let pageImg3 = helpCreateEl('div', 'page-img');
pageImg3.classList.add('benessere3');
let pageImg4 = helpCreateEl('div', 'page-img');
pageImg4.classList.add('benessere4');
let pageImg5 = helpCreateEl('div', 'page-img');
pageImg5.classList.add('benessere5');
let pageImg6 = helpCreateEl('div', 'page-img');
pageImg6.classList.add('benessere6');
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

export function goCentri() {
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
