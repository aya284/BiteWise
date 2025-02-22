import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles';
import {useRoute} from '@react-navigation/native'
export default function GoalScreen() {
  const route = useRoute();
  const {userName} = route.params; // getting the past name 
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.topLeaf}/>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.bottomLeaf}/>
      <Text style={styles.primaryText}>Hello, {userName} !</Text>
      <Text style={styles.secondaryText}>what's your main goal?</Text>
    </View>
  );
}
