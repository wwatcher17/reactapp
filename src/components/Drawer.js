import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.navigation.navigate("Auth");
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          style={styles.menuButton}
        >
          <Entypo name="home" color="#455A64" size={24} />
          <Text style={styles.menuTitle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.logout} style={styles.menuButton}>
          <Entypo name="log-out" color="#455A64" size={24} />
          <Text style={styles.menuTitle}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    zIndex: 9
  },
  menuButton: {
    flexDirection: "row",
    paddingLeft: 13 * 3,
    alignItems: "center",
    height: 21.7 * 3,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0"
  },
  menuTitle: {
    fontSize: 4.7 * 3,
    color: "#828282",
    marginLeft: 6 * 3
  }
});
