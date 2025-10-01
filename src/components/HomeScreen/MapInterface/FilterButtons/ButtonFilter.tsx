import { Pressable, Text } from "react-native";
import { Icon } from 'react-native-elements';
import { Styles } from "./StyleButtonFilter";

type filtrarFunction = () => void

interface ButtonConfig {
    icon: string
    nome: string
    background: string;
    color: string;
    onPress: filtrarFunction;

}

export default function ButtonFilter(props : ButtonConfig) {
    return (
        <Pressable style={Styles.container} onPress={() => props.onPress()}>
            <Icon
                iconStyle={{borderRadius: 50, borderWidth: 1, borderColor: props.color, padding: 2}}
                name={props.icon}
                backgroundColor={props.background}
                color={props.color}
            />
            <Text>
                {props.nome}
            </Text>
        </Pressable>
    )
}