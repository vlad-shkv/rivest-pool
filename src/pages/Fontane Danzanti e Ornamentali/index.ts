import { helpCreateEl } from '../home/index';

let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let piscineButton = document.querySelector('#PISCINE');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'FONTANE DANZANTI E ORNAMENTALI';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.style.textAlign = 'center';
termsText3.innerHTML =
    'Acqua Sport by AS Group Srl in collaborazione con il Gruppo Multinazionale spagnolo Fluidra hanno creato qualcosa di veramente spettacolare: le fontane danzanti dell’Airone Resort Sottomarina di Chioggia!<br><br>“Non solo acqua nelle nostre fontane”<br><br>I getti danzano a ritmo di musica illuminati da fasci di luci colorate ed avvolti da nuvole fiammanti. Le fontane ornamentali contribuiscono a personalizzare fortemente uno spazio aperto, un paesaggio o un ambiente, rendendolo dinamico. Spesso sono un punto d’incontro per le persone e un luogo in cui la ragione lascia spazio alle emozioni. La filosofia di AS Group e del Gruppo Fluidra, anche nella progettazione di fontane e giochi d’acqua, è il rispetto per l’ambiente e l’uso sostenibile dell’acqua. Per questo motivo le nostre fontane sono progettate per il massimo risparmio energetico e a basso consumo d’acqua (l’acqua è totalmente di ricircolo). Le fontane vengono assemblate all’interno della piscina. Sono sufficienti 60 cm di acqua per accendere lo spettacolo. I fire jets sono in grado di sparare alcool infiammabile per ottenere effetti scenografici spettacolari.<br><br>E’ un lavoro impegnativo ma estremamente divertente. Il risultato finale è talmente meraviglioso che giustifica ogni sforzo affrontato.';

let imgContainer = helpCreateEl('div', 'img-container');
let pageImg1 = helpCreateEl('div', 'page-img');
pageImg1.classList.add('fontani1');
let pageImg2 = helpCreateEl('div', 'page-img');
pageImg2.classList.add('fontani2');
let pageImg3 = helpCreateEl('div', 'page-img');
pageImg3.classList.add('fontani3');
let pageImg4 = helpCreateEl('div', 'page-img');
pageImg4.classList.add('fontani4');
let pageImg5 = helpCreateEl('div', 'page-img');
pageImg5.classList.add('fontani5');
let pageImg6 = helpCreateEl('div', 'page-img');
pageImg6.classList.add('fontani6');
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

export function goOrnamentali() {
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
