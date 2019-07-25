import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class MineCell extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text> cell </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F1F1F1'
    }
})