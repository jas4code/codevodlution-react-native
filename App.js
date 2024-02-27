import { View, Text, Image, Button, Pressable } from 'react-native';

const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
	return (
		<View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
			<Button title='Press' onPress={() => console.log('Button pressed.')} color='midnightblue' />

			<Pressable onPress={() => console.log('Image Pressed.')}>
				<Image source={logoImg} style={{ width: 300, height: 300 }} />
			</Pressable>
			{/* <Pressable onPress={() => console.log('Text Pressed.')}>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus illo minima accusantium sint voluptatum ut illum ab eveniet commodi quos fuga perferendis alias atque accusamus, iure nobis dolor recusandae sed, blanditiis quibusdam? Magnam nesciunt a voluptate laboriosam dolores ducimus est ea molestias! Sint, tenetur aliquam similique consequatur corporis tempora accusamus cum modi! Minima nihil sit sapiente deleniti odit, quod quos numquam eligendi, aperiam dignissimos, perferendis aliquid magnam quo ipsum blanditiis? Est cupiditate at inventore? Fugiat maiores enim quos tenetur quo tempore eaque doloribus velit recusandae
					perspiciatis, vero consectetur accusantium sunt, nulla rem? Quod et soluta ipsum natus corrupti expedita tempore?
				</Text>
			</Pressable> */}

			{/* Other Pressable Properties */}
			<Pressable onPress={() => console.log('onPress Activated.')}>
				<Text>onPress Property</Text>
			</Pressable>
			<Pressable onPressIn={() => console.log('onPressIn Activated.')}>
				<Text>onPressIn Property</Text>
			</Pressable>
			<Pressable onPressOut={() => console.log('onPressOut Activated.')}>
				<Text>onPressOut Property</Text>
			</Pressable>
			<Pressable onLongPress={() => console.log('onLongPress Activated.')}>
				<Text>onLongPress Property</Text>
			</Pressable>
		</View>
	);
}
