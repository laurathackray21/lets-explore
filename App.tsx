import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';


export default function App() {
  return (    
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" />       */}
      <HomeScreen/>      
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    display: 'flex'
  },
});
