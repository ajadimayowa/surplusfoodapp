import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import {} from "react-native";

export function Sell() {
  return (
    <SafeAreaView style={page.container}>
      <View>
        <Text style={page.text}>What are you buying today?</Text>
      </View>
    </SafeAreaView>
  );
}

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
});
