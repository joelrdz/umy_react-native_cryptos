import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Header from './components/Header';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <Header />
      <Image style={styles.cover} source={require('./assets/img/cryptos.png')} />
      <View style={styles.container}>
        <Form />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: 150
  },
  container: {
    marginHorizontal: '2.5%'
  }
});

export default App;
