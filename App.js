import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
	return (
		// <View style={{ backgroundColor: 'plum', flex: 1 }}></View>

		<View style={styles.container}>
			<Box style={{ backgroundColor: '#8e9b00', alignSelf: 'flex-start' }}>Box 1</Box>
			<Box style={{ backgroundColor: '#b65d1f', alignSelf: 'center' }}>Box 2</Box>
			<Box style={{ backgroundColor: '#1c4c56', alignSelf: 'stretch' }}>Box 3</Box>
			<Box style={{ backgroundColor: '#ab9156', alignSelf: 'auto' }}>Box 4</Box>
			<Box style={{ backgroundColor: '#1c4c56' }}>Box 5</Box>
			<Box style={{ backgroundColor: '#b95f21' }}>Box 6</Box>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#eee',
		marginTop: 64,
		borderWidth: 6,
		borderColor: 'red',
		flex: 1,
		alignItems: 'stretch',
	},
});
