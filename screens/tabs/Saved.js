import React from "react";
import { View, FlatList, SafeAreaView, Text, StyleSheet } from "react-native";
import {} from "react-native";
import { useSelector } from "react-redux";

export function Saved() {
  const loggedInUser = useSelector((currentUser)=>currentUser.auth.userInfo)
  // console.log(loggedInUser);
  return (
    <SafeAreaView style={page.container}>
      <View>
        <Text style={page.text}>your favorites are empty for now</Text>
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
