import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './bottom-tab/BottomTabsNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../store/actions/products.action'

const AppNavigation = () => {
    const dispatch = useDispatch();
    dispatch(setProducts());
    //useSelector(state => console.log(state))

    return (
        <NavigationContainer >
            <BottomTabsNavigator />
        </NavigationContainer>);
}

export default AppNavigation;