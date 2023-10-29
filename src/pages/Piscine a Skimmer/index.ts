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
termsText3.style.marginTop = '50px';
termsText3.style.textAlign = 'center';
termsText3.style.marginBottom = '60px';
termsText3.innerHTML =
    'Piscine a skimmer o mezzo skimmer. Queste prese aspiranti poste in prossimità del bordo superiore della vasca, insieme alla pompa, al filtro e alla bocchetta di mandata, costituiscono il sistema di filtrazione e donano il classico aspetto col bordo rialzato (a circa 15cm dalla superficie dell’acqua) alla piscina. Tale sistema è ancora quello più diffuso in circolazione, è ottimo per le piscine interrate, con un rapporto qualità-prezzo vantaggioso e un design tradizionale che non sarà mai fuori moda.';

let pageImg = helpCreateEl('div', 'page-img');

termsContainer.append(termsText3, pageImg);

export function goSkimmer() {
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
