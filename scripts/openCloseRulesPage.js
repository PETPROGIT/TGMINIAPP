


const rulesPage = document.getElementById("rulesPage");

function rulesOpen(){
    setTimeout(() => {
        rulesPage.classList.add("openRulesPage");
    }, 150);
}

function rulesClose(){
    setTimeout(() => {
        rulesPage.classList.remove("openRulesPage");
    }, 100);
}