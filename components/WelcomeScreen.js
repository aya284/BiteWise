import React from 'react';
import { Text, View, Image, StyleSheet ,PixelRatio, Dimensions, Pressable } from "react-native";
import {Divider, Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LogIn from './LogIn';
import NameScreen from './NameScreen';
export default function WelcomeScreen (){
    const navigation = useNavigation();
return(
<View style={styles.container}>
  <View style={styles.logoContainer}>
     <View style={styles.circle}>
        <Image source={require('../assets/Images/logo.png')} style={styles.logo}/>
     </View>
   </View>
    <Image source={require('../assets/Images/leaf.png')} style= {styles.topLeaf}/>
    <View style={styles.textContainer}>
       <Text style={styles.appNameText}>BiteWise</Text>
       <Text style={styles.subNameText}>Your Smart Guide to Healthy {'\n'} Eating</Text>
    </View>
    <View style={styles.buttonContainer}>
           <Button mode='contained' style={styles.firstButton} labelStyle={styles.buttonText} onPress={() => navigation.navigate(NameScreen)}>Get Started</Button>
    </View>
    <View style={styles.dividerContainer}>
         <Divider style={styles.divider}/>
    </View>
    <View style={styles.footerContainer}>
          <View style={styles.accountContainer}>
             <Image source={require('../assets/Images/banana.png')} style={styles.banana}/>
             <Text style={styles.accountText}>already have an account ?</Text>
             <Button mode='contained'  style={styles.logInButton} labelStyle= {styles.logInText}  onPress={() => navigation.navigate(LogIn)}>Log In</Button>
          </View>
    </View>
</View>);}
const { width } = Dimensions.get("window");
const pxToDp = (px) => px * (width / 390);
const styles = StyleSheet.create ({
    container:{
       flex: 1,
       backgroundColor:'#F5E4C3',
       alignItems: 'center',
     
       paddingVertical: pxToDp(40),
       
    },
    accountContainer: {
        flexDirection: 'row',  
        alignItems: 'center', 
        justifyContent: 'center',  
        marginBottom: pxToDp(25),
        width: '100%',
        paddingHorizontal: pxToDp(15)
     },
    footerContainer:{
        width: '100%',
        alignItems: 'center',
        bottom: pxToDp(20),
        position: 'absolute'
     },
    logoContainer: {
            marginTop: pxToDp(50),
            alignItems: 'center'
        },
         
    logo:{
        width: pxToDp(210),
        height: pxToDp(210),
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center'
      

    },  
    circle:{
        width: pxToDp(180),
        height:pxToDp(167),
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
    textContainer: {
        marginTop: pxToDp(40),
        marginBottom: pxToDp(30),
        alignItems: 'center'
     },
     
    appNameText:{
        width: pxToDp(292),
        height: pxToDp(78),
        color: '#000',
        textAlign: 'center', 
        fontFamily: 'Quicksand_700Bold',
        fontSize: pxToDp(54),
        marginBottom: pxToDp(25)
        },
        
       
    subNameText:{
        width: pxToDp(286),
        height: pxToDp(60),
        color:'#4F7B4A',
        textAlign: 'center',
        fontFamily: 'Quicksand_700Bold',
        fontSize: pxToDp(20)
        
      
        },
    buttonContainer:{
        width: '100%',
        alignItems: 'center',
        marginTop: pxToDp(30), 
        paddingBottom: pxToDp(20),
    },
    firstButton: {
        width: pxToDp(280),
        height: pxToDp(60),
        borderRadius: pxToDp(20),
        backgroundColor: '#2E4A32',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: pxToDp(80),
        marginTop: pxToDp(40),
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: pxToDp(10),
        elevation: 10,
        shadowOffset: { width: 0, height: pxToDp(2) }
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Quicksand_700Bold',
        fontSize: 21
        },
    dividerContainer:{
        flexGrow: 1,  
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',  
        marginVertical: pxToDp(4), 
        paddingBottom: pxToDp(90)
    },    
    divider: {
        width: '80%',
        height: pxToDp(1),
        backgroundColor: '#000',
        
    },

    accountText:{
        color: '#4F7B4A',
        textAlign: 'center',
        fontFamily: 'Quicksand_700Bold',
        fontSize: pxToDp(14),
        marginRight: pxToDp(5)
        
    },

    logInButton:{
        width: pxToDp(100),
        height: pxToDp(40),
        borderRadius: pxToDp(10),
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: pxToDp(10),
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: pxToDp(10),
        elevation: 10,
        shadowOffset: { width: 0, height: pxToDp(2) }
    },    
    logInText:{
        color: '#2E4A32',
        fontFamily: 'Quicksand_700Bold',
        fontSize: 15,
        flexShrink: 1,
        textAlign: 'center',
        width: pxToDp(95)

    },
    banana:{
        width: pxToDp(40),
        height: pxToDp(40),
        transform: [{ rotate: '176.64deg' }, {scaleY: -1}],
        marginLeft: pxToDp(5)
    },

    topLeaf:{
        width: 200,
        height: 200,
        transform: [{ rotate: '91.171deg' }],
        top: -3,
        left: -14,
        position: 'absolute',
        resizeMode: 'contain'
    }
        




})