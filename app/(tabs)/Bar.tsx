    import React from 'react';
    import { Text } from 'react-native-paper';
    import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';


    export default function BarScreen() {
      return (
        <View style={styles.container}>
          <Text variant="titleLarge">Pantalla del Bar</Text>
          <Link href="/Cocina">
          <Pressable>
            <Text>Ir a Cocina</Text></Pressable>
        </Link>
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