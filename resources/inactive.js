var timeoutID;
var inactiveVideo = document.getElementsByClassName('inactive');
var inactiveIcons = document.getElementsByClassName('ico');
var time = 16000;
 
function inactiveMode() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);
    startTimer();
}
/*---------------------------------------------------------------------*/
/*-------------------------------star timer----------------------------*/
/*---------------------------------------------------------------------*/
function startTimer() {
    timeoutID = window.setTimeout(goInactive, time);
}
function resetTimer(e) {
    window.clearTimeout(timeoutID);
    goActive();
}
function stopTimer(){
    window.clearTimeout(timeoutID);
}

/*---------------------------------------------------------------------*/
/*------------------toggle active/innactive----------------------------*/ 
/*---------------------------------------------------------------------*/
function goInactive() {
    var videoIndex = Math.floor(Math.random() * ((inactiveVideo.length-1) - 0 + 1));
    var icoIndex = Math.floor(Math.random() * ((inactiveIcons.length-1) - 0 + 1));
    inactiveVideo[videoIndex].setAttribute('style','display:block;');
    inactiveVideo[videoIndex].play();
   // console.log('play dado a: '+inactiveVideo[videoIndex])
    inactiveVideo[videoIndex].onplaying = function() {
        stopTimer();
    }
    inactiveVideo[videoIndex].onended = function() {
        //console.log('ended: '+inactiveVideo[videoIndex])
        inactiveVideo[videoIndex].setAttribute('style','display:none;');
        goActive();
    }
}

function goActive() {
    //console.log('is active');
    startTimer();
}
