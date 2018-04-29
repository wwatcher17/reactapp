import React from "react";
import {
  DrawerNavigator,
  SwitchNavigator,
  StackNavigator
} from "react-navigation";
import { TouchableOpacity, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import DrawerComponent from "../components/Drawer";

const DrawerButton = props => {
  const { navigate } = props.navigation;
  const routeIndex = props.navigation.state.index;
  return (
    <View style={{ marginLeft: 10 }}>
      <TouchableOpacity
        onPress={() =>
          routeIndex === 0 ? navigate("DrawerOpen") : navigate("DrawerClose")
        }
        testID="drawer_button"
      >
        <EvilIcons name="navicon" size={32} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const Drawer = DrawerNavigator(
  {
    home: {
      screen: MainScreen
    }
  },
  {
    contentComponent: DrawerComponent
  }
);

const App = StackNavigator(
  {
    home: {
      screen: Drawer
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      headerLeft: <DrawerButton navigation={navigation} />,
      drawerBackgroundColor: "#FFFFFF",
      headerStyle: { backgroundColor: "#29b6f6" },
      headerTitleStyle: {
        color: "#FFFFFF",
        fontSize: 6.7 * 3
      },
      gesturesEnabled: true
    })
  }
);

const Auth = StackNavigator(
  {
    auth: {
      screen: LoginScreen
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default SwitchNavigator(
  {
    App,
    Auth
  },
  {
    initialRouteName: "Auth"
  }
);
