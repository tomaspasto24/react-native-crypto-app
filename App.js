import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListCryptos from './components/ListCryptos';
import SearchBar from './components/SearchBar';
import { useState } from "react";

export default function App() {

  const [word, setWord] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.containerHorizontal}>
        <Text style={styles.titleText}>Coin Market</Text>
        <SearchBar value={word} setValue={setWord}/>
      </View>
      <ListCryptos searchWord={word} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201c1c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  containerHorizontal: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  titleText: {
    fontSize: 20,
    color: '#dac8c8',
  }
});
