import { StyleSheet } from "react-native";
 
export const Styles = StyleSheet.create({
    container: {
        zIndex: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        borderRadius: 10,
        padding: 3,
        paddingLeft: 8,
        paddingEnd: 10,
        backgroundColor: "white",
        boxShadow: "1px 1px 8px rgba(0, 0, 0, .4)"
    },

    searchBar: {
        width: "90%"
    },

    iconSearch: {
        borderRadius: 4,
        padding: 3,
        backgroundColor: "#3089b3",
        color: "white",
    },


})