import { getCartProductsFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";


export const addToCart = (event, id, stock) => {
  let arrLocalStorage = getCartProductsFromLS();
  
  const productelement = document.querySelector(`#card${id}`);
  let price = productelement.querySelector(".productPrice").innerText;
  let quantity = productelement.querySelector(".productQuantity").innerText;
  price = price.replace("Rs", "");
  price = Number(price * quantity);
  quantity = Number(quantity);
  
  let existingProds = arrLocalStorage.find((curProd) => curProd.id === id);
  if (existingProds && quantity >= 1) {
    quantity = Number(existingProds.quantity + quantity);
    price = Number(price * quantity);
    let updatedcart = { id, quantity, price };
    updatedcart = arrLocalStorage.map((curProd) => {
      if (curProd.id === id) {
        alert(`Quantity Increased to ${quantity}`)
        return updatedcart;
      } else {
        return curProd;
      }
    });

    localStorage.setItem("cartProductsLS", JSON.stringify(updatedcart));
  }
  if (existingProds) {
    return false;
  }
  arrLocalStorage.push({ id, price, quantity });
  localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorage));
  updateCartValue(arrLocalStorage);
  showToast("add",id);
};
