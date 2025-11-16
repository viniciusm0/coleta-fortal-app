import { StyleSheet } from "react-native"

export const Styles = StyleSheet.create({
    containerMap: {
        display: 'flex', 
        flexDirection: "column", 
        zIndex: -10, 
        height: "100%",
    },

    mapViewStyle: {
       width: '100%',
       height: '91%', 
       zIndex: -10, 
       position: 'absolute'
    }
})