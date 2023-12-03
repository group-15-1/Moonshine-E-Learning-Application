import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Alert
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    };
  }

  login = () => {
    const { userEmail, userPassword } = this.state;
    //let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userEmail == '') {
      Alert.alert("Please enter Email address");
      this.setState({ email: 'Please enter Email address' });
    }
    
     else {
      fetch('http://IP/login_api/login_new.php', {
        method: 'post',
        header: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          // This will pass our input data to server
          email: userEmail,
          password: userPassword,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson == "ok"){
            Alert.alert("Login sucsess");
            this.props.navigation.navigate('dashboard')
          }
          else if(responseJson == "No account yet"){
            Alert.alert("No account. Plese create a new account")
          }
          else{
            Alert.alert("wrong details")
            console.log(responseJson)
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Log In</Text>
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          onChangeText={(userEmail) => this.setState({ userEmail })}
        />

        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          onChangeText={(userPassword) => this.setState({ userPassword })}
        />
        <Text>Forgot Password?</Text>
        <TouchableOpacity
          onPress={this.login}
          style={{
            width: 200,
            padding: 10,
            backgroundColor: 'darkblue',
            alignItems: 'center',
            borderRadius: 12,
            margin: 30,
          }}>
          <Text style={{ color: 'white', fontSize: 20,}}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Do you have an account?</Text>
        <TouchableOpacity
           style={{
            color: 'blue',
            padding: 20,
           }}
           onPress={() => this.props.navigation.navigate('signUp')}>
           <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loginText: {
    fontSize: 60, 
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 90,
    textAlign: 'center',
  },
  input: {
    borderColor: 'darkblue',
    borderWidth:2,
    width: 300,
    borderRadius: 18,
    height: 45,
    margin: 15,
    textAlign: 'center',
    color: 'black',
  },
  text:{
    fontSize: 20,
  },
  signup:{
    color: 'blue',
    fontSize: 16,
  }
});
