
/*----------------------------------------------------------------------*/
/*--------------------------determina el window size--------------------*/
/*----------------------------------------------------------------------*/

var contentImg =[tecno,'SC6.jpg','SC7.jpg','SC8.jpg','SC9.jpg', servAca, certif,'SC14.jpg', eventos,'SC17.jpg'];
var tecno = ['SC4.jpg','SC5.jpg'];
var servAca =['SC10.jpg','SC11.jpg'];
var certif =['SC12.jpg','SC13.jpg','SC13-2.jpg'];
var eventos =['SC15.jpg','SC16.jpg'];
/**/
var chosen =['tecn','alia','cont','llav','prop','serv','cert','comu','even','clie'];


var quees =document.getElementById('quees');
var menuBotones = document.getElementsByClassName('button');
var infoPlace = document.getElementById('info');
var menu = document.getElementById('menu');
var infoWrapper = document.getElementById('infoWrapper');
var selectorWrapper = document.getElementById('selectorWrapper');
var selector = document.getElementById('selector');
var quesLeft = (w/8);
var inicio = document.getElementById('inicio');
var content = document.getElementById('content');
var modalBackground = document.getElementById('modalBackground');
var modal = document.getElementById('modal');


/*----------------------------------------------------------------------*/
/*-------------------------------sounds-------------------------------*/
/*----------------------------------------------------------------------*/
//var backgroundAudio = document.getElementById('backgroundAudio');
var clickAudio      = document.getElementById('click');
var hoverAudio      = document.getElementById('hover');
//backgroundAudio.volume = 0.1; 
clickAudio.volume =      0.2;
hoverAudio.volume =      0.2;      
/*----------------------------------------------------------------------*/
/*----------------------determina el video fit--------------------------*/
/*----------------------------------------------------------------------*/

var intro = document.getElementById('intro');
intro.oncanplaythrough = function(){
    this.volume = 0;
    this.play();
    this.loop = true;
    //backgroundAudio.play();
    setTimeout(function(){
        quees.setAttribute('style','left:'+quesLeft+'px;');
    },1500);
}
quees.addEventListener('click',() =>{
    inicio.setAttribute('style','display:none;opacity:0;z-Index:-10000;');
    intro.pause();
    intro.volume = 0;
    var interface = document.getElementById("fit");
    interface.classList.add('opaque');
    isVieoplayed = true;
    //backgroundAudio.play();
    comenzar();
    inactiveMode();
});
/*----------------------------------------------------------------------*/
        /*----------------------estado start --------------------------*/
/*----------------------------------------------------------------------*/

function comenzar(){
    //console.log('comenzo');
    menu.addEventListener('click',() =>{
        if(window.isVieoplayed){
            //console.log('is videoplayed validad');
            var menu = document.getElementById('menu');
            var borde= document.getElementById('borde');
            menu.classList.add('active');
            borde.classList.add('active');
            var menuElementos = document.getElementsByClassName('menuContainer');

            for(i=0; i<menuElementos.length; i++){
                if (i == 0){
                menuElementos[0].setAttribute('style','-webkit-transform: rotate(0deg);-ms-    transform: rotate(0deg); transform: rotate(0deg);'); 
                }else{
                    var giro  = rotation * i;
                    var giro2 = -1 * giro;
                    menuElementos[i].setAttribute('style','-webkit-transform: rotate('+giro+'deg);-ms-    transform: rotate('+giro+'deg); transform: rotate('+giro+'deg);');
                    menuBotones[i].setAttribute('style','-webkit-transform: scale(1)  rotate('+giro2+'deg);-ms-    transform: scale(1) rotate('+giro2+'deg); transform: scale(1) rotate('+giro2+'deg);');
                }
            }
            sheet.innerHTML += ".button:hover{width:"+Math.floor(h*0.16)+"px; height:"+Math.floor(h*0.16)+"px;  top:"+butonHH+"px;left:"+butonHW+"px;}"
/*            for(i=0; i<menuBotones.length; i++){
                menuBotones[i].setAttribute("onmouseover","buttonSound.play("+notes[i]+ ", 3, 1)");
                menuBotones[i].setAttribute("onmouseout","buttonSound.play("+notes[i]+ ", 5, 1)");
                
            }*/
            window.isVieoplayed = true;
            window.isButtonActive = true;
        }
    });
    
    for(var i = 0;i<=menuBotones.length-1; i++){
        menuBotones[i].addEventListener('mouseover',() =>{
            if(isButtonActive){
                hoverAudio.play();
            }
        });
        menuBotones[i].addEventListener('click',() =>{
            if(isButtonActive){
                clickAudio.play();                
            }
        });
    }

}
/*----------------------------------------------------------------------*/
        /*----------------------buttons--------------------------*/
