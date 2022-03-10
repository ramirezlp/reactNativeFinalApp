/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import AppNavigation from './src/navigation/AppNavigation';
 import { Provider } from 'react-redux';
 import store from './src/store/index';
 import { init, fetchProducts, insertProduct, setInitialProducts } from './src/db/index';
 import { useDispatch, useSelector } from 'react-redux';
 import { filterProducts, selectProduct, setProducts } from './src/store/actions/products.action';

init()
.then(() => { console.warn('Database initialized');})
.catch((error) => {})
setInitialProducts();



const App = () => {


   return (
     <Provider store={store}>
      <AppNavigation />
     </Provider>
   );
 };
 
 export default App;