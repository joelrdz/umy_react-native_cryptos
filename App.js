import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Image, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Quotation from './components/Quotation';

const App = () => {
  const [coin, setCoin] = useState('');
  const [crypto, setCrypto] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quotation, setQuotation] = useState({});

  useEffect(() => {
    const quoteCrypto = async () => {
      if (formValid) {
        setLoading(true);
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
        const result = await axios.get(url);

        // Hide loading, show result
        setTimeout(() => {
          setQuotation(result.data.DISPLAY[crypto][coin]);
          setFormValid(false);
          setLoading(false);
        }, 800);
      }
    }
    quoteCrypto();
  }, [formValid]);

  // show loading or result
  const loadingOrResult = loading ? <ActivityIndicator size='large' color='#5e49e2' /> : <Quotation quotation={quotation} />;

  return (
    <>
      <ScrollView>
        <Header />
        <Image style={styles.cover} source={require('./assets/img/cryptos.png')} />
        <View style={styles.container}>
          <Form
            coin={coin}
            crypto={crypto}
            setCoin={setCoin}
            setCrypto={setCrypto}
            setFormValid={setFormValid}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          {loadingOrResult}
        </View>
      </ScrollView>
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
