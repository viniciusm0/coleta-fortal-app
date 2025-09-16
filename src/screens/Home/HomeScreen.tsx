import { View, Text, Pressable} from "react-native";
import MapRender from "../../components/MapRender";
import { Styles } from "./HomeStyles"
import { VoltarLoc } from '../../hooks/useReturnLocation'

function HomeScreen() {
    return (
        <View style={{flex: 1}}>
            <MapRender/>
        </View>
    ) 
}
export default HomeScreen