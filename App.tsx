import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>2CCPF</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc3971',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Text: {
    color: '#fffffa',
    fontWeight: 'bold',
    fontSize: 30
  },

});
