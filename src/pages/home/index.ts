/* eslint-disable prefer-arrow-callback */
let logoFirst = document.createElement('div') as HTMLElement;
logoFirst.classList.add('main__logo1');
let logoSecond = document.createElement('div') as HTMLElement;
logoSecond.classList.add('main__logo2');
let main = document.querySelector('main') as HTMLElement;
let header = document.querySelector('header') as HTMLElement;
let buttons = document.querySelectorAll('.naw__button');
let homeButton = document.querySelector('#HOME');
let homeTitle = document.createElement('h3');
homeTitle.classList.add('main__title');
homeTitle.textContent =
    'Piscine a Sfioro - Piscine a Skimmer - Piscine Fuori Terra - Fontane Danzanti - Domotica in Piscina';
let homeMainButton = document.createElement('div');
homeMainButton.classList.add('main__button');
homeMainButton.textContent = 'CHIEDI UN PREVENTIVO';
let logoUp = document.querySelector('.upLogo') as HTMLElement;

let socialContainer = document.createElement('div');
socialContainer.classList.add('main__socials');
let inst = document.createElement('div');
inst.classList.add('inst');
let linc = document.createElement('div');
linc.classList.add('linc');
let youtube = document.createElement('div');
youtube.classList.add('youtube');
let facebook = document.createElement('div');
facebook.classList.add('facebook');
socialContainer.append(inst, linc, youtube, facebook);

let socialContainer2 = document.createElement('div');
socialContainer2.classList.add('main__socials');
let inst2 = document.createElement('div');
inst2.classList.add('inst');
let linc2 = document.createElement('div');
linc2.classList.add('linc');
let youtube2 = document.createElement('div');
youtube2.classList.add('youtube');
let facebook2 = document.createElement('div');
facebook2.classList.add('facebook');
socialContainer2.append(inst2, linc2, youtube2, facebook2);
socialContainer2.style.margin = '0';

let mainContainer = document.createElement('div');
mainContainer.classList.add('main__container');
let mainContainer2 = document.createElement('div');
mainContainer2.classList.add('main__container_2');
let mainContainer3 = document.createElement('div');
mainContainer3.classList.add('main__container_3');
let mainContainer2Title = document.createElement('div');
export function helpCreateEl(tagName: string, className: string) {
    const el = document.createElement(tagName);
    if (className) {
        el.className = className;
    }
    return el;
}

mainContainer2Title.classList.add('blank-title');
mainContainer2Title.textContent = 'Contattaci subito!';

let blankContainer = document.createElement('div');
blankContainer.classList.add('main__blank');
let leftSide = document.createElement('div');
leftSide.classList.add('blank__container_left');
let leftSideTitle = document.createElement('div');
leftSideTitle.classList.add('blank__container_leftTitle');
leftSideTitle.textContent = 'CONTACT INFORMATION';
let leftSideTitle2 = document.createElement('div');
leftSideTitle2.classList.add('blank__container_leftTitle2');
leftSideTitle2.textContent = 'Seguici sui social';
let leftSideImg = document.createElement('div');
leftSideImg.classList.add('blank__container_leftImg');

let rightSide = document.createElement('form') as HTMLFormElement;
rightSide.id = 'forma';
rightSide.classList.add('blank__container_right');
let inf = document.createElement('div') as HTMLElement;
inf.innerHTML = `<input type="hidden" name="project_name" value="Rivest pool"><input type="hidden" name="admin_email" value="vladik.sh1978@gmail.com"><input type="hidden" name="form_subject" value="Form Subject">`;
rightSide.append(inf);

let rightSideTitle1 = helpCreateEl('div', 'blank__container_rightTitle');
rightSideTitle1.textContent = 'Il tuo nome (richiesto)';
let rightSideInput1 = helpCreateEl('input', 'blank__container_rightInput') as HTMLInputElement;
rightSideInput1.name = 'name';
rightSideInput1.required = true;

