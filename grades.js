import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// importing linking from react native
import { Linking } from "react-native";

// links of the jamboard activities
const url1 = "https://forms.gle/M9bJVDpTD2yC3DpJ8";
const url2 =
  "https://docs.google.com/forms/d/e/1FAIpQLScFOpskxR_hGRWklwywoEp6o7z8gQldW1HnQlw-ShLcCM1y6Q/viewform?usp=sf_link";
const url3 = "https://forms.gle/x9re7YkqPMBZnMvz6";
const url4 =
  "https://docs.google.com/forms/d/e/1FAIpQLSeC-omTRduppIUAlwZD_W6zwAtoCL9vC-U0dfMeXKCKQHv6LA/viewform?usp=sf_link";
const url5 =
  "https://docs.google.com/forms/d/e/1FAIpQLSeFgttqnXNx38b7DX6JvH1ej79HDhOp7r4vIeiNS1hLevnDYQ/viewform?usp=sf_link";
const url6 =
  "https://docs.google.com/forms/d/e/1FAIpQLSfyzqSOsohKXIMiPCtZw6V1_lK3OjP1xNXqDy6tHUtrDXdGHw/viewform?usp=sf_link";

const image = {
  uri: "https://i.pinimg.com/564x/e2/5d/39/e25d3924a758a568e91dab7785018380.jpg",
};

const App = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <Text style={styles.topic}>Grades</Text>
        <Text style={styles.motto}>Every Day is a Chance To Learn</Text>
        <TouchableOpacity onPress={() => Linking.openURL(url1)}>
          <Text style={styles.text}>Vegitables</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(url2)}>
          <Text style={styles.text}>colours</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(url3)}>
          <Text style={styles.text}>Fruits & Alphabet</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(url4)}>
          <Text style={styles.text}>Numbers</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(url5)}>
          <Text style={styles.text}>Fruit picture quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(url6)}>
          <Text style={styles.text}>Animals picture quiz</Text>
        </TouchableOpacity>
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
    fontSize: 35,
    margin: 12,
    textAlign: "center",
  },
  motto: {
    color: "black",
    fontSize: 30,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
  },
  topic: {
    marginTop: 100,
    textAlign: "center",
    fontSize: 50,
    color: "green",
    fontWeight: "bold",
  },
});

export default App;
