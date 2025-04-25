import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="User"
        screenOptions={{
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#3c0a6b",
          drawerStyle: {
            backgroundColor: "#fff",
          },
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen name="User" component={UserScreen} options={{
          drawerLabel: "User Screen",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
