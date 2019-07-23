
import React, {Component} from 'react'
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types'

/*
//提供属性的类型检查
const propTypes = {
    title: PropTypes.string,
    callBack: PropTypes.func
};
//设置默认属性
const defaultProps = {
    title: ''
};
*/

export default class MessageCell extends Component {

    render() {
        let { callBack, title } = this.props
        return(
            <TouchableHighlight 
            style={styles.content} 
            onPress={() => {
                callBack && callBack(title)
            }}>
                <Text style={styles.title}>{title}</Text>
            </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    content: {
        padding: 15
    },
    title: {
        color: '#333333',
        fontSize: 14
    }
})