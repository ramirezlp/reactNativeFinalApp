import { fetchProducts } from "../../db";

export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productId: id
});

export const filterProducts = (id) => ({
    type: FILTER_PRODUCTS,
    categoryId: id
})

export const setProducts = () => dispatch => {
    fetchProducts()
    .then(products => dispatch({ type: SET_PRODUCTS, payload: products}))
}