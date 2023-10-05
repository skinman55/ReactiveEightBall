import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  const [response, setResponse] = useState("fart");
  return (
    <View style={styles.container}>
      <View style={styles.eightBall}></View>
      <View style={styles.ballCenter}></View>
      <View style={styles.textContainer}></View>
      <Text style={styles.ballText}>{response}</Text>
      <Pressable style={styles.askButton}>
        <Text
          style={styles.askButtonText}
          onPress={() =>
            setResponse(
              answers[Math.ceil(Math.random() * (answers.length - 1))]
            )
          }
        >
          Ask the 8 Ball
        </Text>
      </Pressable>
    </View>
  );
}
/* <StatusBar style="auto" /> */

const answers = [
  "It is certain",
  "Reply hazy, try again",
  "Don’t count on it",
  "It is decidedly so",
  "Ask again later",
  "My reply is no",
  "Without a doubt",
  "Better not tell you now",
  "My sources say no",
  "Yes definitely",
  "Cannot predict now",
  "Outlook not so good",
  "You may rely on it",
  "Concentrate and ask again",
  "Very doubtful",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  eightBall: {
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 400 / 2,
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
  askButton: {
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  askButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
