import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles'
import Header from './Header';
import TabNavigation from './TabNavigation';
export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <TabNavigation />
    </View>
  );
}
