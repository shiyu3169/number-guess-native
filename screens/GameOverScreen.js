import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = ({ rounds, number, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Number was: {number}</Text>
      <Button title="restart" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
