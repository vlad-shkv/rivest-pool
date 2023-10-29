import { helpCreateEl } from '../home/index';

let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let piscineButton = document.querySelector('#SERVICE');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'POOL EVOLUTION MAGAZINE';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.style.marginTop = '50px';
termsText3.style.textAlign = 'center';
termsText3.style.marginBottom = '60px';
termsText3.innerHTML =
    'PROPOSTE E CONSIGLI PER MANTENERE, CURARE E AGGIORNARE LA TUA PISCINA<br><br>Pool Evolution Magazine nasce nel 2021 con lo scopo di informare i possessori di piscine sulle novità presenti nel mercato. L’obiettivo è quello di far vivere l’esperienza piscina il più consapevolmente possibile per giungere infine ad un<br><br><br>• MAGGIOR COMFORT • MAGGIOR RISPARMIO ENERGETICO • MAGGIOR SICUREZZA •<br>brochure-swimming-pool<br><br><br>AS Group Srl, proprietaria del marchio Acqua Sport, con i suoi 35 anni di esperienza nel mondo delle Piscine, si propone come unico referente per la progettazione e la costruzione degli impianti natatori. Realizza sempre prodotti di livello qualitativo eccellente per garantire nel tempo una sicura e perfetta funzionalità.<br><br>Aquaclinic Srl, “Gli specialisti dell’acqua di piscina”, anch’essa con 35 anni di esperienza, è esperta nel trattamento chimico dell’acqua e nella manutenzione delle piscine. Un organico altamente specializzato si impegna costantemente a seguire le innumerevoli esigenze che si vengono a creare nella complicata gestione degli impianti natatori.<br><br>Grazie all’unione di queste esperienze<br><br>AS Group | Aquaclinic<br><br>possiamo garantire un servizio a 360° h24';

let pageImg = helpCreateEl('div', 'page-img');

termsContainer.append(termsText3, pageImg);

export function goEvol() {
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
