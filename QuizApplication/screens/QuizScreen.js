import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import questions from '../assets/questions.json';

const QuizScreen = () => {
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [game, setGame] = useState({
    id: new Date().getTime(), 
    answers: [],
  });

  const handleAnswer = (answer) => {
    const question = questions[currentQuestionIndex];
    const isCorrect = answer === question.correctAnswer;
    const updatedGame = { ...game };
    updatedGame.answers.push({ questionId: question.id, isCorrect });

    setGame(updatedGame);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      AsyncStorage.getItem('userGames')
        .then((games) => {
          const userGames = JSON.parse(games) || [];
          userGames.push(game);
          return AsyncStorage.setItem('userGames', JSON.stringify(userGames));
        })
        .then(() => {
          setGame({ id: new Date().getTime(), answers: [] });
          setCurrentQuestionIndex(0); 
          navigation.navigate('Results');
        });
    }
  };

  return (
      <View style={{ flex: 1, gap: 10, padding: 15, justifyContent: 'center' }}>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '600', marginBottom: 10 }}>
          {questions[currentQuestionIndex].question}
          </Text>
        {questions[currentQuestionIndex].answers.map((answer, index) => (
          <Button key={index} title={answer} 
          onPress={() => handleAnswer(answer)} />
        ))}
      </View>
  );
};

export default QuizScreen;