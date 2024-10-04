import React from "react";
import { Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function Edit() {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Pantalla de Editar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});