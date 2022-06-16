import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Keyboard,
} from "react-native";
import React from "react";

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Button
        title="Iniciar Sesión"
        style={styles.button}
        onPress={() => console.log("Entro")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 10,
    backgroundColor: "#D4D4D4",
    borderColor: "transparent",
    color: "white",
    borderWidth: 1,
    borderRadius: 50,
    padding: 7,
  },
  button: {
    margin: 10,
    backgroundColor: "black",
    color: "black",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 50,
    height: 40,
    width: 200,
  },
});
