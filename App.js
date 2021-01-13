import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import FourthScreen from './src/screens/FourthScreen';
import FifthScreen from './src/screens/FifthScreen';
import WebScreen from './src/screens/WebScreen';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createMaterialTopTabNavigator({
  First: {
    screen: FirstScreen
  },
  Second: {
    screen: SecondScreen
  },
  Third: {
    screen: ThirdScreen
  },
  Fourth: {
    screen: FourthScreen
  },
  Fifth: {
    screen: FifthScreen
  },
},
  {
    initialRouteName: 'First',
    animationEnabled: true,
    backBehavior: 'history',
    tabBarOptions: {
      showIcon: false,
      showLabel: false,
      style: { height: 0 }
    }
  }
)

const AppNavigator = createStackNavigator({
  navigator: {
    screen: navigator,
    navigationOptions: {
      headerShown: false
    }
  },
  Web: {
    screen: WebScreen,
    navigationOptions: {
      headerShown: false
    }
  }
})



export default createAppContainer(AppNavigator);