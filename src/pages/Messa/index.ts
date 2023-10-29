import { helpCreateEl } from '../home/index';

let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let piscineButton = document.querySelector('#SERVICE');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'MESSA A NORMA PISCINA';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.style.marginTop = '50px';
termsText3.style.textAlign = 'center';
termsText3.style.marginBottom = '60px';
termsText3.innerHTML =
    'METTI A NORMA LA TUA PISCINA!<br><br>CONSULENZA GRATUITA E MESSA A NORMA CERTIFICATA<br><br><br>In Toscana, dal marzo 2017, è entrata in vigore la Legge Regionale n.8 del 9 marzo 2006 sulle norme in materia di requisiti igienico-sanitari delle piscine a uso natatorio. Il problema per quanto riguarda le piscine non è quello di farsi “beccare” o riuscire a farla franca. Il problema è se il tuo impianto è, o non è sicuro. Noi non ci limitiamo a consigliare la messa a norma di legge, noi consigliamo quello che è opportuno fare per rendere la tua piscina solo divertimento.<br><br>Le piscine, a seconda della destinazione si dividono in due tipi, a) pubbliche o private destinate all’uso pubblico e b) private e per uso privato. Il regolamento della REGIONE TOSCANA definisce: i requisiti strutturali, gestionali, tecnici, igienico- ambientali dell’impianto di piscine, ivi compresa la specificazione del limite massimo degli utenti ammissibili; b) i requisiti fisici, chimico- fisici, chimici e microbiologici delle acque di vasca; c) le modalità di esercizio dell’attività di vigilanza ed i controlli; d) la documentazione necessaria ai fini dei controlli interni di cui all’ articolo 16 ; e) le deroghe ai sensi dell’ articolo 9 , comma 5; f) le deroghe ai sensi dell’ articolo 19 , comma 3.<br><br>Si deve tenere bene a mente che tale regolamento che potrete vedere meglio nel link alla legge qui sotto non può in alcun modo essere aggirato, se non in modo illegale e chi vi dice il contrario o ignora o è in malafede. Non è possibile ‘costruire una piscina senza permessi’, quindi fate bene attenzione.<br><br>Noi abbiamo un’azienda preposta facente parte del gruppo, Aquaclinic Srl, che effettua queste consulenze gratuitamente e, se serve, interviene per la messa a norma certificando il lavoro eseguito.<br><br><br>NON ASPETTARE OLTRE, CHIAMACI SUBITO!!!';

let pageImg = helpCreateEl('div', 'page-img');

termsContainer.append(termsText3, pageImg);

export function goMessa() {
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
