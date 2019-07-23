import React, {Component} from 'react'
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native'

import WebView from 'react-native-webview'

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
import gStyles from '../styles'
import * as Constant from '../styles/constant'

/**
 * 客服页面
 */

export default class ServerPage extends Component<Props>  {
    render() {
        return (
            <SafeAreaViewPlus 
                style={styles.container}
                topColor={Constant.primaryColor}> 
                <StatusBar 
                    hidden={false} 
                    backgroundColor={Constant.primaryColor} 
                    translucent
                    barStyle={'light-content'}/>
                <NavigationBar title={'客服'}></NavigationBar>
                <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
    )

            </SafeAreaViewPlus>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
})