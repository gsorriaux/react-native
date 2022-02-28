import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Hello from "./components/Hello";
import MyButton from "./components/My-button"
import HelloClass from "./components/HelloClass";
import MyButtonClass from "./components/MyButtonClass";
import CheckBox from "./components/CheckBox";
import CheckBoxAll from "./components/CheckBoxAll";

export default function App() {

  const onPress = () => {
    Alert.alert("Bonsoir");
  }



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{color: 'orange', fontSize: 18}}>Bonjour à tous !</Text>
      <Hello firstname='Manu' age="36" city="Lyon">Je suis développeur React-Native</Hello>
      <HelloClass firstname='Théo' age="56" city="Montpellier"></HelloClass>
      <Hello firstname='José' age="25" city="Paris">Je suis développeur React-Native</Hello>

      <MyButton label="Dire Bonjour" onPress={onPress}></MyButton>

      <MyButtonClass label="Bonsoir en class" onPress={onPress}></MyButtonClass>



      {/* <CheckBox label='Checkbox 1' checked={false}></CheckBox>
      <CheckBox label='Checkbox 2' checked={false}></CheckBox>
      <CheckBox label='Checkbox 3' checked={false}></CheckBox>
      <CheckBox label='Checkbox 4' checked={false}></CheckBox>
      <CheckBox label='Checkbox 5' checked={false}></CheckBox> */}


      <CheckBoxAll></CheckBoxAll>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
