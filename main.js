// JAVASCRIPT
// import "./style.css";
import products from "./products.json";
import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";
import { getCartProductsFromLS } from "./getCartProducts";

// Display dynamic Cards
getCartProductsFromLS();

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

const showProductsContainer = (products) => {
  if (!products) {
    return false;
  }
  products.forEach((curProd) => {
    const { id, name, category, brand, description, price, stock, image } =
      curProd;
    const prodClone = document.importNode(productTemplate.content, true);

    prodClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    prodClone.querySelector(".productName").textContent = name;
    prodClone.querySelector(".productImage").src = image;
    prodClone.querySelector(".productDescription").textContent = description;
    prodClone.querySelector(".productStock").textContent = stock;
    prodClone.querySelector(".category").textContent = category;
    prodClone.querySelector(".productPrice").textContent = `Rs ${price}`;
    prodClone.querySelector(".productActualPrice").textContent = `Rs ${
      2 * price
    }`;
    // Adding Increment and Decrement Functionality to Cards

    prodClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    // Adding cart functionality
    prodClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });
    productContainer.append(prodClone);
  });
};
showProductsContainer(products);
