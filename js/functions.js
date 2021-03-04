export function sound(){

let btn_1 = document.getElementById('btn__sound-1');
let audio_1=document.getElementById('audio_1');

let btn_2 = document.getElementById('btn__sound-2');
let audio_2=document.getElementById('audio_2');

let btn_3 = document.getElementById('btn__sound-3');
let audio_3=document.getElementById('audio_3');

let btn_4 = document.getElementById('btn__sound-4');
let audio_4=document.getElementById('audio_4');

let btn_5 = document.getElementById('btn__sound-5');
let audio_5=document.getElementById('audio_5');

let btn_6 = document.getElementById('btn__sound-6');
let audio_6=document.getElementById('audio_6');

let btn_7 = document.getElementById('btn__sound-7');
let audio_7=document.getElementById('audio_7');

let btn_8 = document.getElementById('btn__sound-8');
let audio_8=document.getElementById('audio_8');

let btn_9 = document.getElementById('btn__sound-9');
let audio_9=document.getElementById('audio_9');

//obtenir un son quand on tape sur une touche du clavier  
//créer un tableau dont chaque index correspond a un objet 
//chaque objet correspond a ma touche , mon bouton et mon audio;
console.log(btn_1);

let tableau = [
    {bouton: btn_1, 
    audio: audio_1,
    key: 'a'},

    {bouton: btn_2, 
    audio: audio_2,
    key: 'z'},

    {bouton: btn_3, 
    audio: audio_3,
    key: 'e'},

    {bouton: btn_4, 
    audio: audio_4,
    key: 'r'},

    {bouton: btn_5, 
    audio: audio_5,
    key: 't'},

    {bouton: btn_6, 
    audio: audio_6,
    key: 'y'},

    {bouton: btn_7, 
    audio: audio_7,
    key: 'u'},

    {bouton: btn_8, 
    audio: audio_8,
    key: 'i'},

    {bouton: btn_9, 
    audio: audio_9,
    key: 'o'},


];
console.log(tableau);




document.addEventListener('keydown', event =>{
    for(let i=0; i < tableau.length; i++) {
        // si l'evenement correspond à la touche sur laquelle j'appuis 
        if(tableau[i].key == event.key){
            console.log(event.key);
            //on veut que le son joue 
            tableau[i].audio.play();
            //on veut que le son demarre au debut
            tableau[i].audio.currentTime = 0;
            //on veut que le bouton change de couleur 
            tableau[i].bouton.classList.add("sound-active");
            // a  la fin du son le bouton redevient normal
            tableau[i].audio.onended = function(){
            
            tableau[i].bouton.classList.remove("sound-active");
            }
            


        }


    }
}
)
}






 
