import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

const Header = () => (
  <Text style={styles.header}>CryptoCheck</Text>
);

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    paddingBottom: 10,
    marginBottom: 30,
    backgroundColor: '#5e49e2',
    color: '#fff',
    fontFamily: 'Lato-Black',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});

export default Header;