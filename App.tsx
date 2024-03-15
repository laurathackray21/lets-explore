import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddWalkScreen from './components/AddWalkScreen';
import { HomeScreen } from './components/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  AddWalk: undefined; 
};

export default function App() {
  return (    
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* <StatusBar style="auto" />       */}      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="AddWalk" component={AddWalkScreen} options={{title: "Add a walk"}}/>
      </Stack.Navigator> 
      </SafeAreaView>   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    display: 'flex'
  },
});
