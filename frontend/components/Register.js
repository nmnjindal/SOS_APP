import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from "react-native";

import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("http://172.17.75.58:5000/api/users/register", newUser)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("User created");
        this.props.navigation.navigate("login");
      })
      .catch(err => {
        alert("Wrong credentials");
        console.log(err);
      });
    console.log(newUser);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => this.props.navigation.navigate("login")}
        >
          Have an Account? Login.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("name", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("email", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("password", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Re-enter Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("password2", val)}
        />

        <Button title="Sign Up" onPress={this.onSubmit} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
    color: "black",
    padding: 8,
    fontSize: 15,
    fontWeight: "bold"
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: "skyblue",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    marginHorizontal: 20
    // justifyContent: "center",
    // alignItems: "center"
  }
});
