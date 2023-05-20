<<<<<<< HEAD
import React, { useLayoutEffect, useState } from "react";
import {Image, View, FlatList, SafeAreaView, Text, StyleSheet, TextInput,Pressable, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../assets/constants/colors";
import { createUser } from "../assets/controllers/requests";


export function SignUpScreen ({navigation}) {
  const [userInfo, setUserInfo] = useState({email : '', password :'',firstName :'',lastName:'',phone:''});
=======
import React, { useLayoutEffect } from "react";
import {Image, View, FlatList, SafeAreaView, Text, StyleSheet, TextInput,Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../assets/constants/colors";


export function SignUpScreen ({navigation}) {
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: ()=><Pressable onPress={()=>navigation.navigate('HomePage')}>
                <Ionicons name="chevron-back-sharp" size={25}/>
            </Pressable>
        })
    },[navigation])
<<<<<<< HEAD

    const handleCreateUser =()=>{
      const userBio = userInfo
      createUser(userBio );
    }
    
  return (
    <SafeAreaView >
      <ScrollView keyboardDismissMode style={page.container}>
=======
    
  return (
    <SafeAreaView style={page.container}>
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d
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
<<<<<<< HEAD
              onChangeText={(e)=>setUserInfo({...userInfo, email: e})}
              

=======
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d
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
<<<<<<< HEAD
              onChangeText={(e)=>setUserInfo({...userInfo, password: e})}
=======
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d
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
<<<<<<< HEAD
              onChangeText={(e)=>setUserInfo({...userInfo, firstName: e})}
=======
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d
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
<<<<<<< HEAD
              onChangeText={(e)=>setUserInfo({...userInfo, lastName: e})}
=======
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d
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
<<<<<<< HEAD
              onChangeText={(e)=>setUserInfo({...userInfo, phone: e})}
=======
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d
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
<<<<<<< HEAD
      <View style={{width:'100%', marginTop:15, padding:0}}>
      <Pressable onPress={handleCreateUser} android_ripple style={({pressed})=> pressed? {opacity:0.6} : null}>
=======
      <View style={{width:'100%', marginTop:15}}>
      <Pressable style={{ width: "100%" }}>
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d
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
<<<<<<< HEAD
                Register
=======
                Login
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d
              </Text>
            </View>
          </Pressable>
      </View>
<<<<<<< HEAD
      </ScrollView>
=======
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d
    </SafeAreaView>
  );
}

const page = StyleSheet.create({
  container: {
<<<<<<< HEAD
=======
    flex: 1,
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d
    padding: 24,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
});
