import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Store'
import { Header } from './src/components'
import AppNavigator from './src/Navigation/AppNavigator'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{flex: 1}}>
          <Header />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}