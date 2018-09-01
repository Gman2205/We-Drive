import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';

export class SearchLocation extends Component {
	render() {
		return (
			<Modal
				visible={this.props.isSearchLocationVisable}
				onRequestClose={this.props.seachLocationVisabilityHandler}
			>
				<View>
					<Text> textInComponent </Text>
				</View>
			</Modal>
		);
	}
}

export default SearchLocation;
