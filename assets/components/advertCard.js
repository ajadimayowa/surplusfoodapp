import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../constants/colors";

export default function AdCard({ info, index }) {
  return (
    <View style={style.container} key={index}>
      <View style={style.left}>
        <Text
          style={[
            { color: info.title1Color, 
            fontFamily: "montserratSemiBold",
            fontSize:15
         },
          ]}
        >
          {info.title1}
        </Text>
        
        <Text
        style={[
            { color: info.title2Color, 
            fontFamily: "montserratBold",
            fontSize:30
         },
          ]}
        >{info.title2}</Text>
       
        <Text
        style={[
            { color: info.descColor, 
            fontFamily: "montserratLight",
            fontSize:12
         },
          ]}>
        {info.desc}
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
