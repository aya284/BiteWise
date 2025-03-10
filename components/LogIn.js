import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Divider, Button } from 'react-native-paper';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-facebook';
import { Ionicons } from '@expo/vector-icons';

export default function LogIn() {
const navigation = useNavigation(); 
const [password, setPassword] = useState ('');
const [isPasswordVisible, setIsPasswordVisble] = useState (false);
//google sign in 
const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: '1017733460133-9vb26o17igm227eko3bur0ub6285bsg3.apps.googleusercontent.com',
    iosClientId: '1017733460133-v0vo1cluujf0nc6lk5nl20oe8h8m4v86.apps.googleusercontent.com',
    androidClientId: '1017733460133-epv1rf173vhrnbnluc0sruffedra97bt.apps.googleusercontent.com'
});
useEffect(() => {
  if (response?.type === 'success'){
    const {authentication} = response;
    console.log('google Auth Success, token:', authentication.accessToken);
  }
}, [response]
);

//facebook sign in 
useEffect(() => {
  // Initialise en utilisant les valeurs de app.json
  Facebook.initializeAsync().then(() => {
    console.log('Facebook SDK initialized');
  });
}, []);

const handleFacebookLogin = async () => {
  try {
    const result = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile', 'email'],
    });

    if (result.type === 'success') {
      console.log('Facebook token:', result.token);
    } else {
      console.log('Facebook login cancelled');
    }
  } catch (error) {
    console.log('Facebook Login Error:', error);
  }
};
return (
    <View style= {styles.container}>
        <Image source={require('../assets/Images/leaf.png')} style= {styles.topLeaf}/>
        <Image source={require('../assets/Images/leaf.png')} style= {styles.bottomLeaf}/>
        <View style={styles.logoContainer}>
             <View style={styles.circle}>
                <Image source={require('../assets/Images/logo.png')} style={styles.logo}/>
             </View>
        </View>
       <Text style={styles.welcomeText}>Welcome Back!</Text>
       <TextInput style={styles.input} placeholder='E-mail' keyboardType='email-address' autoCapitalize='none'/>
        <View style={styles.passwordContainer}>
           <TextInput style={styles.passwordInput} placeholder='Password' secureTextEntry = {!isPasswordVisible} onChangeText={setPassword}/>
           <TouchableOpacity onPress={()=> setIsPasswordVisble(!isPasswordVisible)}>
             <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} style = {styles.eyeIcon}/>
           </TouchableOpacity>
           
        </View>
        <Pressable onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.reset}>Forgot Password?</Text>
        </Pressable>
        
        <Divider style={styles.Divider}/>
        <View style={styles.signInContainer}>
          <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
             <Ionicons name='logo-google' size={34}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fbButton}  onPress={handleFacebookLogin}>
             <Ionicons name='logo-facebook' size={34}/>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
             <Button mode= 'contained' style={styles.button} labelStyle={styles.textButton} onPress={()=> navigation.navigate('Home')}>Log In</Button>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.accountText}>Don't you have an account?</Text>
            <Pressable  onPress={()=>{navigation.navigate('UserType')}}>
                <Text style={styles.signUpText}>Sign Up</Text>
            </Pressable>

        </View>

       
    </View>
  );
}
const { width } = Dimensions.get('window');
const pxToDp = (px) => {                                    
  return px * (width / 390);
};
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#F5E4C3',
        padding: pxToDp(20),
        justifyContent: 'center',
        overflow: 'visible',
        position: 'relative',
      },
    topLeaf:{
        width: 200,
        height: 200,
        transform: [{ rotate: '91.171deg' }],
        top: -3,
        left: -14,
        position: 'absolute',
        resizeMode: 'contain'
    },
    bottomLeaf:{
        width: 200,
        height: 200,
        transform: [{ rotate: '91.171deg' }, {scaleY: -1}, {scaleX: -1}],
        bottom: -3,
        right: -14,
        position: 'absolute',
        resizeMode: 'contain'
    },
    logoContainer:{
        marginTop: pxToDp(20),
        alignItems: 'center'
    },
    circle:{
        width: pxToDp(170),
        height:pxToDp(157),
        borderRadius: pxToDp(100),
        backgroundColor: 'white',  
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: pxToDp(5),
        elevation: 3,
        shadowOffset: { width: 0, height: pxToDp(2) }
    },
    logo:{
        width: pxToDp(200),
        height: pxToDp(200),
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcomeText:{
        width: pxToDp(350),
        height: pxToDp(100),
        color: '#000',
        textAlign: 'center', 
        fontFamily: 'Quicksand_700Bold',
        fontSize: pxToDp(40),
        marginVertical: pxToDp(15),
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingLeft: 15,
        fontSize: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: pxToDp(10),
        elevation: 10,
        shadowOffset: { width: 0, height: pxToDp(2) }
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        height: 50,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: pxToDp(10),
        elevation: 10,
        shadowOffset: { width: 0, height: pxToDp(2) }
      },
      passwordInput: {
        flex: 1,
        height: '100%',
        paddingLeft: 15,
        fontSize: 16,
        
      },
      eyeIcon: {
        padding: 10,
        marginRight: 10,
      },
reset: {
  color: '#4F7B4A', 
  fontFamily: 'Quicksand_700Bold',
  fontSize: pxToDp(15),
  textDecorationLine: 'underline',
  marginVertical: pxToDp(10),},
Divider: {
  width: '80%',
  height: pxToDp(1),
   backgroundColor: '#000',
  alignSelf: 'center',
  marginVertical: pxToDp(10) },
buttonContainer:{
  width: '100%',
  alignItems: 'center',
  marginTop: pxToDp(30), 
  paddingBottom: pxToDp(20)
    },
button: {
        width: pxToDp(280),
        height: pxToDp(60),
        borderRadius: pxToDp(20),
        backgroundColor: '#2E4A32',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: pxToDp(10),
        elevation: 10,
        shadowOffset: { width: 0, height: pxToDp(2) },
        overflow: 'hidden'
    },
textButton: {
        color: 'white',
        fontFamily: 'Quicksand_700Bold',
        fontSize: 21
        },
textContainer:{
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        
    },
    signUpText:{
        fontFamily: 'Quicksand_700Bold',
        color: '#4F7B4A',
        marginLeft: pxToDp(5),
        fontSize: pxToDp(15),
        textDecorationLine: 'underline'
    },
    accountText:{
        fontFamily: 'Quicksand_400Regular',
        color: '#4F7B4A',
        fontSize: pxToDp(15)
    }, 
    signInContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: pxToDp(30)
      
    }
})