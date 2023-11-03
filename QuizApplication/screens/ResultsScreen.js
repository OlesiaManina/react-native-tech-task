import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResultsScreen = ({ route, navigation }) => {
  const { userAnswers } = route.params;

  const restartQuiz = () => {
    navigation.navigate('Quiz');
  };

  useEffect(() => {
    AsyncStorage.setItem('userAnswers', JSON.stringify(userAnswers)).then(() => {
      console.log('Результати збережено в AsyncStorage.');
    });
  }, [userAnswers]);

  return (
    <View>
      <Text>Результати гри:</Text>
      {userAnswers.map((answer, index) => (
        <Text key={index}>
          Питання: {answer.question}, Відповідь: {answer.answer}, Правильна: {answer.isCorrect ? 'Так' : 'Ні'}
        </Text>
      ))}
      <Button title="Почати заново" onPress={restartQuiz} />
    </View>
  );
};

export default ResultsScreen;