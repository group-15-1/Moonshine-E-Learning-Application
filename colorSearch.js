import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const App = () => {
  const [randomColor, setRandomColor] = useState("red");

  const colors = ["red", "green", "blue", "yellow"];

  const selectColor = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    setRandomColor(colors[randomNumber]);
  };

  const onPress = (color) => {
    if (color === randomColor) {
      Alert.alert("Correct!");
    } else {
      Alert.alert("Wrong!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find the Color</Text>
      <TouchableOpacity onPress={selectColor}>
        <Text style={{ color: randomColor }}>Find the Color</Text>
      </TouchableOpacity>
      {colors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[styles.button, { backgroundColor: color }]}
          onPress={() => onPress(color)}
        />
      ))}
    </View>
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
  },
  button: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
  },
});

export default App;
