import { StyleSheet } from "react-native"

export const Styles = StyleSheet.create({
    container: {
        zIndex: 40,
        backgroundColor: "white",
        position: "absolute",
        width: "100%",
        height: 260,
        top: "57%",
        padding: 15
    },

    infoContainer: {
        flex: 1,
        gap: 10,
    },

    othersInfosContainer: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 30,
        paddingVertical: 15,
        width: "100%",
        backgroundColor: "rgb(239,241,243)",
        borderRadius: 10,
    },

    leftSideContainer: {
        width: "50%",
    },

    textLeftSide: {
        color: "rgba(71, 71, 71, 1)"
    },

    textRightSide: {
        color: "black",
        fontWeight: 600
    },

    rightSideContainer: {
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