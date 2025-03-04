import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './Styles';
import {Button, Divider} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function SignUp() {
    const navigation = useNavigation();    
    const [password, setPassword] = useState ('');
    const [isPasswordVisible, setIsPasswordVisble] = useState (false);
  return (
    <View style= {styles.container}>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.topLeaf}/>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.bottomLeaf}/>
      <Text style={styles.SignUpText} >Your journey starts here {'\n'} Take the first step</Text>
      <Image source={require('../assets/Images/fruits.png')} style= {styles.fruit}/>
      <TextInput style={styles.input} placeholder='E-mail' keyboardType='email-address' autoCapitalize='none'/>
        <View style={styles.passwordContainer}>
           <TextInput style={styles.passwordInput} placeholder='Password' secureTextEntry = {!isPasswordVisible} onChangeText={setPassword}/>
           <TouchableOpacity onPress={()=> setIsPasswordVisble(!isPasswordVisible)}>
             <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} style = {styles.eyeIcon}/>
           </TouchableOpacity>
           
        </View>
        <View style={styles.passwordContainer}>
           <TextInput style={styles.passwordInput} placeholder='Confirm Password' secureTextEntry = {!isPasswordVisible} onChangeText={setPassword}/>
           <TouchableOpacity onPress={()=> setIsPasswordVisble(!isPasswordVisible)}>
             <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} style = {styles.eyeIcon}/>
           </TouchableOpacity>
           
        </View>
        <Divider style={styles.Divider}/>
        <View style={styles.buttonContainer}>
             <Button mode= 'contained' style={styles.button} labelStyle={styles.textButton} onPress={()=>{navigation.navigate('Home')}}>Sign up</Button>
        </View> 
    </View>
  );
}
