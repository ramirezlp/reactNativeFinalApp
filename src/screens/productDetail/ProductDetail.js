import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/actions/cart.action';

import styles from './styles';

const ProductDetail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selected);
  const handleAddItemCart = () => dispatch(addItem(product));
  console.warn(product);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>{product.name}</Text>
        <Text>$ {product.price}</Text>
        <Button title="Agregar a la venta" onPress={() => handleAddItemCart()} />
      </View>
    </SafeAreaView>
  );
};



export default ProductDetail;
