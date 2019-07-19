/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator,
    StackViewTransitionConfigs
  } from 'react-navigation';

  import {Platform} from 'react-native';

import LoginPage from '../components/LoginPage'
// import ServiceCenterPage from '../components/ServiceCenterPage'
import WelcomePage from '../components/WelcomePage';
import MainPage from '../components/MainPage';

// 单个页面配置model动画
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

// 设置是否以modal动画弹窗
const IOS_MODAL_ROUTES = ['Login'];

const dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  const isModal = IOS_MODAL_ROUTES.some(
    screenName =>
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
  );
  return StackViewTransitionConfigs.defaultTransitionConfig(transitionProps, prevTransitionProps, isModal);
};

const InitNavigator = createStackNavigator({
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions: {
        header: null
      }
    }
  });

  const MainNavigator = createStackNavigator({
    Main: {
      screen: MainPage,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginPage,
      navigationOptions: {
        header: null
      }
    },
  }, {
    transitionConfig: Platform.OS == 'ios'
    ? dynamicModalTransition
    : () => ({
        screenInterpolator: StackViewStyleInterpolator.forHorizontal
      }),
    cardOverlayEnabled: true
  });

  // react-navigation-redux-helpers 3.0 适配https://coding.imooc.com/learn/questiondetail/102354.html
  // https://github.com/react-navigation/redux-helpers

  /**
   * 如果是需要登录才能进入app 在这里添加导航
   */
  export const RootNavigator = createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator
  });
  

/*
  const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

  export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
  );
  
  const mapStateToProps = (state) => ({
    state: state.nav, // nav -> state
  });
  
  export default connect(mapStateToProps)(AppWithNavigationState);
  */

 export default APPContainer =  createAppContainer(RootNavigator);

/*
  class APP extends Component {
    render() {
      return (
        <APPContainer/>
      );
    }
  }

  export default APP
  */

  


 