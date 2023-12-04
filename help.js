import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HelpWantedPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help Wanted</Text>
      
      <Text style={styles.description}>
       Please contact us via 
       Gmail:moonshine@gmail.com

      </Text>
      <Text style={styles.contact}>moonshine.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  contact: {
    fontSize: 18,
    color:'blue',
  },
});

export default HelpWantedPage;