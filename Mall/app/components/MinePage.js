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
import gStyles  from '../styles'
import * as Constant from '../styles/constant'

import MineHeader from './widgets/mine/mine-header'
import MineCell from './widgets/mine/mine-cell'

/**
 * 我的页面
 */

export default class MinePage extends Component<Props>  {

    constructor(props) {
        super(props)
    }

    _renderVLine() {
        return <View style={styles.vline}></View>
    }

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
                <NavigationBar title={'我的'}></NavigationBar>
                <ScrollView>
                    <MineHeader></MineHeader>
                    <MineCell></MineCell>
                    {this._renderVLine()}
                    <MineCell></MineCell>
                </ScrollView>
  
            </SafeAreaViewPlus>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    vline: {
        backgroundColor: '#dddddd',
        height: 10
    }
})