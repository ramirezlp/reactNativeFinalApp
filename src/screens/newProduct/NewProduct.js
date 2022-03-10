import React, { useEffect, useState } from 'react';
 import {
   SafeAreaView,
   FlatList,
   View,
   Text,
   TextInput,
   Picker,
   Button,
   Alert,
 } from 'react-native';
import { CATEGORIES } from '../../utils/data/categories'
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, selectProduct, setProducts } from '../../store/actions/products.action';
import { Camera } from 'expo-camera';
import styles from './styles';
import { insertProduct } from '../../db/index'
 
 const NewProduct = ({navigation}) => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const dispatch = useDispatch();

    const onChangeTitle = (title) => {
        setTitle(title);
    }

    const onChangePrice = (price) => {
        setPrice(price);
    }

    const onChangeCategory = (category) => {
        setCategory(category);

        return category
    }

    const handleSaveProduct = () => {
        insertProduct(title, image, category, price).then(() => {
            setCategory('');
            setTitle('');
            setPrice('');              
              dispatch(setProducts(), [])
        })
        Alert.alert(
            "Confirmación",
            "Producto guardado correctamente!",
            [
              { text: "Confirmar", onPress: () => console.log("OK Pressed") }
            ]
          );
    }


   return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
        <Text style={ {marginBottom: 10} }>Nombre</Text>
        <TextInput style={styles.textInput} 
                        placeholder="Nombre"
                        value={title}
                        style={{ height: 50, width: 300, borderWidth: 1, marginBottom: 15, padding: 3, color: '#000' }}
                        autofocus
                        onChangeText={(text) => onChangeTitle(text)} ></TextInput>
        <Text style={ {marginBottom: 10} }>Precio</Text>
        <TextInput style={styles.textInput} 
                      placeholder="Precio"
                      value={price}
                      style={{ height: 50, width: 300, borderWidth: 1, marginBottom: 15, padding: 3, color: '#000'   }}
                      autofocus
                      onChangeText={(price) => onChangePrice(price)} ></TextInput>
        <Text style={ {marginBottom: 10} }>Categoría</Text>
        <Picker
            selectedValue={category}
            style={{ height: 50, width: 300, borderWidth: 1  }}
            onValueChange={(itemValue, itemIndex) => onChangeCategory(itemValue)}
        >
            <Picker.Item label="Seleccione una categoría" value=""></Picker.Item>
            <Picker.Item label="Remeras" value="1" />
            <Picker.Item label="Jeans" value="2" />
            <Picker.Item label="Buzos" value="3" />
            <Picker.Item label="Camperas" value="4" />
            <Picker.Item label="Calzado" value="5" />
        </Picker>
        <View style={{marginTop: 15}}>
            <Button
            disabled = { category == '' || title == '' || price == ''}
            style={{ height: 50, width: 300 }}
            title='Guardar producto'
            onPress={() => handleSaveProduct()}></Button>
        </View>

    </View>
  </SafeAreaView>
   );
 };
 
 
 
 export default NewProduct;