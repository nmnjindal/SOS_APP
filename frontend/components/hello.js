import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import Login from "./components/Login";

export default class Hello extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Text>Hello, world!</Text>
			</View>
		);
	}
}
