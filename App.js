import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [eurot, setEurot] = useState('')
  const [kruunat, setKruunat] = useState(0)

  const calculate = () => {
    const result = eurot.replace(',','.') * 11.85;
    setKruunat(result)
  }

  return (
    <View style={styles.container}>
      <Text>Eurot</Text>
      <TextInput placeholder='Enter amount of euros' 
      keyboardType='decimal-pad'
      value={eurot} onChangeText={text => setEurot(text)}
      style={styles.field}
      />
      <Text style={styles.field}>Kruuna</Text>
      <Text style={styles.field}>{kruunat.toFixed(2)}</Text>
      <Button title='Laske' onPress={calculate}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    
  },
});
