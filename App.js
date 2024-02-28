import { View, Text, StyleSheet } from 'react-native';

export default function App() {
	return (
		// <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
		<View style={styles.container}>
			<Text style={styles.title}>Styleshee API</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'plum',
		padding: 60,
	},
	title: {},
});
