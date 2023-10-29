let header = document.querySelector('header');
let buttons = document.querySelectorAll('.naw__button');
let termsButton = document.querySelector('#PRIVACY');
let main = document.querySelector('main') as HTMLElement;

let termsContainer = document.createElement('div');
termsContainer.classList.add('terms-container');

let termsText = document.createElement('h1');
termsText.classList.add('terms-title');
termsText.textContent = 'Privacy Policy';

let termsText1 = document.createElement('p');
termsText1.classList.add('terms-bold');
termsText1.innerHTML =
    'Con la presente policy DIMENSIONE IMMAGINE. intende informare gli utenti visitatori del sito Web “www.dimensioneimmagine.net” (di seguito il “Sito”) della politica adottata in materia di Protezione dei dati personali, sottolineando il proprio impegno ed attenzione con riferimento alla tutela della privacy dei visitatori del Sito. La preghiamo di leggere attentamente la nostra Privacy Policy che si applica sia nel caso lei acceda al sito web e decida semplicemente di navigare al suo interno utilizzando i nostri servizi, senza acquistare alcun prodotto, sia nel caso decida di effettuare degli acquisti.<br><br>La preghiamo inoltre di leggere, se non l’avesse ancora fatto, le Condizioni d’Uso del Sito perché contengono importanti indicazioni anche sui sistemi di sicurezza adottati dal Sito.<br><br>La navigazione all’interno del Sito è libera e non richiede registrazione alcuna, con eccezione di alcune aree in cui l’utente può liberamente ed espressamente fornire una serie di dati che lo riguardano per accedere a servizi specificamente individuati (es. per poter procedere con gli acquisti, iscriversi alla newsletter o richiedere informazioni, ecc.). Laddove pertanto il visitatore intenda fornire i propri dati personali per accedere a tali ulteriori servizi, esso sarà espressamente informato ai sensi del D. Lgs. 30 giugno 2003, n. 196, “Codice in materia di protezione dei dati personali”, (il “Codice”) e del Regolamento UE 679/2016 “Regolamento generale sulla protezione dei dati” (il “Regolamento”) con indicazione (a titolo esemplificativo) delle finalità e modalità di utilizzo dei dati da parte di Dimensione Immagine., nonché del diritto di richiedere in ogni momento la cancellazione dei dati o l’aggiornamento degli stessi. Ogni riferimento al Codice contenuto nella Privacy Policy, e nel Sito in generale, deve intendersi valido ed efficace nei limiti e nella misura in cui le norme richiamate resteranno in vigore successivamente all’entrata in vigore del Regolamento (25 maggio 2018).<br><br>Il sito web non è destinato all’uso da parte di bambini di età inferiore ai sedici anni, a cui è vietato inoltre di creare un account o di fornire in altro modo le proprie informazioni personali.<br><br>Ai sensi e per gli effetti del Codice e del Regolamento, Dimensione Immagine. fornisce le seguenti informazioni.';

let termsText2 = document.createElement('p');
termsText2.classList.add('terms-title_small');
termsText2.textContent = '1. Il Titolare e Responsabili del Trattamento';

let termsText3 = document.createElement('p');
termsText3.classList.add('terms-small');
termsText3.innerHTML =
    'Il Titolare del trattamento dei dati personali è Dimensione Immagine, con sede in C.da S.Lucia 46, 98071 Capo d’Orlando (ME), C.F. e P.IVA P.IVA 02861570832 , e-mail info@dimensioneimmagine.net(di seguito “Dimensione Immagine”, il “Titolare” o la “Società”).<br><br>Per esigenze esclusivamente organizzative e funzionali, abbiamo nominato alcuni fornitori di servizi funzionali alla gestione del Sito quali responsabili esterni del trattamento dei dati personali degli utenti per finalità strettamente connesse e correlate alla prestazione dei servizi forniti dal Sito, compresa la vendita dei prodotti.<br>Responsabile della protezione dei dati, ai sensi dell’art. 37 del Regolamento, è contattabile all’indirizzo e-mail info@dimensioneimmagine.netf';

let termsText4 = document.createElement('p');
termsText4.classList.add('terms-title_small');
termsText4.innerHTML = '2. Tipi di dati personali trattati';

let termsText5 = document.createElement('p');
termsText5.classList.add('terms-small');
termsText5.innerHTML =
    'Per accedere al Sito non è necessario procedere ad alcuna registrazione. Esistono tuttavia all’interno del Sito delle sezioni che richiedono una registrazione o l’utilizzo di username e password (ad es. per registrarsi all’area personale, o completare il processo di acquisto on-line), oppure dei servizi per il cui utilizzo è necessario fornire i propri dati (ad es. i suoi dati potranno essere richiesti per accedere ai servizi di newsletter, per contattarci, ecc.).<br><br>Con riferimento ai dati relativi alla navigazione all’interno del Sito si veda anche il successivo punto 6 riguardante gli Strumenti di profilazione utilizzati dal Sito.';

