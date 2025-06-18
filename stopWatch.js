let [hours,minutes,seconds] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let startBtn = document.getElementById("startBtn");
 let stopBtn = document.getElementById("stopBtn");
 let resetBtn = document.getElementById("resetBtn");
let timerr = null;


function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }
    if(minutes == 60){
        minutes =0;
        hours++;
    }

let h = hours<10? "0"+hours :hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;

displayTime.innerHTML = `${h} : ${m} : ${s}`;

}


function startWatch(){
    if(timerr != null){
        clearInterval(timerr)
    }
     timerr = setInterval(stopWatch,1000);
}


function watchStop(){
    clearInterval(timerr);
}

function watchReset(){
    clearInterval(timerr);
    [hours,minutes,seconds]= [0,0,0];
    displayTime.innerHTML = "00:00:00";
}




startBtn.addEventListener("click" ,startWatch);
stopBtn.addEventListener("click",watchStop);
resetBtn.addEventListener("click",watchReset);