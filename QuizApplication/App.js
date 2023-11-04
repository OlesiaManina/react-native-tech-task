import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UrlCheckScreen from './screens/UrlCheckScreen';
import QuizScreen from './screens/QuizScreen';
import ResultsScreen from './screens/ResultsScreen';
// import appsFlyer from 'react-native-appsflyer';
// import { LogLevel, OneSignal } from 'react-native-onesignal';
// import Constants from "expo-constants";

const Stack = createStackNavigator();

// console.log('appsFlyer,', appsFlyer);
// appsFlyer.initSdk(
//   {
//     devKey: 'K2***********99',
//     isDebug: true,
//     appId: '41*****44',
//     onInstallConversionDataListener: true, 
//     onDeepLinkListener: true, 
//   },
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.error(error);
//   }
// );

// OneSignal.Debug.setLogLevel(LogLevel.Verbose);
// OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId);

// OneSignal.Notifications.requestPermission(true);


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UrlCheck">
        <Stack.Screen name="UrlCheck" component={UrlCheckScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
