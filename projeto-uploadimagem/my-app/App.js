import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Por favor, ajuste as permissões do uso da galeria >.<');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`;-; Desculpe, mas parece que o envio de imagens não está disponível na sua plataforma!`);
      return;
    }


    await Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Compartilhe! :3</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047547.jpg' }} style={styles.logo} />


      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Envie sua imagem! owo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 259,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
