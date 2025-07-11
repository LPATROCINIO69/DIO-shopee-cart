// Descreve as ações que o item de compras pode ter
//*********************************************************** */

// caso de uso: cria o item com seu subtotal
async function createItem(name, price, quantity){
    return {
        name,
        price,
        quantity,
        subtotal: () => price*quantity 
    }
}

export default createItem;