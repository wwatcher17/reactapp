import React, { Component } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { FormLabel, FormInput, Button, Text } from "react-native-elements";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    this.props.navigation.navigate("App");
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.subcontainer}>
          <View style={styles.titleView}>
            <Text h1>ReactApp</Text>
          </View>
          <View>
            <FormLabel>Email</FormLabel>
            <FormInput onChangeText={() => {}} />
          </View>

          <View>
            <FormLabel>Password</FormLabel>
            <FormInput onChangeText={() => {}} />
          </View>

          <Button
            title="Login"
            buttonStyle={styles.buttonStyle}
            onPress={this.login}
          />
        </View>

        <Text style={styles.signupText}>
          Don't have an account yet? <Text style={styles.link}>Signup</Text>
        </Text>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  subcontainer: {
    width: "80%"
  },
  titleView: {
    alignItems: "center",
    marginBottom: 15
  },
  signupText: {
    fontSize: 14,
    position: "absolute",
    bottom: 25
  },
  buttonStyle: {
    marginTop: 30,
    backgroundColor: "#0277bd"
  },
  link: {
    fontSize: 16,
    color: "#004c8c"
  }
});
