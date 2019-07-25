
import React, {Component} from 'react'
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity
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
            <TouchableOpacity
                activeOpacity={0.5} 
                style={styles.content} 
                onPress={() => {
                    callBack && callBack(title)
                }}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    content: {
        padding: 15,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5
    },
    title: {
        color: '#333333',
        fontSize: 14
    }
})