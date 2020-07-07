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
            Appointment History
          </Text>
          <CalendarStrip
            minDate={this.state.today}
            onDateSelected={date => this.onPress1(date)}
            // calendarAnimation={{ type: "sequence", duration: 30 }}
            daySelectionAnimation={{
              type: 'border',
              // duration: 200,
              borderWidth: 1, //
              borderHighlightColor: '#00B185',
            }}
            style={{
              height: 120,
            }}
            calendarHeaderStyle={{
              color: 'black',
              // borderWidth: 1,
              marginVertical: 10,
            }}
            iconContainer={{color: 'red'}}
            // calendarColor={'#103056'}
            calendarColor={'white'}
            dateNumberStyle={{color: 'black'}} //
            dateNameStyle={{color: 'black'}} //
            highlightDateNumberStyle={{color: 'black'}} //  2f4561
            highlightDateNameStyle={{color: 'black'}} //
            disabledDateNameStyle={{color: 'grey'}}
            disabledDateNumberStyle={{color: 'grey'}}
            iconContainer={{flex: 0.1, color: 'black'}}
          />
          <View
            style={{
              flex: 1,

              // borderTopLeftRadius: 30,
              // borderTopRightRadius: 30,
              backgroundColor: '#eef3ed',
              borderWidth: 0,
              paddingHorizontal: 18,

              width: '100%',
            }}>
            {this.state.docAptHisotry.map((item, i) => {
              return (
                <TouchableOpacity
                  style={{
                    overflow: 'hidden',
                    width: '100%',
                    alignSelf: 'center',
                    borderRadius: 15,
                    height: 130,
                    backgroundColor: '#fff',
                    padding: 10,
                    marginVertical: 15,
                    // borderWidth: 0.2,
                    borderColor: 'white',
                  }}
                  // onPress={() => this.RBSheet.open()}
                >
                  <View
                    style={{
                      // height: 100,
                      // borderWidth: 1,
                      width: '100%',
                      flexDirection: 'row',
                    }}>
                    <View style={{width: '20%', borderWidth: 0, padding: 10}}>
                      <Image
                        source={require('../../assets/images/user.png')}
                        resizeMode="contain"
                        style={{height: '100%', width: '100%'}}
                      />
                    </View>
                    <View style={{width: '80%', borderWidth: 0, padding: 10}}>
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
                          color: 'gray',
                          fontSize: 15,
                          fontWeight: 'bold',
                          letterSpacing: 0.5,
                          marginVertical: 5,
                        }}>
                        {item.time}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          // borderWidth: 1,
                          marginVertical: 5,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: 'bold',
                            letterSpacing: 0.5,
                            marginTop: 2,
                            width: '50%',
                            //   borderWidth: 1,
                          }}>
                          {item.price}
                        </Text>

                        <Text
                          style={{
                            color: item.status ? '#00B185' : '#D12553',
                            fontSize: 15,
                            fontWeight: 'bold',
                            letterSpacing: 0.5,
                            marginTop: 2,
                            width: '50%',
                            //   borderWidth: 1,
                            textAlign: 'right',
                          }}>
                          {item.status ? 'confirmed' : 'cancelled'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
            <Text
              style={{
                fontSize: 20,
                color: '#00B185',
                letterSpacing: 0.5,
                marginTop: 20,
                borderTopWidth: 0.3,
                borderColor: '#0000001C',
                letterSpacing: 0.7,
                paddingVertical: 20,
              }}>
              Summary
            </Text>

            <View
              style={{
                flexDirection: 'row',
                borderWidth: 0,
                width: '100%',
                paddingVertical: 20,
                borderRadius: 10,
                backgroundColor: 'white',
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
                  6
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
                  16
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
                  2
                </Text>
              </View>
            </View>

            <View
              style={{
                borderWidth: 0,
                width: '100%',
                paddingVertical: 20,
                borderRadius: 10,
                backgroundColor: 'white',
                marginVertical: 20,
                paddingLeft: 20,
              }}>
              <Text style={{letterSpacing: 1, color: 'gray', fontSize: 15}}>
                Total Earning of the day
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
