import { View, Text, Image, ScrollView } from 'react-native';

const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
	return (
		<View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
			<ScrollView>
				<Image source={logoImg} style={{ width: 300, height: 300 }} />
				<Text>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum magni illo in, incidunt eos aspernatur. Hic, expedita. Praesentium quis eaque sit et minus nihil dolore quasi, necessitatibus ipsa amet eum repudiandae repellendus dolorum in laudantium illum corporis, sequi tempora totam aperiam adipisci excepturi! Obcaecati esse praesentium consectetur nulla cupiditate atque repudiandae, voluptas eveniet itaque. Vitae blanditiis repellendus dolorum ex id velit et laborum voluptas architecto, illo error nam vero tempora, minima sit itaque odio incidunt delectus dolore? Sint quos vitae unde, fuga impedit iure cumque accusantium nobis, quia
					vero architecto aspernatur? Iusto repellendus quidem eligendi atque, voluptatum officia eaque deserunt.
				</Text>
				<Image source={logoImg} style={{ width: 300, height: 300 }} />
			</ScrollView>
		</View>
	);
}
