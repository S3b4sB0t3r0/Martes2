import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aora ADSO</Text>
      <StatusBar style='auto' />
      <Text
        style={styles.linkText}
        onPress={() => Linking.openURL('app/profile.jsx')}
      >
        Ir a la página de Perfil
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
  },
  linkText: {
    color: 'blue',
    fontSize: 18,
    marginTop: 10,
  },
});
