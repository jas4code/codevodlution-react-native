import { View, Text, StyleSheet } from 'react-native';

export default function App() {
	return (
		// <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
		<View style={styles.container}>
			<View style={[styles.box, styles.lightblueBg]}>
				<Text>Lightblue box</Text>
			</View>
			<View style={[styles.box, styles.lightgreenBg]}>
				<Text>Lightgreen box</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'plum',
		padding: 60,
	},
	box: {
		width: 100,
		height: 100,

		// Padding
		paddingHorizontal: 10,
		paddingVertical: 20,

		// Margin
		marginVertical: 10,

		// Border
		borderWidth: 2,
		borderColor: 'purple',
	},
	lightblueBg: {
		backgroundColor: 'lightblue',
	},
	lightgreenBg: {
		backgroundColor: 'lightgreen',
	},
});
