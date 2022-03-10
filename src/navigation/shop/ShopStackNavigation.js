import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../../screens/categories/Categories';
import ProductDetail from '../../screens/productDetail/ProductDetail';
import Products from '../../screens/products/Products';
import { Platform } from 'react-native';
import { COLORS } from '../../utils/constants/colors';
import NewProduct from '../../screens/newProduct/NewProduct';


const Stack = createNativeStackNavigator();

const ShopStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Categories'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen 
                name="Products"
                component={Products}
                options={({ route }) => ({
                    title: route.params.name,
                    headerStyle: {
                        backgroundColor: route.params.color
                    },
                })}
            />
            <Stack.Screen 
                name="ProductDetail"
                component={ProductDetail}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
            <Stack.Screen 
                name="Nuevo Producto"
                component={NewProduct}
            />
        </Stack.Navigator>
    )
}

export default ShopStackNavigation;