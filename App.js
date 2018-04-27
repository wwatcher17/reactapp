import React from "react";
import { View, StatusBar } from "react-native";
import AppNavigator from "./src/navigators";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="blue" />
        <AppNavigator />
      </View>
    );
  }
}
