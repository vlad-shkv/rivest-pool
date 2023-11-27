import { helpCreateEl } from '../home/index';

let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let piscineButton = document.querySelector('#PISCINE');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'PISCINE A SKIMMER';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.style.textAlign = 'center';
termsText3.innerHTML =
    'Piscine a skimmer o mezzo skimmer. Queste prese aspiranti poste in prossimità del bordo superiore della vasca, insieme alla pompa, al filtro e alla bocchetta di mandata, costituiscono il sistema di filtrazione e donano il classico aspetto col bordo rialzato (a circa 15cm dalla superficie dell’acqua) alla piscina. Tale sistema è ancora quello più diffuso in circolazione, è ottimo per le piscine interrate, con un rapporto qualità-prezzo vantaggioso e un design tradizionale che non sarà mai fuori moda.';

let imgContainer = helpCreateEl('div', 'img-container');
let pageImg1 = helpCreateEl('div', 'page-img');
pageImg1.classList.add('skim1');
let pageImg2 = helpCreateEl('div', 'page-img');
pageImg2.classList.add('skim2');
let pageImg3 = helpCreateEl('div', 'page-img');
pageImg3.classList.add('skim3');
let pageImg4 = helpCreateEl('div', 'page-img');
pageImg4.classList.add('skim4');
let pageImg5 = helpCreateEl('div', 'page-img');
pageImg5.classList.add('skim5');
let pageImg6 = helpCreateEl('div', 'page-img');
pageImg6.classList.add('skim6');
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

export function goSkimmer() {
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
