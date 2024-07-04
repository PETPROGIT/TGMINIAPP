

let bybtns = document.querySelectorAll(".productCard");

let modalScection = document.getElementById("modalScection");

let buyModal = document.getElementById("buyModal").style;

let purchaseItem = document.getElementById("purchaseItem");

let statusName = document.getElementById("statusName");

modalScection.addEventListener("click", ()=>{
    modalScection.classList.remove("openModalBuy");
});

bybtns.forEach(button => {
    button.addEventListener("click", (event)=>{
        if(event.target.classList == "byBtn"){
            let strPrice = ((event.target.textContent).toString()).slice(0, ((event.target.textContent).toString()).length - 2);
            priceProduct = parseInt(strPrice).toString();
            let multiplier = "1"
            for(let i = 1; i <= strPrice.length-3; i++){
                multiplier += "0"
            }
            priceProduct = parseInt(priceProduct)*parseInt(multiplier);


            modalScection.classList.add("openModalBuy");
            if(event.target.id === "tgPrem3m"){
                purchaseItem.innerHTML = `<img class="iconProductCardModal" src="iconTgPrm.png">Telegram Premium<br>3 mounth`
            };
            if(event.target.id === "tgPrem6m"){
                purchaseItem.innerHTML = `<img class="iconProductCardModal" src="iconTgPrm.png">Telegram Premium<br>6 mounth`
            };
            if(event.target.id === "tgPrem1y"){
                purchaseItem.innerHTML = `<img class="iconProductCardModal" src="iconTgPrm.png">Telegram Premium<br>1 year`
            };
            if(event.target.id === "not50"){
                purchaseItem.innerHTML = `<img class="iconProductCardModal blackBG" src="notcoin_img.jpg">50 NOT<br>to your wallet`
            };
            if(event.target.id === "not150"){
                purchaseItem.innerHTML = `<img class="iconProductCardModal blackBG" src="notcoin_img.jpg">150 NOT<br>to your wallet`
            };
            if(event.target.id === "not500"){
                purchaseItem.innerHTML = `<img class="iconProductCardModal blackBG" src="notcoin_img.jpg">500 NOT<br>to your wallet`
            };

            if (priceProduct > parseInt(sumBC)){
                statusName.textContent = "Insufficient funds!";
                statusName.style.backgroundColor = "rgba(255, 0, 0, 0.802)";


                console.log("No money!", priceProduct, `balance: ${sumBC}`);

            }
            else{
                sumBC-=priceProduct;
                localStorage.setItem("sumBC", sumBC);
                proressBar = sumBC * parseFloat(plusLvl);
                proressBarLvlHTML.width = `${proressBar}%`;
                localStorage.setItem("proressBar", proressBar);
                statusName.textContent = "Successfully!";
                statusName.style.backgroundColor = "rgb(8, 187, 8))";



                console.log("Buy!");

            }
        }
    })
})
