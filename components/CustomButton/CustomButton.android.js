import { Pressable, Text } from 'react-native';
import React from 'react';

export default function CustomButton({ onPress, title }) {
	return (
		<Pressable
			onPress={onPress}
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'lightblue',
				borderRadius: 5,
				padding: 10,
			}}
		>
			<Text style={{ color: 'blue', fontSize: 18 }}>{title}</Text>
		</Pressable>
	);
}
