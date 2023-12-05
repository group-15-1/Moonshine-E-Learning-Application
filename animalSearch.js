import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const App = () => {
  const [randomAnimal, setRandomAnimal] = useState({
    name: "Lion",
    image: require("../assets/games/lion.jpg"),
  });

  const animals = [
    { name: "Lion", image: require("../assets/games/lion.jpg") },
    { name: "Cat", image: require("../assets/games/kitty.jpg") },
    { name: "Elephant", image: require("../assets/games/elephant.jpg") },
    { name: "Giraffe", image: require("../assets/games/giraff.jpg") },
  ];

  const selectAnimal = () => {
    const randomNumber = Math.floor(Math.random() * animals.length);
    setRandomAnimal(animals[randomNumber]);
  };

  const onPress = (animal) => {
    if (animal.name === randomAnimal.name) {
      Alert.alert("Correct!");
    } else {
      Alert.alert("Wrong!");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Find the Animal Name</Text>
        <TouchableOpacity onPress={selectAnimal}>
          <Image source={randomAnimal.image} style={styles.image} />
        </TouchableOpacity>
        {animals.map((animal) => (
          <TouchableOpacity
            key={animal.name}
            style={styles.button}
            onPress={() => onPress(animal)}
          >
            <Image source={animal.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    marginTop: 80,
  },
  image: {
    width: 175,
    height: 182,
  },
  button: {
    margin: 10,
  },
});

export default App;
