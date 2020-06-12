import React, {Component} from 'react';
import {
  Image,
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {NavigationActions, StackActions} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from './Home';
import Profile from './MyProfile';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
  drawerWidth: WIDTH * 0.73,
  // contentComponent: props => <SideBar {...props} />,
  contentComponent: ({props}) => {
    return <SideBar {...props} />;
  },
};

export default createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Profile: {
      screen: Profile,
    },
  },
  {contentComponent: props => <SideBar {...props} />},

  DrawerConfig,
);

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      selectedID: 1,
      userName: '',
      userType: '',
    };
  }
  componentDidMount() {
    this._retrieveData();
  }
  _retrieveData = async () => {
    this.setState({
      datas: [
        {
          id: '1',
          name: 'Home',
          key: 'Home',
          icon: <Entypo name={'home'} color={'white'} size={17} />,
        },
        {
          id: '2',
          name: 'Your Profile',
          key: 'MyProfile',
          icon: <Entypo name={'user'} color={'white'} size={17} />,
        },
        {
          id: '5',
          name: 'Your Order',
          key: 'MyOrders',
          icon: (
            <MaterialIcons
              name={'settings-backup-restore'}
              color={'white'}
              size={17}
            />
          ),
        },
        {
          id: '6',
          name: 'Favourites',
          key: 'Location',
          icon: <Entypo name={'heart'} color={'white'} size={17} />,
        },
        {
          id: '7',
          name: 'About us',
          key: 'AboutUs',
          icon: <Entypo name={'info'} color={'white'} size={17} />,
        },
        {
          id: '8',
          name: 'Logout',
          key: 'Logout',
          icon: <Entypo name={'log-out'} color={'white'} size={17} />,
        },
      ],
    });
  };
  _keyExtractor = (item, index) => item.id;
  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
  _renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        paddingLeft: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
      }}
      onPress={() => this.props.navigation.navigate(item.key)}>
      <View
        style={{
          zIndex: 30,
          padding: 10,
          paddingVertical: item.name == 'Logout' ? 140 : 15,
          backgroundColor: '#B51616',
          borderTopStartRadius: item.name == 'Home' ? 20 : 0,
          borderTopEndRadius: item.name == 'Home' ? 20 : 0,
        }}>
        {item.icon}
      </View>
      <View
        style={{
          marginLeft: 20,
          width: '60%',
          borderBottomColor: '#cccccc',
          borderBottomWidth: 1,
        }}>
        <Text style={{fontSize: 16, color: '#171717', marginBottom: 10}}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{paddingTop: 30}}>
          <TouchableOpacity
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              overflow: 'hidden',
              marginVertical: 5,
              marginHorizontal: 10,
              borderRadius: 90,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 2,
            }}
            onPress={() => this.setState}>
            <Image
              source={require('./../assets/images/user.png')}
              style={{height: '70%', width: '70%'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              color: '#171717',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Bastian Schweinsteiger
          </Text>
        </View>
        <FlatList
          data={this.state.datas}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          extraData={this.state}
          style={{backgroundColor: 'white', marginTop: 30}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerCover: {
    alignSelf: 'stretch',
    height: deviceHeight / 4.5,
    width: null,
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  drawerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
});
