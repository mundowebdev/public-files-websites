const listPizza = (pizzaSize) => {
    const url = "https://raw.githubusercontent.com/mundowebdev/public-files-websites/main/pizzaria-lopes/json/menu-pizza-list.json";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.map((data) => {
                const getCardapioMain = document.querySelector(".cardapio-block-main");
                const newElement = document.createElement("div");

                let sizeText = "";
                pizzaSize.includes("large") ? sizeText = "Grande" : sizeText = "Médio";

                let sizePrice = "";
                pizzaSize.includes("large") ? sizePrice = data.price.large : sizePrice = data.price.medium;

                newElement.classList.add('cardapio-block');
                newElement.innerHTML = `
                <img src="${data.img}" alt="Pizza de ${data.name}" />
                <h3>${data.name}</h3>
                <p class="item-desc">${data.desc}</p>
                <div class="item-type">
                    <p class="item-size">Tamanho: ${sizeText}</p>
                    <p class="item-price">R$ ${sizePrice}</p>
                </div>
                <div class="choose-item">
                    <button type="submit" name="add-to-cart" class="button-add-item" onClick="saveOrder(${data.id}, ${data.name});">Adicionar</button>
                    <button type="submit" name="add-to-cart" class="button-add-item-mobile" onClick="saveOrder(${data.id}, ${data.name});">+</button>

                    <div class="quantity">
                        <label class="screen-reader-text" for="quantity-for-${data.id}">Quantidade de pizzas</label>
                        <input type="number" id="quantity-for-${data.id}" class="input-quantity" step="1" min="1" max="" name="quantity" value="1" title="Qty" size="4" placeholder="" inputmode="numeric" autocomplete="off">
                    </div>
  				</div>`;

                getCardapioMain.appendChild(newElement);
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

listPizza("large");
