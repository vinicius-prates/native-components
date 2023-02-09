import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Botao } from './Components/Botao';

export default function App() {
  return (
    <View style={styles.container}>
        <Botao bg='warn'>Login</Botao>
        <Botao>Logout</Botao>
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
