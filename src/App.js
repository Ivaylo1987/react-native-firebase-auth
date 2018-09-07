import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCuHUo_sZoreV4JUpnL0Uw3tYPP5cfyUHg',
      authDomain: 'react-native-auth-1df7b.firebaseapp.com',
      databaseURL: 'https://react-native-auth-1df7b.firebaseio.com',
      projectId: 'react-native-auth-1df7b',
      storageBucket: 'react-native-auth-1df7b.appspot.com',
      messagingSenderId: '415365098559'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App;
