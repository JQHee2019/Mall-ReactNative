import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import * as Constant from '../../styles/constant'
import styles from '../../styles'

const config = {
    ["tabRecommended"]: 'activity',
    ["tabDynamic"]: 'aperture',
    ["tabMy"]: 'users',
};

const propTypes = {
    focused: PropTypes.bool,
    tabIconName: PropTypes.string,
};

/**
 * 底部Tab
 */
class TabIcon extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        // this.props.focused 区分是否是选中状态
        let color = this.props.focused ? Constant.tabSelectedColor : Constant.tabUnSelectColor;

        var icon = null
        switch (this.props.tabIconName) {
            case 'message': 
                if (this.props.focused) {
                    icon =require('../../images/tabbar_message_h_b.png')
                } else {
                    icon =require('../../images/tabbar_message_n.png')
                }
            break;
            case 'function': 
                if (this.props.focused) {
                    icon =require('../../images/tabbar_function_h_b.png')
                } else {
                    icon =require('../../images/tabbar_function_n.png')
                }
            break;
            case 'customerservice': 
                if (this.props.focused) {
                    icon =require('../../images/tabbar_customerservice_h_b.png')
                } else {
                    icon =require('../../images/tabbar_customerservice_n.png')
                }
            break;
            case 'mine': 
            if (this.props.focused) {
                icon =require('../../images/tabbar_mine_h_b.png')
            } else {
                icon =require('../../images/tabbar_mine_n.png')
            }
            break;
        }

        if (this.props.focused) {
            return (
                <View style={styles.centered}>
                    <Image 
                        source={icon}                            
                        resizeMode={"contain"}
                        style={{width: Constant.tabIconSize, height: Constant.tabIconSize}}/>
                </View>
            );
        } else {
            return (
                <View style={styles.centered}>
                    <Image 
                        source={icon}                            
                        resizeMode={"contain"}
                        style={{width: Constant.tabIconSize, height: Constant.tabIconSize}}/>
                </View>
            );
        }
    }
}

TabIcon.propTypes = propTypes;

export default TabIcon;