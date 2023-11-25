// importing items to the page
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

// import all the images from the assets folder
import V2 from "../assets/vegetable/V2.jpg";
import V3 from "../assets/vegetable/V3.jpg";
import V4 from "../assets/vegetable/V4.jpg";
import V5 from "../assets/vegetable/V5.jpg";
import V6 from "../assets/vegetable/V6.jpg";
import V7 from "../assets/vegetable/V7.jpg";
import V8 from "../assets/vegetable/V8.jpg";
import V9 from "../assets/vegetable/V9.jpg";
import V10 from "../assets/vegetable/V10.jpg";
import V11 from "../assets/vegetable/V11.jpg";
import V12 from "../assets/vegetable/V12.jpg";
import V13 from "../assets/vegetable/V13.jpg";
import V14 from "../assets/vegetable/V14.jpg";
import V15 from "../assets/vegetable/V15.jpg";
import V16 from "../assets/vegetable/V16.jpg";
import V17 from "../assets/vegetable/V17.jpg";
import V18 from "../assets/vegetable/V18.jpg";
import V19 from "../assets/vegetable/V19.jpg";
import V20 from "../assets/vegetable/V20.jpg";
import V21 from "../assets/vegetable/V21.jpg";
import V22 from "../assets/vegetable/V22.jpg";
import V23 from "../assets/vegetable/V23.jpg";
import V24 from "../assets/vegetable/V24.jpg";
import V25 from "../assets/vegetable/V25.jpg";

const Vegitable_Image = (props) => {
  return (
    <View style={styles.component}>
      <View style={styles.imageComponent}>
        <Image source={props.Image1} style={styles.Img} />
        <Text style={styles.name}>{props.vegitableName1}</Text>
      </View>
      <View style={styles.imageComponent}>
        <Image source={props.Image2} style={styles.Img} />
        <Text style={styles.name}>{props.vegitableName2}</Text>
      </View>
      <View style={styles.imageComponent}>
        <Image source={props.Image3} style={styles.Img} />
        <Text style={styles.name}>{props.vegitableName3}</Text>
      </View>
    </View>
  );
};

const vegitablesPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text></Text>
        <View>
          <Vegitable_Image
            Image1={V2}
            vegitableName1="corn"
            Image2={V3}
            vegitableName2="eggplant"
            Image3={V4}
            vegitableName3="leek"
          />
        </View>
        <View>
          <Vegitable_Image
            Image1={V5}
            vegitableName1="lettuce"
            Image2={V6}
            vegitableName2="mushroom"
            Image3={V7}
            vegitableName3="onion"
          />
        </View>
        <View>
          <Vegitable_Image
            Image1={V8}
            vegitableName1="gherkin"
            Image2={V9}
            vegitableName2="raddish"
            Image3={V10}
            vegitableName3="tomato"
          />
        </View>
        <View>
          <Vegitable_Image
            Image1={V11}
            vegitableName1="sweet potato"
            Image2={V12}
            vegitableName2="sprouts"
            Image3={V13}
            vegitableName3="spinach"
          />
        </View>
        <View>
          <Vegitable_Image
            Image1={V14}
            vegitableName1="pumpkin"
            Image2={V15}
            vegitableName2="potato"
            Image3={V16}
            vegitableName3="pepper"
          />
        </View>
        <View>
          <Vegitable_Image
            Image1={V17}
            vegitableName1="garlic"
            Image2={V18}
            vegitableName2="cucumber"
            Image3={V19}
            vegitableName3="chilli"
          />
        </View>
        <View>
          <Vegitable_Image
            Image1={V20}
            vegitableName1="cauliflower"
            Image2={V21}
            vegitableName2="carrot"
            Image3={V22}
            vegitableName3="cabbage"
          />
        </View>
        <View>
          <Vegitable_Image
            Image1={V23}
            vegitableName1="broccoli"
            Image2={V24}
            vegitableName2="beets"
            Image3={V25}
            vegitableName3="peas"
          />
        </View>
      </ScrollView>
    </View>
  );
};

// styles of the components included in the page
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  component: {
    height: 180,
    width: 420,
    flexDirection: "row",
    alignItems: "center",
  },

  Img: {
    width: 106,
    height: 108,
    borderRadius: 8,
  },

  imageComponent: {
    width: 114,
    height: 162,
    borderWidth: 3.5,
    borderColor: "#ffeb3b",
    borderRadius: 10,
    margin: 8,
  },

  name: {
    textAlign: "center",
    fontSize: 17,
    paddingTop: 8,
    borderTopWidth: 3,
    borderTopColor: "#ffeb3b",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingBottom: 9,
  },
});

export default vegitablesPage;
