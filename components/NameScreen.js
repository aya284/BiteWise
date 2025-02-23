import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Dimensions, Alert } from 'react-native';
import styles, { pxToDp } from './Styles';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
export default function LogIn() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const handleNext = () =>{
    if (name.trim()) {
       navigation.navigate('UserType', {userName: name.trim()}); //passing the name 
    }
    else {
      Alert.alert('Please enter your name !')
    }
      
  }
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.topLeaf}/>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.bottomLeaf}/>
      <Text style={styles.primaryText}>Welcome to {'\n'}BiteWise</Text>
      <View style= {styles.orangeContainer}>
          <Image style={styles.orange} source={require('../assets/Images/orangeExtraction.png')}/>
      </View>
      <Text style={styles.secondaryText}>What is your first name ?</Text>
      <TextInput style={styles.input} placeholder='First Name' keyboardType= 'name-phone-pad' autoCapitalize="words" onChangeText={(text) => setName(text)}
 />
      <Text style={styles.secondaryText}>What is your last name ?</Text>
      <TextInput style={styles.input} placeholder='Last Name' keyboardType= 'name-phone-pad' autoCapitalize="words"
      />
        <View style={styles.buttonContainer}>
            <Button mode= 'contained' style={styles.button} labelStyle={styles.textButton} onPress={() => {
              handleNext(); //save the state 
             } }>Next</Button>
        </View>

    </View>
  );
}


