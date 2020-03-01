import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import * as SMS from "expo-sms";
import SendSMS from "react-native-sms";

import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    global.contacts = ["9559026060"];
    global.emerg_list = [{ key: "9559026060" }];
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  // static navigationOptions = {
  //   headerLeft: null
  // };

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email.trim(),
      password: this.state.password
    };
    axios
      .post("http://172.17.75.58:5000/api/users/login", userData)
      .then(res => {
        console.log(res);
        console.log(res.data);

        if (this.state.email !== "naman@iitk.ac.in") {
          global.contacts = [];
          global.emerg_list = [];
        }

        this.props.navigation.navigate("send");
      })
      .catch(err => {
        alert("wrong credentials");
        console.log(err);
      });

    console.log(userData);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => this.props.navigation.navigate("register")}
        >
          Don't have an Account? Register.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText("email", val)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText("password", val)}
          />
        </View>
        <Button title="Log in" onPress={this.onSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
    color: "black",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },

  input: {
    width: 350,
    height: 45,
    backgroundColor: "#33FFCA",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 3,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC"
  }
});
