import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

import Login from "./components/Login";
import List from "./components/List";
import Register from "./components/Register";
import SendSMSscreen from "./components/SendSMS";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Addnum from "./components/Addnum";

// export default class HelloWorldApp extends Component {
//   render() {
//     return <Login />;
//   }
// }

class HomeScreen extends React.Component {
	constructor() {
		super();
		global.contacts = ["9559026060"];
	}

	render() {
		console.log(global.contacts);
		return (
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<Text>Home Screen</Text>
			</View>
		);
	}
}

const AppNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		login: Login,
		register: Register,
		send: SendSMSscreen,
		list: List,
		add_num: Addnum
	},
	{
		initialRouteName: "login"
	}
);

export default createAppContainer(AppNavigator);
