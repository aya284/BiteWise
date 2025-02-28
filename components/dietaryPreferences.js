import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { useState} from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export default function DietaryPreferences() {
const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const handleOptions = (option) =>{
    setSelected(option);
  } 
  const handleSelect = () =>{
   if (selected){
    navigation.navigate('ActivityLevel', { goal: selected });
   }
   else{
    Alert.alert('Please select an option !')
   }
  }
  return (
    <View style= {styles.container}>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.topLeaf}/>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.bottomLeaf}/>
      <Text style={styles.transformationText}>Do you have any dietary prefernces or resrictions ? </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.optionsContainer}> {['Vegan 🌱', 'Vegetarian 🥕', 'Pescatarian 🐟', 'Gluten-Free 🌾', 'Lactose Intolerant 🥛', 'Low-Soduim Diet 🧂', 'Seafood or Shellfish Allergy 🦐', 'Diabetic-Friendly Diet 🍬','No Restrictions ✅',' Other ✏️'].map((option) => (
          <TouchableOpacity key={option} style={[
             styles.optionButton,
             selected === option && styles.selected, 
             ]} onPress={()=>handleOptions(option)}>
          <Text style={styles.optionText}>{option}</Text>
         </TouchableOpacity>
            ))}
           <View style={styles.buttonContainer}>
            <Button mode= 'contained' style={styles.button} labelStyle={styles.textButton} onPress={() => {
              handleSelect(); 
             } }>Next</Button>
           </View>
        
     </View>
     </ScrollView>
    </View>
  );
}
