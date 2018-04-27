import React, { Component } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";
import { Entypo } from "@expo/vector-icons";

import QuestionBox from "../components/QuestionBox";

const values = ['Apple', 'Orange', 'Banana', 'Grape'];

class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.updateValue = this.updateValue.bind(this)
  }

  state = {
    selectedValue: null,
    showingPicker: false
  }

  updateValue(value, index) {
    this.setState({ selectedValue: value, showingPicker: false });
  }

  render() {
    // const fruits = ['Apple', 'Orange', 'Banana', 'Grape'];
    console.log(this.state)
    return (
      <View style={styles.container}>
        <QuestionBox />
        <Picker
           style={styles.picker}
           itemStyle={styles.pickerItem}
           testId='picker'
           selectedValue={this.state.selectedValue}
           onValueChange={this.updateValue}
        >
             <Picker.Item
                 key={0}
                 label="Choose a fruit"
                 value={null}
             />

             {values.map(value => {
                 return (
                     <Picker.Item
                         key={value}
                         label={value}
                         value={value}
                     />
                 );
             })}
           </Picker>
      </View>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center"
  },
  picker: {
    backgroundColor: 'white'
  },
  pickerItem: {
    height: 150
  }
});
