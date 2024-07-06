

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
            if(event.target.id === "not1000"){
                purchaseItem.innerHTML = `<img class="iconProductCardModal blackBG" src="notcoin_img.jpg">1000 NOT<br>to your wallet`
            };
            if(event.target.id === "not2500"){
                purchaseItem.innerHTML = `<img class="iconProductCardModal blackBG" src="notcoin_img.jpg">2500 NOT<br>to your wallet`
            };
            if(event.target.id === "not5000"){
                purchaseItem.innerHTML = `<img class="iconProductCardModal blackBG" src="notcoin_img.jpg">5000 NOT<br>to your wallet`
            };
            if(event.target.id === "ton10"){
                purchaseItem.innerHTML = `<img class="iconProductCard" src="iconTonCoin.png">10 TON<br>to your wallet`
            };






            if (priceProduct <= parseInt(sumBC)){
                
                statusName.textContent = "Successfully!";
                statusName.style.backgroundColor = "rgb(8, 187, 8))";

                setTimeout(() => {
                    sumBC-=priceProduct;
                    alert(sumBC, priceProduct)
                    localStorage.setItem("sumBC", sumBC);
                    proressBar = sumBC * parseFloat(plusLvl);
                    proressBarLvlHTML.width = `${proressBar}%`;
                    localStorage.setItem("proressBar", proressBar);
                }, 500);

                console.log("Buy!");
                
            }

            else{
                statusName.textContent = "Insufficient funds!";
                statusName.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
                console.log("No money!", priceProduct, `balance: ${sumBC}`);
            }
        }
    })
})
