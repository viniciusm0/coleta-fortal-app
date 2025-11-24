import { useState } from "react";
import { ScrollView, TextInput, View } from "react-native";
import { Icon } from 'react-native-elements';
import ResultSearch from "./ResultSearch";
import { Styles } from "./Styles";

export default function SearchBar(props: any) {
    const setPonto = props.setInfoPonto
    const setShowResult = props.setShowResult
    const showResult = props.showResult
    const textInputRef = props.textInputRef
    const [textInput, setTextInput] = useState("")

    function handleTextChange(novoTexto: any) {
        setTextInput(novoTexto)
        setShowResult(true)
    }
    
    return (
        <View style={Styles.container}>
            <View style={Styles.searchBar}>
                <TextInput
                    ref={textInputRef}
                    style={Styles.searchBarInput}
                    placeholder="Pesquise um ponto de coleta"
                    onChangeText={handleTextChange}
                />
                <Icon
                    iconStyle={Styles.iconSearch}
                    name="search"
                    color="white"
                />
            </View>
            {showResult && textInput != "" ? 
                <ScrollView style={Styles.resultSearch}>
                    <ResultSearch 
                        setPonto={setPonto} 
                        text={textInput} 
                        showResult={setShowResult} 
                        textInputRef={textInputRef}
                    />
                </ScrollView> : <></>
            }
        </View>  
    )
}