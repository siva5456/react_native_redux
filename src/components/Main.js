import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import { myStore } from '../redux/store/store';

function Main() {
  return (
    <>
    <Provider store={myStore}>
        <AppNavigator/>
    </Provider>

    <StatusBar style="auto" />
  </>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default Main