import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Pressable, Image, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/config/firebase';
import { Text } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function Add() {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  // Función para seleccionar imagen desde galería o capturar con cámara
  const selectImage = async () => {
    const options = ['Choose from Gallery', 'Take a Photo', 'Cancel'];
    const cancelButtonIndex = 2;

    Alert.alert('Select Image', 'Choose an option', [
      {
        text: options[0],
        onPress: async () => {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
          });
          if (!result.canceled) {
            setImage(result.assets[0].uri);
          }
        },
      },
      {
        text: options[1],
        onPress: async () => {
          const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
          });
          if (!result.canceled) {
            setImage(result.assets[0].uri);
          }
        },
      },
      {
        text: options[cancelButtonIndex],
        style: 'cancel',
      },
    ]);
  };

  // Convertir la URI en un Blob y subir la imagen a Firebase Storage
  const uploadImage = async () => {
    if (!image) return null;

    try {
      const response = await fetch(image);
      const blob = await response.blob();

      const fileName = image.substring(image.lastIndexOf('/') + 1);
      const storageRef = ref(storage, `images/${fileName}`);

      await uploadBytes(storageRef, blob);

      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image: ", error);
      return null;
    }
  };

  // Añadir el nuevo ítem con imagen a Firestore
  const handleAddItem = async () => {
    setLoading(true);
    try {
      const imageUrl = await uploadImage();

      await addDoc(collection(db, 'menu'), {
        name: itemName,
        price: itemPrice,
        imageUrl: imageUrl || '', 
      });

      alert('Item added successfully!');
      setItemName('');
      setItemPrice('');
      setImage(null);
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
      <TextInput
        placeholder="Enter item price"
        value={itemPrice}
        onChangeText={setItemPrice}
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <Pressable onPress={selectImage} style={styles.button}>
        <Text>Select Image</Text>
      </Pressable>

      {image && <Image source={{ uri: image }} style={styles.image} />}

      <Pressable onPress={handleAddItem} disabled={loading} style={styles.button}>
        <Text>{loading ? 'Adding...' : 'Add Item'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});
