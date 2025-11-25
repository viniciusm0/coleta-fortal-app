import { View } from "react-native";
import MapRender from "../../components/HomeScreen/MapInterface/RenderMap/MapRender";

function HomeScreen(props: any) {
    const radius = props.radiusInfo
    return (
        <View style={{flex: 1, height: "100%"}}>
            <MapRender radiusInfo={radius}/>
        </View>
    ) 
}
export default HomeScreen