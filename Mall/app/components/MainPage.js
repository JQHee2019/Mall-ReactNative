import React, {Component} from 'react';
import { BackHandler} from 'react-native';
import {NavigationActions} from 'react-navigation';
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
import {connect} from 'react-redux';

type Props = {};
class MainPage extends Component<Props> {

  constructor(props) {
    super(props);
    this.onBackPress = this.onBackPress.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress());
  }

  onBackPress() {
    const {dispatch, nav} = this.props;

    if (nav.index === 0){
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    NavigationUtil.navigation = this.props.navigation;
    return (
      <DynamicTabNavigator />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(MainPage);