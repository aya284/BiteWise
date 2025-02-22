import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles';
import { Button, Divider} from 'react-native-paper';

export default function UserType() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.topLeaf}/>
      <Image source={require('../assets/Images/leaf.png')} style= {styles.bottomLeaf}/>
      <Text style={styles.primaryText}>How will you be {'\n'}using the app ?</Text>
      <View style={styles.buttonUserContainer}>
          <Button mode='contained' style={styles.clientButton} >
            <View style={styles.textWrapper}>
              <Text style={styles.userText}>I'm here for my</Text>
              <Text style={styles.userText}>personal nutrition</Text>
              <Text style={styles.userText}>journey</Text>
            </View>
          </Button>
          <Button mode='contained' style={styles.proButton}>
          <View style={styles.textWrapper}>
              <Text style={styles.userText}>I'm a nutrition</Text>
              <Text style={styles.userText}>professional</Text>
            </View>
          </Button>
      </View>
      <View style={styles.DivLeafContainer}>
            <Divider style={styles.Divider} />
            <Image source={require('../assets/Images/twoLeafs.png')} style={styles.twoLeafs}/>
      </View>
      <View style={styles.buttonContainer}>
          <Button mode= 'contained' style={styles.button} labelStyle={styles.textButton} onPress={() => navigation.navigate('goalScreen')}>Next</Button>
      </View>
    </View>
  );
}
