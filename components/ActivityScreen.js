import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import TabNavigation from './TabNavigation';
import styles from './Styles';
export default function ActivityScreen() {
  return (
    <View style={styles.mainContainer}>
      <Header subtitle='Activity Log'/>
      <TabNavigation/>
      <Text style={[styles.caloriesText, {padding: 15}]}>Activity Type</Text>
    </View>
  );
}
