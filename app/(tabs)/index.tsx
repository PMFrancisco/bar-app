import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Bienvenido al Bar</Text>
      <View style={styles.buttonContainer}>
        <Link href="/Bar">
          <Pressable>
            <Text>Ir al Bar</Text>
          </Pressable>
        </Link>
        <Link href="/Cocina">
          <Pressable>
            <Text>Ir a Cocina</Text></Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
  },
});
