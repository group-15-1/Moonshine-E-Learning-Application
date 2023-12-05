import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

const QuizPage = (props) => {
  const [Email, setEmail] = useState("");
  const [Quiz1, setQuiz1] = useState("");
  const [Quiz2, setQuiz2] = useState("");
  const [Quiz3, setQuiz3] = useState("");
  const [Quiz4, setQuiz4] = useState("");

  const handleQuiz = () => {
    if (
      Email.length == 0 ||
      Quiz1.length == 0 ||
      Quiz2.length == 0 ||
      Quiz3.length == 0 ||
      Quiz4.length == 0
    ) {
      Alert.alert("Required field/s missing");
    } else {
      fetch("http://IP:80/Moonshine/FinalQuizSubmission.php", {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          // This will pass our input data to server
          Email: Email,
          Quiz1: Quiz1,
          Quiz2: Quiz2,
          Quiz3: Quiz3,
          Quiz4: Quiz4,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson == "Completed sucsessfuly") {
            Alert.alert("Submitted Successful!");
            props.navigation.navigate("dashboard");
          } else {
            Alert.alert("Please try again.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <View style={styles.container}>
      <Text styles={{ marginTop: 25 }}></Text>
      <Text style={styles.question}>Enter Your Email</Text>
      <TextInput
        placeholder="Enter Your Email"
        value={Email}
        onChangeText={(text) => setEmail(text)}
        style={styles.InputText}
      />
      <Text style={styles.title}>kids Questionnaire</Text>
      <Text style={styles.question}>What is 5 + 9</Text>
      <TextInput
        placeholder="Answer"
        value={Quiz1}
        onChangeText={(text) => setQuiz1(text)}
        style={styles.InputText}
      />
      <Text style={styles.question}>What is 15 - 3</Text>
      <TextInput
        placeholder="Answer"
        value={Quiz2}
        onChangeText={(text) => setQuiz2(text)}
        style={styles.InputText}
      />
      <Text style={styles.question}>What is 4 + 8</Text>
      <TextInput
        placeholder="Answer"
        value={Quiz3}
        onChangeText={(text) => setQuiz3(text)}
        style={styles.InputText}
      />
      <Text style={styles.question}>What is 10 - 2</Text>
      <TextInput
        placeholder="Answer"
        value={Quiz4}
        onChangeText={(text) => setQuiz4(text)}
        style={styles.InputText}
      />
      <TouchableOpacity onPress={handleQuiz}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "red",
    marginBottom: 40,
  },
  InputText: {
    padding: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "purple",
    width: 280,
    margin: 8,
    textAlign: "center",
    color: "black",
    fontSize: 15,
  },
  button: {
    backgroundColor: "darkblue",
    fontSize: 20,
    color: "#fff",
    padding: 10,
    width: 200,
    textAlign: "center",
    borderRadius: 16,
    marginTop: 40,
  },
  question: {
    fontSize: 25,
  },
});

export default QuizPage;
