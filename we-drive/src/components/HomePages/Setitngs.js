import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class Setitngs extends Component {
	render() {
		const { container } = styles;
		return (
			<View style={container}>
				<Text> Settings </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db',
		paddingTop: '10%'
	}
});

export default Setitngs;
