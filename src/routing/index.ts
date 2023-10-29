import { goHome } from '../pages/home/index';
import { goTerms } from '../pages/terms/index';
import { goResiden } from '../pages/Piscine Residenziali/index';
import { goSportive } from '../pages/Piscine Sportive/index';
import { goRicettive } from '../pages/Piscine per Strutture Ricettive/index';
import { goSiforo } from '../pages/Piscine a Sfioro/index';
import { goSkimmer } from '../pages/Piscine a Skimmer/index';
import { goTerra } from '../pages/Piscine Fuori Terra/index';
import { goOrnamentali } from '../pages/Fontane Danzanti e Ornamentali/index';
import { goCentri } from '../pages/Centri/index';
import { goMessa } from '../pages/Messa/index';
import { goManut } from '../pages/Manut/index';
import { goEvol } from '../pages/Evolution/index';

export function menuNavClick() {
    const menuHeaderItems = document.querySelectorAll('.naw__button');
    let res = document.querySelector('#RESIDENZIALI') as HTMLElement;
    let sport = document.querySelector('#SPORTIVE') as HTMLElement;
    let ricettive = document.querySelector('#RICETTIVE') as HTMLElement;
    let sfioro = document.querySelector('#SFIORO') as HTMLElement;
    let skimmer = document.querySelector('#SKIMMER') as HTMLElement;
    let terra = document.querySelector('#TERRA') as HTMLElement;
    let ornamentali = document.querySelector('#ORNAMENTALI') as HTMLElement;
    let centri = document.querySelector('#CENTRI') as HTMLElement;

    let messa = document.querySelector('#MESSA') as HTMLElement;
    let manut = document.querySelector('#MANUT') as HTMLElement;
    let evol = document.querySelector('#EVOL') as HTMLElement;
    menuHeaderItems.forEach((item) => {
        item.addEventListener('click', (event) => menuItemClickHandle(event));
        res.addEventListener('click', () => {
            window.location.hash = '/piscine-residenziali';
        });
        sport.addEventListener('click', () => {
            window.location.hash = '/piscine-sportive';
        });
        ricettive.addEventListener('click', () => {
            window.location.hash = '/piscine-per-strutture-ricettive';
        });
        sfioro.addEventListener('click', () => {
            window.location.hash = '/piscine-a-sfioro';
        });
        skimmer.addEventListener('click', () => {
            window.location.hash = '/piscine-a-skimmer';
        });
        terra.addEventListener('click', () => {
            window.location.hash = '/piscine-fuori-terra';
        });
        ornamentali.addEventListener('click', () => {
            window.location.hash = '/fontane-danzanti-e-ornamentali';
        });
        centri.addEventListener('click', () => {
            window.location.hash = '/centri-benessere';
        });
        messa.addEventListener('click', () => {
            window.location.hash = '/messa-a-norma-piscina';
        });
        manut.addEventListener('click', () => {
            window.location.hash = '/manutenzione-piscina';
        });
        evol.addEventListener('click', () => {
            window.location.hash = '/pool-evolution-magazine';
        });
    });
}

function menuItemClickHandle(event: Event) {
    const element = event.target as HTMLElement;
    const navClikedEl = element.textContent;

    if (navClikedEl === 'HOME') {
        window.location.hash = '/';
    } else if (navClikedEl === 'PRIVACY') {
        window.location.hash = '/privacy';
    }
}

function routeChange() {
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        renderPage(hash);
    });
}

function renderPage(path: string) {
    if (path === '/') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goHome();
    }
    if (path === '/privacy') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goTerms();
    }
    if (path === '/piscine-residenziali') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goResiden();
    }
    if (path === '/piscine-sportive') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goSportive();
    }
    if (path === '/piscine-per-strutture-ricettive') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goRicettive();
    }
    if (path === '/piscine-a-sfioro') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goSiforo();
    }
    if (path === '/piscine-a-skimmer') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goSkimmer();
    }
    if (path === '/piscine-fuori-terra') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goTerra();
    }
    if (path === '/fontane-danzanti-e-ornamentali') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goOrnamentali();
    }
    if (path === '/centri-benessere') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goCentri();
    }
    if (path === '/messa-a-norma-piscina') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goMessa();
    }
    if (path === '/manutenzione-piscina') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goManut();
    }
    if (path === '/pool-evolution-magazine') {
        const mainTag = document.querySelector('main') as HTMLElement;
        mainTag.innerHTML = '';
        goEvol();
    }
}

window.location.hash = '/';
renderPage('/');
menuNavClick();
routeChange();
