let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let termsButton = document.querySelector('#PRIVACY');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'Privacy Policy';

let termsText2 = document.createElement('p');
termsText2.classList.add('terms-title_small');
termsText2.textContent = 'Artt 13 e 14 Reg. (UE) 2016/679';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.innerHTML =
    'In adempimento agli artt. 13 (per i dati raccolti presso l’interessato) e 14 (per i dati non raccolti presso l’interessato) del regolamento (UE) 2016/679 (GDPR) e delle successive normative di attuazione, si rendono agli utenti di questo sito web le seguenti informazioni, che si riferiscono esclusivamente al trattamento eseguito attraverso detto sito web e non tramite altri siti web eventualmente visitati tramite link dal presente, per i quali si suggerisce di prendere visione delle relative informative rese dai rispettivi titolari.';

let termsText4 = document.createElement('p');
termsText4.classList.add('terms-title_small');
termsText4.innerHTML = 'Titolare del trattamento';

let termsText5 = document.createElement('p');
termsText5.classList.add('terms-small');
termsText5.innerHTML =
    'e-mail:rivestpoolsrl@gmail.com<br>Il titolare si riserva di nominare quale responsabile del trattamento dei dati personali gestiti per le finalità di assistenza tecnica, manutenzione, gestione tecnica e simili del presente sito un’agenzia web i cui riferimenti potranno essere comunicati a seguito di richiesta agli indirizzi sopra indicati.<br>Il titolare ed il responsabile trattano i dati degli utenti anche grazie a propri incaricati interni, appositamente designati e dotati di istruzioni per il corretto trattamento dei dati personali, anche in via orale.';

let termsText6 = document.createElement('p');
termsText6.classList.add('terms-title_small');
termsText6.innerHTML = 'Finalità del trattamento';

let termsText7 = document.createElement('p');
termsText7.classList.add('terms-small');
termsText7.innerHTML =
    '-resa agli utenti dei servizi web offerti dal sito;<br>-acquisizione dati di eventuali clienti;<br>-invio di comunicazioni via mail;<br>-acquisizione di recapiti telefonici per comunicazione di preventivi e/o comunque notizie e di informazioni attinenti al lavoro commissionato e/o da commissionare;<br>-comunicazione di eventuali informazioni commerciali;<br>-I dati personali degli utenti del sito web, come sopra descritti, saranno oggetto di trattamento nei modi e nelle forme prescritti dal GDPR, per lo svolgimento delle funzionalità proprie del sito web, con particolare – ma non esclusivo – riferimento alle procedure ivi descritte di raccolta dati, form contatti, eventuale iter di registrazione.';

let termsText8 = document.createElement('p');
termsText8.classList.add('terms-title_small');
termsText8.innerHTML = 'Base giuridica del trattamento';

let termsText9 = document.createElement('p');
termsText9.classList.add('terms-small');
termsText9.innerHTML =
    '-Consenso<br>-Adempimento di un obbligo contrattuale o di contatto sociale<br>-Interesse legittimo del titolare<br>Il trattamento dei dati personali si fonda sull’adempimento degli obblighi contrattuali o di contatto sociale, ovvero laddove necessario, sul consenso mediante la libera e consapevole compilazione dell’apposito campo informativo della sezione “contatto”, nonché sul legittimo interesse del titolare di svolgere l’attività di cui all’oggetto sociale.';

let termsText10 = document.createElement('p');
termsText10.classList.add('terms-title_small');
termsText10.innerHTML = 'Eventuali destinatari dei dati personali';

let termsText11 = document.createElement('p');
termsText11.classList.add('terms-small');
termsText11.innerHTML =
    'I dati potranno essere comunicati a società connesse, collegate o controllate dal titolare, nonché a consulenti, ovvero anche a soggetti terzi che operano, anche in nome e per conto del titolare, per l’evasione delle prestazioni connesse alle finalità indicate nella presente informativa, sia intra UE che extra UE (in tale ultimo caso, si tratterà esclusivamente di soggetti aderenti al protocollo Privacy Shield). I dati di navigazione e simili (per cui si richiama quanto sopra precisato), nonché i dati rappresentati dai cookie di profilazione inviati direttamente sul sito da terze parti (per i quali si rinvia alla informativa cookie di questo sito web), saranno comunicati alle rispettive terze parti interessate, laddove queste non li gestiscano direttamente in qualità di titolari del trattamento.';

