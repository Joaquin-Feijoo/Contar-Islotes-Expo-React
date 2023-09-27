import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";

export default function App() {
  const [texto, setTexto] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isletCount, setIsletCount] = useState(0);

  const countIslets = () => {
    let count = 0;

    for (let i = 1; i < texto.length - 1; i++) {
      if (texto[i - 1] === texto[i + 1]) {
        count++;
      }
    }

    setIsletCount(count);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require("./assets/Fondo.jpg")}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese una frase"
          placeholderTextColor="white"
          onChangeText={(texto) => setTexto(texto)}
        />
        <TouchableOpacity onPress={countIslets} style={styles.roundButton}>
          <Text style={styles.buttonText}>Contar Islotes</Text>
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Resultados de Análisis</Text>
            <Text>Número de Islotes: {isletCount}</Text>
            <TouchableOpacity onPress={closeModal} style={styles.roundButton}>
              <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "50%",
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    color: "white",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  roundButton: {
    backgroundColor: "#7B68EE",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#7B68EE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  loadingText: {
    color: "white",
  },
});
