import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, ScrollableView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

export default class List extends Component {
	add_numbers = e => {
		e.preventDefault();
		this.props.navigation.navigate("add_num");
	};

	render() {
		return (
			// <ScrollableView>
			<View style={styles.container}>
				<FlatList
					data={global.emerg_list}
					renderItem={({ item }) => (
						<Text style={styles.item}>{item.key}</Text>
					)}
				/>

				<Button title="Add a contact" onPress={this.add_numbers} />
			</View>

			// </ScrollableView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	item: {
		margin: 10,
		padding: 10,
		fontSize: 18,
		height: 44,
		backgroundColor: "#FFCCCC"
	}
});
