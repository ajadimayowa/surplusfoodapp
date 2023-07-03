import React, { useLayoutEffect, useState } from "react";
import {
  Image,
  View,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../assets/constants/colors";
import { createUser } from "../assets/controllers/requests";
import SuccessModal from "../assets/components/modals/successModal";

export function SignUpScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    cPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [borderErrorEmail, setBorderErrorEmail] = useState(false);
  const [borderErrorPassword, setBorderErrorPassword] = useState(false);
  const [borderErrorCPassword, setBorderErrorCPassword] = useState(false);
  const [borderErrorFirstName, setBorderErrorFirstName] = useState(false);
  const [borderErrorLastName, setBorderErrorLastName] = useState(false);
  const [borderErrorPhone, setBorderErrorPhone] = useState(false);
  const [passwordNotEqual, setPasswordNotEqual] = useState(false);
  const [secure, setSecure] = useState(false);
  const [secureC, setSecureC] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.navigate("login")}>
          <Ionicons name="chevron-back-sharp" size={25} />
        </Pressable>
      ),
    });
  }, [navigation]);

  const handleCreateUser = async () => {
    if (userInfo.email == "") {
      setBorderErrorEmail(true);
   
    }
    if (!userInfo.email.includes("@")) {
      setBorderErrorEmail(true);
    }
    if (userInfo.password == "") {
      setBorderErrorPassword(true);
    }
    if (userInfo.cPassword == "") {
      setBorderErrorCPassword(true);
    }
    if (userInfo.cPassword !== userInfo.password) {
      setPasswordNotEqual(true);
      setBorderErrorCPassword(true);
    }
    if (userInfo.firstName == "") {
      setBorderErrorFirstName(true);
    }
    if (userInfo.lastName == "") {
      setBorderErrorLastName(true);
    }
    if (userInfo.phone == "") {
      setBorderErrorPhone(true);
    }
    if (userInfo.phone.length < 11) {
      setBorderErrorPhone(true);
    } else if (
      userInfo.firstName != "" &&
      userInfo.lastName != "" &&
      userInfo.email != "" &&
      userInfo.email.includes("@") &&
      userInfo.phone != "" &&
      userInfo.password != "" &&
      userInfo.cPassword == userInfo.password &&
      userInfo.cPassword != ""
    ) {
      setLoading(true);
      try {
        const res = await createUser(userInfo);
        console.log(res);
        if(res?.status == 200){
          setLoading(false);
          setSuccess(true);
        } 
      } catch (error) {
        setLoading(false);
        Alert.alert('Registration Failed, Try Again');
      }
    }
  };

  return (
    <SafeAreaView style={page.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 30 }}
        keyboardDismissMode
        style={page.container}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            alignItems: "center",
            paddingHorizontal: "5%",
          }}
        >
          <Image
            style={{ height: 250, width: 350 }}
            alt={"delivery"}
            source={require("../assets/images/signUpWoman.png")}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            gap: 15,
            paddingHorizontal: "2%",
          }}
        >
          <View
            style={{
              paddingHorizontal: 10,
              paddingLeft: 15,
              elevation: 2,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 3,
              height: 45,
              width: "100%",
              borderColor: borderErrorFirstName ? "red" : null,
              borderWidth: borderErrorFirstName ? 1 : null,
            }}
          >
            <TextInput
              placeholder="First name"
              onFocus={() => setBorderErrorFirstName(false)}
              onChangeText={(e) => {
                setUserInfo({ ...userInfo, firstName: e });
              }}
              style={{
                width: "90%",
                color: "#5B5B5B",
                fontFamily: "montserratRegular",
              }}
            />
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons name="ios-person-sharp" size={14} color="gray" />
            </Pressable>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingLeft: 15,
              elevation: 2,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 3,
              height: 45,
              width: "100%",
              borderColor: borderErrorLastName ? "red" : null,
              borderWidth: borderErrorLastName ? 1 : null,
            }}
          >
            <TextInput
              placeholder="Last name"
              onFocus={() => setBorderErrorLastName(false)}
              onChangeText={(e) => {
                setUserInfo({ ...userInfo, lastName: e });
              }}
              style={{
                width: "90%",
                color: "#5B5B5B",
                fontFamily: "montserratRegular",
              }}
            />
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons name="ios-person-sharp" size={14} color="gray" />
            </Pressable>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingLeft: 15,
              elevation: 2,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 3,
              height: 45,
              width: "100%",
              borderColor: borderErrorEmail ? "red" : null,
              borderWidth: borderErrorEmail ? 1 : null,
            }}
          >
            <TextInput
              autoCapitalize="none"
              placeholder="Email*"
              inputMode="email"
              onFocus={() => setBorderErrorEmail(false)}
              onChangeText={(e) => {
                setUserInfo({ ...userInfo, email: e });
              }}
              style={{
                width: "90%",
                color: "#5B5B5B",
                fontFamily: "montserratRegular",
              }}
            />
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons name="mail" size={14} color="gray" />
            </Pressable>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingLeft: 15,
              elevation: 2,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 3,
              height: 45,
              width: "100%",
              borderColor: borderErrorPhone ? "red" : null,
              borderWidth: borderErrorPhone ? 1 : null,
            }}
          >
            <TextInput
              placeholder="Phone"
              inputMode="tel"
              onFocus={() => setBorderErrorPhone(false)}
              maxLength={11}
              onChangeText={(e) => {
                setUserInfo({ ...userInfo, phone: e });
              }}
              style={{
                width: "90%",
                color: "#5B5B5B",
                fontFamily: "montserratRegular",
              }}
            />
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons name="ios-call" size={14} color="gray" />
            </Pressable>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingLeft: 15,
              elevation: 2,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 3,
              height: 45,
              width: "100%",
              borderColor: borderErrorPassword ? "red" : null,
              borderWidth: borderErrorPassword ? 1 : null,
            }}
          >
            <TextInput
              autoCapitalize="none"
              secureTextEntry={secure}
              placeholder="Password*"
              onFocus={() => setBorderErrorPassword(false)}
              onChangeText={(e) => {
                setUserInfo({ ...userInfo, password: e });
              }}
              style={{
                width: "90%",
                color: "#5B5B5B",
                fontFamily: "montserratRegular",
              }}
            />
            <Pressable
              onPress={() => setSecure(!secure)}
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons
                name={secure ? "eye" : "eye-off"}
                size={14}
                color="gray"
              />
            </Pressable>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingLeft: 15,
              elevation: 2,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 3,
              height: 45,
              width: "100%",
              borderColor: borderErrorCPassword ? "red" : null,
              borderWidth: borderErrorCPassword ? 1 : null,
            }}
          >
            <TextInput
              autoCapitalize="none"
              placeholder={
                passwordNotEqual ? "Password is not equal" : "Confirm Password*"
              }
              onFocus={() => {
                setBorderErrorCPassword(false);
                setPasswordNotEqual(false);
              }}
              secureTextEntry={secureC}
              onChangeText={(e) => {
                setUserInfo({ ...userInfo, cPassword: e });
              }}
              style={{
                width: "90%",
                color: "#5B5B5B",
                fontFamily: "montserratRegular",
              }}
            />
            <Pressable
              onPress={() => setSecureC(!secureC)}
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons
                name={secureC ? "eye" : "eye-off"}
                size={14}
                color="gray"
              />
            </Pressable>
          </View>
        </View>
        <View style={{ width: "100%", marginTop: 15, padding: 0 }}>
          <Pressable
            onPress={handleCreateUser}
            android_ripple
            style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
          >
            <View
              style={{
                marginBottom: 15,
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
               {loading? <ActivityIndicator/> : 'Register'}
              </Text>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            paddingVertical: 5,
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={{ fontFamily: "montserratRegular" }}>
            Registered user?
          </Text>
          <Pressable onPress={() => navigation.replace("login")}>
            <Text
              style={{
                fontFamily: "montserratSemiBold",
                color: colors.primary,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </ScrollView>
     <SuccessModal on={success} off={()=>navigation.replace('login')}/>
    </SafeAreaView>
  );
}

const page = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    minWidth: "100%",
    flexL: 1,
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
});
