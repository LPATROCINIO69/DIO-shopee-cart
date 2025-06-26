// Descreve as ações que o carrinho de compras pode fazer
//*********************************************************** */

// Caso de uso: Adicionar item ao carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// Caso de uso: Deletar item do carrinho
async function deleteItem(userCart, nameItem){
    const index = userCart.findIndex((item)=>item.name === nameItem);
    if (index!==-1 ){
        userCart.splice(index, 1);
    }
}

// Caso de uso: Remover um item do carrinho - diminui a quantidade de um item de uma unidade
async function removeItem(userCart, item){

    // Encontra o indice do item
    const indexFound = userCart.findIndex((p)=>p.name === item.name);
    
    // Se não encontrar o item, apresenta mensagem e sai da função
    if (indexFound == -1){
        console.log("Item não encontrado.");
        return;
    }

    // Se a quantidade do item for maior que 1, subtrai um item. 
    // Se a quantidade do item for igual a 1, exclui o item.
    if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
    } else {
        userCart.splice(indexFound,1);
    }

}


// Caso de uso: calcular o total no carrinho
async function calculateTotal(userCart){
    const result = userCart.reduce((total,item)=>total + item.subtotal(), 0);
    console.log("\nShoppe cart TOTAL is ")
    console.log(`🎁 Total: ${result}`);
}


async function displayCart(userCart){
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1} \t ${item.name} \tR$ ${item.price} \t ${item.quantity} \tR$ ${item.subtotal()}`)
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};