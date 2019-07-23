import React, {Component} from 'react'
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native'

/**
 * 导航相关
 */
import NavigationBar from "./common/NavigationBar"
import SafeAreaViewPlus from "./common/SafeAreaViewPlus"
import NavigationUtil from '../navigator/NavigationUtil'
import ViewUtils from '../utils/ViewUtils'
/**
 * 样式和常量
 */
import styles from '../styles'
import * as Constant from '../styles/constant'

/**
 * 功能首页
 */

export default class FunctionPage extends Component<Props>  {
    render() {
        return (
            <SafeAreaViewPlus 
                style={styles.mainBox}
                topColor={Constant.primaryColor}> 
                <StatusBar 
                    hidden={false} 
                    backgroundColor={Constant.primaryColor} 
                    translucent
                    barStyle={'light-content'}/>
                <NavigationBar title={'首页'}></NavigationBar>
            </SafeAreaViewPlus>
        );
    }
}