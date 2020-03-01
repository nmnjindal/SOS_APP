import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import * as SMS from "expo-sms";

import React, { Component } from "react";
import axios from "axios";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

// import RNLocation from "react-native-location";
//import Geolocation from "react-native-geolocation-service";

export default class SendSMSscreen extends Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      location: null,
      errorMessage: null
    };
  }

  static navigationOptions = {
    headerLeft: null
  };
  componentDidMount() {
    _isMounted = true;
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
  componentWillUnmount() {
    this._isMounted = false;
  }
  onSubmit = e => {
    console.log("HOLA");
    console.log(this.state.location);
    while (!this.state.location) {
      this._getLocationAsync;
    }
    var lat = this.state.location.coords.latitude;
    // console.log(lat);
    var long = this.state.location.coords.longitude;
    console.log(global.contacts);
    if (global.contacts && global)
      SMS.sendSMSAsync(
        global.contacts,
        "Help me at https://www.google.com/maps?q=" + lat + "," + long
      );
  };

  perform_logout = e => {
    e.preventDefault();
    this.props.navigation.navigate("login");
  };

  show_emergency = e => {
    e.preventDefault();
    this.props.navigation.navigate("list");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch"
        }}
      >
        <View style={styles.container}>
          <Button title="HELP" onPress={this.onSubmit} />
        </View>

        <View style={styles.container}>
          <Button
            title="View Emergency Contacts"
            onPress={this.show_emergency}
          />
        </View>

        <View style={styles.container}>
          <Button title="Logout" onPress={this.perform_logout} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
