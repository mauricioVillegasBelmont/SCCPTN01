/*----------------------------------------------------------------------*/
/*--------------------------determina el window size--------------------*/
/*----------------------------------------------------------------------*/
var w;
var h;

var butonIW;
var butonIH;
var butonEW;
var butonEH;
var butonHW;
var butonHH;
var isVieoplayed = false; //modificar a false en version final
var isButtonActive = false;
var rotation = 36;
var sheet = document.getElementById('sizes');

function deleteSheet(){
    sheet = document.getElementById('sizes');
    sheet.parentNode.removeChild(sheet);
}
function newSheet(){  
    w = window.innerWidth;
    h = window.innerHeight;
    butonIW = Math.floor((h*0.294)-(h*0.07));
    butonIH = Math.floor((h*0.245)-(h*0.07));
    butonEW = Math.floor(0-(h*0.07));
    butonEH = Math.floor(0-(h*0.07));
    butonHW = Math.floor(butonEW-(h*0.035));
    butonHH = Math.floor(butonEH-(h*0.035));
    var sheet = document.createElement('style');
    sheet.id = 'sizes';
    sheet.innerHTML = "body {width:"+w+"px; height:"+h+"px;} #fit{width:"+h+"px; height:"+h+"px;} .menuContainer{width:"+Math.floor(h*0.294)+"px; height:"+Math.floor(h*0.245)+"px; top:calc(50% - "+Math.floor(h*0.245)+"px); left:calc(50% - "+Math.floor(h*0.294)+"px);} .button{width:"+Math.floor(h*0.14)+"px; height:"+Math.floor(h*0.14)+"px; top:"+butonIH+"px;left:"+butonIW+"px;} .active .button{top:"+butonEH+"px;left:"+butonEW+"px;} .button:hover{width:"+Math.floor(h*0.16)+"px; height:"+Math.floor(h*0.16)+"px;  top:"+butonHH+"px;left:"+butonHW+"px;}"    ;
    document.head.appendChild(sheet);
}

function size(){
    deleteSheet();
    newSheet();
}

/*----------------------------------------------------------------------*/
        /*----------------------navigator not suported--------------------------*/
/*----------------------------------------------------------------------*/
function navigatorNotSupported(){
    window.location.replace("srryMsg.html");
    /*document.getElementById('inicio').setAttribute('style','display:none;');
    document.getElementById('videoWrapper').setAttribute('style','display:none;');
    document.getElementById('fit').setAttribute('style','display:none;');
    document.getElementById('info').setAttribute('style','display:none;');
    document.getElementById('sorryMsg').setAttribute('style','display:block;');*/
}

var isChrome = !!window.chrome && !!window.chrome.webstore;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isEdge = !isIE && !!window.StyleMedia;
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

if( isIE){
    alert("Puedes probar con 'Google Chrome', 'Microsoft Edge' u 'Opera' para mejorar la experiencia de navegación.");
}else if(isFirefox||isSafari){
    navigatorNotSupported();
}

size();
window.addEventListener("resize", function () {
    setTimeout(function(){ 
        size();
    }, 1500);
});