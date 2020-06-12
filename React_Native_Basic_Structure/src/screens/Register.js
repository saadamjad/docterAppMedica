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
  SafeAreaView,
  ScrollView,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationActions, StackActions} from 'react-navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Button} from 'react-native-elements';

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
      <ScrollView
        style={styles.parent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={require('./../assets/images/hero.png')}
          style={{height: '100%', width: '100%'}}>
          <Text
            style={{
              textAlign: 'center',
              height: 150,
              borderWidth: 0,
              textAlignVertical: 'center',
              color: 'white',
              fontSize: 40,
            }}>
            Medica.pk{' '}
          </Text>

          <View
            style={{
              flex: 1,

              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: '#EDF3ED',
              borderWidth: 0,

              width: '100%',
            }}>
            <Text
              style={{
                color: '#00B185',
                fontSize: 24,
                paddingVertical: 10,
                fontWeight: 'bold',
                marginLeft: 35,
                marginVertical: 12,
              }}>
              Sign up
            </Text>

            <View
              style={{
                height: 120,
                borderWidth: 0,
                alignItems: 'center',
                backgroundColor: '#e4e9e3',
                marginVertical: 10,
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '500', marginVertical: 15}}>
                {' '}
                Who are you ?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '83%',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  borderWidth: 0,
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 15,
                    width: 155,
                    borderRadius: 24,
                    backgroundColor: this.state.user ? '#00B185' : 'white',

                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}
                  onPress={() =>
                    this.setState({
                      user: true,
                      docter: false,
                    })
                  }>
                  <FontAwesome5
                    name="user-alt"
                    size={15}
                    color={this.state.user ? 'white' : '#00B185'}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      marginLeft: 10,
                      color: this.state.user ? 'white' : 'black',
                    }}>
                    {' '}
                    A User
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 15,
                    width: 155,
                    borderRadius: 24,
                    backgroundColor: this.state.docter ? '#00B185' : 'white',

                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}
                  onPress={() =>
                    this.setState({
                      docter: true,
                      user: false,
                    })
                  }>
                  <Fontisto
                    name="heartbeat"
                    size={15}
                    color={this.state.docter ? 'white' : '#00B185'}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      marginLeft: 10,
                      color: this.state.docter ? 'white' : 'black',
                    }}>
                    {' '}
                    A Docter
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                borderWidth: 0,
                overflow: 'hidden',
                marginVertical: 20,
              }}>
              <View
                style={{
                  width: '35%',
                  justifyContent: 'center',

                  alignItems: 'center',
                  borderWidth: 0,
                }}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#dcdcdc',
                    overflow: 'hidden',
                    marginLeft: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                  }}>
                  <FontAwesome5 name="user-alt" size={50} />
                </View>
              </View>
              <View
                style={{
                  borderWidth: 0,
                  width: '65%',

                  overflow: 'hidden',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 15,
                    width: '70%',
                    borderRadius: 26,
                    marginTop: 0,
                    backgroundColor: 'white',

                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',

                    elevation: 0,
                  }}>
                  <FontAwesome5 name="user-alt" size={15} color={'#00B185'} />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      marginLeft: 10,
                      color: 'black',
                    }}>
                    {' '}
                    Take a photo
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 15,
                    width: '70%',
                    borderRadius: 26,
                    marginTop: 15,
                    backgroundColor: 'white',

                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',

                    elevation: 0,
                  }}>
                  <FontAwesome5 name="user-alt" size={15} color={'#00B185'} />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      marginLeft: 10,
                      color: 'black',
                    }}>
                    {' '}
                    Upload a photo
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Content style={{marginVertical: 10}}>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '82%',
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  borderColor: '#BCBCBC',
                }}>
                <View
                  style={{
                    width: '15%',
                    borderWidth: 0,
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 7,
                  }}>
                  <FontAwesome5 name="user-alt" size={15} color={'#00B185'} />
                </View>
                <Item
                  floatingLabel
                  style={{
                    borderBottomWidth: 0,
                    // backgroundColor: 'red',
                    paddingVertical: 4,
                    margin: 0,

                    width: '85%',
                    alignSelf: 'center',
                  }}>
                  <Label style={{color: '#00B185'}}>Username</Label>
                  <Input maxLength={15} />
                </Item>
              </View>
            </Content>

            <Button
              title="Solid Button"
              buttonStyle={{
                width: '82%',
                // alignSelf: 'center',
                borderRadius: 30,
                paddingVertical: 17,
                marginVertical: 20,
                backgroundColor: '#00B185',
                alignSelf: 'center',

                flex: 1,
              }}
              onPress={() => this.props.navigation.navigate('')}
            />
          </View>
        </ImageBackground>
      </ScrollView>
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
