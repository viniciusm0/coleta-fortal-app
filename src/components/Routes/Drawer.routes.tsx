import Ajuda from '@/src/screens/Ajuda/Ajuda';
import Configuracoes from '@/src/screens/Configuracoes/Configuracoes';
import FaleConosco from '@/src/screens/FaleConosco/FaleConosco';
import Home from '@/src/screens/Home/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

console.log("HomeScreen:", Home);
console.log("ConfigScreen:", Configuracoes);
console.log("FaleConosco:", FaleConosco);
console.log("Ajuda:", Ajuda);

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
             <Drawer.Screen 
                name="Home" 
                component={Home}/>
            
            
          <Drawer.Screen
                name="Configurações"
                component={Configuracoes}
             />

             <Drawer.Screen
                 name="Fale Conosco"
                component={FaleConosco}
            />
             
             <Drawer.Screen
                 name="Ajuda"
                component={Ajuda}
             />

            
         </Drawer.Navigator>
     )
 }

