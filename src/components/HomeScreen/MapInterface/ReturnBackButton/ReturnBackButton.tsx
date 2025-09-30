import { Pressable, Text } from "react-native"
import { Styles } from './Styles'


function ReturnBackButton( props: any ) {
    const goToRegion = () => {
        if (props.mapRef.current) {
            props.mapRef.current.animateToRegion(props.initialRegion, 1000)
        }
    }
    return (
        <Pressable style={Styles.container} onPress={goToRegion}>
            <Text style={Styles.button}>Retornar</Text>
        </Pressable>
    )
} 
            
export default ReturnBackButton