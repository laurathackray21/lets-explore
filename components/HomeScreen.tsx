import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home', 'MyStack'>;

export const HomeScreen = ({navigation}: Props) => {

  function addAWalk() {
    Alert.alert('Add a walk!')
  }

  return (
  <View style={styles.container}>
    <Text style={styles.title}>Let's Explore!</Text>    
    <Image style={styles.image} source={require('../assets/hiking.jpg')}/>
    <Button title="Add a walk" onPress={() => navigation.navigate('AddWalk')}></Button>
  </View>)
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fcdb9d',
    display: 'flex'
  },

  title: {
    paddingTop: 60,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 1,   
    color: '#cc4502',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold'
  },

  image: {
    flex: 1, 
    width: 400, 
    height: 400
  } 
});
