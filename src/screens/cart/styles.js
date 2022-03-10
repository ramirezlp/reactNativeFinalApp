import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    list: {
        flex: 1
    },
    footer: {
        padding: 12,
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: "#00a680",
        padding: 12,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    total: {
        flexDirection: "row",
    },
    text: {
        fontSize: 18,
        color: "#212121",
    }
});

export default styles;
