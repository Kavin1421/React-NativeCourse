import { StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View style={styles.view}>
      {/* <Link href="/login" style={styles.navButton}>
        {" "}
        Login Page da kavin uh !!
      </Link> */}
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
      <Text>Hello Kavin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  navButton: {
    width: 200,
    height: 20,
    backgroundColor: "coral",
    borderRadius: 10,
    textAlign: "center",
  },
});
