

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





let currentEnergy = 500;
currentEnergyHTML.textContent = currentEnergy;

let maxEnergy = 500;
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


sumBcHTML.style.width = `${(sumBC.toString()).length * 34}px`;





function tap(){

    if (c == 0){
        let recoveryEnergy = setInterval(() => {
            currentEnergy ++;
            currentEnergyHTML.textContent = currentEnergy;

            if (c == 1 & currentEnergy === maxEnergy){
                clearInterval(recoveryEnergy);
                c = 0
            }

        }, 2000);
        c = 1;
    };



    if (currentEnergy == 0 || animationExpectationsLvl === 1){
        return;
    };

    sumBC = parseFloat(sumBC)+1;
    localStorage.setItem("sumBC", sumBC);

    currentEnergy --;


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

    currentEnergyHTML.textContent = currentEnergy;
    sumBcHTML.style.width = `${(sumBC.toString()).length * 34}px`;
    
    
    proressBar = parseFloat(proressBar) + parseFloat(plusLvl);
    localStorage.setItem("proressBar", proressBar);

    if (proressBar >=100){
        proressBar = 100;
        proressBarLvlHTML.width = `${proressBar}%`;
        proressBarLvlHTML.backgroundColor = "rgb(72, 239, 89)";
        LEVEL_UP();

        
    }
    proressBarLvlHTML.width = `${proressBar}%`;

};