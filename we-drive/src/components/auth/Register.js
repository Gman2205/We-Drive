import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';

import { URL_STRING } from '../../config/urlstring';

class Register extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		name: '',
		email: '',
		password: '',
		password2: '',
		phone: '',
		isKeyboardAvoidingEnabled: false
	};

	// Changing KeyboardAvoidingView state
	isEnabled = (keyboardAvoidingState) => {
		this.setState({ isKeyboardAvoidingEnabled: keyboardAvoidingState });
	};

	// onChangeText Methods
	onNameTextChange = (text) => {
		this.setState({ name: text });
	};
	onEmailTextChange = (text) => {
		this.setState({ email: text });
	};
	onPasswordTextChange = (text) => {
		this.setState({ password: text });
	};
	onPassword2TextChange = (text) => {
		this.setState({ password2: text });
	};
	onPhoneTextChange = (text) => {
		this.setState({ phone: text });
	};
	onSubmit = () => {
		const { name, email, password, phone } = this.state;
		axios
			.post(`${URL_STRING}/Register`, {
				name,
				email,
				password,
				phone
			})
			.then(() => console.log('Successfuly'))
			.catch((err) => console.log(err));
	};

	render() {
		const { textInputStyle, textInputWrapper, container, buttonStyle, buttonWrapperStyle } = styles;
		const { isKeyboardAvoidingEnabled } = this.state;
		const { navigate } = this.props.navigation;

		return (
			<KeyboardAvoidingView style={container} behavior="padding" enabled={isKeyboardAvoidingEnabled}>
				<View style={textInputWrapper}>
					<Text style={{ color: '#fff', fontSize: 20 }}>Name</Text>
					<TextInput
						style={textInputStyle}
						placeholder="Enter Name"
						underlineColorAndroid="transparent"
						keyboardType="email-address"
						onFocus={() => this.isEnabled(false)}
						onChangeText={this.onNameTextChange}
					/>
					<Text style={{ color: '#fff', fontSize: 20 }}>Email</Text>
					<TextInput
						style={textInputStyle}
						placeholder="Enter Email"
						underlineColorAndroid="transparent"
						keyboardType="email-address"
						onFocus={() => this.isEnabled(false)}
						onChangeText={this.onEmailTextChange}
					/>
					<Text style={{ color: '#fff', fontSize: 20 }}>Password</Text>
					<TextInput
						style={textInputStyle}
						placeholder="Enter Password"
						underlineColorAndroid="transparent"
						keyboardType="email-address"
						onFocus={() => this.isEnabled(true)}
						onChangeText={this.onPasswordTextChange}
					/>
					<Text style={{ color: '#fff', fontSize: 20 }}>Confirm Password</Text>
					<TextInput
						style={textInputStyle}
						placeholder="Enter Password Confirm"
						underlineColorAndroid="transparent"
						keyboardType="email-address"
						onFocus={() => this.isEnabled(true)}
						onChangeText={this.onPassword2TextChange}
					/>
					<Text style={{ color: '#fff', fontSize: 20 }}>Phone</Text>
					<TextInput
						style={textInputStyle}
						placeholder="Enter Phone"
						underlineColorAndroid="transparent"
						keyboardType="email-address"
						onFocus={() => this.isEnabled(true)}
						onChangeText={this.onPhoneTextChange}
					/>
				</View>
				<View style={buttonWrapperStyle}>
					<Button
						buttonStyle={buttonStyle}
						title="Submit"
						backgroundColor="#fff"
						color="#000"
						rounded
						onPress={() => {
							this.onSubmit();
							navigate('home');
						}}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db',
		justifyContent: 'center'
	},
	textInputWrapper: {
		marginLeft: '10%',
		marginBottom: 35
	},
	textInputStyle: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 20,
		color: '#fff',
		paddingHorizontal: 10,
		width: '90%',
		borderRadius: 10
	},
	buttonStyle: {
		marginTop: 10,
		width: '80%'
	},
	buttonWrapperStyle: {
		marginLeft: '15%'
	}
});

export default Register;