let termsText6 = document.createElement('p');
termsText6.classList.add('terms-title_small');
termsText6.innerHTML = '3. Facoltatività del conferimento dei dati personali';

let termsText7 = document.createElement('p');
termsText7.classList.add('terms-small');
termsText7.innerHTML =
    'Il conferimento dei dati personali ha in linea generale natura facoltativa. Solo in determinati casi il mancato conferimento dei dati può comportare l’impossibilità di accedere a servizi specifici ed ottenere quanto eventualmente richiesto (ad es. la registrazione – ed il conferimento dei dati anagrafici, dell’indirizzo di posta elettronica, dell’indirizzo postale, dei dati della carta di credito/debito o coordinate bancarie e del numero di telefono – è necessario per procedere all’acquisto di prodotti on-line); il mancato conferimento di tali dati può quindi impedire a Dimensione Immagine di consentire l’accesso ai servizi del Sito o di rispondere alle richieste degli utenti.<br><br>I dati di volta in volta necessari sono indicati nei moduli di raccolta dati presenti nel Sito – ad es. indicandoli con un (*) – e le conseguenze del loro mancato conferimento sono riportate nelle specifiche informative presenti nelle pagine di raccolta dei dati.';

let termsText8 = document.createElement('p');
termsText8.classList.add('terms-title_small');
termsText8.innerHTML = '4. Finalità';

let termsText9 = document.createElement('p');
termsText9.classList.add('terms-small');
termsText9.innerHTML =
    'I dati sono raccolti e trattati per finalità strettamente connesse all’uso del Sito, dei suoi servizi e all’acquisto di prodotti on-line. Le finalità di utilizzo dei dati sono indicate in modo dettagliato nelle specifiche informative fornite dal Sito in tutti i casi di raccolta dei dati. Chiediamo quindi di voler leggere le informative che di volta in volta illustrano le caratteristiche dei trattamenti che saranno svolti da Dimensione Immagine (es. per la registrazione al servizio di newsletter, per accedere all’area personale, ecc.). Il trattamento dei suoi dati avverrà nel pieno rispetto della normativa privacy.';

let termsText10 = document.createElement('p');
termsText10.classList.add('terms-title_small');
termsText10.innerHTML = '5. Modalità, durata del trattamento dei dati ed ambito di comunicazione';

let termsText11 = document.createElement('p');
termsText11.classList.add('terms-small');
termsText11.innerHTML =
    'I dati potranno essere trattati sia su supporto elettronico, che cartaceo (ad es. per la gestione degli acquisti sul Sito). Dimensione Immagine garantisce il trattamento lecito e secondo correttezza dei dati personali forniti attraverso il Sito, nel pieno rispetto della normativa vigente, nonché la massima riservatezza dei dati forniti in sede di registrazione. Tutte le informazioni raccolte sono trasmesse in connessione protetta in modo da impedirne l’intercettazione da parte di estranei.<br><br>I dati eventualmente forniti dagli utenti saranno trattati per i tempi previsti nelle specifiche informative fornite al momento della raccolta dei dati.<br><br>Per quanto riguarda ai tempi di conservazione dei dati rilevati mediante l’utilizzo di strumenti di profilazione (es. cookies), si veda la nostra Cookie Policy.<br><br>I dati non saranno comunicati o diffusi a terzi se non nei limiti ed alle condizioni espressamente indicate nell’informativa di volta in volta fornita all’utente e previa autorizzazione da parte dello stesso.';

let termsText12 = document.createElement('p');
termsText12.classList.add('terms-title_small');
termsText12.innerHTML = '6. Collegamenti ad altri siti';

let termsText13 = document.createElement('p');
termsText13.classList.add('terms-small');
termsText13.innerHTML =
    'La presente informativa è fornita solo per il sito www.dimensioneimmagine.net e non anche per altri siti web eventualmente consultati dall’utente tramite link di collegamento.Dimensione Immagine non può essere ritenuta responsabile dei dati personali forniti dagli utenti a soggetti esterni o a eventuali siti web collegati al presente Sito.';

let termsText14 = document.createElement('p');
termsText14.classList.add('terms-title_small');
termsText14.innerHTML = '7. Strumenti di “profilazione” e/o personalizzazione';

let termsText15 = document.createElement('p');
termsText15.classList.add('terms-small');
termsText15.innerHTML =
    'Dimensione Immagine non svolge alcuna attività di comunicazione promozionale e/o pubblicitaria senza il preventivo consenso espresso dell’utente.<br><br>Il Sito utilizza “cookies”, sia tecnici (cioè per facilitare la navigazione e l’utilizzo del Sito), sia di profilazione (cioè per analizzare gli utenti ed i loro comportamenti e preferenze, e fargli avere pubblicità personalizzate).<br><br>Per una spiegazione dettagliata sui cookies utilizzati dal Sito e come disattivarli ti invitiamo a leggere la nostra Cookie Policy.';

