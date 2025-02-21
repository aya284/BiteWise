import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Dimensions } from 'react-native';
import styles, { pxToDp } from './Styles';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export default function LogIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.topLeaf}/>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.bottomLeaf}/>
      <Text style={styles.primaryText}>Welcome to {'\n'}BiteWise</Text>
      <View style= {styles.orangeContainer}>
          <Image style={styles.orange} source={require('../assets/Images/orangeExtraction.png')}/>
      </View>
      <Text style={styles.secondaryText}>What is your first name ?</Text>
      <TextInput style={styles.input} placeholder='First Name' keyboardType= 'name-phone-pad' autoCapitalize="words"
 />
      <Text style={styles.secondaryText}>What is your last name ?</Text>
      <TextInput style={styles.input} placeholder='Last Name' keyboardType= 'name-phone-pad' autoCapitalize="words"
      />
      <View style={styles.buttonContainer}>
          <Button mode= 'contained' style={styles.button} labelStyle={styles.textButton} onPress={() => navigation.navigate('UserType')}>Next</Button>
      </View>

    </View>
  );
}


