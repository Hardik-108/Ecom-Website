import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductsFromLS();
  cartProducts = cartProducts.filter((curProd) => curProd.id != id);

  localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();
    showToast("delete");
  }
  updateCartValue(cartProducts);
  
}
