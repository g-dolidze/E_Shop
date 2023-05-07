import { MAIN_PAGE_ACTIONS } from "./types";
export const GET_PRODUCTS_FROM_API = "GET_PRODUCTS_FROM_API";
export const TOTAL_FOUND = "TOTAL_FOUND";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCRES_QUANTITY ="INCTIS_QUANTITY"
export const DICRES_QUANTITY="DICRES_QUANTITY"

export const getProductsFromApi = (products: Prodact[]): MAIN_PAGE_ACTIONS => ({
  type: GET_PRODUCTS_FROM_API,
  payload: products,
});
export const totalFound = (totalProducts: number) => ({
  type: TOTAL_FOUND,
  payload: totalProducts,
});
export const addToCart = (chousenItem: Prodact): MAIN_PAGE_ACTIONS => ({
  type: ADD_TO_CART,
  payload: chousenItem,
});
export const incresQuantity=(chousenItem:CartItem):
MAIN_PAGE_ACTIONS => ({
  type: INCRES_QUANTITY,
  payload: chousenItem,
});
// export const dicresQuantity=(quantity:number):
// MAIN_PAGE_ACTIONS => ({
//   type: DICRES_QUANTITY,
//   payload: chousenItem,
// });