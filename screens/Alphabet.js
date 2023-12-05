// importing items to the page
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
 } from 'react-native';
 
 // importing all the images from assets folder
 import A from '../assets/letters/A.jpg';
 import B from '../assets/letters/B.jpg';
 import C from '../assets/letters/C.jpg';
 import D from '../assets/letters/D.jpg';
 import E from '../assets/letters/E.jpg';
 import F from '../assets/letters/F.jpg';
 import G from '../assets/letters/G.jpg';
 import H from '../assets/letters/H.jpg';
 import I from '../assets/letters/I.jpg';
 import J from '../assets/letters/J.jpg';
 import K from '../assets/letters/K.jpg';
 import L from '../assets/letters/L.jpg';
 import M from '../assets/letters/M.jpg';
 import N from '../assets/letters/N.jpg';
 import O from '../assets/letters/O.jpg';
 import P from '../assets/letters/P.jpg';
 import Q from '../assets/letters/Q.jpg';
 import R from '../assets/letters/R.jpg';
 import S from '../assets/letters/S.jpg';
 import T from '../assets/letters/T.jpg';
 import U from '../assets/letters/U.jpg';
 import V from '../assets/letters/V.jpg';
 import W from '../assets/letters/W.jpg';
 import X from '../assets/letters/X.jpg';
 import Y from '../assets/letters/Y.jpg';
 import Z from '../assets/letters/Z.jpg';
 
 const Alphabet_Images = (props) => {
    return (
       <View style={styles.mainComponent}>
          <View style={styles.component1}>
          <View style={styles.imageComponent1}>
             <Image source={props.Image1} style={styles.Img} />
          </View>
          <View style={styles.imageComponent2}>
             <Text style={styles.letters}>{props.letter1}</Text>
             <Text style={styles.name}>{props.example1}</Text>
          </View>
       </View>
       <View style={styles.component2}>
          <View style={styles.imageComponent1}>
             <Image source={props.Image2} style={styles.Img} />
          </View>
          <View style={styles.imageComponent2}>
             <Text style={styles.letters}>{props.letter2}</Text>
             <Text style={styles.name}>{props.example2}</Text>
          </View>
       </View>
       </View>
    );
 }
 
 const alphabetPage = () => {
    return (
       <View style={styles.container}>
          <ScrollView>
             <Text></Text>
                <Alphabet_Images
                   Image1={A} letter1="Aa" example1="apple"
                   Image2={B} letter2="Bb" example2="ball"
                />
                <Alphabet_Images
                   Image1={C} letter1="Cc" example1="cat"
                   Image2={D} letter2="Dd" example2="dog"
                />
                <Alphabet_Images
                   Image1={E} letter1="Ee" example1="egg"
                   Image2={F} letter2="Ff" example2="fish"
                />
                <Alphabet_Images
                   Image1={G} letter1="Gg" example1="goat"
                   Image2={H} letter2="Hh" example2="hat"
                />
                <Alphabet_Images
                   Image1={I} letter1="Ii" example1="igloo"
                   Image2={J} letter2="Jj" example2="jam"
                />
                <Alphabet_Images
                   Image1={K} letter1="Kk" example1="king"
                   Image2={L} letter2="Ll" example2="lion"
                />
                <Alphabet_Images
                   Image1={M} letter1="Mm" example1="moon"
                   Image2={N} letter2="Nn" example2="nut"
                />
                <Alphabet_Images
                   Image1={O} letter1="Oo" example1="orange"
                   Image2={P} letter2="Pp" example2="pig"
                />
                <Alphabet_Images
                   Image1={Q} letter1="Qq" example1="queen"
                   Image2={R} letter2="Rr" example2="rocket"
                />
                <Alphabet_Images
                   Image1={S} letter1="Ss" example1="sun"
                   Image2={T} letter2="Tt" example2="tree"
                />
                <Alphabet_Images
                   Image1={U} letter1="Uu" example1="umbrella"
                   Image2={V} letter2="Vv" example2="van"
                />
                <Alphabet_Images
                   Image1={W} letter1="Ww" example1="watch"
                   Image2={X} letter2="Xx" example2="fox"
                />
                <Alphabet_Images
                   Image1={Y} letter1="Yy" example1="yo-yo"
                   Image2={Z} letter2="Zz" example2="zip"
                />
          </ScrollView>
       </View>
    );
 }
 
 // styles of the components included in the page
 const styles = StyleSheet.create({
    container: {
       backgroundColor: '#fff',
       justifyContent: 'center',
       alignItems: 'center',
    },
    mainComponent: {
       width: 432,
       height: 140,
       flexDirection: 'row',
       marginLeft: 10,
    },
    component1: {
       height: 185,
       width: 172,
       flexDirection: 'row',
    },
    component2: {
       height: 185,
       width: 172,
       flexDirection: 'row',
       marginLeft: 20,
    },
 
    Img: {
       width: 82,
       height: 90,
       borderRadius: 8,
       marginTop: 6,
    },
 
    imageComponent1: {
       width: 92,
       height: 120,
       borderWidth: 3,
       borderColor: '#b2ebf2', 
       borderTopLeftRadius: 10,
       borderBottomLeftRadius: 10,
    },
    imageComponent2: {
       width: 92,
       height: 120,
       borderWidth: 3,
       borderColor: '#b2ebf2', 
       borderTopRightRadius: 10,
       borderBottomRightRadius: 10,
    },
    letters: {
       fontSize: 44,
       fontWeight: 'bold',
       textAlign: 'center',
    },
 
    name: {
       textAlign: 'center',
       fontSize: 19,
       paddingTop: 8,
       borderTopWidth: 2,
       borderTopColor: '#b2ebf2',
       paddingBottom: 9,
    },
 });
 
 export default alphabetPage;