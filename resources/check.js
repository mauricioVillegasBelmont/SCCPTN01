/*----------------------------------------------------------------------*/
/*--------------------------determina el window size--------------------*/
/*----------------------------------------------------------------------*/
var w = window.innerWidth;
var h = window.innerHeight;

var butonIW = Math.floor((h*0.294)-(h*0.07));
var butonIH = Math.floor((h*0.245)-(h*0.07));
var butonEW = Math.floor(0-(h*0.07));
var butonEH = Math.floor(0-(h*0.07));
var butonHW = Math.floor(butonEW-(h*0.035));
var butonHH = Math.floor(butonEH-(h*0.035));
var isVieoplayed = false; //modificar a false en version final
var isButtonActive = false;
var rotation = 36;

var sheet = document.createElement('style');
sheet.innerHTML = "body {width:"+w+"px; height:"+h+"px;} #fit{width:"+h+"px; height:"+h+"px;} .menuContainer{width:"+Math.floor(h*0.294)+"px; height:"+Math.floor(h*0.245)+"px; top:calc(50% - "+Math.floor(h*0.245)+"px); left:calc(50% - "+Math.floor(h*0.294)+"px);} .button{width:"+Math.floor(h*0.14)+"px; height:"+Math.floor(h*0.14)+"px; top:"+butonIH+"px;left:"+butonIW+"px;} .active .button{top:"+butonEH+"px;left:"+butonEW+"px;}";
document.head.appendChild(sheet);

/*----------------------------------------------------------------------*/
        /*----------------------navigator not suported--------------------------*/
/*----------------------------------------------------------------------*/
function navigatorNotSupported(){
    document.getElementById('inicio').setAttribute('style','display:none;');
    document.getElementById('videoWrapper').setAttribute('style','display:none;');
    document.getElementById('fit').setAttribute('style','display:none;');
    document.getElementById('info').setAttribute('style','display:none;');
    document.getElementById('sorryMsg').setAttribute('style','display:block;');
}

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isEdge = !isIE && !!window.StyleMedia;
if( isEdge||isIE){
    alert("Puedes probar con 'Google Chrome', 'mozilla Firefox' u 'Opera' para mejorar la experiencia de navegación.");
}else if(isSafari){
    navigatorNotSupported();
}
