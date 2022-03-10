
   
import React from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import CartItem from "../../components/cartItem/CartItem";

import { useSelector, useDispatch } from "react-redux";
import { removeItem, confirmCart } from "../../store/actions/cart.action";

const Cart = ({navigation}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const handleConfirm = () => {
        dispatch(confirmCart(items, total));
        navigation.navigate("Orders");
    }

    const handleDelete = (id) => {
        dispatch(removeItem(id));
    }

    const renderItems = (data) => (
        <CartItem item={data.item} onDelete={handleDelete} />
    )
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm} onPress={() => handleConfirm()}>
                    <Text>Confirmar</Text>
                    <View style={styles.total}>
                        <Text style={styles.text}>Total:</Text>
                        <Text style={styles.text}>${total}</Text>
                    </View>
                </TouchableOpacity>
                <Button title="Ver Ventas" style={
                    {marginTop: 5}
                } onPress={() => navigation.navigate("Orders")} />
            </View>
        </View>
    )
}

export default Cart;