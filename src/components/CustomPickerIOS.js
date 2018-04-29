import React, { Component } from "react";
import { View, Text, Picker, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

class CustomPickerIOS extends Component {
  constructor(props) {
    super(props);
    this.updateValue = this.updateValue.bind(this);
  }
  state = {
    showingPicker: false
  };

  updateValue(value, index) {
    this.setState({ showingPicker: false });
    this.props.updateValue(value);
  }

  render() {
    const { showingPicker } = this.state;
    const { selectedValue } = this.props;
    const values = this.props.data;
    return (
      <View style={this.props.containerStyle}>
        <TouchableOpacity
          style={[
            styles.subcontainer,
            { borderBottomWidth: showingPicker ? 0 : 0.1 }
          ]}
          onPress={() => this.setState({ showingPicker: !showingPicker })}
          testID="picker_button_ios"
        >
          <Text style={{ marginLeft: 30 }}>Fruit</Text>
          {/* <Entypo name="select-arrows" color="#000000" size={18} /> */}
          <Text style={{ marginRight: 30 }} testID="chosen_item_text">
            {selectedValue || "Choose one"}
          </Text>
        </TouchableOpacity>
        {showingPicker && (
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
        )}
      </View>
    );
  }
}

export default CustomPickerIOS;

const styles = StyleSheet.create({
  picker: {
    backgroundColor: "white",
    borderBottomWidth: 0.1
  },
  pickerItem: {
    height: 150
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: 35,
    borderTopWidth: 0.1
  }
});
