

const lvlUpHTML = document.getElementById("lvlUP").classList;

const rewardSum = document.getElementById("rewardSum");

let modalLvlUP = document.getElementById("modalLvlUP");


function LEVEL_UP(){


    sumBC = parseFloat(sumBC)+500;
    localStorage.setItem("sumBC", sumBC);

    localStorage.setItem("proressBar", 0);
    numLvl = parseInt(numLvl)+1;
    localStorage.setItem("numLvl", numLvl);

    plusLvl = parseFloat(plusLvl)/2;
    localStorage.setItem("plusLvl", plusLvl);


    lvlUpHTML.add("openLvlUpModal");
    modalLvlUP.style.height = "34vh";
    setTimeout(() => {
        modalLvlUP.innerHTML = `
            <div>
                <div class="headerModalLvlUp">
                    LEVEL UP <img src="img&icons/lvlUpIcon.png" class="lvlUpIcon">
                </div>
    
                <div class="bodyModalLvlUp">
                    <div class="rewarLvlUp">+<div class="rewardSum" id="rewardSum">500</div><img src="img&icons/kiwiTocken.png" class="logoLvlUp"></div>
                    <button class="BtnCollectRewardLvl" onmousedown="closeModalLvlUp()">CLAIM</button>
                </div>
            </div>`;
    }, 200);

};

function closeModalLvlUp(){
    modalLvlUP.style.height = "0%";
    modalLvlUP.innerHTML = ``;
    setTimeout(() => {
        lvlUpHTML.remove("openLvlUpModal");

    }, 50);



    if (parseInt(sumBC)<1000000 && parseInt(sumBC)>999){
        sumBcHTML.textContent = (sumBC.toString()).slice(0, ((sumBC.toString()).length)-3)+","+(sumBC.toString()).slice(((sumBC.toString()).length)-3, ((sumBC.toString()).length));
    }
    else if (parseInt(sumBC)>=1000000 && parseInt(sumBC)<10000000){
        sumBcHTML.textContent = (sumBC.toString())[0]+","+(sumBC.toString()).slice(1, 4)+","+(sumBC.toString()).slice(4, 7);

    }
    else if (parseInt(sumBC)>=10000000){
        sumBcHTML.textContent = (sumBC.toString())[0]+(sumBC.toString())[1]+","+(sumBC.toString()).slice(2, 5)+","+(sumBC.toString()).slice(5, 8);
    }
    else{
        sumBcHTML.textContent = sumBC;
    };

    sumBcHTML.style.width = `${(sumBC.toString()).length * 34}px`;

    proressBar = 0;
    localStorage.setItem("proressBar", proressBar);

    numLvlHTML.textContent = `lvl ${numLvl}`
    proressBarLvlHTML.backgroundColor = "rgb(255, 255, 255)";


    animationExpectationsLvl = 0
    proressBarLvlHTML.width = `${proressBar}%`;
}