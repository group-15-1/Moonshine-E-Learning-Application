import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const AboutUsPage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")} />
      <View style={styles.header}>
        
        <Text style={styles.title}>About Us</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
         The pre school students will face diffculties when they engage in the activties at the grade one.
         The mooshine mobile application is desinged to minimized the diffculties the students might face in grade one.
        </Text>
        <Text style={styles.missionTitle}>Our Mission</Text>
        <Text style={styles.missionDescription}>
        Providing a virtual learning environment for pre school student free of charge and enlighten the future of pre school students.
                                         
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Company Name. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 60,
    marginTop:90,
    marginLeft:140,
    marginBottom:50,
    
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:10,
    marginTop:-50,

  },
  content: {
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    marginBottom:40,
  },
  missionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center',
    marginBottom:40,
  },
  missionDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});

export default AboutUsPage;