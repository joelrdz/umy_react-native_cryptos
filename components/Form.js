import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const Form = ({ coin, crypto, setCoin, setCrypto, setFormValid }) => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios.get(url);
      setCryptos(result.data.Data);
    }
    fetchCryptos();
  }, []);

  const selectCoin = coin => {setCoin(coin)}
  const selectCrypto = crypto => {setCrypto(crypto)}

  const showAlert = () => {
    Alert.alert(
      'Error',
      'Ambos campos son obligatorios',
      [
        {text: 'OK'}
      ]
    );
  }

  const validateForm = () => {
    // Validation error
    if (coin.trim() === '' || crypto.trim() === '') {
      showAlert();
      return;
    }

    // Validation success
    setFormValid(true);
  }

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={coin}
        onValueChange={coin => selectCoin(coin)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label='- Seleccione -' value='' />
        <Picker.Item label='Dólar USA' value='USD' />
        <Picker.Item label='Peso Mexicano' value='MXN' />
        <Picker.Item label='Euro' value='EUR' />
        <Picker.Item label='Libra Esterlina' value='GBP' />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        selectedValue={crypto}
        onValueChange={crypto => selectCrypto(crypto)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label='- Seleccione -' value='' />
        {cryptos.map(crypto => (
          <Picker.Item key={crypto.CoinInfo.Id} label={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name} />
        ))}
      </Picker>

      <TouchableHighlight style={styles.btnQuote} onPress={() => validateForm()}>
        <Text style={styles.txtQuote}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    textTransform: 'uppercase',
    marginVertical: 20
  },
  btnQuote: {
    backgroundColor: '#5e49e2',
    padding: 10,
    marginTop: 20
  },
  txtQuote: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
});

export default Form;