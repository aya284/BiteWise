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
      <View buttonContainer>
          <Button mode='contained' style={styles.clientButton}>I'm here for my {'\n'} personal nutrition {'/n'} journey</Button>
          <Button mode='contained' style={styles.proButton}>I'm a nutrition {'\n'} professional</Button>
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
