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
    mon: '',
    tue: '',
    Appointments: [
      {
        Days: 'Mon',
        color: 'green',
        mon: false,
        tue: false,
      },
      {
        Days: 'Tue',
        color: 'green',
        tue: false,
        mon: false,
      },
      //   {
      //     Days: 'Wed',
      //     color: 'green',
      //   },
      //   {
      //     Days: 'Thu',
      //     color: 'green',
      //   },
      //   {
      //     Days: 'Fri',
      //     color: 'green',
      //   },
      //   {
      //     Days: 'Sat',
      //     color: 'green',
      //   },
      //   {
      //     Days: 'Sun',
      //     color: 'green',
      //   },
    ],
  };
  handleTextChange = newText => this.setState({username: newText});
  handleTextChange1 = newText => this.setState({password: newText});
  Login() {
    this.props.navigation.navigate('Register');
  }
  changeColour = (i, day) => {
    console.log('index', i, 'Day', day);
    if (i == 0) {
      this.setState({
        mon: true,
      });
      console.log('0000');
    } else if (i == 1) {
      this.setState({
        tue: true,
      });
      console.log('000ss0');
    }

    // else if (i !== true && day === 'Tue') {
    //   this.setState({
    //     tue: !this.state.tue,
    //   });
    // }

    // let variable = this.state.Appointments[i].test;
  };
  render() {
    return (
      <ScrollView
        style={styles.parent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Text
          style={{
            textAlign: 'center',
            height: 60,
            borderWidth: 0,
            textAlignVertical: 'center',
            color: 'white',
            fontSize: 20,
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
              fontSize: 22,
              paddingVertical: 10,
              fontWeight: 'bold',
              marginLeft: 35,
              marginVertical: 12,
              //   textAlign: 'center',
            }}>
            Mark Your Availibity
          </Text>
          <Text
            style={{
              color: '#000C4661',
              fontSize: 15,
              marginLeft: 35,
              letterSpacing: 2,
              fontWeight: '500',
            }}>
            Days
          </Text>

          <View
            style={{
              //   height: 120,
              borderWidth: 0,
              //   alignItems: 'center',
              backgroundColor: '#e4e9e3',
              marginVertical: 10,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingLeft: 15,
              paddingRight: 15,
            }}>
            {this.state.Appointments.map((Item, i) => {
              //   console.log('helooo', Item);
              return (
                <TouchableOpacity
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 35,
                    backgroundColor: this.state.mon
                      ? Item.color
                      : this.state.tue
                      ? Item.color
                      : 'white',
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
                    padding: 2,
                  }}
                  onPress={() => {
                    this.changeColour(i, Item.mon);
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 14,

                      color: this.state.docter ? '#c0c4bf' : '#c0c4bf',
                    }}>
                    {Item.Days}
                  </Text>
                </TouchableOpacity>
              );
            })}
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#00B185',
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
