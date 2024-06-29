

const sumBcHTML = document.getElementById("sumnimBc");

const currentEnergyHTML = document.getElementById("currentEnergy");

const maxEnergyHTML = document.getElementById("maxEnergy");

const proressBarLvlHTML = document.getElementById("proressBar").style;

const numLvlHTML = document.getElementById("numLvl");



let sumBC = localStorage.getItem("sumBC");
if (sumBC == null){
    localStorage.setItem("sumBC", "0");
    sumBC = localStorage.getItem("sumBC");
}

sumBcHTML.textContent = sumBC;



let currentEnergy = 1000;
currentEnergyHTML.textContent = currentEnergy;

let maxEnergy = 1000;
maxEnergyHTML.textContent = `/${maxEnergy}`;


let proressBar = localStorage.getItem("proressBar");
if (proressBar == null){
    localStorage.setItem("proressBar", "0");
    proressBar = localStorage.getItem("proressBar");
}
proressBarLvlHTML.width = `${proressBar}%`;

let numLvl = localStorage.getItem("numLvl");
if (numLvl == null){
    localStorage.setItem("numLvl", "1");
    numLvl = localStorage.getItem("numLvl");
}
numLvlHTML.textContent = `lvl ${numLvl}`

let plusLvl = localStorage.getItem("plusLvl");
if (plusLvl == null){
    localStorage.setItem("plusLvl", "1");
    plusLvl = localStorage.getItem("plusLvl");
}



let c = 0;


let animationExpectationsLvl = 0;


sumBcHTML.style.width = `${(sumBC.toString()).length * 23}px`;


function tap(){

    if (c == 0){
        let recoveryEnergy = setInterval(() => {
            currentEnergy ++;
            currentEnergyHTML.textContent = currentEnergy;

            if (c == 1 & currentEnergy === maxEnergy){
                clearInterval(recoveryEnergy);
                c = 0
            }

        }, 1000);
        c = 1;
    };



    if (currentEnergy == 0 || animationExpectationsLvl === 1){
        return;
    };

    sumBC = parseFloat(sumBC)+1;
    localStorage.setItem("sumBC", sumBC);

    currentEnergy --;

    sumBcHTML.textContent = sumBC;

    currentEnergyHTML.textContent = currentEnergy;
    sumBcHTML.style.width = `${(sumBC.toString()).length * 23}px`;
    
    
    proressBar = parseFloat(proressBar) + parseFloat(plusLvl);
    localStorage.setItem("proressBar", proressBar);

    if (proressBar >=100){
        animationExpectationsLvl = 1;
        proressBar = 100;
        proressBarLvlHTML.width = `${proressBar}%`;
        proressBarLvlHTML.backgroundColor = "rgb(72, 239, 89)";
        setTimeout(() => {
            proressBar = 0;
            localStorage.setItem("proressBar", proressBar);
            numLvl = parseInt(numLvl)+1;
            localStorage.setItem("numLvl", numLvl);
            numLvlHTML.textContent = `lvl ${numLvl}`
            proressBarLvlHTML.backgroundColor = "rgb(255, 255, 255)";
            plusLvl = parseFloat(plusLvl)/2;
            localStorage.setItem("plusLvl", plusLvl);

            animationExpectationsLvl = 0
            proressBarLvlHTML.width = `${proressBar}%`;
        }, 800);
        
    }
    proressBarLvlHTML.width = `${proressBar}%`;

};