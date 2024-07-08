

const BoostsPage = document.getElementById("BoostsPage");

function openBoostsPage(){

    BoostsPage.classList.add("openBoostsPage");
};

function closeBoostsPage(){

    BoostsPage.classList.remove("openBoostsPage");

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
    sumBcHTML.style.width = `${(sumBC.toString()).length * 28}px`;
};




const shopPage = document.getElementById("shopPage");

let headerShopHeight = document.getElementById("shopPageHeader").offsetHeight;

function openShopPage(){
    document.getElementById("shopPageBody").style.marginTop = `${headerShopHeight}px`;
    shopPage.classList.add("shopPageOpen");

};


function closeShopPage(){


    shopPage.classList.remove("shopPageOpen");
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
    sumBcHTML.style.width = `${(sumBC.toString()).length * 28}px`;
    
};