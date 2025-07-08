import { Stack } from "expo-router";
// import { Text } from "react-native";
export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        ></Stack.Screen>
        {/* <Stack.Screen name = "login" options ={{title :"Login"}}></Stack.Screen> */}
      </Stack>
    </>
  );
}

