
import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";


// criação de um carrinho vazio
const myCart = [];

console.log("Welcome to the your Shoppe Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1 );
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//console.log("Shoppe cart TOTAL is ")
//await cartService.calculateTotal(myCart);

// Apaga um item do carrinho
//await cartService.deleteItem(myCart, item2.name);
await cartService.removeItem(myCart, item2);

// Apresenta o conteúdo do carrinho
await  cartService.displayCart(myCart);

// Apresenta o total do carrinho
await cartService.calculateTotal(myCart);

//console.log(item2.subtotal());