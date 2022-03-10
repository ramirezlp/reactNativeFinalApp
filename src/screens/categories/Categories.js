import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Button
} from 'react-native';
import CategoryItem from '../../components/categoriesItem/CategoryItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions/category.action';
import styles from './styles';

const Categories = ({navigation}) => {
  
  const categories = useSelector(state => {
    //console.log(state) 

    return state.categories.categories}
    );
  const dispatch = useDispatch();
  
  const handleSelectedCategory = (item) => {
   dispatch(selectCategory(item.id));
   navigation.navigate('Products', 
     {
       name: item.title,
       color: item.color,
     }
   );
 }

 const handleNewProduct = () => {
    navigation.navigate("Nuevo Producto");
 }

 const renderCategories = ({item}) => {
   return (
     <CategoryItem item={item} onSelected={handleSelectedCategory} />
   )
 }

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={handleNewProduct} title="Nuevo Producto +"></Button>
      <View style={styles.container}>
        <FlatList
           data={categories}
           renderItem={renderCategories}
           keyExtractor={item => item.id}
         />
      </View>
    </SafeAreaView>
  );
};



export default Categories;