import { SET_PRODUCTS } from "../action-type"

const initstate = {
    products: [
        {
            id: 1,
            name: 'Jon',
            price: 10,
            quantity: 1,
        }
    ]
}
export const productReducer = (state = initstate.products, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return state

        default:
            return state
    }
}