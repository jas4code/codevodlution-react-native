import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

export default function AboutScreen({ navigation, route }) {
	// const navigation = useNavigation();
	const { name } = route.params;

	return (
		<View style={styles.container}>
			<Text style={styles.text}>About {name}</Text>
			<Button style={{ marginBottom: 10 }} title='Update the Name' onPress={() => navigation.setParams({ name: 'Belphegor' })} />
			<Button title='Go back with data' onPress={() => navigation.navigate('Home', { result: 'Data from about' })} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
	},
});
