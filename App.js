import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
	return (
		<View style={styles.container}>
			<Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
			<Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
			<Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
			<Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
			<Box style={{ backgroundColor: '#1c4c56' }}>Box 5</Box>
			<Box style={{ backgroundColor: '#b95f21' }}>Box 6</Box>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 64,
		borderWidth: 6,
		borderColor: 'red',
	},
});
