import { useState } from "react";
import { TextInput, View } from "react-native";
import { Icon } from 'react-native-elements';
import ResultSearch from "./ResultSearch";
import { Styles } from "./Styles";

function handleInputValue(TextInput: string) {
    console.log(`O texto pesquisado foi: ${TextInput}`)
    
}

export default function SearchBar() {
    const [textInput, setTextInput] = useState("")

    function handleTextChange(novoTexto: any) {
        setTextInput(novoTexto)
    }   
    return (
        <View>
            <View style={Styles.container}>
                <TextInput
                    style={Styles.searchBar}
                    placeholder="Pesquise um ponto de coleta"
                    onChangeText={handleTextChange}
                />
                <Icon
                    iconStyle={Styles.iconSearch}
                    name="search"
                    color="white"
                    onPress={() => handleInputValue(textInput)}
                />
            </View>
            {textInput != "" ? <ResultSearch text={textInput}/> : <></>}
        </View>  
    )
}