import { View } from "react-native";
import SearchBar from "../../components/HomeScreen/Searchbar/Searchbar";
import MapRender from "../../components/MapRender";

function HomeScreen() {
    return (
        <View style={{flex: 1}}>
            <SearchBar/>
            <MapRender/>
        </View>
    ) 
}
export default HomeScreen