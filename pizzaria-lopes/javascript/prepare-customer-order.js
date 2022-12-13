let customerOrder = [];

const saveOrder = (itemId, itemName) => {
    const input = document.querySelector(`#${itemId}`);
    const itemQuantity = input.value;
    console.log(itemId, itemQuantity, itemName);

    //customerOrder.push('pizza de ${data.name}'); console.log('Eu quero ' + customerOrder)
}

saveOrder();
