import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';

import { URL_STRING } from '../utils/urlstring';

export class Login extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		email: '',
		password: ''
	};

	onEmailTextChange = (text) => {
		this.setState({ email: text });
	};
	onPasswordTextChange = (text) => {
		this.setState({ password: text });
	};
	onSubmit = async () => {
		const {email, password} = this.state;
		axios.post(`${URL_STRING}/Login`,{
			email,
			password
		}).then(res => {
			console.log(res.data.d);
			this.props.navigation.navigate('home');
		}).catch(err => console.log(err.response.data))
	}

	render() {
		const { textInputWrapper, container, buttonStyle, buttonWrapperStyle, textInputStyle } = styles;
		const { navigate } = this.props.navigation;
		return (
			<KeyboardAvoidingView style={container} behavior="padding" enabled>
				<Image
					source={require('../../../assets/carlogo.png')}
					style={{ height: 130, width: 160, position: 'relative', top: -50, left: 100 }}
				/>
				<View style={textInputWrapper}>
					<Text style={{ color: '#fff', fontSize: 28 }}>Email</Text>
					<TextInput
						style={textInputStyle}
						placeholder="Enter Email"
						underlineColorAndroid="transparent"
						keyboardType="email-address"
						onChangeText={this.onEmailTextChange}
					/>
				</View>
				<View style={textInputWrapper}>
					<Text style={{ color: '#fff', fontSize: 28 }}>Password</Text>
					<TextInput
						style={textInputStyle}
						placeholder="Enter Email"
						underlineColorAndroid="transparent"
						secureTextEntry
						onChangeText={this.onPasswordTextChange}
					/>
				</View>
				<View style={buttonWrapperStyle}>
					<Button
						buttonStyle={buttonStyle}
						title="Log In"
						backgroundColor="#fff"
						color="#000"
						rounded
						onPress={this.onSubmit}
					/>
				</View>

				<TouchableOpacity
					style={{ position: 'absolute', bottom: 50, left: 130 }}
					onPress={() => navigate('RegisterScreen')}
				>
					<Text style={{ fontSize: 20 }}>Create Account</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db',
		justifyContent: 'center',
		paddingBottom: 50
	},
	textInputWrapper: {
		marginLeft: '15%'
	},
	textInputStyle: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 20,
		color: '#fff',
		paddingHorizontal: 10,
		width: '85%'
	},
	buttonStyle: {
		marginTop: 10,
		width: '80%'
	},
	buttonWrapperStyle: {
		marginLeft: '15%'
	}
});

export default Login;
