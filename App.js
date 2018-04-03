import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainList from './src/main-list';
import { Provider } from 'react-redux';
import configureStore from './src/store/configure-store';
import 'rxjs';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainList />
      </Provider>
    );
  }
}
