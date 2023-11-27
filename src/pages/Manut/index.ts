let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let piscineButton = document.querySelector('#SERVICE');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'MANUTENZIONE PISCINA';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.style.textAlign = 'center';
termsText3.innerHTML =
    'SERVIZIO DI ASSISTENZA E MANUTENZIONE PISCINA<br><br><br>Il servizio assistenza e manutenzione piscina è attivo 365 giorni l’anno. Un numero verde garantisce la massima tempestività d’intervento. Siamo specializzati nelle aperture e chiusure delle vasche, nei montaggi e riparazioni di impianti di circolazione dell’acqua, nel controllo della chimica dell’acqua, nel ripristino della vasca. La nostra filosofia è basata sull’informazione e sulla condivisione dei metodi e dei sistemi di lavoro con i nostri clienti. Più preparazione per gli addetti ai lavori, meno problemi sulla gestione dell’acqua e più economicità nei risultati.<br><br>NO STANDARD! Ogni contratto di assistenza viene modulato insieme al cliente e in base alle sue specifiche necessità.<br><br>Su richiesta offriamo ai nostri clienti anche il servizio con formula COSTO CERTO. La manutenzione viene programmata e l’assistenza organizzata precedentemente. Il cliente non avrà più sorprese e l’impianto sarà sempre in ordine e ben funzionante.';
termsContainer.append(termsText3);

export function goManut() {
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
