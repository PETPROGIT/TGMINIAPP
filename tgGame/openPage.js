

const commingSoonBoosts = document.getElementById("commingSoonBoosts");

function openBoostsPage(){
    setTimeout(() => {
        commingSoonBoosts.classList.add("openBoostsPage");
    }, 150);
};

function closeBoostsPage(){
    setTimeout(() => {
        commingSoonBoosts.classList.remove("openBoostsPage");
    }, 150);
};


const shopPage = document.getElementById("shopPage");

function openShopPage(){
    setTimeout(() => {
        shopPage.classList.add("shopPageOpen");
    }, 150);
};

function closeShopPage(){
    setTimeout(() => {
        shopPage.classList.remove("shopPageOpen");
    }, 150);
};