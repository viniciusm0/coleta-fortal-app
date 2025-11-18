import Configuracoes from '@/src/screens/Configuracoes/Configuracoes';
import FaleConosco from '@/src/screens/FaleConosco/FaleConosco';
import Home from '@/src/screens/Home/HomeScreen';
import Sobre from '@/src/screens/Sobre/Sobre';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from "react";

console.log("HomeScreen:", Home);
console.log("ConfigScreen:", Configuracoes);
console.log("FaleConosco:", FaleConosco);
console.log("Sobre:", Sobre);

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(props: any){
    const [radius, setRadius] = useState<number>(300)

    return(
        <Drawer.Navigator>
             <Drawer.Screen 
                name="Home" 
                component={() => <Home radiusInfo={radius}/>}
            />

          <Drawer.Screen
                name="Configurações"
                component={() => <Configuracoes setRadiusFunction={setRadius}/>}
             />

             <Drawer.Screen
                 name="Fale Conosco"
                component={FaleConosco}
            />
             
             <Drawer.Screen
                 name="Sobre"
                component={Sobre}
             />
 
         </Drawer.Navigator>
     )
 }

