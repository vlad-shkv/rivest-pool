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
termsText3.style.marginTop = '50px';
termsText3.style.textAlign = 'center';
termsText3.style.marginBottom = '60px';
termsText3.innerHTML =
    'Acqua Sport by AS Group Srl in collaborazione con il Gruppo Multinazionale spagnolo Fluidra hanno creato qualcosa di veramente spettacolare: le fontane danzanti dell’Airone Resort Sottomarina di Chioggia!<br><br>“Non solo acqua nelle nostre fontane”<br><br>I getti danzano a ritmo di musica illuminati da fasci di luci colorate ed avvolti da nuvole fiammanti. Le fontane ornamentali contribuiscono a personalizzare fortemente uno spazio aperto, un paesaggio o un ambiente, rendendolo dinamico. Spesso sono un punto d’incontro per le persone e un luogo in cui la ragione lascia spazio alle emozioni. La filosofia di AS Group e del Gruppo Fluidra, anche nella progettazione di fontane e giochi d’acqua, è il rispetto per l’ambiente e l’uso sostenibile dell’acqua. Per questo motivo le nostre fontane sono progettate per il massimo risparmio energetico e a basso consumo d’acqua (l’acqua è totalmente di ricircolo). Le fontane vengono assemblate all’interno della piscina. Sono sufficienti 60 cm di acqua per accendere lo spettacolo. I fire jets sono in grado di sparare alcool infiammabile per ottenere effetti scenografici spettacolari.<br><br>E’ un lavoro impegnativo ma estremamente divertente. Il risultato finale è talmente meraviglioso che giustifica ogni sforzo affrontato.';

let pageImg = helpCreateEl('div', 'page-img');

termsContainer.append(termsText3, pageImg);

export function goOrnamentali() {
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
