import React from "react";
import { View, FlatList, SafeAreaView, Text, StyleSheet } from "react-native";
import {} from "react-native";

export function Profile() {
  return (
    <SafeAreaView style={page.container}>
      <View>
        <Text style={page.text}>Your profile</Text>
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
