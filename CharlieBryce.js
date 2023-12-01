import React from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const image = {
  uri: "https://i.pinimg.com/564x/45/2f/7f/452f7fa75831ab6bfd2e6e4c27c6078b.jpg",
};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <Text style={styles.text}>Charlie Bryce</Text>

        <Text style={styles.motto}>
          This is the tale of Charlie Bryce, A boy who found one hundred lice,
          Skip-skipping in his greasy hair, And jumping high into the air. In
          morning class at school that day, Before they all went out to play, A
          nasty little louse broke free, And landed on poor Emily, Who screamed
          aloud for all to hear, “Something’s wiggling in my ear!” Miss Morris
          calmed the classroom down, Then turned to Charlie with a frown, And
          said, “Hold still! And please don’t scream, I’ve called the fumigation
          team.” A moment later six big brutes, Dressed head to toe in yellow
          suits, Broke down the wooden classroom door, And flung poor Charlie to
          the floor. The brutes released one hundred mice, To feast upon the
          wretched lice, And then—I promise you, no joke—, They pumped his hair
          with bright green smoke. From that day on the whole high school,
          Thought Charlie Bryce was super cool. The lice had gone. His hair was
          clean, And stayed the most outrageous green! The End
        </Text>
      </ScrollView>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
    lineHeight: 70,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: '#000000c0',
    paddingBottom: 10,
  },
  motto: {
    color: "white",
    fontSize: 20,
    lineHeight: 40,
    // fontWeight: 'bold',
    textAlign: "center",
    paddingBottom: 10,
  },
});

export default App;
