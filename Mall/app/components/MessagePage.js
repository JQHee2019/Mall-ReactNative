import React, {Component} from 'react'
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native'
import { PropTypes } from 'prop-types'

import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import MessageCell from './widgets/message/message-cell'

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

/**
 * 消息页面 
*/
export default class MessagePage extends Component<Props>  {

    constructor(props) {
        super(props)
        this._renderRow = this._renderRow.bind(this)
        this._requestData = this._requestData.bind(this)
        this._requestMoreData = this._requestMoreData.bind(this)
        this._keyExtractor = this._keyExtractor.bind(this)
        this.state = {
            dataList: [],
            refreshState: RefreshState.Idle,
          }
    }

    /**
     * 页面显示的内容
     */
    _renderRow(item) {
        return (
            <MessageCell title={'12'}/>
        );
    }

    /**
     * 下拉刷新
     */
    _requestData() {
        this.setState({ refreshState: RefreshState.HeaderRefreshing })

        // 模拟网络请求
        setTimeout(() => {

          // 模拟网络加载失败的情况
          if (Math.random() < 0.2) {
            this.setState({ refreshState: RefreshState.Failure })
            return
          }

        // 获取数据
         var dataList = ['测试', '测试一', '测试二'] 

          this.setState({
            dataList: dataList,
            refreshState: dataList.length < 1 ? RefreshState.EmptyData : RefreshState.Idle,
          })
        }, 2000)
    }

    /**
     * 上拉刷新
     */
    _requestMoreData() {
        this.setState({ refreshState: RefreshState.FooterRefreshing })

        // 模拟网络请求
        setTimeout(() => {
          // 模拟网络加载失败的情况
          if (Math.random() < 0.2) {
            this.setState({ refreshState: RefreshState.Failure })
            return
          }
    
          //获取测试数据
          var dataList = this.state.dataList
          dataList.push('测试三')
    
          this.setState({
            dataList: dataList,
            refreshState: dataList.length > 50 ? RefreshState.NoMoreData : RefreshState.Idle,
          })
        }, 2000)
    }

    _keyExtractor(item, index) {
        return index.toString()
    }

    componentDidMount() {
        this._requestData()
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
                <NavigationBar title={'首页'}></NavigationBar>
                <RefreshListView
                  data={this.state.dataList}
                  renderItem={this._renderRow}
                  keyExtractor={this._keyExtractor}
                  refreshState={this.state.refreshState}
                  onHeaderRefresh={this._requestData}
                  onFooterRefresh={this._requestMoreData}
                  footerRefreshingText='玩命加载中 >.<'
                  footerFailureText='加载失败了 =.=!'
                  footerNoMoreDataText='-我是有底线的-'
                  footerEmptyDataText='-好像什么东西都没有-'/>
            </SafeAreaViewPlus>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
})