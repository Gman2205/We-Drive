import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
// Import components
import WelcomeScreen from './src/components/WelcomeScreen';
import Login from './src/components/auth/Login';
import Register from './src/components/auth/Register';
import SearchDrive from './src/components/HomePages/SearchDrive';
import PostDrive from './src/components/HomePages/PostDrive';
import Settings from './src/components/HomePages/Setitngs';

// Navigations
const authNavigation = createStackNavigator({
	LoginScreen: Login,
	RegisterScreen: Register
});

const homeNavigation = createBottomTabNavigator(
	{
		Search: {
			screen: SearchDrive,
			navigationOptions: {
				tabBarLabel: 'Search',
				tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} size={24} />
			}
		},
		Post: {
			screen: PostDrive,
			navigationOptions: {
				tabBarLabel: 'Add New Ride',
				tabBarIcon: ({ tintColor }) => <Icon name="plus-circle" color={tintColor} size={24} />
			}
		},
		Settings: {
			screen: Settings,
			navigationOptions: {
				tabBarLabel: 'Settings',
				tabBarIcon: ({ tintColor }) => <Icon name="cog" color={tintColor} size={24} />
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: '#3498db',
			activeBackgroundColor: '#fff',
			inactiveTintColor: '#fff',
			inactiveBackgroundColor: '#3498db',
			labelStyle: {
				fontSize: 12
			},
			style: {
				backgroundColor: '#3498db'
			}
		}
	}
);

const appNavigator = createSwitchNavigator({
	intro: WelcomeScreen,
	auth: authNavigation,
	home: homeNavigation
});

//  class App extends React.Component {
// 	render() {
// 		return (
// 			<View style={{ flex: 1 }}>
// 				<appNavigator />
// 			</View>
// 		);
// 	}
// }

export default appNavigator;
