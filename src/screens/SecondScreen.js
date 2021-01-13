import React from 'react';
import { View, Text, Button, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const SecondScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>React Navigation</Text>
            <Image source={require('../images/second.jpg')} style={styles.image} />
            <View>
                <Text style={{ marginBottom: 10, fontSize: 25, alignSelf: 'center' }}>What is React Navigation?</Text>
                <Text style={styles.description}>React Navigation is the library that allows us to navigate between screens such as going to the next   slide of presentation.</Text>
                <Text style={{ marginTop: 10, fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'Next'</Text> button to go to the next screen.</Text>
                <Text style={{ fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'See more!'</Text> button to see datails.</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Web', { link: 'https://reactnavigation.org/', title: 'React Navigation documentation site', screen: 'Second' })}><Text style={styles.textButton}>See more!</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Third')}><Text style={styles.textButton}>Next</Text></TouchableOpacity>
            </View>
        </SafeAreaView>)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'android' ? 35 : 0

    },
    title: {
        fontSize: 40,
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        height: '60%'
    },
    description: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'black'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15
    },
    button: {
        flex: 1,
        backgroundColor: 'rgb(33,150,245)',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10
    },
    textButton: {
        color: 'white',
        fontSize: 20
    }
})

export default SecondScreen
