import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.eightBall}></View>
      <View style={styles.ballCenter}></View>
      <View style={styles.textContainer}></View>
      <Text style={styles.ballText}>text goes here</Text>
    </View>
  );
}
/* <StatusBar style="auto" /> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  eightBall: {
    width: 500,
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 500 / 2,
  },
  ballCenter: {
    position: "absolute",
    width: 225,
    height: 225,
    backgroundColor: "white",
    borderRadius: 225 / 2,
  },
  textContainer: {
    position: "absolute",
    height: 0,
    width: 0,

    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 75,
    borderRightWidth: 75,
    borderBottomWidth: 150,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "blue",
    transform: [{ rotate: "180deg" }],
  },
  ballText: {
    width: 100,
    height: 100,
    position: "absolute",
    color: "white",
    textAlign: "center",
  },
});
