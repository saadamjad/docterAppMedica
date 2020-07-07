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
import CalendarStrip from 'react-native-calendar-strip';
import Moment from 'moment';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
export default class DocterAppointmentHisotry extends React.PureComponent {
  state = {
    mon: '',
    tue: '',
    docAptHisotry: [
      {
        price: 'Rs. 2700',
        time: '3:35 PM - 6:05 PM  ',
        patientName: 'Amber Mecdonald ',
        status: true,
        patientImage: require('../../assets/images/user.png'),
      },
      {
        price: 'Rs. 2700',
        time: '3:35 PM - 6:05 PM  ',
        patientName: 'Amber Mecdonald ',
        status: true,
        patientImage: require('../../assets/images/user.png'),
        color: 'greee',
      },
      {
        price: 'Rs. 2700',
        time: '3:35 PM - 6:05 PM  ',
        patientName: 'Amber Mecdonald ',
        status: false,
        patientImage: require('../../assets/images/user.png'),
      },
      {
        price: 'Rs. 2700',
        time: '3:35 PM - 6:05 PM  ',
        patientName: 'Amber Mecdonald ',
        status: true,
        patientImage: require('../../assets/images/user.png'),
      },
      {
        price: 'Rs. 2700',
        time: '3:35 PM - 6:05 PM  ',
        patientName: 'Amber Mecdonald ',
        status: false,
        patientImage: require('../../assets/images/user.png'),
      },
      {
        price: 'Rs. 2700',
        time: '3:35 PM - 6:05 PM  ',
        patientName: 'Amber Mecdonald ',
        status: true,
        patientImage: require('../../assets/images/user.png'),
      },
    ],
  };

  Login() {
    this.props.navigation.navigate('Register');
  }

  onPress1 = num => {
    const converteddate = Moment(num).format('DD-MM-YYYY');
    console.log('date22', converteddate);
  };

  render() {
    return (
      <View style={{flex: 1}}>
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
            Report
          </Text>

          <View
            style={{
              flex: 1,

              backgroundColor: '#eef3ed',
              borderWidth: 0,
              paddingHorizontal: 18,

              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#00B185',
                letterSpacing: 0.5,

                letterSpacing: 0.7,
                marginTop: 20,
                paddingLeft: 10,
              }}>
              Appointment Record
            </Text>

            <View
              style={{
                flexDirection: 'row',
                borderWidth: 0,
                width: '100%',
                paddingVertical: 20,
                borderRadius: 10,
                backgroundColor: 'white',
                marginVertical: 25,
              }}>
              <View
                style={{
                  width: '33%',
                  borderRightWidth: 0.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'gray',
                }}>
                <Text style={{letterSpacing: 1, color: 'gray'}}> Total </Text>
                <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 1}}>
                  61
                </Text>
              </View>
              <View
                style={{
                  width: '33%',
                  borderRightWidth: 0.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'gray',
                }}>
                <Text style={{letterSpacing: 1, color: 'gray'}}>
                  {' '}
                  Completed{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    marginTop: 1,
                    color: '#00B185',
                  }}>
                  50
                </Text>
              </View>
              <View
                style={{
                  width: '33%',
                  // borderRightWidth: 0.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'gray',
                }}>
                <Text style={{letterSpacing: 1, color: 'gray'}}>
                  {' '}
                  cancelled{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    marginTop: 1,
                    color: '#D12553',
                  }}>
                  11
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 20,
                color: '#00B185',
                letterSpacing: 0.5,

                borderTopWidth: 1,
                borderColor: '#0000001C',
                letterSpacing: 0.7,
                paddingVertical: 20,
                paddingLeft: 10,
              }}>
              Earnings
            </Text>
            <View
              style={{
                borderWidth: 0,
                width: '100%',
                paddingVertical: 20,
                borderRadius: 10,
                backgroundColor: 'white',
                paddingLeft: 20,
              }}>
              <Text style={{letterSpacing: 1, color: 'gray', fontSize: 15}}>
                This week
              </Text>
              <Text
                style={{
                  letterSpacing: 1,
                  color: 'black',
                  fontSize: 20,
                  marginTop: 5,
                }}>
                Rs . 24,800
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0,
                width: '100%',
                paddingVertical: 20,
                borderRadius: 10,
                backgroundColor: 'white',
                paddingLeft: 20,
                marginVertical: 20,
              }}>
              <Text style={{letterSpacing: 1, color: 'gray', fontSize: 15}}>
                This month
              </Text>
              <Text
                style={{
                  letterSpacing: 1,
                  color: 'black',
                  fontSize: 20,
                  marginTop: 5,
                }}>
                Rs . 24,800
              </Text>
            </View>

            <View
              style={{
                borderWidth: 0,
                width: '100%',
                paddingVertical: 20,
                borderRadius: 10,
                backgroundColor: 'white',
                paddingLeft: 20,
              }}>
              <Text style={{letterSpacing: 1, color: 'gray', fontSize: 15}}>
                This year
              </Text>
              <Text
                style={{
                  letterSpacing: 1,
                  color: 'black',
                  fontSize: 20,
                  marginTop: 5,
                }}>
                Rs . 24,800
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
