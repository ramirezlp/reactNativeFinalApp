import { SELECT_PRODUCT, FILTER_PRODUCTS, SET_PRODUCTS } from '../actions/products.action';
import { fetchProducts } from '../../db';

const initialState = {
    products: [],
    filteredProducts: [],
    selected: null
}

const ProductsReducer = (state = initialState, action) => {
   switch(action.type) {
         case SET_PRODUCTS:
             return {
                 ...state,
                 products: action.payload
             }
         case SELECT_PRODUCT:
             return {
                 ...state,
                 selected: state.products.find(product => product.id === action.productId)
             }
        case FILTER_PRODUCTS:
            return {
                ...state,
                filteredProducts: state.products.filter(product => product.category === action.categoryId)
            }
        default:
            return state;
   }
}

export default ProductsReducer;