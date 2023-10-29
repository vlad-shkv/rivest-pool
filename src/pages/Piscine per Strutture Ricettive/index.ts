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
termsText3.style.marginTop = '50px';
termsText3.style.textAlign = 'center';
termsText3.style.marginBottom = '60px';
termsText3.innerHTML =
    'Hai mai considerato un hotel senza piscina? Al tuo stesso modo anche la considerazione dei clienti si basa per oltre l’80% sulla presenza o meno di una piscina all’interno delle strutture ricettive, siano essi alberghi, agriturismi, case vacanza o altro. E in effetti avete tutti ragione! L’acqua porta gioia, freschezza, benessere e relax in ogni ambiente. Insieme potremo progettare una vasca provvista di tutti gli accessori di cui necessiti, provvista di certificati, messa a norma, manutenzione tecnica e trattamento acqua e di un design innovativo e personalizzato. La nostra esperienza trentennale ci ha insegnato che ogni luogo è unico e, per far sì che rimanga tale, occorre un grande impegno creativo e professionale che porti alla realizzazione di una struttura che soddisfi le esigenze dell’ambiente e i gusti, l’anima della vostra azienda.';

let pageImg = helpCreateEl('div', 'page-img');

termsContainer.append(termsText3, pageImg);

export function goRicettive() {
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
