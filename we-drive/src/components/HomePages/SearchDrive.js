import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Rating, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchDrive extends Component {
	render() {
		const { container } = styles;
		return (
			<View style={container}>

				<TouchableOpacity
					style={{
						backgroundColor: '#fff',
						width: '80%',
						padding: 10,
						flexDirection: 'row',
						borderRadius: 15,
						marginBottom: 5
					}}
				>
					<Icon name="search" size={24} color="#000"  />
					<Text style={{ fontSize: 20, marginLeft: 10 }}>Search Ride</Text>
				</TouchableOpacity>
				<Card>
					<Rating
						type="star"
						fractions={1}
						startingValue={2.2}
						readonly
						imageSize={40}
						style={{ paddingVertical: 10 }}
					/>
					<Text style={{ marginBottom: 10 }}>
						The idea with React Native Elements is more about component structure than actual design.
					</Text>
					<Button
						icon={{ name: 'code' }}
						backgroundColor="#03A9F4"
						buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
						title="VIEW NOW"
					/>
				</Card>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db',
		paddingTop: '10%',
		alignItems: 'center'
	}
});

export default SearchDrive;