let rightSideTitle2 = helpCreateEl('div', 'blank__container_rightTitle');
rightSideTitle2.innerHTML = 'La tua email (richiesto)';
let rightSideInput2 = helpCreateEl('input', 'blank__container_rightInput') as HTMLInputElement;
rightSideInput2.name = 'email';
rightSideInput2.required = true;

let rightSideTitle3 = helpCreateEl('div', 'blank__container_rightTitle');
rightSideTitle3.innerHTML = 'Il tuo numero di telefono (richiesto)';
let rightSideInput3 = helpCreateEl('input', 'blank__container_rightInput') as HTMLInputElement;
rightSideInput3.name = 'number';
rightSideInput3.required = true;

let rightSideTitle4 = helpCreateEl('div', 'blank__container_rightTitle');
rightSideTitle4.textContent = 'Località (richiesto)';
let rightSideInput4 = helpCreateEl('textarea', 'blank__container_rightInput') as HTMLInputElement;
// eslint-disable-next-line no-unused-expressions
rightSideInput4.required = true;
rightSideInput4.name = 'location';

let rightSideTitle5 = helpCreateEl('div', 'blank__container_rightTitle');
rightSideTitle5.textContent = 'Oggetto';
let rightSideInput5 = helpCreateEl('input', 'blank__container_rightInput') as HTMLInputElement;
rightSideInput5.name = 'object';

let rightSideTitle6 = helpCreateEl('div', 'blank__container_rightTitle');
rightSideTitle6.textContent = 'Scrivi qui di seguito il tuo messaggio:';
let rightSideInput6 = helpCreateEl('textarea', 'blank__container_rightInput') as HTMLTextAreaElement;
rightSideInput6.name = 'text';

let rightSideTitle7 = helpCreateEl('div', 'blank__container_rightTitle2');
rightSideTitle7.textContent = 'PAGINA INFORMATIVA SULLA PRIVACY: pagina informativa sulla privacy*';

let rightSideTitle8 = helpCreateEl('div', 'blank__container_rightTitle2');
rightSideTitle8.textContent =
    '* Ai sensi dell’art. 13 del Regolamento UE 679/2016 GDPR ho preso visione dell’informativa.';
let rightSideInput8 = helpCreateEl('input', 'checkbox') as HTMLInputElement;
rightSideTitle8.prepend(rightSideInput8);
rightSideInput8.type = 'checkbox';
rightSideInput8.required = true;

let rightSideTitle9 = helpCreateEl('div', 'blank__container_rightTitle2');
rightSideTitle9.textContent =
    '* Ai sensi degli artt. 6 e 7 del Regolamento UE 679/2016 GDPR acconsento al trattamento dei miei dati personali per ricevere informazioni promozionali e rimanere sempre aggiornato sulle offerte e sulle novità.';
let rightSideInput9 = helpCreateEl('input', 'checkbox') as HTMLInputElement;
rightSideTitle9.prepend(rightSideInput9);
rightSideInput9.type = 'checkbox';
rightSideInput9.required = true;

let rightSideButton = helpCreateEl('button', 'blank__container_rightButton') as HTMLButtonElement;
rightSideButton.type = 'submit';
rightSideButton.textContent = 'INVIA';

rightSide.append(
    rightSideTitle1,
    rightSideInput1,
    rightSideTitle2,
    rightSideInput2,
    rightSideTitle3,
    rightSideInput3,
    rightSideTitle4,
    rightSideInput4,
    rightSideTitle5,
    rightSideInput5,
    rightSideTitle6,
    rightSideInput6,
    rightSideTitle7,
    rightSideTitle8,
    rightSideTitle9,
    rightSideButton
);
leftSide.append(leftSideTitle, leftSideImg, leftSideTitle2, socialContainer2);
main.after(mainContainer2);
blankContainer.append(leftSide, rightSide);
mainContainer2.append(mainContainer3);
mainContainer2.id = 'contactUs';
mainContainer3.append(mainContainer2Title, blankContainer);

