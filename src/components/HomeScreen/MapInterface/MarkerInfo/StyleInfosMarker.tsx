import { StyleSheet } from "react-native"

export const Styles = StyleSheet.create({
    container: {
        zIndex: 40,
        backgroundColor: "white",
        position: "absolute",
        width: "100%",
        height: 300,
        top: "52%",
        padding: 15
    },

    infoContainer: {
        flex: 1,
        gap: 10,
    },

    nomeInfo: {
        fontSize: 16,
    },

    othersInfosContainer: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 30,
        paddingVertical: 15,
        width: "100%",
        backgroundColor: "rgb(239,241,243)",
        borderRadius: 10,
        gap: 4,
    },

    rowInfoContainer: {
        display: "flex", 
        flexDirection: "row",
        justifyContent: "space-between"
    },

    addressArea: {
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
    },

    textLeftSide: {
        color: "rgba(71, 71, 71, 1)"
    },

    textRightSide: {
        color: "black",
        fontWeight: 600,
        width: "50%",
    },

    rightSideContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 4,
        width: "50%",
    },

    titleInfo: {
        textAlign: "center",
        fontSize: 23,
        fontWeight: "bold",
    },

    titleName: {
        fontSize: 15,
    },
})