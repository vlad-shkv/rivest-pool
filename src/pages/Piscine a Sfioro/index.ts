import { helpCreateEl } from '../home/index';

let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let piscineButton = document.querySelector('#PISCINE');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'PISCINE A SFIORO';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.style.textAlign = 'center';
termsText3.innerHTML =
    'All’inizio degli anni 60′ un architetto americano, John Lautner, sognò una piscina che raggiungesse l’infinito. In effetti non sappiamo se mai ci sia riuscito davvero, tuttavia sappiamo per certo che egli fu l’inventore di quel tipo di piscina nella quale orizzonte e superficie dell’acqua si fondono in un magnifico abbraccio. Nel mondo anglosassone la chiamano Infinity Pool, noi ci riferiamo all’acqua che sfiora sul bordo della piscina. Eleganti, eteree, perfettamente integrate col paesaggio, le piscine a sfioro sono la scelta di tantissimi nostri clienti.<br><br>Se sarai uno di loro ti aiuteremo a realizzare la struttura nel modo più personalizzato possibile, provvisto di accessori, impianti, messa a norma, garanzie e un servizio post-vendita di manutenzione, domotica e trattamento acqua che solo noi siamo in grado di offrire.<br><br>Costruire una piscina interrata è indubbiamente la soluzione più elegante per valorizzare il vostro spazio. Esse richiedono lavori di scavo, muratura e sistemi di filtraggio abbastanza complessi e, in ogni caso, richiedono dei permessi di costruzione concessi dal comune di residenza (consulta il nostro articolo al riguardo). La tipologia può essere con skimmer o a sfioro (le infinity pool di cui parliamo in questa pagina), queste ultime ovviamente la soluzione più ricercata ed estetica. Il loro costo può variare considerevolmente poiché dipendente da fattori quali: dimensioni della vasca, materiali, tipologia, sistema di filtraggio, profondità e caratteristiche dello spazio.<br><br>Per avere ulteriori informazioni e preventivi scriveteci sul modulo contatti o chiamate i nostri agenti al +39 335 465260 o al +39 335 7385678!';

let imgContainer = helpCreateEl('div', 'img-container');
let pageImg1 = helpCreateEl('div', 'page-img');
pageImg1.classList.add('sfioro1');
let pageImg2 = helpCreateEl('div', 'page-img');
pageImg2.classList.add('sfioro2');
let pageImg3 = helpCreateEl('div', 'page-img');
pageImg3.classList.add('sfioro3');
let pageImg4 = helpCreateEl('div', 'page-img');
pageImg4.classList.add('sfioro4');
let pageImg5 = helpCreateEl('div', 'page-img');
pageImg5.classList.add('sfioro5');
let pageImg6 = helpCreateEl('div', 'page-img');
pageImg6.classList.add('sfioro6');
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

export function goSiforo() {
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
