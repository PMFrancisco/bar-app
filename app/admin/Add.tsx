import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Pressable } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Text } from 'react-native-paper';

export default function Add() {
  const [itemName, setItemName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddItem = async () => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'menu'), {
        name: itemName,
      });
      alert('Item added successfully!');
      setItemName('');
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter item name"
        value={itemName}
        onChangeText={setItemName}
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <Pressable onPress={handleAddItem} disabled={loading}>
        <Text>{loading ? 'Adding...' : 'Add Item'}</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
