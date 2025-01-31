import { getCartProductsFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");
  let localCartProducts = getCartProductsFromLS();
  let initialValue = 0;
  let Totalprice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = Number(curElem.price) || 0;
    return accum + productPrice * curElem.quantity;
  }, initialValue);
  productSubTotal.textContent = `Rs ${Totalprice.toFixed(2)}`;
  productFinalTotal.textContent = `Rs ${(Totalprice + 50).toFixed(2)}`;
};
