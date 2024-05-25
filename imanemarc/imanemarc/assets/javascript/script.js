console.log('connecté !');
let divMenu = document.querySelector('.header__nav__menu')
let listMenu = document.querySelectorAll('.header__nav__menu--actives');
console.log(divMenu);
console.log(listMenu);
let divLien = document.querySelector('.header__nav__liens');
console.log(divLien);

// VITRINE_ afficheB_ content_ --IMG
let declancheur = document.querySelector('#afficheB_content-bulle');
console.log(declancheur);
const infobulleA = document.querySelector('#afficheB_content-infobulle1');
const infobulleB = document.querySelector('#afficheB_content-infobulle2');
const infobulleC = document.querySelector('#afficheB_content-infobulle3');
console.log(infobulleA);

declancheur.addEventListener('click', function(){
    infobulleA.classList.remove('hide');
    infobulleB.classList.remove('hide');
    infobulleC.classList.remove('hide');
});
declancheur.addEventListener('mouseleave', function(){;
    infobulleA.classList.add('hide');
    infobulleB.classList.add('hide');
    infobulleC.classList.add('hide');
    
});

// VITRINE_ afficheA_ contentA_ --menuContext

const menuContextA = document.querySelector('#menuContext');
const innerMsg = document.querySelector('#innerMsg');
console.log(innerMsg);
let btnContextA = document.querySelectorAll('.vitrine__afficheA__contentA--action button');
console.log(btnContextA,'btn context');
//-------------------------//
//Bouttons Primaire : 
btnMesure = btnContextA[0];
btnConception = btnContextA[1];
btnRetouch = btnContextA[2];
// -------------------------//
//Bouttons secondaires :
btnSavoir = document.querySelector('#savoirPlus_contA');
btnRetour = document.querySelector('#ret_contA');
btnCreneau = document.querySelector('#creneau_contA');
//----------------------------------------------------//
//Fonction d'animation, change le titre de la DIV en fonction du boutton cliqué ! 
const message = '';
function TitreDivChoix(element){
    if (element == btnMesure) {
        innerMsg.innerText = 'Prise de Mesure';
    } else if(element == btnConception){
        innerMsg.innerText = ' Pour un vetement sur mesure';
    }else{
        innerMsg.innerText = 'Pour une retouche';
    };
};
btnMesure.addEventListener('click',function(){
    menuContextA.classList.remove('hide');
    TitreDivChoix(this);
    optionsDivChoix(this);
});
btnConception.addEventListener('click',function(){
    menuContextA.classList.remove('hide');
    TitreDivChoix(this);
    optionsDivChoix(this);
})

btnRetouch.addEventListener('click',function(){
    menuContextA.classList.remove('hide');
    TitreDivChoix(this);
    optionsDivChoix(this);
});
//----------------------------------------------------------//
btnRetour.addEventListener('click',function(){
    menuContextA.classList.add('hide');
});
//---------------------------------------------------------//

//fonction d'animation pour les bouttons de choix de la DivChoix
    //j'ai déja selectionné et stocké mes elements plus haut dans le code.

function optionsDivChoix(element){
    if (element == btnConception) {
        btnCreneau.innerText = 'conception';
    } else if(element == btnMesure) {
        btnCreneau.innerText = 'Mesure';
    }else{
        btnCreneau.innerText = 'Retouche';
    }
};




