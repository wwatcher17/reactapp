import React, { Component } from "react";
import { View, Text, Picker, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

class CustomPickerAndroid extends Component {
  constructor(props) {
    super(props);
    this.updateValue = this.updateValue.bind(this);
  }
  state = {
    selectedValue: null,
    showingPicker: false
  };

  updateValue(value, index) {
    this.setState({ selectedValue: value, showingPicker: false });
  }

  render() {
    const { selectedValue, showingPicker } = this.state;
    const values = this.props.data;
    return (
      <View style={this.props.containerStyle}>
        <View style={styles.subcontainer}>
          <Text>Fruit</Text>
        </View>

        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          testID="picker"
          selectedValue={selectedValue}
          onValueChange={this.updateValue}
        >
          <Picker.Item key={0} label="Choose one" value={null} />

          {values.map(value => {
            return (
              <Picker.Item
                key={value}
                label={value}
                value={value}
                testID={value}
              />
            );
          })}
        </Picker>
      </View>
    );
  }
}

export default CustomPickerAndroid;

const styles = StyleSheet.create({
  picker: {
    backgroundColor: "white"
  },
  pickerItem: {
    height: 150
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "white",
    paddingLeft: 10,
    height: 35,
    borderTopWidth: 0.1
  }
});
