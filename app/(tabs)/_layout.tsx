import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";
// import { Text } from "react-native";
export default function RootLayout() {
  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: "tomato" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => {
              return focused ? (
                <FontAwesome5 name="home" size={24} color={color} />
              ) : (
                <Feather name="home" size={24} color={color} />
              );
            },
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="login"
          options={{
            title: "Login",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user" size={24} color={color} />
            ),
          }}
        ></Tabs.Screen>
      </Tabs>
    </>
  );
}
