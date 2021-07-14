import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

const Header = () => (
  <Text style={styles.header}>Cryptos</Text>
);

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10
  }
});

export default Header;