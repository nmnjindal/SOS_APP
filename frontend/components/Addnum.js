import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import React, { Component } from "react";

export default class Addnum extends Component {
  constructor() {
    super();
    this.state = {
      num: ""
    };
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.num) {
      global.contacts.push(this.state.num);
      global.emerg_list.push({ key: this.state.num });
      this.state.num = "";
      alert("Added");
      this.props.navigation.navigate("send");
    } else {
      console.log(this.state.num);
      alert("enter valid mobile number");
    }

    // console.log(userData);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="new emerg contact"
          autoCapitalize="none"
          placeholderTextColor="grey"
          onChangeText={val => this.onChangeText("num", val)}
        />

        <Button title="Add" onPress={this.onSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
    color: "black",
    padding: 8,
    fontSize: 10,
    fontWeight: "bold"
  },

  input: {
    width: 350,
    height: 45,
    margin: 10,
    padding: 8,
    color: "black",
    borderRadius: 3,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  }
});
