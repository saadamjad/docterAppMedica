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
import {Button, ThemeConsumer} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';

export default class registration extends React.PureComponent {
  state = {
    mon: '',
    tue: '',
    DocterNewAppointments: [
      {
        Date: 'Fri  04/02/2020  ',
        time: '3:35 PM - 6:05 PM  ',
        patientName: 'Amber Mecdonald ',
        confirmed: 'Confirmed ',
        patientImage: require('../../assets/images/user.png'),
      },
      {
        Date: 'Fri  04/02/2020  ',
        time: '3:35 PM - 6:05 PM  ',
        patientName: 'Amber Mecdonald ',
        confirmed: 'Confirmed ',
        patientImage: require('../../assets/images/user.png'),
      },
      {
        Date: 'Fri  04/02/2020  ',
        time: '3:35 PM - 6:05 PM  ',
        patientName: 'Amber Mecdonald ',
        confirmed: 'Confirmed ',
        patientImage: require('../../assets/images/user.png'),
      },
      {
        Date: 'Fri  04/02/2020  ',
        time: '3:35 PM - 6:05 PM  ',
        patientName: 'Amber Mecdonald ',
        confirmed: 'Confirmed ',
        patientImage: require('../../assets/images/user.png'),
      },
      {
        Date: 'Fri  04/02/2020  ',
        time: '3:35 PM - 6:05 PM  ',
        patientName: 'Amber Mecdonald ',
        confirmed: 'Confirmed ',
        patientImage: require('../../assets/images/user.png'),
      },
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
            backgroundColor: '#eef3ed',
            borderWidth: 0,

            width: '100%',
          }}>
          <Text
            style={{
              color: '#5ebe98',
              fontSize: 22,
              paddingVertical: 10,
              fontWeight: 'bold',
              marginLeft: 35,
              marginVertical: 12,
              //   textAlign: 'center',
              letterSpacing: 0.5,
            }}>
            Upcoming Appointments
          </Text>

          {this.state.DocterNewAppointments.map((item, i) => {
            return (
              <TouchableOpacity
                style={{
                  //   height: 150,
                  //   borderWidth: 0.3,
                  //   paddingVertical: 15,
                  overflow: 'hidden',
                  width: '80%',
                  alignSelf: 'center',
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  padding: 20,
                  marginVertical: 15,
                }}
                onPress={() => this.RBSheet.open()}>
                <Text
                  style={{
                    color: '#222222',
                    fontSize: 17,
                    fontWeight: 'bold',
                    letterSpacing: 0.5,
                    // borderWidth: 1,
                    marginVertical: 5,

                    width: '100%',
                  }}>
                  {item.Date}
                </Text>
                <Text
                  style={{
                    color: '#222222cc',
                    fontSize: 13,
                    fontWeight: 'bold',
                    letterSpacing: 0.5,
                    paddingBottom: 15,
                    marginTop: 2,
                    borderBottomWidth: 2,
                    // borderWidth: 1,
                    borderColor: '#eef3ed',
                  }}>
                  {/* 3:35 PM {''} - <Text> 6:05 PM </Text> */}
                  {item.time}
                </Text>
                <View
                  style={{
                    height: 100,
                    borderWidth: 0,
                    width: '100%',
                    flexDirection: 'row',
                  }}>
                  <View style={{width: '40%', borderWidth: 0, padding: 20}}>
                    <Image
                      source={require('../../assets/images/user.png')}
                      resizeMode="contain"
                      style={{height: '100%', width: '100%'}}
                    />
                  </View>
                  <View style={{width: '60%', borderWidth: 0, padding: 10}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 15,
                        fontWeight: 'bold',
                        letterSpacing: 0.5,
                        marginTop: 0,
                      }}>
                      {item.patientName}
                    </Text>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 15,
                        fontWeight: 'bold',
                        letterSpacing: 0.5,
                        marginTop: 2,
                      }}>
                      {item.confirmed}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}

          <View style={{flex: 1}}>
            <RBSheet
              ref={ref => {
                this.RBSheet = ref;
              }}
              height={600}
              //   duration={150}
              //   customStyles={{
              //     container: {
              //       justifyContent: 'center',
              //       alignItems: 'center',
              //     },
              //   }}
              //   animationType="slide"
            >
              <View
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  width: '100%',
                  alignSelf: 'center',
                  backgroundColor: '#fff',
                  padding: 25,
                }}
                onPress={() => this.props.navigation.navigate('')}>
                <View
                  style={{
                    height: 100,
                    borderWidth: 0,
                    width: '100%',
                    flexDirection: 'row',
                  }}>
                  <View style={{width: '40%', borderWidth: 0, padding: 20}}>
                    <Image
                      source={require('../../assets/images/user.png')}
                      resizeMode="contain"
                      style={{height: '100%', width: '100%'}}
                    />
                  </View>
                  <View style={{width: '60%', borderWidth: 0, padding: 10}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 15,
                        fontWeight: 'bold',
                        letterSpacing: 0.5,
                        marginTop: 0,
                      }}>
                      Amber Mecdonald{' '}
                    </Text>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 15,
                        fontWeight: 'bold',
                        letterSpacing: 0.5,
                        marginTop: 5,
                      }}>
                      Confirmed
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    paddingVertical: 20,
                    // borderWidth: 1,
                    borderTopWidth: 1.5,
                    borderBottomWidth: 1.5,
                    borderColor: '#eef3ed',
                  }}>
                  <Text
                    style={{
                      color: '#222222',
                      fontSize: 17,
                      fontWeight: 'bold',
                      letterSpacing: 0.5,
                      // borderWidth: 1,
                      marginVertical: 5,

                      width: '100%',
                    }}>
                    {' '}
                    Fri 04/02/2020{' '}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      // borderWidth: 1,
                    }}>
                    <Text
                      style={{
                        color: '#222222cc',
                        fontSize: 13,
                        fontWeight: 'bold',
                        letterSpacing: 2.0,
                        //   borderWidth: 1,

                        width: '70%',
                        // borderColor: '#eef3ed',
                      }}>
                      3:35 PM {''} - <Text> 6:05 PM </Text>
                    </Text>
                    <Text
                      style={{
                        color: '#222222cc',
                        fontSize: 18,
                        fontWeight: 'bold',
                        letterSpacing: 2.0,
                        //   borderWidth: 1,
                        width: '30%',

                        textAlign: 'center',
                      }}>
                      Rs 6,200
                    </Text>
                  </View>
                </View>

                <Button
                  title="Mark Complete"
                  buttonStyle={{
                    width: '82%',
                    borderRadius: 30,
                    paddingVertical: 27,
                    marginVertical: 30,
                    backgroundColor: '#00B185',
                    alignSelf: 'center',

                    flex: 1,
                  }}
                  onPress={() => this.props.navigation.navigate('')}
                />
              </View>
            </RBSheet>
          </View>
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
