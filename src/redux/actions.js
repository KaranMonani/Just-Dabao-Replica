import * as types from './actionType'
import axios from 'axios';
import API_URL from '../config/api/index'

const getProducts = (foodProducts) => (
    {
        type: types.GET_PRODUCTS,
        payload: foodProducts,
    }
);

const getSingleProduct = (product) => (
    {
        type: types.PRODUCT_DETAILS,
        payload: product
    }
);

export function addToCart(payload) {
    return {
        type: types.ADD_TO_CART,
        payload
    }
}

export const loadProducts = () => {
    return function (dispatch) {
        axios
            .get(`${API_URL}`)
            .then((response) => {
                dispatch(getProducts(response.data));
            }).catch(err => console.log(err))
    }
}

export const loadSingleProduct = (id) => {
    return function (dispatch) {
        axios
            .get(`${API_URL}/${id}`)
            .then((response) => {
                dispatch(getSingleProduct(response.data));
            }).catch(err => console.log(err))
    }
}