let termsText12 = document.createElement('p');
termsText12.classList.add('terms-title_small');
termsText12.innerHTML = 'Periodo di conservazione';

let termsText13 = document.createElement('p');
termsText13.classList.add('terms-small');
termsText13.innerHTML =
    'I dati conferiti dall’interessato saranno conservati fino alla revoca espressa del consenso da parte dell’interessato, mediante azione posta in essere sul proprio browser, attraverso la pulizia dei cookie, o richiesta espressa e/o in altro modo manifestata e comunque per il tempo necessario alle finalità per le quali sono raccolti.<br>I dati di navigazione saranno conservati per il tempo tecnico necessario all’espletamento delle funzioni per sui sono stati raccolti.';

let termsText14 = document.createElement('p');
termsText14.classList.add('terms-title_small');
termsText14.innerHTML = 'Diritti dell’interessato';

let termsText15 = document.createElement('p');
termsText15.classList.add('terms-small');
termsText15.innerHTML =
    'Diritti (artt. 15-22 GDPR):<br>-accesso<br>-rettifica<br>-cancellazione<br>-limitazione<br>-portabilità<br>Forme e termini di esercizio: art. 12 GDPR<br>Via e-mail: rivestpoolsrl@gmail.com<br>Ciascun interessato ha diritto di accesso, di rettifica, di cancellazione (oblio), di limitazione, di ricezione della notifica in caso di rettifica, cancellazione o limitazione, di portabilità, di opposizione e di non essere oggetto di una decisione individuale automatizzata, compresa la profilazione, ai sensi degli artt. da 15 a 22 del GDPR.<br>Tali diritti possono essere esercitati nelle forme e nei termini di cui all’art. 12 GDPR, mediante comunicazione scritta inviata al responsabile via e-mail all’indirizzo rivestpoolsrl@gmail.com.<br>Il responsabile nominato, Sig.ra Bernardo Facchini, renderà risposta adeguata al più presto e comunque entro il termine di 1 mese dalla ricezione della richiesta.';

let termsText16 = document.createElement('p');
termsText16.classList.add('terms-title_small');
termsText16.innerHTML = 'Diritto di revoca del consenso';

let termsText17 = document.createElement('p');
termsText17.classList.add('terms-small');
termsText17.innerHTML =
    'E’ possibile revocare il presente consenso in qualsiasi momento tramite:<br>-invio di una mail all’indirizzo del responsabile rivestpoolsrl@gmail.com;<br>-comunicazione espressa presso la sede del titolare.';

let termsText18 = document.createElement('p');
termsText18.classList.add('terms-title_small');
termsText18.innerHTML = 'Reclami';

let termsText19 = document.createElement('p');
termsText19.classList.add('terms-small');
termsText19.innerHTML =
    'Mediante comunicazione da inviarsi all’indirizzo e-mail info@Dimensione Immagine.com, lei potrà in ogni momento esercitare i diritti di cui agli artt. da 15 a 23 del Regolamento, tra cui conoscere quali dati stiamo trattando, con quali modalità e per quali finalità li utilizziamo, modificare i dati che ci ha fornito o cancellarli, chiederci di limitare l’uso dei suoi dati, richiedere di ricevere o trasmettere i suoi dati, ferma restando sempre la possibilità di cambiare i suoi consensi (eventualmente forniti). Può inoltre sempre opporsi al trattamento dei suoi dati effettuato, in particolare, per finalità di marketing o analisi delle sue preferenze.';

termsContainer.append(
    termsText2,
    termsText3,
    termsText4,
    termsText5,
    termsText6,
    termsText7,
    termsText8,
    termsText9,
    termsText10,
    termsText11,
    termsText12,
    termsText13,
    termsText14,
    termsText15,
    termsText16,
    termsText17,
    termsText18,
    termsText19
);

export function goTerms() {
    header?.classList.add('header_white');
    buttons.forEach((el) => {
        el.classList.remove('active');
        el.classList.add('naw__button_blue');
        main.style.backgroundColor = '#e1dbc9';
        main.style.boxShadow = 'rgb(152 120 71 / 36%) 0px 5px 7px 0px inset';
    });
    termsButton?.classList.add('active');
    main.append(termsText, termsContainer);
    main.style.paddingTop = '';
    main.classList.add('back-none');
    window.scrollTo(0, 0);
}
