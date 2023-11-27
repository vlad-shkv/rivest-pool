import { helpCreateEl } from '../home/index';

let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let piscineButton = document.querySelector('#PISCINE');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'PISCINE PER STRUTTURE RICETTIVE';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.style.textAlign = 'center';
termsText3.innerHTML =
    'Hai mai considerato un hotel senza piscina? Al tuo stesso modo anche la considerazione dei clienti si basa per oltre l’80% sulla presenza o meno di una piscina all’interno delle strutture ricettive, siano essi alberghi, agriturismi, case vacanza o altro. E in effetti avete tutti ragione! L’acqua porta gioia, freschezza, benessere e relax in ogni ambiente. Insieme potremo progettare una vasca provvista di tutti gli accessori di cui necessiti, provvista di certificati, messa a norma, manutenzione tecnica e trattamento acqua e di un design innovativo e personalizzato. La nostra esperienza trentennale ci ha insegnato che ogni luogo è unico e, per far sì che rimanga tale, occorre un grande impegno creativo e professionale che porti alla realizzazione di una struttura che soddisfi le esigenze dell’ambiente e i gusti, l’anima della vostra azienda.';

let imgContainer = helpCreateEl('div', 'img-container');
let pageImg1 = helpCreateEl('div', 'page-img');
pageImg1.classList.add('strut1');
let pageImg2 = helpCreateEl('div', 'page-img');
pageImg2.classList.add('strut2');
let pageImg3 = helpCreateEl('div', 'page-img');
pageImg3.classList.add('strut3');
let pageImg4 = helpCreateEl('div', 'page-img');
pageImg4.classList.add('strut4');
let pageImg5 = helpCreateEl('div', 'page-img');
pageImg5.classList.add('strut5');
let pageImg6 = helpCreateEl('div', 'page-img');
pageImg6.classList.add('strut6');
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

export function goRicettive() {
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
