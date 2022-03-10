import React, { useEffect } from 'react';
 import {
   SafeAreaView,
   FlatList,
   View,
 } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, selectProduct, setProducts } from '../../store/actions/products.action';
import ProductItem from '../../components/productsItem/ProductItem'; 
import styles from './styles';
 
 const Products = ({navigation, route}) => {
  
  const dispatch = useDispatch();

  const categoryProducts = useSelector(state => state.products.filteredProducts)
  const category = useSelector(state => state.categories.selected);
  
  const handleSelectedProduct = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('ProductDetail', 
      {
        name: item.name,
      }
    );
  }

  const renderProducts= ({item}) => {
    return (
      <ProductItem item={item} onSelected={handleSelectedProduct} />
    )
  }

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, [])

   return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <FlatList
         data={categoryProducts}
         renderItem={renderProducts}
         keyExtractor={item => item.id}
       />
    </View>
  </SafeAreaView>
   );
 };
 
 
 
 export default Products;