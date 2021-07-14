import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const Form = () => {
  // List of cryptos from API
  const [cryptos, setCryptos] = useState([]);

  // Selected coins
  const [coin, setCoin] = useState('');
  const [crypto, setCrypto] = useState('');

  useEffect(() => {
    const callAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios.get(url);
      setCryptos(result.data.Data);
    }
    callAPI();
  }, []);

  const selectCoin = coin => {
    setCoin(coin);
  }

  const selectCrypto = crypto => {
    setCrypto(crypto);
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
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    textTransform: 'uppercase',
    marginVertical: 20
  }
});

export default Form;