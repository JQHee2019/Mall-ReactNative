import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

export default class MineHeader extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.content}> 
                    <Image source={{uri: 'https://unsplash.it/600/400/?random'}} style={{width:60,height:60}}/>
                    <Text> header头 </Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        height: 140,
        backgroundColor: '#F1F1F1',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
})