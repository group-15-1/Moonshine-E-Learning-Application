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
  uri: "https://i.pinimg.com/564x/47/2a/83/472a836403e83c54c1c662f1a245d8ca.jpg",
};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <Text style={styles.text}>The Hare And The Tortoise</Text>

        <Text style={styles.motto}>
          One fine day a hare was being a bit unkind and made fun of his friend
          the tortoise for being such a slowcoach. The hare laughed and laughed
          and said, "How you ever actually get anywhere?" "Hmmm," replied the
          tortoise, "Oh, I get there all right and much sooner than you might
          think. Why don’t we run a race and you will find out?" The hare
          thought this was highly amusing and giggled as he pictured himself
          zipping along miles ahead of the slow old tortoise. “Okay, you’re on,”
          agreed the hare. They got their friend the fox to act as the judge and
          he counted down, “5,4,3,2,1 and off you go!” Very quickly, the hare
          raced ahead and he was way off in the distance as the tortoise crept
          slowly along on his little legs, carrying the heavy shell on his back.
          The hare knew the tortoise was a very long way back and would take
          ages to catch up. So he thought he would have a little sleep and that
          would make the tortoise feel very silly for challenging him, a hare,
          to a race. Then he could spring up and dash for the finish line. Now,
          the tortoise just kept plodding slowly and steadily along and, as time
          went on, he passed the spot where the hare lay fast asleep. The
          tortoise just kept going until he was very close to the finish line.
          The hare suddenly woke up and ran as fast as he could but he was too
          late. The tortoise crossed the line and was declared the winner. And
          the moral of that story is that it's not always the fastest who wins
          the race. The End
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
    color: "black",
    fontSize: 50,
    lineHeight: 70,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: '#000000c0',
    paddingBottom: 10,
  },
  motto: {
    color: "black",
    fontSize: 20,
    lineHeight: 40,
    // fontWeight: 'bold',
    textAlign: "center",
    paddingBottom: 10,
  },
});

export default App;
