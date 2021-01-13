import React from 'react';
import { View, Text, Button, Image, StyleSheet, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview'

const FirstScreen = (props) => {

    const seeMore = () => {
        console.log("działa")
        return <WebView source={{
            uri: 'https://github.com/facebook/react-native'
        }} />
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to our tour!</Text>
            <Image source={require('../images/first.png')} style={styles.image} />
            <View>
                <Text style={styles.description}>In this tour I want to show you some basic information about this app.</Text>
                <Text style={{ marginTop: 15, fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'Next'</Text> button to start this tutorial.</Text>
                <Text style={{ fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'See more!'</Text> button to see datails.</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Web', { link: 'https://reactnative.dev/', title: 'React Native documentation site', screen: 'First' })}><Text style={styles.textButton}>See more!</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Second')}><Text style={styles.textButton}>Next</Text></TouchableOpacity>
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

export default FirstScreen
