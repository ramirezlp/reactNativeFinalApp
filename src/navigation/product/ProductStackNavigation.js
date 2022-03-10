import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../../screens/categories/Categories';
import ProductDetail from '../../screens/productDetail/ProductDetail';
import NewProduct from '../../screens/products/NewProduct';
import { Platform } from 'react-native';
import { COLORS } from '../../utils/constants/colors';


const Stack = createNativeStackNavigator();

const ProductStackNavigation = () => {
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
                name="New Product"
                component={NewProduct}
                options={({ route }) => ({
                    title: route.params.name,
                    headerStyle: {
                        backgroundColor: route.params.color
                    },
                })}
            />
        </Stack.Navigator>
    )
}

export default ProductStackNavigation;