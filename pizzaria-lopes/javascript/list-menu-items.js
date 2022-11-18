const listPizza = () => {
    const url = 'https://raw.githubusercontent.com/mundowebdev/public-files-websites/main/pizzaria-lopes/json/menu-pizza-list.json';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            data.map((data) => {
                const getCardapioMain = document.querySelector(".cardapio-block-main");
                const newElement = document.createElement('div');
                newElement.classList.add('cardapio-block');

                newElement.innerHTML = `
                <img src="${data.img}" alt="Pizza de ${data.name}" />
                <h3>${data.name}</h3>
                <p class="item-desc">${data.desc}</p>
                <div class="item-tipo">
                    <p class="tamanho">Tamanho: Grande</p>
                    <p class="preco">R$ ${data.price.large}</p>
                </div>`;

                getCardapioMain.appendChild(newElement);
            })

        })
        .catch(function (error) {
            console.log(error);
        });
}
