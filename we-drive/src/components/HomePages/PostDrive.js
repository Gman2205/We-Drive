import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';

class PostDrive extends Component {
	state = {
		isDatePickerVisible: false,
		isTimePickerVisible: false,
		selectedIndex: 0
	};

	// DateTime Picker Methods
	_handleDatePicker = () => this.setState({ isDatePickerVisible: !this.state.isDatePickerVisible });
	_setDatePicker = (date) => {
		console.log('A date has been picked: ', date);
		this._handleDatePicker();
	};
	_handleTimePicker = () => this.setState({ isTimePickerVisible: !this.state.isTimePickerVisible });
	_setTimePicker = (date) => {
		console.log('A date has been picked: ', date);
		this._handleTimePicker();
	};

	// Button Group
	updateIndex = (selectedIndex) => {
		this.setState({ selectedIndex });
	};

	render() {
		// Styles
		const {
			container,
			locationmHeaderTextStyle,
			fromLocationButtonStyle,
			toLocationButtonStyle,
			dateButtonStyle,
			timeButtonStyle,
			submitButtonStyle,
			availableSeatsTextStyle,
			availableSeatsPickerStyle
		} = styles;

		// Buttons
		const buttons = [ 'Single Ride', 'Multiple Rides' ];

		return (
			<View style={container}>
				{/* Button Group For Navigate Between Ride Createtion Type (Single / Multiple) */}
				<View style={{ marginBottom: '4%' }}>
					<ButtonGroup
						onPress={this.updateIndex}
						selectedIndex={this.state.selectedIndex}
						buttons={buttons}
						selectedButtonStyle={{ backgroundColor: '#fff' }}
						selectedTextStyle={{ color: '#000' }}
						innerBorderStyle={{ width: 2, color: '#3498db' }}
						textStyle={{ color: '#fff' }}
						containerStyle={{ height: 50, width: '100%', backgroundColor: '#3498db' }}
					/>
				</View>

				{/* From */}
				<View style={{ width: '80%' }}>
					<Text style={locationmHeaderTextStyle}>Location</Text>
					<TouchableOpacity style={fromLocationButtonStyle}>
						<Icon name="map-marker" size={24} color="#000" />
						<Text style={{ fontSize: 20, marginLeft: 10 }}>From</Text>
					</TouchableOpacity>

					{/* To */}
					<TouchableOpacity style={toLocationButtonStyle}>
						<Icon name="map-marker" size={24} color="#000" />
						<Text style={{ fontSize: 20, marginLeft: 10 }}>To</Text>
					</TouchableOpacity>

					{/* Date */}
					<Text style={{ color: '#fff', alignSelf: 'flex-start', fontSize: 24, marginBottom: 8 }}>
						Date & Time
					</Text>
					<TouchableOpacity style={dateButtonStyle} onPress={this._handleDatePicker}>
						<Icon name="calendar" size={24} color="#000" />
						<Text style={{ fontSize: 20, marginLeft: 10 }}>Date</Text>
					</TouchableOpacity>

					<DateTimePicker
						isVisible={this.state.isDatePickerVisible}
						onConfirm={this._setDatePicker}
						onCancel={this._handleDatePicker}
					/>

					{/* Time */}
					<TouchableOpacity style={timeButtonStyle} onPress={this._handleTimePicker}>
						<MaterialIcons name="schedule" size={24} color="#000" />
						<Text style={{ fontSize: 20, marginLeft: 10 }}>Time</Text>
					</TouchableOpacity>

					<DateTimePicker
						mode="time"
						isVisible={this.state.isTimePickerVisible}
						onConfirm={this._setTimePicker}
						onCancel={this._handleTimePicker}
					/>
				</View>

				{/* Available Seats */}
				<View style={{ marginRight: '32%' }}>
					<Text style={availableSeatsTextStyle}>Available Seats</Text>
					<Picker style={availableSeatsPickerStyle} mode="dropdown">
						<Picker.Item label="1" value="1" />
						<Picker.Item label="2" value="2" />
						<Picker.Item label="3" value="3" />
						<Picker.Item label="4" value="4" />
					</Picker>
				</View>

				<TouchableOpacity style={submitButtonStyle}>
					<View style={{ flexDirection: 'row', marginLeft: '20%' }}>
						<Icon name="plus" size={24} style={{ fontWeight: 300, marginRight: 5, color: '#3498db' }} />
						<Text style={{ fontSize: 20, color: '#3498db' }}>SUBMIT</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db',
		paddingTop: '5%',
		alignItems: 'center'
	},
	locationmHeaderTextStyle: {
		color: '#fff',
		alignSelf: 'flex-start',
		fontSize: 24,
		marginBottom: 8
	},
	fromLocationButtonStyle: {
		backgroundColor: '#fff',
		padding: 5,
		flexDirection: 'row',
		marginBottom: 15
	},
	toLocationButtonStyle: {
		backgroundColor: '#fff',
		padding: 5,
		flexDirection: 'row',
		marginBottom: 30
	},
	dateButtonStyle: {
		backgroundColor: '#fff',
		padding: 5,
		flexDirection: 'row',
		marginBottom: 15
	},
	timeButtonStyle: {
		backgroundColor: '#fff',
		padding: 5,
		flexDirection: 'row',
		marginBottom: 30
	},
	submitButtonStyle: {
		backgroundColor: '#fff',
		width: '50%',
		borderRadius: 20,
		padding: 10
	},
	availableSeatsTextStyle: {
		fontSize: 24,
		marginRight: '5%',
		color: '#fff'
	},
	availableSeatsPickerStyle: {
		height: 40,
		width: 40,
		backgroundColor: '#fff',
		marginBottom: 40
	}
});

export default PostDrive;
