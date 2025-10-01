import { View } from "react-native";
import MapRender from "../../components/HomeScreen/MapInterface/RenderMap/MapRender";

function HomeScreen() {
    return (
        <View style={{flex: 1, height: "100%"}}>
            <MapRender/>
        </View>
    ) 
}
export default HomeScreen