import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { SearchLocation } from './SearchLocation';

export class SearchRide extends Component {
	state = {
		isDatePickerVisible: false,
		isTimePickerVisible: false,
		fromToLocationIndex: 0,
		originLocation: 'From',
		destinationLocation: 'To',
		isSearchLocationVisable: false
	};

	// Location Methods
	setLocationIndex = (index) => {
		this.setState({ fromToLocationIndex: index });
	};
	seachLocationVisabilityHandler = () => {
		this.setState({ isSearchLocationVisable: !this.state.isSearchLocationVisable });
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

	render() {
		const {
			container,
			locationmHeaderTextStyle,
			fromLocationButtonStyle,
			toLocationButtonStyle,
			dateButtonStyle,
			timeButtonStyle,
			submitButtonStyle
		} = styles;
		const { modalVisibleHandler, modalVisability } = this.props;
		const { originLocation, destinationLocation, isSearchLocationVisable } = this.state;
		return (
			<Modal onPress={modalVisibleHandler} visible={modalVisability} onRequestClose={modalVisibleHandler}>
				<View style={container}>
					{/* From */}
					<View style={{ width: '80%' }}>
						<Text style={locationmHeaderTextStyle}>Location</Text>
						<TouchableOpacity
							onPress={() => {
								this.setLocationIndex(1);
								this.seachLocationVisabilityHandler();
							}}
							style={fromLocationButtonStyle}
						>
							<Icon name="map-marker" size={24} color="#000" />
							<Text style={{ fontSize: 20, marginLeft: 10 }}>{originLocation}</Text>
						</TouchableOpacity>

						{/* To */}
						<TouchableOpacity
							onPress={() => {
								this.setLocationIndex(2);
								this.seachLocationVisabilityHandler();
							}}
							style={toLocationButtonStyle}
						>
							<Icon name="map-marker" size={24} color="#000" />
							<Text style={{ fontSize: 20, marginLeft: 10 }}>{destinationLocation}</Text>
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

						<TouchableOpacity style={submitButtonStyle}>
							<View style={{ flexDirection: 'row', marginLeft: '14%' }}>
								<Icon
									name="search-plus"
									size={24}
									style={{ fontWeight: 300, marginRight: 5, color: '#3498db' }}
								/>
								<Text style={{ fontSize: 20, color: '#3498db' }}>SEARCH</Text>
							</View>
						</TouchableOpacity>
					</View>
					<SearchLocation
						isSearchLocationVisable={isSearchLocationVisable}
						seachLocationVisabilityHandler={this.seachLocationVisabilityHandler}
					/>
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#3498db',
		paddingTop: '5%'
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
	}
});

export default SearchRide;
