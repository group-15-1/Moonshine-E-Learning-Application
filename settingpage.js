import React from 'react';

import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';


const image = { uri: 'https://i.pinimg.com/564x/e2/5d/39/e25d3924a758a568e91dab7785018380.jpg' };


const App = (props) => (

    <View style={styles.container}>

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

            <TouchableOpacity onPress={() => props.navigation.navigate('aboutUs')}>

                <Text style={styles.text}>About us</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('help')}>

                <Text style={styles.text}>Help </Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('notification')}>

                <Text style={styles.text}>Notification</Text>

            </TouchableOpacity>


        </ImageBackground>



    </View>

);


const styles = StyleSheet.create({

    container: {

        flex: 1,

    },

    image: {

        flex: 1,

        justifyContent: 'center',

    },

    text: {

        color: 'black',

        fontSize: 30,

        lineHeight: 84,

        fontWeight: 'bold',

        textAlign: 'center',

        // backgroundColor: '#000000c0',

        paddingBottom: 10,

    },

});



export default App;