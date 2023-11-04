import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ResultsScreen = () => {
  const navigation = useNavigation();
  const [gameHistory, setGameHistory] = useState([]);
  const [currentGame, setCurrentGame] = useState(null);

  useEffect(() => {
    async function loadGameResults() {
      try {
        const savedGames = await AsyncStorage.getItem('userGames');
        const games = JSON.parse(savedGames) || [];
        setGameHistory(games.slice(0, games.length - 1));
        setCurrentGame(games[games.length - 1])
      } catch (error) {
        console.error('Помилка завантаження результатів гри: ', error);
        alert('Something went wrong with uploading the results...((')
      }
    }

    loadGameResults();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 15, justifyContent: 'center' }}>
    <ScrollView >
      <Text style={{ marginBottom: 15, fontSize: 25, fontWeight: '500' }}>
        Попередні ігри:
        </Text>
      {gameHistory.map((game, index) => (
        <Text key={index} style={{ marginBottom: 10, fontSize: 20 }}>
          Гра {index + 1}: 
          Правильних відповідей: {game.answers.filter((answer) => answer.isCorrect).length} з {game.answers.length}
        </Text>
      ))}
      
      {currentGame && (
        <>
        <Text style={{ marginBottom: 10, fontSize: 25, fontWeight: '500' }}>
          Поточна гра: </Text>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>
          Правильних відповідей: {currentGame.answers.filter((answer) => answer.isCorrect).length} з {currentGame.answers.length}
        </Text>
        </>
      )}

      <Button title="Play again" 
      onPress={() => navigation.navigate('Quiz')} />
    </ScrollView>
    </SafeAreaView>
  );
};

export default ResultsScreen;