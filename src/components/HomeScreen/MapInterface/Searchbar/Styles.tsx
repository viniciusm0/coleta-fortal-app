import { StyleSheet } from "react-native";
 
export const Styles = StyleSheet.create({
    container: {
        zIndex: 20,
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        maxHeight: "60%",
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white",
        boxShadow: "1px 1px 8px rgba(0, 0, 0, .4)",
        borderWidth: 1,
        borderColor: "white",
        width: "96%",
    },

    searchBar: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 3,
        paddingLeft: 8,
        paddingEnd: 10,
        borderWidth: 1,
        position: "sticky",
        top: 0, 
    },

    searchBarInput: {
        width: "90%"
    },

    iconSearch: {
        borderRadius: 4,
        padding: 3,
        backgroundColor: "#3089b3",
        color: "white",
    },

    resultSearch: {
        borderTopWidth: 1,
        width: "94%",
        margin: "auto",
        borderColor: "black",
        height: "100%",
    },


})