/*----------------------------------------------------------------------*/


selector.addEventListener('click',() =>{
    infoPlace.classList.remove('active');
    menu.classList.remove('info');
    
});

function choseInfoImage(n,i){
    var flechas = document.getElementsByClassName('flecha');
    var index = i;
    //console.log(index);
    for(var k = 0; k<=flechas.length-1; k++){
        flechas[k].classList.add('block')
    }
    if(n == 0){
        if(i == 0){
            document.getElementById('left').classList.remove('block');
        }else if(i >= tecno.length-1){
            document.getElementById('right').classList.remove('block');
        }
        document.getElementById('left').setAttribute('onclick','choseInfoImage(0,'+(index-1)+')');
        document.getElementById('right').setAttribute('onclick','choseInfoImage(0,'+(index+1)+')');
        content.src = 'resources/'+tecno[i];
    }else if(n == 5){
        if(i == 0){
            document.getElementById('left').classList.remove('block');
        }else if(i == servAca.length-1){
            document.getElementById('right').classList.remove('block');
        }
        document.getElementById('left').setAttribute('onclick','choseInfoImage(5,'+(index-1)+')');
        document.getElementById('right').setAttribute('onclick','choseInfoImage(5,'+(index+1)+')');
        content.src = 'resources/'+servAca[i]; 
    }else if(n == 6){
        if(i == 0){
            document.getElementById('left').classList.remove('block');
        }else if(i == certif.length-1){
            document.getElementById('right').classList.remove('block');
        }
        document.getElementById('left').setAttribute('onclick','choseInfoImage(6,'+(index-1)+')');
        document.getElementById('right').setAttribute('onclick','choseInfoImage(6,'+(index+1)+')');
        content.src = 'resources/'+certif[i];
    }else if(n == 8){
        if(i == 0){
            document.getElementById('left').classList.remove('block');
        }else if(i == eventos.length-1){
            document.getElementById('right').classList.remove('block');
        }
        document.getElementById('left').setAttribute('onclick','choseInfoImage(8,'+(index-1)+')');
        document.getElementById('right').setAttribute('onclick','choseInfoImage(8,'+(index+1)+')');
        content.src = 'resources/'+eventos[i];
    }else{
        activateInfo(n);
    }
}
function turn(info,n){
    var index = n;
    document.getElementById('right').classList.remove('block');
    document.getElementById('left').classList.add('block');
    document.getElementById('left').setAttribute('onclick','choseInfoImage('+index+')');
    content.src = 'resources/'+info[1];
}

function activateInfo(n){
    //document.getElementById('contenido').src = 'resources/'+content[n];
    var flechas = document.getElementsByClassName('flecha');
    for(var i = 0; i<=flechas.length-1; i++){
        flechas[i].classList.remove('block')
    }
    var deg1 = (rotation*n)-6;
    var deg2 = -1*deg1;
    infoPlace.classList.add('active');
    menu.classList.add('info');
    infoPlace.classList.remove('tecn','alia','cont','prop','llav','serv','cert','comu','even','clie');
    infoPlace.classList.add(chosen[n]);
    selectorWrapper.setAttribute('style','-webkit-transform: rotate('+deg1+'deg);-ms-transform: rotate('+deg1+'deg); transform: rotate('+deg1+'deg);'); 
    selector.setAttribute('style','-webkit-transform: rotate('+deg2+'deg);-ms-transform: rotate('+deg2+'deg); transform: rotate('+deg2+'deg);');
    if(typeof contentImg[n] == "string"){
        //console.log('is a string');
        content.src = 'resources/'+contentImg[n];
    }else{
        //console.log('is oter thing else than a string');
        choseInfoImage(n,0);
    }
}


function information0(){
    if(window.isButtonActive){
        activateInfo(0);
    }
}
function information1(){
    if(window.isButtonActive){
        activateInfo(1);
    }
}
function information2(){
    if(window.isButtonActive){
        activateInfo(2);
    }
}
function information3(){
    if(window.isButtonActive){
        activateInfo(3);
    }
}
function information4(){
    if(window.isButtonActive){
        activateInfo(4);
    }
}
function information5(){
    if(window.isButtonActive){

        activateInfo(5);
    }
}
function information6(){
    if(window.isButtonActive){
        
        activateInfo(6);
    }
}
function information7(){
    if(window.isButtonActive){
        activateInfo(7);
    }
}
function information8(){
    if(window.isButtonActive){
        activateInfo(8);
    }
}
function information9(){
    if(window.isButtonActive){
        activateInfo(9);
    }
}

content.addEventListener('click',() =>{
    modalBackground.classList.add('block');
    modal.src = content.src;
});
modalBackground.addEventListener('click',() =>{
    modalBackground.classList.remove('block');
    modal.src = '';
});
/**/
