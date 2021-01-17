import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, BackHandler, TouchableOpacity } from 'react-native';

const FifthScreen = (props) => {

    useEffect(() => {
        const backAction = () => {
            props.navigation.navigate('Fourth')
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => {
            BackHandler.removeEventListener("hardwareBackPress",
                () => backAction)
        };
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'space-around' }}>
                <Text style={styles.title}>Thanks for reading!</Text>
                <Image source={require('../images/fifth.png')} style={styles.image} />
                <View>
                    <Text style={{ marginBottom: 15, fontSize: 25, alignSelf: 'center' }}>That's it!</Text>
                    <Text style={styles.description}>Now you know some basics of React Navigation. The next step is to try it out.</Text>
                    <Text style={{ marginTop: 10, fontSize: 18 }}>This is the last screen. There is no <Text style={{ color: '#9090ff' }}>'Next'</Text> button.</Text>
                    <Text style={{ fontSize: 18 }}>Click <Text style={{ color: '#9090ff' }}>'See more!'</Text> button to see datails.</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Web', { link: 'https://github.com/f-solecki/task-7', title: 'This project repository site', screen: 'Fifth' })}><Text style={styles.textButton}>See more!</Text></TouchableOpacity>
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

export default FifthScreen
