import { SELECTED_PRODUCTS, SET_PRODUCTS } from "./action-type"

export const setProducts = (p) => {
    return {
        type: SET_PRODUCTS,
        payload: p
    }
}

export const selectedProduct = (p) => {
    return {
        type: SELECTED_PRODUCTS,
        payload: p
    }
}