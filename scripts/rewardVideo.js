

let RewardVideo =document.getElementById("RewardVideo").style;


let timerAndBtnCloseVideo = document.getElementById("timerAndBtnCloseVideo");


function WatchVideo(){

    RewardVideo.visibility = "visible";
    timerAndBtnCloseVideo.style.display ="inline-flex";

    let timeVideo = 2;
    timerAndBtnCloseVideo.innerHTML = `${timeVideo}`;

    timerAndBtnCloseVideo.style.fontSize = "15px";
    timerAndBtnCloseVideo.style.width = "30px";
    timerAndBtnCloseVideo.style.borderRadius = "50%";
    timerAndBtnCloseVideo.style.transition = "all .15s linear";

    let timerInterval = setInterval(() => {

        if (timeVideo === 1){
            setTimeout(() => {
                timerAndBtnCloseVideo.innerHTML = `<span onmousedown="closeVideo()">GET REWARD</span>`;
                timerAndBtnCloseVideo.style.transition = "none";
            }, 150);
            timerAndBtnCloseVideo.style.fontSize = "12px";
            timerAndBtnCloseVideo.style.width = "120px";
            timerAndBtnCloseVideo.style.borderRadius = "10px 10px";

            
            currentEnergy = 499;
            localStorage.setItem("currentEnergy", currentEnergy);
            currentEnergyHTML.textContent = currentEnergy;
            clearInterval(timerInterval);

        }
        else{
            timeVideo--;
            timerAndBtnCloseVideo.innerHTML = `${timeVideo}`;
        }


        
    }, 1000);

}


function closeVideo(){
    timerAndBtnCloseVideo.style.fontSize = "15px";
    timerAndBtnCloseVideo.style.width = "30px";
    timerAndBtnCloseVideo.style.borderRadius = "50%";
    RewardVideo.visibility = "hidden";
    timerAndBtnCloseVideo.style.display ="none";




}