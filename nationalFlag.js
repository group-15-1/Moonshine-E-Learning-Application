import React from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import nationalFlag from "../assets/national/nationalFlag.jpg";

const image = { uri: "" };

const App = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <Text style={styles.text}>National Flag</Text>
        <Image source={nationalFlag} style={styles.emb} />
        <Text style={styles.motto}>
          The National Flag of Sri Lanka represents the country and her heritage
          as rallying device that integrates the minorities with the majority
          race. Sri Lanka National Flag is an improvisation of the civil
          standard of the last king of Sri Lanka, Sri Wickrama Rajasingha. The
          civil standard had a passant royal lion with a sword in it’s right
          fore paw at the center, and a bo-leaf on each of the four corners on a
          plain border. When Sri Lanka gained her independence from Great
          Britain on February 04, 1948, it was the lion flag of the last king of
          Sri Lanka was hoisted once again. The first Prime Minister of
          independent Sri Lanka, D.S.Senanayake, appointed a committee to advice
          the government on the design of a new national flag. The design
          approved by the committee in February 1950 retained the symbol of the
          lion with the sword and the bo-leaves from the civil standard of the
          last king of Sri Lanka, with the inclusion of two vertical stripes
          green and orange in color. The significance of each symbol of the
          national flag is as follows: The lion in the flag represents the
          Sinhala race.The sword of the lion represents the sovereignty of the
          country.Curly hair on the lion’s head indicates religious observance,
          wisdom and meditation.The beard denotes purity of words.The handle of
          the sword highlights the elements of water, fire, air and earth.The
          nose indicates intelligence.The two front paws purport to purity in
          handling wealth.The vertical stripe of orange represent the minority
          Tamil race and the green vertical stripe the minority Muslim race.The
          four virtues of kindness: KINDNESS, FRIENDLINESS, HAPPINESS,
          EQUANIMITY are also represented in the flag.The border round the flag,
          which is yellow in color, represents other minor races.The bo-leaves
          at the four corners of the flag represent Buddhism and it’s influence
          on the nation. They also stand for the four virtues - Kindness,
          Friendliness, Happiness and Equanimity.The maroon colored portion of
          the flag manifests the other minor religions.The national flag was
          hoisted for the first time on March 3, 1950.
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
    marginTop: 80,
  },
  motto: {
    color: "black",
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  emb: {
    height: 125,
    width: 250,
    marginLeft: 75,
    marginBottom: 20,
  },
});

export default App;
