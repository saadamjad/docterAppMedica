/* @flow */
import React, {Component} from 'react';
import {
  TouchableWithoutFeedback,
  AsyncStorage,
  View,
  Text,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View
        style={{
          height: 55,
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'stretch',
          alignItems: 'center',
          backgroundColor: this.props.backgroundColor,
          paddingRight: 20,
        }}>
        <View style={{alignSelf: 'flex-start', left: -50}}>
          {this.props.backBtn ? (
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.goBack()}
              style={{
                backgroundColor: 'grey',
                justifyContent: 'flex-start',
                alignSelf: 'flex-start',
              }}>
              <Entypo
                name={'chevron-left'}
                color={this.props.color}
                size={25}
                style={{padding: 15}}
              />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.openDrawer()}
              style={{
                backgroundColor: 'grey',
                justifyContent: 'flex-start',
                alignSelf: 'flex-start',
              }}>
              <Entypo
                name={'menu'}
                color={this.props.color}
                size={25}
                style={{padding: 15}}
              />
            </TouchableWithoutFeedback>
          )}
        </View>
        <Image
          style={{height: 34, width: 190, alignSelf: 'center'}}
          source={require('./../assets/images/logo.png')}
        />
      </View>
    );
  }
}
