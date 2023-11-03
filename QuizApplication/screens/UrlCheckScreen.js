import React from 'react';
import { View, Text, Button } from 'react-native';

const UrlCheckScreen = ({ navigation }) => {
  const checkURL = () => {

    const url = 'https://www.google.com.ua'; 
    if (url.startsWith('https://') || url.startsWith('http://')) {
  
      navigation.navigate('Quiz');
    } else {

      alert('Введіть валідний URL-адресу.');
    }
  };

  return (
    <View>
      <Text>Перевірка URL-адреси</Text>
      <Button title="Перевірити URL" onPress={checkURL} />
    </View>
  );
};

export default UrlCheckScreen;