import React, { useLayoutEffect } from "react";
import {Image, View, FlatList, SafeAreaView, Text, StyleSheet, TextInput,Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../assets/constants/colors";


export function SignUpScreen ({navigation}) {

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: ()=><Pressable onPress={()=>navigation.navigate('HomePage')}>
                <Ionicons name="chevron-back-sharp" size={25}/>
            </Pressable>
        })
    },[navigation])
    
  return (
    <SafeAreaView style={page.container}>
        <View style={{backgroundColor:'#fff', width:'100%', alignItems:'center', paddingHorizontal:'5%'}}>
        <Image style={{height:250, width:350}} alt={'delivery'} source={require('../assets/images/signUpWoman.png')}/>
        </View>
      <View style={{backgroundColor:'#fff', width:'100%', gap:15,paddingHorizontal:'2%'}}>
      <View
            style={{
              paddingHorizontal: 10,
              paddingLeft:15,
              elevation: 2,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 3,
              height: 45,
              width: "100%",
              
            }}
          >
            <TextInput
              placeholder="Email*"
              style={{ width: "90%", color: "#5B5B5B", fontFamily:'montserratRegular'}}
            />
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons
                name="mail"
                size={14}
                color='gray'
              />
            </Pressable>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingLeft:15,
              elevation: 2,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 3,
              height: 45,
              width: "100%",
              
            }}
          >
            <TextInput
              placeholder="Password*"
              style={{ width: "90%", color: "#5B5B5B", fontFamily:'montserratRegular'}}
            />
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons
                name="md-lock-closed"
                size={14}
                color='gray'
              />
            </Pressable>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingLeft:15,
              elevation: 2,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 3,
              height: 45,
              width: "100%",
              
            }}
          >
            <TextInput
              placeholder="First name"
              style={{ width: "90%", color: "#5B5B5B", fontFamily:'montserratRegular'}}
            />
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons
                name="ios-person-sharp"
                size={14}
                color='gray'
              />
            </Pressable>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingLeft:15,
              elevation: 2,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 3,
              height: 45,
              width: "100%",
              
            }}
          >
            <TextInput
              placeholder="Last name"
              style={{ width: "90%", color: "#5B5B5B", fontFamily:'montserratRegular'}}
            />
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons
                name="ios-person-sharp"
                size={14}
                color='gray'
              />
            </Pressable>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingLeft:15,
              elevation: 2,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 3,
              height: 45,
              width: "100%",
              
            }}
          >
            <TextInput
              placeholder="Phone"
              style={{ width: "90%", color: "#5B5B5B", fontFamily:'montserratRegular'}}
            />
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons
                name="ios-call"
                size={14}
                color='gray'
              />
            </Pressable>
          </View>

          
      </View>
      <View style={{width:'100%', marginTop:15}}>
      <Pressable style={{ width: "100%" }}>
            <View
              style={{
                marginBottom:15,
                elevation: 2,
                backgroundColor: colors.primary,
                justifyContent: "center",
                alignItems: "center",
                height: 45,
                paddingHorizontal: 40,
                paddingVertical: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#fff", fontFamily: "montserratSemiBold" }}>
                Login
              </Text>
            </View>
          </Pressable>
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
