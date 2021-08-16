import * as types from './actionType'

const initialState = {
    foodProducts: [],
    user: {},
    numberCart:0,
    Carts:[],
    loading: true
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                foodProducts: action.payload,
                loading: false
            }

        case types.PRODUCT_DETAILS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        case types.ADD_TO_CART:
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    name: action.payload.name,
                    image: action.payload.image_1,
                    price: action.payload.price
                }
                state.Carts.push(cart);
            }
            else {
                let check = false;
                state.Carts.forEach((item, key) => {
                    if (item.id === action.payload.id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        name: action.payload.name,
                        image: action.payload.image_1,
                        price: action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        default:
            return state;
    }
}

export default userReducers;