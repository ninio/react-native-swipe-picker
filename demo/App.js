import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipePicker from 'react-native-swipe-picker';

export default function App() {
	const items = [];

	const [ selectedItem, setSelectedItem ] = useState({
		index: 0,
		item: {
			value: 0,
			label: 'Item 0'
		}
	} );


	for (let index = 0; index < 100; index++) {
		items.push({
			value: index,
			label: `Item ${index}`
		});
	}

	return (
		<View style={styles.container}>
			<Text>Open up App.js to see how to use SwipePicker!</Text>
			<SwipePicker
				items={ items }
				onChange={ setSelectedItem }
				height={ 80 }
				width={ 120 }
				/>
			<View style={ styles.selectedData }>
				<Text>Selected Data:</Text>
				<Text>{ JSON.stringify( selectedItem, null, '    ' ) }</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedData: {
		margin: 24,
		padding: 12,
		backgroundColor: 'rgba(200,200,0,0.15)',
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.75)',
	},
});
