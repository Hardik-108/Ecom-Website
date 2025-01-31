import products from "./products.json";
import { getCartProductsFromLS } from "./getCartProducts";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { removeProdFromCart } from "./removeProdFromCart";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductsFromLS();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElement) => curElement.id === curProd.id);
});

const cartElement = document.querySelector("#productCartContainer");
const templateCont = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;
    let lSActualData = fetchQuantityFromCartLS(id, price);

    let produClone = document.importNode(templateCont.content, true);
    produClone.querySelector(".category").textContent = category;

    produClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    produClone.querySelector(".productName").textContent = name;
    produClone.querySelector(".productImage").src = image;
    produClone.querySelector(".productQuantity").textContent =
      lSActualData.quantity;
    produClone.querySelector(".productPrice").textContent =
      lSActualData.price.toFixed(2);

    produClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => {
        removeProdFromCart(id);
      });
    produClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock,price );
      });
    cartElement.appendChild(produClone);
  });
};

showCartProduct();
updateCartProductTotal()
