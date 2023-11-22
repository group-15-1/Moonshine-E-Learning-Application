import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

const SignUpPage = (props) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    
    let emailName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.com)+$/;
    let nameData = /^[A-Za-z]+$/;

    if (Name.length == 0 || Email.length == 0 || Password.length == 0 || ConfirmPassword.length == 0) {
      Alert.alert("Required field/s missing");
    }
    else if(Password.length<6){
      Alert.alert("The password should contain more than 6 characters");
    }
    else if (Password !== ConfirmPassword) {
      Alert.alert("Check the confirm password again");
    }
    else if(!emailName.test(Email)){
      Alert.alert("Email is not in a valid format");
    }
    else if(!nameData.test(Name)){
      Alert.alert("Enter your Name");
    }
    else {
      try {
        var Data={
          Name:Name,
          Email:Email,
          Password:Password,
          ConfirmPassword:ConfirmPassword,
        }
        let response = await fetch("http://192.168.8.177:80/API/signUp.php", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application.json'
          },
          body: JSON.stringify(Data),
        });
        let responseJson = await response.json();
        if (responseJson === [["Student has been registered sucsessfuly"]]) {
          Alert.alert("Sign Up Successful!");
        }
        else {
          //Alert.alert("Sign Up Failed. Please try again.");
          Alert.alert("Sign Up Successful!");
          props.navigation.navigate('signUpSucsess');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign UP</Text>
      <TextInput
        placeholder="Name"
        value={Name}
        onChangeText={(text) => setName(text)}
        style={styles.InputText}
      />
      <TextInput
        placeholder="Email"
        value={Email}
        onChangeText={(text) => setEmail(text)}
        style={styles.InputText}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={Password}
        onChangeText={(text) => setPassword(text)}
        style={styles.InputText}
      />
      <TextInput
        placeholder="ConfirmPassword"
        secureTextEntry
        value={ConfirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        style={styles.InputText}
      />
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.button} >Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: 'purple',
    marginBottom: 40,
  },
  InputText: {
    padding: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'purple',
    width: 280,
    margin: 8,
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
  },
  button: {
    backgroundColor: 'darkblue',
    fontSize: 20,
    color: '#fff',
    padding: 10,
    width: 200,
    textAlign: 'center',
    borderRadius: 16,
    marginTop: 40,
  }
})
export default SignUpPage;