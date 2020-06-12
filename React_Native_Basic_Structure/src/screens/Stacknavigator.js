import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import Login from './Login';
// import Welcome from './Welcome';
import Register from './Register';
import Category from './Category';
import ProductDetails from './ProductDetails';
import AboutUs from './AboutUs';
import SideBar from './SideBar';
import MyProfile from './MyProfile';
import MyOrders from './MyOrders';
import Drawer from './SideBar';
import DocterTodayAptment from './DocterScreen/DocterTodayAptment';
import DocterSetAppointment from './SetAppointment';
import DocterAptHistory from './DocterScreen/DocterAptHistory';
import DocterReport from './DocterScreen/DocterReport.';
import DocterProfile from './DocterScreen/DocterProfile';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    DocterProfile: {
      screen: DocterProfile,
    },
    DocterAptHistory: {
      screen: DocterAptHistory,
    },
    DocterReport: {
      screen: DocterReport,
    },
    DocterTodayAptment: {
      screen: DocterTodayAptment,
    },
    MyProfile: {
      screen: MyProfile,
    },
    DocterSetAppointment: {
      screen: DocterSetAppointment,
    },
    MyOrders: {
      screen: MyOrders,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    Category: {
      screen: Category,
    },
    ProductDetails: {
      screen: ProductDetails,
    },
    AboutUs: {
      screen: AboutUs,
    },
    Drawer: {
      screen: Drawer,
    },
  },
  {
    initialRouteName: 'DocterProfile',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// import React from 'react';
// import { createSwitchNavigator, createDrawerNavigator,
//   createStackNavigator, createAppContainer,
//   createBottomTabNavigator } from "react-navigation";

// import Home from './Home';
// import Login from './Login';
// import Welcome from './Welcome';
// import Register from './Register';
// import Category from './Category';
// import ProductDetails from './ProductDetails';
// import AboutUs from './AboutUs'
// import SideBar from './SideBar'
// import MyProfile from './MyProfile';
// import MyOrders from './MyOrders';

// const LoginNavigation = createStackNavigator({
//   Welcome:{screen:Welcome},
//   Login: { screen: Login },
//   Register: { screen: Register },

// },{
//   initialRouteName: "Welcome",
//   headerMode: "none"
// });

// const HomeNavigator = createStackNavigator({
//   Home: { screen: Home },
//   Category:{screen:Category},
//   ProductDetails:{screen:ProductDetails},

// },{
//   initialRouteName: "Home",
//   headerMode: "none"
// });

// const Drawer = createDrawerNavigator(
//   {
//     Home: { screen: HomeNavigator },

//     AboutUs:{screen:AboutUs},
//     MyProfile:{screen: MyProfile},
//     MyOrders:{screen:MyOrders}

//   },
//   {
//     initialRouteName: "Home",
//     contentOptions: {
//       activeTintColor: "#e91e63"
//     },
//     overlayColor: 'rgba(0, 0, 0, 0.7)',
//     contentComponent: props => <SideBar {...props} />
//   }
// );

// const AppNavigator = createStackNavigator(
//   {
//     Drawer: { screen: Drawer }
//   },
//   {
//     initialRouteName: "Drawer",
//     headerMode: "none"
//   }
// );

// const AppSwitchNavigator = createSwitchNavigator(
//   {
//     Login: {screen: LoginNavigation},
//     Dashboard: {screen: AppNavigator},

//   }
// );

// const AppContainer = createAppContainer(AppSwitchNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
