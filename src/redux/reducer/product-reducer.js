import { SELECTED_PRODUCTS, SET_PRODUCTS } from "../action-type"

const initstate = {
    products: []
}
export const productReducer = (state = initstate.products, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return { ...state, products: payload }

        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECTED_PRODUCTS:
            return { ...state, product: payload }

        default:
            return state
    }
}