export function goHome() {
    main.append(logoFirst, logoSecond, homeTitle, homeMainButton, socialContainer, mainContainer);
    header.classList.remove('header_white');
    main.style.backgroundColor = '';
    main.style.boxShadow = '';
    buttons.forEach((el) => {
        el.classList.remove('naw__button_blue');
        el.classList.remove('active');
    });
    homeButton?.classList.add('active');
}

let whatsText = document.querySelector('.whatsText') as HTMLElement;
let whatsApp = document.querySelector('.whatsappLogo') as HTMLElement;
whatsApp.addEventListener('mouseover', () => {
    whatsApp.style.width = '143px';
    whatsText.style.width = '100px';
    whatsApp.style.paddingLeft = '10px';
    whatsApp.style.paddingRight = '3    10px';
    whatsText.textContent = 'WhatsApp';
    setTimeout(() => {
        whatsText.style.opacity = '1';
    }, 100);
});

whatsApp.addEventListener('mouseout', () => {
    whatsApp.style.width = '46px';
    whatsText.textContent = '';
    whatsText.style.width = '0px';
    whatsApp.style.paddingLeft = '0px';
    whatsApp.style.paddingRight = '0px';
    whatsText.style.opacity = '0';
});

let isActive1 = false;
let isActive2 = false;

let aquaChoose = document.querySelector('#PISCINE') as HTMLElement;
let aquaChooseButtons = document.querySelector('.header__list') as HTMLElement;
let aquaChooseArrow = document.querySelector('#PISCINE .bottom-arrow') as HTMLElement;

aquaChoose.addEventListener('mouseover', async () => {
    aquaChoose.classList.add('acua-active');
    aquaChooseArrow.style.transform = 'rotate(0deg)';
    aquaChooseButtons.style.display = 'block';
    setTimeout(() => {
        aquaChooseButtons.style.opacity = '0.9';
    }, 0);
});

aquaChoose.addEventListener('mouseout', () => {
    if (isActive1 === false) {
        aquaChooseArrow.style.transform = 'rotate(-90deg)';
        aquaChoose.classList.remove('acua-active');
        aquaChooseButtons.style.display = 'none';
        aquaChooseButtons.style.opacity = '0';
    }
});

aquaChoose.addEventListener('click', async () => {
    if (isActive1 === false) {
        aquaChoose.classList.add('acua-active');
        isActive1 = true;
        aquaChooseButtons.style.display = 'block';
        aquaChooseArrow.style.transform = 'rotate(0deg)';
        setTimeout(() => {
            aquaChooseButtons.style.opacity = '0.9';
        }, 0);
    } else {
        aquaChoose.classList.remove('acua-active');
        isActive1 = false;
        aquaChooseButtons.style.display = 'none';
        aquaChooseButtons.style.opacity = '0';
        aquaChooseArrow.style.transform = 'rotate(-90deg)';
    }
});

let serviceChoose = document.querySelector('#SERVICE') as HTMLElement;
let serviceChooseButtons = document.querySelector('.header__list2') as HTMLElement;
let serviceChooseArrow = document.querySelector('#SERVICE .bottom-arrow') as HTMLElement;

serviceChoose.addEventListener('mouseover', async () => {
    serviceChoose.classList.add('service-active');
    serviceChooseArrow.style.transform = 'rotate(0deg)';
    serviceChooseButtons.style.display = 'block';
    setTimeout(() => {
        serviceChooseButtons.style.opacity = '0.9';
    }, 0);
});

serviceChoose.addEventListener('mouseout', () => {
    if (isActive2 === false) {
        serviceChoose.classList.remove('service-active');
        serviceChooseButtons.style.display = 'none';
        serviceChooseButtons.style.opacity = '0';
        serviceChooseArrow.style.transform = 'rotate(-90deg)';
    }
});

