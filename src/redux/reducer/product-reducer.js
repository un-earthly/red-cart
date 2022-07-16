import { SET_PRODUCTS } from "../action-type"

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