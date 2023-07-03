import React from "react";
import { View, FlatList, SafeAreaView, Text, StyleSheet } from "react-native";
import {} from "react-native";

export function Messages() {
  return (
    <SafeAreaView style={page.container}>
      <View style={page.section1}>
        <Text style={page.text}>Your messages here</Text>
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
  section1: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    color: "#C11313",
  },
});
