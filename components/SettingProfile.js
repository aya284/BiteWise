import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, Switch} from 'react-native';
import styles from './Styles';
import {useState} from 'react';


export default function SettingProfile() {
  const [selected, setSelected] = useState(null);
  const handleOptions = (option) =>{
  setSelected(option)}
  const [customInput, setCustomInput] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState); //toggle between true aand false 
  return (
    <View style={styles.container}>
        <View>
          <Image source={require('../assets/Images/leaf.png')} style= {styles.topLeaf}/>
          <Image source={require('../assets/Images/leaf.png')} style= {styles.bottomLeaf}/>
        </View>
      <ScrollView >
      <Text style={styles.primaryText}>Let's set up your profile</Text>
      <Text style={styles.secondaryText}>What is your gender?</Text>
      <View style={styles.genderContainer}> {['Male', 'Female', 'Other'].map((option) => (
        <TouchableOpacity key={option} style={[
          styles.genderButton,
          selected === option && styles.selected, 
        ]} onPress={()=>handleOptions(option)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      
      </View>
      {selected==='Other' && (<TextInput style={[styles.input, styles.customGender]} placeholder='enter your gender' onChangeText={setCustomInput} value={customInput}/>)}
      <Text style={styles.secondaryText}>How old are you ?</Text>
      <TextInput style={[styles.input, styles.customGender]} placeholder='enter your age' />
      <Text style={styles.secondaryText}>What is your height ?</Text>
      <TextInput style={[styles.input, styles.customGender]} placeholder='enter your height' />
      <Text style={styles.secondaryText}>What is your weight ?</Text>
      <TextInput style={[styles.input, styles.customGender]} placeholder='enter your weight' /> 
      <Text style={styles.secondaryText}>What is your target weight ?</Text>
      
      </ScrollView>
    </View>
  );
}
