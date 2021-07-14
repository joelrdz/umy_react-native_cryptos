import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Image style={styles.cover} source={require('./assets/img/cryptos.png')} />
    </>
  );
};

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: 150
  }
});

export default App;
