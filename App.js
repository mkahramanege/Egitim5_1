import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import SideMenu from './src/screens/SideMenu';
import SecondScreen from './src/screens/SecondScreen';
import TabsMainScreen from './src/screens/Tabs/TabsMainScreen';
import StackScreen from './src/screens/NBar/StackScreen';
import SwitchNavigatorScreen from './src/screens/Switch/SwitchNavigatorScreen';
import MaterialBottomTabScreen from './src/screens/Tabs/MaterialBottomTabScreen';
import MaterialTopTabScreen from './src/screens/Tabs/MaterialTopTabScreen';


const Drawer = createDrawerNavigator({
    Home: {
      screen: MainScreen,
    },
    Second: {
      screen: SecondScreen
    },
    Tabs: {
      screen: TabsMainScreen
    },
    Nbar: {
      screen: StackScreen
    },
    Switch: {
      screen: SwitchNavigatorScreen
    },
    MaterialBottom: {
      screen: MaterialBottomTabScreen
    },
    MaterialTop: {
      screen: MaterialTopTabScreen
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width * 0.8
  }
);

const App = createAppContainer(Drawer);
  
export default App;

/*const mainScreen = ({ navigation }) => (<MainScreen navigationRight={navigation} />);

const DrawerRight = createDrawerNavigator({
  Home: {
    screen: mainScreen
  }
},
{
  contentComponent: SideMenu,
  drawerWidth: Dimensions.get('window').width,
  drawerPosition: 'right'
}
);

const DrawerLeft = createDrawerNavigator({
  Home: {
    screen: (DrawerRight)
  }
},
{
  contentComponent: SideMenu,
  drawerWidth: Dimensions.get('window').width,
  drawerPosition: 'left'
}
);

const App = createAppContainer(DrawerLeft);

export default App;*/
