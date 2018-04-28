import React, { Component } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { FormLabel, FormInput, Button, Text } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
            <FormInput onChangeText={() => {}} secureTextEntry />
          </View>
          <Button
            title="Login"
            buttonStyle={styles.buttonStyle}
            onPress={this.login}
            icon={{ name: "input", color: "#ffffff" }}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Signup</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 14
    // position: 'absolute',
    // bottom: 25
  },
  buttonStyle: {
    marginTop: 30,
    backgroundColor: "#29b6f6"
  },
  link: {
    fontSize: 14,
    color: "#1565C0",
    marginLeft: 5
  },
  textView: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row"
  }
});
