import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Raio de busca</Text>

      <View style={styles.optionsContainer}>
        <Pressable style={styles.option}>
          <Text style={styles.optionText}>300m</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Text style={styles.optionText}>500m</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Text style={styles.optionText}>1 km</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Text style={styles.optionText}>2 km</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#555",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  option: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3, 
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});