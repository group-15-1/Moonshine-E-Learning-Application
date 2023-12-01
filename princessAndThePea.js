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
  uri: "https://i.pinimg.com/564x/45/f7/2c/45f72c6607fce13fc388a3820d30f0cc.jpg",
};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <Text style={styles.text}>The Princess And The Pea</Text>

        <Text style={styles.motto}>
          In a land far far away there was a glorious kingdom. In the kingdom
          stood a great castle. And inside the castle lived a handsome Prince.
          The Prince was sad. He longed for a true Princess to share his castle
          and kingdom, but he couldn't find one. This was not because there was
          a lack of Princesses. In fact, the kingdom was full of fair maidens
          all claiming to be Princesses. The Prince scoured the kingdom, meeting
          every one of these so-called Princesses. But he returned sad and empty
          handed. “It is impossible to tell whether these are true Princesses!”
          he said to his Father, the King. “You must be patient my son. You will
          know when you know” said the King, with a knowing smile. The Prince
          smiled back, then went to his chamber. That evening a huge storm came.
          Thunder clapped. Lightning flashed. And the rain clattered down on the
          castle roof like the sound of a thousand horses charging into battle.
          Suddenly, came a loud knock at the castle door. The King put on his
          robe and opened the door to find a cold, soggy young lady standing in
          front of him. “I am a true Princess,” she said, “Please can I have
          some dry clothes and a bed for the night?” The King let her in. “She
          says she is a true Princess,” said the King to the old Queen-mother.
          The Queen-mother didn’t say a word. Instead, she thought to herself,
          “We’ll soon see about that”. She then handed the Princess a nightgown
          and said, “put this on while I prepare your chamber.” The Queen-mother
          began preparing the chamber—but in a very peculiar way. First, she
          took the covers, sheets and mattress off the bed. Then she placed a
          single garden pea on the bedstead. And then she laid twenty mattresses
          on top of the pea taking care to separate each layer with a soft
          eiderdown quilt. After this she replaced the bedclothes on the top
          mattress and said to the Princess, “Your chamber is ready!” The bed
          was now so high off the ground that the Princess needed to climb a
          ladder to get into the bed. The Princess climbed up the ladder, got
          under the covers and blew out her candle. At breakfast the next
          morning the Queen-mother turned to the Princess and asked, “My dear
          Princess, how did you sleep?” “Oh, not at all well,” said the
          Princess. “I mean to say, I am extremely grateful for your kindness in
          putting me up for the night, but there seemed to be something ever so
          hard and uncomfortable under my mattress. I didn’t sleep a wink.” “My
          my!” replied the Queen-mother, “is that so?” The Queen-mother turned
          to the Prince and said, “I believe we have found your true Princess,
          for none but a true Princess possesses such a delicate sense to feel a
          single pea through twenty mattresses and twenty of my finest quilts.
          You must wed immediately!” The Prince was overjoyed. He turned to the
          Princess and said, “Dear Princess, would you do me the great honour of
          becoming my wife?” She blushed, then taking a moment to finish a
          mouthful of cereal, said, “On one condition.” “Anything!” replied the
          Prince. She looked back at the Prince with a cheeky grin and said,
          “That you promise, dear Prince, that from this day forward that any
          pea that should enter this castle is simply for eating. And not for
          sleeping upon.” The Prince looked back at her, chuckled and said, “I
          promise!” The End
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
