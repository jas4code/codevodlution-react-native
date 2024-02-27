import { View, Button, Alert } from 'react-native';

const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
	return (
		<View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
			<Button title='Alert 1' onPress={() => Alert.alert('Invalid data!')} />
			<Button title='Alert 2' onPress={() => Alert.alert('Invalid data!', 'DOB incorrect')} />
			<Button
				title='Alert 3'
				onPress={() =>
					Alert.alert('Invalid data!', 'DOB incorrect', [
						{
							text: 'Cancel',
							onPress: () => console.log('Cancel pressed.'),
						},
						{
							text: 'OK',
							onPress: () => console.log('OK pressed.'),
						},
						{
							text: 'Sample1',
							onPress: () => console.log('Sample1 pressed.'),
						},
					])
				}
			/>
		</View>
	);
}
