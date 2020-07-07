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
// import {
//   Container,
//   Header,
//   Content,
//   Form,
//   Item,
//   Input,
//   Label,
// } from 'native-base';
import {Input, Button} from 'react-native-elements';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CalendarStrip from 'react-native-calendar-strip';
import Moment from 'moment';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Item, Right} from 'native-base';
export default class DocterProfile extends React.PureComponent {
  state = {
    mon: '',
    tue: '',
    test: 'username',

    AvailableDays: [
      {
        Days: 'Mon',
        color: '#00B185',
      },
      {
        Days: 'Tue',
        color: '#0000001C',
      },
      {
        Days: 'Wed',
        color: '#00B185',
      },
      {
        Days: 'Thu',
        color: '#00B185',
      },
      {
        Days: 'Fri',
        color: '#00B185',
      },
      {
        Days: 'Sat',
        color: '#0000001C',
      },
      {
        Days: 'Sun',
        color: '#00B185',
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
          contentContainerStyle={{
            flexGrow: 1,
            borderWidth: 0,
          }}>
          <Text
            style={{
              textAlign: 'center',
              height: 60,
              borderWidth: 0,
              textAlignVertical: 'center',
              color: 'white',
              fontSize: 20,
            }}>
            Account Settings
          </Text>

          <View
            style={{
              flex: 1,

              backgroundColor: 'white',
              borderWidth: 0,
              paddingHorizontal: 18,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingBottom: 50,
            }}>
            <View
              style={{
                height: 200,
                width: '100%',
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#0000001C',
                borderBottomWidth: 1,
              }}>
              <Image
                source={require('../../assets/images/user.png')}
                style={{height: 70, width: 100, borderRadius: 10}}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: 20,
                  //   color: '#00B185',
                  color: 'black',
                  letterSpacing: 0.5,

                  letterSpacing: 0.7,
                  marginTop: 10,
                }}>
                Appointment Record
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  //   color: '#00B185',
                  color: 'gray',
                  letterSpacing: 0.5,

                  letterSpacing: 0.7,
                }}>
                Nuero Surgeon
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 0,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  //   color: '#00B185',
                  color: '#00B185',
                  letterSpacing: 0.5,
                  paddingLeft: 10,

                  letterSpacing: 0.7,
                  marginVertical: 10,
                }}>
                Account Info
              </Text>

              <Input
                inputContainerStyle={{
                  borderBottomWidth: 0.5,
                  borderColor: '#0000001C',
                  marginVertical: 5,
                }}
                leftIcon={
                  <FontAwesome5
                    name="user"
                    size={15}
                    color="black"
                    style={{marginRight: 4}}
                  />
                }>
                <Text
                  style={{
                    fontSize: 15,

                    color: 'black',
                  }}>
                  {' '}
                  Mahmood ghaznavi{' '}
                </Text>
              </Input>
              <Input
                inputContainerStyle={{
                  borderBottomWidth: 0.5,
                  borderColor: '#0000001C',
                  marginVertical: 5,
                }}
                leftIcon={
                  <FontAwesome5
                    name="user"
                    size={15}
                    color="black"
                    style={{marginRight: 4}}
                  />
                }>
                <Text
                  style={{
                    fontSize: 15,

                    color: 'black',
                  }}>
                  {' '}
                  Mahmood.info@gmail.com{' '}
                </Text>
              </Input>
              <Input
                inputContainerStyle={{
                  borderBottomWidth: 0.5,
                  borderColor: '#0000001C',
                  marginVertical: 5,
                }}
                leftIcon={
                  <FontAwesome5
                    name="user"
                    size={15}
                    color="black"
                    style={{marginRight: 4}}
                  />
                }>
                <Text
                  style={{
                    fontSize: 15,

                    color: 'black',
                  }}>
                  {' '}
                  +923362065663{' '}
                </Text>
              </Input>
              <Input
                inputContainerStyle={{
                  borderBottomWidth: 0.5,
                  borderColor: '#0000001C',
                  marginVertical: 5,
                }}
                leftIcon={
                  <FontAwesome5
                    name="user"
                    size={15}
                    color="black"
                    style={{marginRight: 4}}
                  />
                }>
                <Text
                  style={{
                    fontSize: 15,

                    color: 'black',
                  }}>
                  {' '}
                  *********{' '}
                </Text>
              </Input>

              <Text
                style={{
                  fontSize: 20,
                  //   color: '#00B185',
                  color: '#00B185',
                  letterSpacing: 0.5,
                  paddingLeft: 10,

                  letterSpacing: 0.7,
                  marginVertical: 20,
                }}>
                Account Info
              </Text>

              <View style={{paddingVertical: 0, borderWidth: 0}}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#BCBCBC',

                    fontWeight: 'bold',

                    letterSpacing: 0.7,
                    marginBottom: 5,
                    paddingLeft: 20,
                  }}>
                  Appointment Fee
                </Text>
                <View
                  style={{
                    paddingVertical: 0,
                    borderWidth: 0,
                    backgroundColor: '#0000001C',
                    paddingVertical: 15,
                    paddingLeft: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    Rs. 6,200
                  </Text>
                </View>
              </View>
              <View style={{marginVertical: 10}}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#BCBCBC',

                    fontWeight: 'bold',

                    letterSpacing: 0.7,
                    marginBottom: 5,
                    paddingLeft: 20,
                  }}>
                  Days
                </Text>
                <View
                  style={{
                    paddingVertical: 0,
                    borderWidth: 0,
                    backgroundColor: '#0000001C',
                    paddingVertical: 15,
                    paddingLeft: 20,
                    flexDirection: 'row',
                  }}>
                  {this.state.AvailableDays.map((Item, i) => {
                    return (
                      <Text
                        style={{
                          fontSize: 15,

                          color: Item.color,
                          fontWeight: 'bold',
                          marginHorizontal: 10,
                        }}>
                        {Item.Days}
                      </Text>
                    );
                  })}
                </View>
              </View>

              <View style={{paddingVertical: 0, borderWidth: 0}}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#BCBCBC',

                    fontWeight: 'bold',

                    letterSpacing: 0.7,
                    marginBottom: 5,
                    paddingLeft: 20,
                  }}>
                  Timing
                </Text>
                <View
                  style={{
                    paddingVertical: 0,
                    borderWidth: 0,
                    backgroundColor: '#0000001C',
                    paddingVertical: 15,
                    paddingLeft: 20,
                    flexDirection: 'row',
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      fontWeight: 'bold',
                      width: '40%',
                    }}>
                    Rs. 6,200
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      fontWeight: 'bold',
                      width: '60%',
                      textAlign: 'right',
                    }}>
                    30 - min Appointment
                  </Text>
                </View>
              </View>

              <View style={{paddingVertical: 0, borderWidth: 0}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#00B185',
                    letterSpacing: 0.5,
                    paddingLeft: 10,
                    letterSpacing: 0.7,
                    marginVertical: 0,
                    borderColor: '#0000001C',
                    borderTopWidth: 1,
                    paddingVertical: 20,
                  }}>
                  Docter Info
                </Text>
                <View
                  style={{
                    paddingVertical: 0,
                    borderWidth: 0,
                    paddingVertical: 0,
                    paddingLeft: 20,
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      color: '#00B185',
                      fontWeight: 'bold',
                    }}>
                    Speciality
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      marginVertical: 5,
                    }}>
                    The quick, brown fox jumps over a lazy dog. DJs flock by
                    when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                    Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph.
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: 0,
                    borderWidth: 0,
                    marginVertical: 13,
                    paddingLeft: 20,
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      color: '#00B185',
                      fontWeight: 'bold',
                    }}>
                    Biograph
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      marginVertical: 5,
                    }}>
                    The quick, brown fox jumps over a lazy dog. DJs flock by
                    mph.
                  </Text>
                </View>
              </View>

              <View style={{paddingVertical: 0, borderWidth: 0}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#00B185',
                    letterSpacing: 0.5,
                    paddingLeft: 10,
                    letterSpacing: 0.7,
                    marginVertical: 0,
                    borderColor: '#0000001C',
                    borderTopWidth: 1,
                    paddingVertical: 20,
                  }}>
                  Education
                </Text>
                <View
                  style={{
                    paddingVertical: 0,
                    borderWidth: 0,
                    paddingVertical: 0,
                    paddingLeft: 20,
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      color: '#00B185',
                      fontWeight: 'bold',
                    }}>
                    M.C.P.S (pedaitrices)
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      marginVertical: 5,
                    }}>
                    The quick, brown fox jumps over a lazy dog. DJs flock by .
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: 0,
                    borderWidth: 0,
                    marginVertical: 13,
                    paddingLeft: 20,
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      color: '#00B185',
                      fontWeight: 'bold',
                    }}>
                    M.B.B.S
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      marginVertical: 5,
                    }}>
                    Liaquat university of medical and health sciences
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: 0,
                    borderWidth: 0,
                    marginVertical: 13,
                    paddingLeft: 20,
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      color: '#00B185',
                      fontWeight: 'bold',
                    }}>
                    F.C.P.S
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      marginVertical: 5,
                    }}>
                    Liaquat university of medical and health sciences
                  </Text>
                </View>
              </View>

              <View style={{paddingVertical: 0, borderWidth: 0}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#00B185',
                    letterSpacing: 0.5,
                    paddingLeft: 10,
                    letterSpacing: 0.7,
                    marginVertical: 0,
                    borderColor: '#0000001C',
                    borderTopWidth: 1,
                    paddingVertical: 20,
                  }}>
                  Professional Experience
                </Text>
                <View
                  style={{
                    paddingVertical: 0,
                    borderWidth: 0,
                    paddingVertical: 0,
                    paddingLeft: 20,
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      color: '#00B185',
                      fontWeight: 'bold',
                    }}>
                    M.C.P.S (pedaitrices)
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      marginVertical: 5,
                    }}>
                    The quick, brown fox jumps over a lazy dog. DJs flock by .
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: 0,
                    borderWidth: 0,
                    marginVertical: 13,
                    paddingLeft: 20,
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      color: '#00B185',
                      fontWeight: 'bold',
                    }}>
                    M.B.B.S
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      marginVertical: 5,
                    }}>
                    Liaquat university of medical and health sciences
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: 0,
                    borderWidth: 0,
                    marginVertical: 13,
                    paddingLeft: 20,
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      color: '#00B185',
                      fontWeight: 'bold',
                    }}>
                    F.C.P.S
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      marginVertical: 5,
                    }}>
                    Liaquat university of medical and health sciences
                  </Text>
                </View>
              </View>

              <View style={{paddingVertical: 0, borderWidth: 0}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#00B185',
                    letterSpacing: 0.5,
                    paddingLeft: 10,
                    letterSpacing: 0.7,
                    marginVertical: 0,
                    borderColor: '#0000001C',
                    borderTopWidth: 1,
                    paddingVertical: 20,
                  }}>
                  Location
                </Text>

                <View
                  style={{
                    paddingLeft: 20,
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      color: '#00B185',
                      fontWeight: 'bold',
                    }}>
                    Address
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,

                      color: 'black',
                      marginVertical: 5,
                    }}>
                    Liaquat university of medical and health sciences
                  </Text>
                </View>
              </View>
            </View>

            <Button
              title="Edit "
              buttonStyle={{
                width: '82%',
                // alignSelf: 'center',
                borderRadius: 30,
                paddingVertical: 17,
                marginVertical: 50,
                backgroundColor: '#00B185',
                alignSelf: 'center',

                flex: 1,
              }}
              // onPress={() => this.props.navigation.navigate('')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

{
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
