import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function FaleConosco(){
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    function Enviar() {
    if (!email || !mensagem) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      return;
    }
    Alert.alert("Enviado", "Sua mensagem foi enviada com sucesso!");
    setEmail("");
    setMensagem("");
  }

    return(
        <View style={styles.container}>
            <Text style={styles.Titulo}>Central de Contato</Text>

            <TextInput
            style={styles.input}
            placeholder="Email..."
            value={email}
            onChangeText={setEmail}
        
         />
            <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Digite sua dúvida ou reclamação"
            value={mensagem}
            onChangeText={setMensagem}
            multiline
            numberOfLines={4}
            />

            <TouchableOpacity style={styles.botao} onPress={Enviar}>
                <Text style={styles.textoBotao}>Enviar</Text>
            </TouchableOpacity>
       
        <Text style={styles.Info}>Para demandas operacionais referentes ao sistema de coleta, entre em contato com a
          central Coleta Fortal (85) 8005-2256 disponível de segunda a sexta-feira
          das 07:00 às 19:00 e nos finais de semana de 08:00 às 17:00.
          {"\n\n"}O retorno ocorre em até 7 dias úteis, exclusivamente por telefone.
        </Text>
       
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop:20,
       

    },
    input:{
         borderWidth: 1,
         borderRadius: 10,
         padding:10,
         marginBottom: 10,
         
    },

    Info:{
        fontSize: 16,
        paddingTop:20,
        lineHeight: 22,
        textAlign:"justify",
        
    },

    botao: {
    backgroundColor: "#0066cc",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 15,
  },
  
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

    Titulo:{
        fontSize:22,
        fontWeight:'bold',
        paddingBottom:20,
    },
    
    textArea: {
    height: 120,
    textAlignVertical: "top",
    },
});