

const lvlUpHTML = document.getElementById("lvlUP").classList;

const rewardSum = document.getElementById("rewardSum");

function LEVEL_UP(){
    lvlUpHTML.add("openLvlUpModal");
    rewardSum.textContent = 500;

    sumBC = parseFloat(sumBC)+500;
    localStorage.setItem("sumBC", sumBC);

    localStorage.setItem("proressBar", 0);
    numLvl = parseInt(numLvl)+1;
    localStorage.setItem("numLvl", numLvl);

    plusLvl = parseFloat(plusLvl)/2;
    localStorage.setItem("plusLvl", plusLvl);

};

function closeModalLvlUp(){
    lvlUpHTML.remove("openLvlUpModal");

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