

const sumBcHTML = document.getElementById("sumnimBc");

const currentEnergyHTML = document.getElementById("currentEnergy");

const maxEnergyHTML = document.getElementById("maxEnergy");

const proressBarLvlHTML = document.getElementById("proressBar").style;

const numLvlHTML = document.getElementById("numLvl");


let sumBC = 0;
sumBcHTML.textContent = sumBC;

let currentEnergy = 500;
currentEnergyHTML.textContent = currentEnergy;

let maxEnergy = 500;
maxEnergyHTML.textContent = `/${maxEnergy}`;


let proressBar = 0;
proressBarLvlHTML.width = `${proressBar}%`;

let numLvl = 1;
numLvlHTML.textContent = `lvl ${numLvl}`
let plusLvl = 10;



let c = 0;


let animationExpectationsLvl = 0;

function tap(){
    if (c == 0){
        let recoveryEnergy = setInterval(() => {
            currentEnergy ++;
            currentEnergyHTML.textContent = currentEnergy;

            if (c == 1 & currentEnergy === maxEnergy){
                clearInterval(recoveryEnergy);
                c = 0
            }

        }, 3000);
        c = 1;
    };



    if (currentEnergy == 0 || animationExpectationsLvl === 1){
        return;
    };
    sumBC+=10;
    currentEnergy --;
    sumBcHTML.textContent = sumBC;
    currentEnergyHTML.textContent = currentEnergy;
    sumBcHTML.style.width = `${(sumBC.toString()).length * 23}px`;
    
    
    proressBar += plusLvl;
    if (proressBar >=100){
        animationExpectationsLvl = 1;
        proressBar = 100;
        proressBarLvlHTML.width = `${proressBar}%`;
        proressBarLvlHTML.backgroundColor = "rgb(72, 239, 89)";
        setTimeout(() => {
            proressBar = 0;
            numLvl ++;
            numLvlHTML.textContent = `lvl ${numLvl}`
            proressBarLvlHTML.backgroundColor = "rgb(255, 255, 255)";
            plusLvl /= 2;
            animationExpectationsLvl = 0
            proressBarLvlHTML.width = `${proressBar}%`;
        }, 500);
        
    }
    proressBarLvlHTML.width = `${proressBar}%`;

};