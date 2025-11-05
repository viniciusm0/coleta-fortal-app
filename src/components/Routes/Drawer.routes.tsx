import { createDrawerNavigator } from '@react-navigation/drawer';



import Configurações from '@/src/screens/Configurações/Configurações';
import Feed from '@/src/screens/feed/feed';
import Home from '@/src/screens/Home/HomeScreen';


const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home" 
                component={Home}/>
            
            <Drawer.Screen
                name="feed"
                component={Feed}
            />
             <Drawer.Screen
                name="Configurações"
                component={Configurações}
            />

            
           

        </Drawer.Navigator>
    )
}