let termsText16 = document.createElement('p');
termsText16.classList.add('terms-title_small');
termsText16.innerHTML = '8. Luogo di trattamento dei dati';

let termsText17 = document.createElement('p');
termsText17.classList.add('terms-small');
termsText17.innerHTML =
    'I trattamenti connessi ai servizi forniti dal Sito sono svolti presso la sede di Dimensione Immagine indicata al punto 1 che precede e sono svolti dagli incaricati del trattamento, nonché delle società che forniscono servizi funzionali alla gestione del Sito, nominate quali responsabili esterni del trattamento. Un elenco completo dei responsabili esterni nominati da Dimensione Immagine può essere richiesto ai contatti indicati al punto 9 della Privacy Policy.';

let termsText18 = document.createElement('p');
termsText18.classList.add('terms-title_small');
termsText18.innerHTML = '9. Diritti degli interessati';

let termsText19 = document.createElement('p');
termsText19.classList.add('terms-small');
termsText19.innerHTML =
    'Mediante comunicazione da inviarsi all’indirizzo e-mail info@Dimensione Immagine.com, lei potrà in ogni momento esercitare i diritti di cui agli artt. da 15 a 23 del Regolamento, tra cui conoscere quali dati stiamo trattando, con quali modalità e per quali finalità li utilizziamo, modificare i dati che ci ha fornito o cancellarli, chiederci di limitare l’uso dei suoi dati, richiedere di ricevere o trasmettere i suoi dati, ferma restando sempre la possibilità di cambiare i suoi consensi (eventualmente forniti). Può inoltre sempre opporsi al trattamento dei suoi dati effettuato, in particolare, per finalità di marketing o analisi delle sue preferenze.';

let termsText20 = document.createElement('p');
termsText20.classList.add('terms-title_small');
termsText20.innerHTML = '10. A chi può rivolgersi per proporre un reclamo';

let termsText21 = document.createElement('p');
termsText21.classList.add('terms-small');
termsText21.innerHTML =
    'Le ricordiamo che, qualora non fosse soddisfatto delle risposte ricevute da Dimensione Immagine (cfr. paragrafo 8) di cui sopra), lei potrà in ogni caso, qualora ritenga che il trattamento che La riguarda violi le disposizioni di cui al Regolamento, proporre reclamo all’autorità Garante per la protezione dei dati personali (www.garanteprivacy.it), oppure all’autorità Garante del Paese in cui risiede abitualmente, lavora oppure del luogo ove si è verificata la presunta violazione.';

let termsText22 = document.createElement('p');
termsText22.classList.add('terms-title_small');
termsText22.innerHTML = '11. Legge applicabile';

let termsText23 = document.createElement('p');
termsText23.classList.add('terms-small');
termsText23.innerHTML =
    'Questa Privacy Policy è regolata dal Regolamento UE 679/2016 e della normativa nazionale applicabile al caso di specie, nella misura in cui tale normativa resterà in vigore successivamente alla data di applicazione del Regolamento (25 maggio 2018).<br><br>Il Regolamento garantisce che il trattamento dei dati personali si svolga nel rispetto dei diritti e delle libertà fondamentali, nonché della dignità dell’interessato, con particolare riferimento alla riservatezza, all’identità personale e al diritto alla protezione dei dati personali.';

let termsText24 = document.createElement('p');
termsText24.classList.add('terms-title_small');
termsText24.innerHTML = '12. Clausola di revisione';

let termsText25 = document.createElement('p');
termsText25.classList.add('terms-small');
termsText25.innerHTML =
    'Dimensione Immagine si riserva di rivedere, modificare o semplicemente aggiornare, in tutto o in parte, a propria esclusiva discrezione, in qualsiasi modo e/o in qualsiasi momento, senza preavviso, la presente Privacy Policy anche in considerazione di modifiche di norme di legge o di regolamento in materia di protezione dei dati personali. Le modifiche e gli aggiornamenti della Privacy Policy saranno notificati agli utenti mediante invio di e-mail agli utenti registrati al Sito e pubblicazione nella Home Page del Sito, e saranno vincolanti non appena pubblicati e comunicati.Vi preghiamo pertanto di accedere con regolarità a questa sezione per verificare la pubblicazione della più recente ed aggiornata Privacy Policy o di controllare la vostra casella di posta elettronica.';

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
    termsText19,
    termsText20,
    termsText21,
    termsText22,
    termsText23,
    termsText24,
    termsText25
);

export function goTerms() {
    header?.classList.add('header_white');
    buttons.forEach((el) => {
        el.classList.remove('active');
        el.classList.add('naw__button_blue');
        main.style.backgroundColor = 'rgb(101 149 168)';
        main.style.boxShadow = 'inset rgb(147 147 147 / 56%) 0px 2px 20px 0px';
    });
    termsButton?.classList.add('active');
    main.append(termsText, termsText1, termsContainer);
}
