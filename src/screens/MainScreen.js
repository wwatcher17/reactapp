import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";

import QuestionBox from "../components/QuestionBox";
import CustomPickerIOS from "../components/CustomPickerIOS";
import CustomPickerAndroid from "../components/CustomPickerAndroid";

const values = ["Apple", "Orange", "Banana", "Grape"];

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.answer = this.answer.bind(this);
    this.updateFruit = this.updateFruit.bind(this);
  }
  state = {
    allowedToDrink: null,
    answered: false,
    fruit: null
  };

  answer(allowedToDrink) {
    this.setState({ answered: true, allowedToDrink });
  }

  updateFruit(value) {
    this.setState({ fruit: value });
  }

  renderPicker() {
    return Platform.OS === "ios" ? (
      <CustomPickerIOS
        data={values}
        containerStyle={styles.pickerContainer}
        updateValue={this.updateFruit}
        selectedValue={this.state.fruit}
      />
    ) : (
      <CustomPickerAndroid
        data={values}
        containerStyle={styles.pickerContainer}
        updateValue={this.updateFruit}
        selectedValue={this.state.fruit}
      />
    );
  }

  render() {
    const { answered, allowedToDrink } = this.state;
    return (
      <View style={styles.container} testID="main_screen">
        <QuestionBox {...this.state} answer={this.answer} />
        {answered && allowedToDrink && this.renderPicker()}
      </View>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center"
    // alignItems: "center"
  },
  pickerContainer: {
    marginTop: 10
  }
});
