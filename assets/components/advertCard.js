import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../constants/colors";

export default function AdCard({ info, index }) {
  // console.log(info)
  return (
    <View style={style.container}>
      <View style={style.left}>
        <Text
          style={[
            { color: info.item.title1Color, 
            fontFamily: "montserratSemiBold",
            fontSize:15
         },
          ]}
        >
          {info.item.title1}
        </Text>
        
        <Text
        style={[
            { color: info.item.title2Color, 
            fontFamily: "montserratBold",
            fontSize:30
         },
          ]}
        >{info.item.title2}</Text>
       
        <Text
        style={[
            { color: info.item.descColor, 
            fontFamily: "montserratLight",
            fontSize:12
         },
          ]}>
        {info.item.desc}
        </Text>
      </View>
      <View style={style.right}>
        <Text></Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    minHeight: 100,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  left: {
    padding: 10,

    width: "80%",
  },
  right: {
    padding: 10,
  },
  header: {},
  p: {},
});
