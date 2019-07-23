/* eslint-disable prettier/prettier */
import React, {Component} from 'react'
import { 
    createAppContainer, 
    createBottomTabNavigator ,
    createStackNavigator
} from 'react-navigation'

import TabIcon from '../components/widgets/TabIcon'

import MessagePage from '../components/MessagePage'
import FunctionPage from '../components/FunctionPage'
import MinePage from '../components/MinePage'
import ServerPage from '../components/ServerPage'

const MyTab = createBottomTabNavigator(
    {
        Message: {
            screen: MessagePage,
            navigationOptions: {
                tabBarLabel: '消息',
                tabBarIcon:({focused}) => (
                    <TabIcon
                        focused={focused}
                        tabIconName={'message'}
                    />
                )
            }
        },
        Function: {
            screen: FunctionPage,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon:({focused}) => (
                    <TabIcon
                        focused={focused}
                        tabIconName={'function'}
                    />
                )
            }
        },
        Server: {
            screen: ServerPage,
            navigationOptions: {
                tabBarLabel: '客服',
                tabBarIcon:({focused}) => (
                    <TabIcon
                        focused={focused}
                        tabIconName={'customerservice'}
                    />
                )
            }
        },
        Mine: {
            screen: MinePage,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon:({focused}) => (
                    <TabIcon
                        focused={focused}
                        tabIconName={'mine'}
                    />
                )
            }
        },
    },
    {
        initialRouteName: 'Function',
        order: ['Message', 'Function', 'Server', 'Mine'],
        tabBarOptions: {
            activeTintColor: '#333333',
            inactiveTintColor: '#cccccc',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white',
            showLabel: true,
            showIcon: true,
            style: {
                backgroundColor: 'white',
            },
            labelStyle: {
                paddingBottom: 3,
                fontSize: 14,
            }
        }
    }
)

const RootContent = createAppContainer(MyTab);
 
class DynamicTabNavigator extends Component {
    render() {
        return (
            <RootContent/>
        )
    }
}
export default DynamicTabNavigator