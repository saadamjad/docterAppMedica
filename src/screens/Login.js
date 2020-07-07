import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  AsyncStorage,
  PureComponent,
  Platform,
  NetInfo,
  Alert,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationActions, StackActions} from 'react-navigation';

export default class registration extends React.PureComponent {
  state = {
    username: '',
    password: '',
    lang: 'en',
    pushtoken: '',
    showPassword: true,
    check: true,
  };
  handleTextChange = newText => this.setState({username: newText});
  handleTextChange1 = newText => this.setState({password: newText});
  Login() {
    this.props.navigation.navigate('Register');
  }
  render() {
    return (
      <View style={styles.parent}>
        <Text
          style={{
            textAlign: 'center',
            height: 150,
            borderWidth: 1,
            textAlignVertical: 'center',
            color: 'white',
            fontSize: 40,
          }}>
          Medica.pk{' '}
        </Text>

        <View
          style={{
            flex: 1,
            borderRadius: 10,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,

            alignItems: 'center',
            width: '100%',
            alignSelf: 'center',
            overflow: 'hidden',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text style={{color: '#DD3333', fontSize: 19, paddingVertical: 10}}>
            Login
          </Text>
          <View style={styles.et1}>
            <View style={styles.tocentertext}>
              <View
                style={{
                  width: '20%',
                  borderWidth: 1,
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{marginRight: 0}}>+92</Text>
              </View>
              <TextInput
                style={{marginLeft: 20}}
                maxLength={11}
                keyboardType="numeric"
                value={this.state.number}
                onChangeText={this.handleTextChange}
                placeholder="300-1234567"
              />
            </View>
          </View>

          <View style={styles.et1}>
            <View
              style={{
                width: '20%',
                // borderWidth: 1,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name={'lock'} size={20} color="#cccccc" />
            </View>

            <TextInput
              style={{
                paddingLeft: 0,
                // borderWidth: 1,
                height: '100%',
                width: '80%',
                paddingLeft: 40,
              }}
              value={this.state.password}
              onChangeText={this.handleTextChange1}
              secureTextEntry={true}
              placeholder="password"
            />
          </View>

          <TouchableOpacity
            style={{marginRight: 20, marginTop: 10, marginLeft: 20}}
            onPress={() => this.props.navigation.navigate('VERIFY_NUM')}>
            <Text style={{fontWeight: 'bold'}}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.Login()}
            style={{
              width: '80%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',

              backgroundColor: '#00B185',
              paddingVertical: 16,
              borderRadius: 25,
              marginVertical: 20,
            }}>
            <Text style={styles.logintext}> Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginVertical: 10, borderWidth: 0}}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text>
              {' '}
              dont have account ?{' '}
              <Text style={{color: '#00B185'}}> Signup </Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              borderWidth: 0,
              backgroundColor: 'white',
              elevation: 5,
              paddingVertical: 15,
              borderRadius: 25,
              paddingHorizontal: 30,
            }}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
              {' '}
              Login with google{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'gray',
  },
  tocenterview: {
    // height:50,bw
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    justifyContent: 'flex-end',
  },
  hello: {
    // marginTop: 20,
    fontSize: 15,
    color: 'black',
  },
  moving: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  et1: {
    borderColor: '#d3d3d3',

    backgroundColor: 'white',
    height: 50,
    marginTop: 10,
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  et2: {
    borderColor: '#d3d3d3',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 50,
    marginTop: 10,
    borderBottomWidth: 1,
    width: '90%',
    // marginRight: 40,
    // marginLeft: 40,
  },
  ext: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
  },
  tocentertext: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
  },

  logintext: {
    color: 'white',
    fontSize: 18,

    alignItems: 'center',
  },
});
