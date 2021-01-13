import React from 'react';
import { View, Text, Button, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const FourthScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Stack Navigator</Text>
            <Image source={require('../images/fourth.png')} style={styles.image} />
            <View>
                <Text style={{ marginBottom: 10, fontSize: 25, alignSelf: 'center' }}>What is Stack Navigator?</Text>
                <Text style={styles.description}>It provides a way for your app to transition between screens and manage navigation history. The app pushes and pops items from the navigation stack when users interact with it, and they can see different screens.</Text>
                <Text style={{ marginTop: 10, fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'Next'</Text> button to go to the next screen.</Text>
                <Text style={{ fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'See more!'</Text> button to see datails.</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Web', { link: 'https://reactnavigation.org/docs/stack-navigator/', title: 'Site about Stack Navigator', screen: 'Fourth' })}><Text style={styles.textButton}>See more!</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Fifth')}><Text style={styles.textButton}>Next</Text></TouchableOpacity>
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
        height: '48%'
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

export default FourthScreen
