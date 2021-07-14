import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';

const App = () => {
  const [coin, setCoin] = useState('');
  const [crypto, setCrypto] = useState('');
  const [callAPI, setCallAPI] = useState(false);
  const [quotation, setQuotation] = useState({});

  useEffect(() => {
    const quoteCrypto = async () => {
      if (callAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
        const result = await axios.get(url);
        setQuotation(result.data.DISPLAY[crypto][coin]);
        setCallAPI(false);
      }
    }
    quoteCrypto();
  }, [callAPI]);

  return (
    <>
      <Header />
      <Image style={styles.cover} source={require('./assets/img/cryptos.png')} />
      <View style={styles.container}>
        <Form
          coin={coin}
          crypto={crypto}
          setCoin={setCoin}
          setCrypto={setCrypto}
          setCallAPI={setCallAPI}
        />
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
