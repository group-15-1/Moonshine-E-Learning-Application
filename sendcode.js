import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';

import React, { useState } from "react";


export default function App(props) {

    const [findEmail, setFindEmail] = useState("");

    const updatePassword = ()=>{
  
       if(findEmail == 0){
        Alert.alert("Required Field is missing ");
       }
       else {
        fetch('http://IPAddress/Moonshine/SeachEmailToUpdatePassword.php', {
          method: 'post',
          header: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            // This will pass our input data to server
            findEmail: findEmail,
            
          }),
        })
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson == "ok") {
              props.navigation.navigate('resetPassword',{findEmail:findEmail});
            }
            else if(responseJson == "No matching Email"){
              Alert.alert("Please enter a valid Email");
            }
          
            else {
              Alert.alert("Try Again");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    
    }
  

  return (

    <View style={styles.container}>

      <Text style={styles.title1}>

        Reset Password

      </Text>

      <Text style={styles.title2}>Enter your Email address</Text>

      

      <StatusBar style="auto" />

      <View style={styles.inputView}>

        <TextInput

          style={styles.TextInput}

          placeholder="Email address."

          placeholderTextColor="#003f5c"

          value={findEmail}

          onChangeText={findEmail => setFindEmail(findEmail)}

          />

            </View>

      <TouchableOpacity style={styles.codeBtn} onPress={updatePassword}>

        <Text style={styles.codeText}>Next</Text>

      </TouchableOpacity>


    </View>

  );

}

const styles = StyleSheet.create({

    container: {

      flex: 1,

      backgroundColor: '#fff',

      alignItems: 'center',

      justifyContent: 'center',

    },

    title1:{

      marginBottom:190,

      marginTop:-100,

      fontSize:40,

      color:"#9c27b0",

      

    },

    title2:{

      marginBottom:50,

      marginTop:-70,

      fontSize:20,

    },

  

    inputView: {

      backgroundColor: "#fff",

      borderRadius: 30,

      width: "70%",

      height: 50,

      borderWidth: 2,

      borderColor:'#ba68c5',

      alignItems: "center",

      paddingTop: 8,

    },

    codeBtn: {

      width: "70%",

      borderRadius: 25,

      height: 50,

      alignItems: "center",

      justifyContent: "center",

      marginTop: 40,

      backgroundColor: "blue",

    },

    TextInput:{

      fontSize:17,

    },

    codeText:{

      color:'#fff',

      fontSize:20,

    }

   

  });