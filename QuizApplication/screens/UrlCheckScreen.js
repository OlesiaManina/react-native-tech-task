import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

const UrlCheckScreen = ({ navigation }) => {
  const [webviewVisible, setWebviewVisible] = useState(false);

  const openWebView = async () => {
    const url = 'https://reactnative.dev/';
    
    try {
      const response = await axios.head(url);

      if (response.status === 200) {
        setWebviewVisible(true);
      } else {
        navigation.navigate('Quiz');
      }
    } catch (error) {
      navigation.navigate('Quiz');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {webviewVisible ? (
        <WebView
          source={{ uri: url }}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
          <Text>Перевірка URL-адреси</Text>
          <Button title="Correct URL" onPress={openWebView} />
          <Button title="Wrong URL" onPress={() => navigation.navigate('Quiz')} />
          <Button
            title="Start Quiz"
            onPress={() => navigation.navigate('Quiz')}
          />
        </View>
      )}

      {webviewVisible && (
        <Button
          title="Назад"
          onPress={() => setWebviewVisible(false)}
        />
      )}
    </View>
  );
};

export default UrlCheckScreen;