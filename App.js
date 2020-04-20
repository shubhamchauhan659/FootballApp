/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  YellowBox,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ResultScreen from './src/screens/ResultScreen';
import firebase from 'firebase';

const Stack = createStackNavigator();

const firebaseConfig = {
  projectId: 'gmsavs-f3464',
  databaseURL: 'https://gmsavs-f3464.firebaseio.com/',
};
// firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResultScreen"
            component={ResultScreen}
            options={({route}) => ({title: 'Clubs in ' + route.params.title})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
