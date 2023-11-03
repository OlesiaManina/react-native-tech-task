import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import questions from '../assets/questions.json';

const QuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
    setUserAnswers([...userAnswers, { question: questions[currentQuestionIndex].question, answer, isCorrect }]);
    if (currentQuestionIndex === questions.length - 1) {

      navigation.navigate('Results', { userAnswers });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <View>
      <Text>{questions[currentQuestionIndex].question}</Text>
      {questions[currentQuestionIndex].answers.map((answer, index) => (
        <Button key={index} title={answer} onPress={() => handleAnswer(answer)} />
      ))}
    </View>
);
};

export default QuizScreen;