import { StyleSheet, Text, View, ScrollView, StatusBar, FlatList } from 'react-native';
import pokemonList from './data.json';
import groupedPokemonList from './grouped-data.json';

export default function App() {
	return (
		<View style={styles.container}>
			{/* <ScrollView style={styles.scrollView}>
				{pokemonList.map((pokemon) => {
					console.log(pokemon.id);
					return (
						<View style={styles.card} key={pokemon.id}>
							<Text style={styles.cardText}>{pokemon.type}</Text>
							<Text style={styles.cardText}>{pokemon.name}</Text>
						</View>
					);
				})}
			</ScrollView> */}

			<FlatList
				style={styles.flatList}
				data={pokemonList}
				renderItem={({ item }) => {
					// console.log(item.id);
					return (
						<View style={styles.card} key={item.id}>
							<Text style={styles.cardText}>{item.type}</Text>
							<Text style={styles.cardText}>{item.name}</Text>
						</View>
					);
				}}
				// horizontal
				keyExtractor={(item) => item.id.toString()}
				ListEmptyComponent={<Text>No items found</Text>}
				ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
				ListFooterComponent={<Text style={styles.footerText}>End of list</Text>}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: StatusBar.currentHeight,
	},

	// scrollView: {
	// 	paddingHorizontal: 16,
	// },
	flatList: {
		paddingHorizontal: 16,
	},

	card: {
		backgroundColor: 'white',
		padding: 16,
		borderRadius: 8,
		borderWidth: 1,
		marginBottom: 16,
	},
	cardText: {
		fontSize: 24,
	},
	headerText: {
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 12,
	},
	footerText: {
		fontSize: 24,
		textAlign: 'center',
		marginTop: 12,
	},
});