serviceChoose.addEventListener('click', async () => {
    if (isActive2 === false) {
        serviceChoose.classList.add('service-active');
        isActive2 = true;
        serviceChooseButtons.style.display = 'block';
        serviceChooseArrow.style.transform = 'rotate(0deg)';
        setTimeout(() => {
            serviceChooseButtons.style.opacity = '0.9';
        }, 0);
    } else {
        serviceChoose.classList.remove('service-active');
        isActive2 = false;
        serviceChooseButtons.style.display = 'none';
        serviceChooseButtons.style.opacity = '0';
        serviceChooseArrow.style.transform = 'rotate(-90deg)';
    }
});

serviceChooseButtons.addEventListener('click', async () => {
    serviceChoose.classList.remove('service-active');
    isActive2 = false;
    serviceChooseButtons.style.display = 'none';
    serviceChooseButtons.style.opacity = '0';
    serviceChooseArrow.style.transform = 'rotate(-90deg)';
});

let back = document.createElement('div') as HTMLElement;
back.classList.add('naw-back');

let menuButton = document.querySelector('.menu-logo') as HTMLElement;
let active = false;

document.addEventListener('click', (target) => {
    if (active === true) {
        if (!(target.target as HTMLElement).classList.contains('naw__button')) {
            let nav = document.querySelector('nav') as HTMLElement;
            nav.style.right = '-300px';
            menuButton.style.right = '13px';
            whatsApp.style.transition = '0.4s';
            whatsApp.style.right = '13px';
            logoUp.style.right = '13px';
            active = false;
            back.style.opacity = '0';
            setTimeout(() => {
                back.remove();
            }, 250);
        }
    }
});

window.addEventListener('resize', () => {
    if (active === true) {
        let nav = document.querySelector('nav') as HTMLElement;
        nav.style.right = '-300px';
        menuButton.style.right = '13px';
        whatsApp.style.transition = '0.4s';
        whatsApp.style.right = '13px';
        logoUp.style.right = '13px';
        active = false;
        back.style.opacity = '0';
        setTimeout(() => {
            back.remove();
        }, 250);
    }
});

menuButton.addEventListener('click', () => {
    if (active === false) {
        setTimeout(() => {
            active = true;
        }, 10);
        let nav = document.querySelector('nav') as HTMLElement;
        nav.style.right = '0px';
        menuButton.style.right = '313px';
        whatsApp.style.transition = '0.4s';
        whatsApp.style.right = '313px';
        logoUp.style.right = '313px';
        nav.after(back);
        setTimeout(() => {
            back.style.opacity = '1';
        }, 180);
    }
});

let element = document.querySelector('header');

// eslint-disable-next-line func-names
let Visible = function (target: HTMLElement) {
    // eslint-disable-next-line one-var
    let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
        },
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight,
        };

    if (
        targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right
    ) {
        logoUp.style.opacity = '0';
        logoUp.style.cursor = 'default';
    } else {
        logoUp.style.opacity = '0.8';
        logoUp.style.cursor = 'pointer';
    }
};
// eslint-disable-next-line func-names
window.addEventListener('scroll', function () {
    Visible(element as HTMLElement);
});
Visible(element as HTMLElement);

document.addEventListener('click', async (tar) => {
    if ((tar.target as HTMLElement).classList.contains('naw__el')) {
        aquaChoose.classList.remove('acua-active');
        isActive1 = false;
        aquaChooseButtons.style.display = 'none';
        aquaChooseButtons.style.opacity = '0';
        aquaChooseArrow.style.transform = 'rotate(-90deg)';

        serviceChoose.classList.remove('service-active');
        isActive2 = false;
        serviceChooseButtons.style.display = 'none';
        serviceChooseButtons.style.opacity = '0';
        serviceChooseArrow.style.transform = 'rotate(-90deg)';
    }
});
