import React from 'react'
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview'

const WebScreen = (props) => {
    const { screen, link, title } = props.navigation.state.params
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    {title}
                </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate(screen)}>
                    <Image source={require('../images/x.png')} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
            </View>
            <WebView
                source={{ uri: link }}
                style={{ flex: 1 }} />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
})

export default WebScreen