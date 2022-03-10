import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStackNavigation from '../shop/ShopStackNavigation';
import CartStackNavigation from '../cart/CartStackNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName='Productos' screenOptions={{
            headerShown: false,
        }}>
            <BottomTabs.Screen
                name='Productos'
                component={ShopStackNavigation} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='clipboard-outline' size={20} />
                    )          
                }}

            />
            <BottomTabs.Screen
                name='Venta'
                component={CartStackNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='logo-usd' size={20} />
                    )
                }} 
                />
        </BottomTabs.Navigator>
    )
}

export default BottomTabsNavigator; 