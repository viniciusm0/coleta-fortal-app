import { useState } from "react";
import { TextInput, View } from "react-native";
import { Icon } from 'react-native-elements';
import ResultSearch from "./ResultSearch";
import { Styles } from "./Styles";

export default function SearchBar(props: any) {
    const setPonto = props.setInfoPonto
    const [textInput, setTextInput] = useState("")
    const [showResult, setShowResult] = useState<boolean>(false)

    function handleTextChange(novoTexto: any) {
        setTextInput(novoTexto)
        setShowResult(true)
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
                />
            </View>
            {showResult && textInput != "" ? <ResultSearch setPonto={setPonto} text={textInput} showResult={setShowResult}/> : <></>}
        </View>  
    )
}