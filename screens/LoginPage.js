import React, { useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
  Button,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import { colors } from "../assets/constants/colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logUserIn } from "../assets/controllers/requests";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { moderateVerticalScale, ScaledSheet } from 'react-native-size-matters';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);
  const [invalidMail, setInValidMail] = useState(false);
  const [authFail, setAuthFail] = useState(false);
  const [emptyPass, setEmptyPass] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleUserLogin = async () => {
    // console.log(userInfo.email);
    if (!userInfo.email.includes("@")) {
      setInValidMail(true);
      return;
    }
    if (userInfo.email == "") {
      console.log("Field cannot be empty");
    }

    if (userInfo.password == "") {
      setEmptyPass(true);
      return;
    } else {
      setLoading(true);
      try {
        const res = await logUserIn(userInfo);
        if (res?.status == 200) {
          navigation.replace("dashboard");
        }
      } catch (error) {
        setAuthFail(true);
        setLoading(false);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userData = await GoogleSignin.signIn();
      userData.type = 'google'
      // setgoogleUserData(userData);
      const { user, idToken } = userData
      setUserInfo({ ...user, lastName: user?.familyName, firstName: user?.givenName, email: user?.email, id: user?.id, image: user.photo, accessToken: idToken, type: 'google' })
      navigation.replace("dashboard");
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Alert.alert('user cancelled the login flow')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        Alert.alert('operation (e.g. sign in) is in progress already')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated')
        // play services not available or outdated
      } else {
        Alert.alert(`${error.message}` || 'Something went wrong')
        // some other error happened
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          paddingVertical: "10%",
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          backgroundColor: "#fff",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: "7%",
          flex: 1,
        }}
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
            style={{ height: 100, width: 100 }}
            alt={"delivery"}
            source={require("../assets/images/splash-logo.png")}
          />
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
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
            }}
          >
            <TextInput
              placeholder="Email"
              onChange={() => {
                setInValidMail(false);
                setAuthFail(false);
              }}
              style={{
                width: "90%",
                color: "#5B5B5B",
                fontFamily: "montserratRegular",
              }}
              value={userInfo?.email}
              onChangeText={(input) =>
                setUserInfo({ ...userInfo, email: input })
              }
            />

            <Ionicons name="mail" size={14} color="gray" />
          </View>
          {invalidMail ? (
            <View style={{ width: "100%", paddingHorizontal: "3%" }}>
              <Text style={{ color: "red" }}>
                {"Error : invalid mail address"}
              </Text>
            </View>
          ) : null}

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
            }}
          >
            <TextInput
              placeholder="Password"
              onChange={() => {
                setEmptyPass(false);
                setAuthFail(false);
              }}
              style={{
                width: "90%",
                color: "#5B5B5B",
                fontFamily: "montserratRegular",
              }}
              secureTextEntry={secureText}
              onChangeText={(input) =>
                setUserInfo({ ...userInfo, password: input })
              }
            />
            <Pressable
              onPress={() => setSecureText(!secureText)}
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons
                name={secureText ? "eye-off" : "eye"}
                size={14}
                color="gray"
              />
            </Pressable>
          </View>

          {emptyPass ? (
            <View style={{ width: "100%", paddingHorizontal: "3%" }}>
              <Text style={{ color: "red" }}>
                {"Error : password is empty"}
              </Text>
            </View>
          ) : null}

          {authFail ? (
            <View style={{ width: "100%", paddingHorizontal: "3%" }}>
              <Text style={{ color: "red" }}>
                {"Error : Email or Password incorrect!"}
              </Text>
            </View>
          ) : null}

          <View
            style={{
              marginBottom: 15,
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "montserratRegular",
                color: colors.primary,
              }}
            >
              Forgot password?
            </Text>
          </View>

          <Pressable onPress={handleUserLogin} style={{ width: "100%" }}>
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
                {loading ? <ActivityIndicator /> : "Login"}
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={signInWithGoogle} style={{ width: "100%" }}>
          <View
              style={{
                marginBottom: 15,
                elevation: 2,
                backgroundColor: colors.white,
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center",
                height: moderateVerticalScale(45),
                paddingHorizontal: 40,
                paddingVertical: 10,
                borderRadius: 5,
              }}
            >
              <Image
                style={{ height: moderateVerticalScale(18), width: moderateVerticalScale(18), marginRight: moderateVerticalScale(15) }}
                alt={"delivery"}
                source={require("../assets/images/search.png")}
              />
              <Text style={{ color: colors.primary, fontSize: moderateVerticalScale(15), fontFamily: "montserratSemiBold" }}>
                {loading ? <ActivityIndicator /> : 'Sign In With Google'}
              </Text>
            </View>
          </Pressable>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={{ fontFamily: "montserratSemiBold" }}>
            Don’t have an account?
          </Text>
          <Pressable
            onPress={() => {
              navigation.replace("signup");
            }}
          >
            <Text
              style={{
                fontFamily: "montserratSemiBold",
                color: colors.primary,
              }}
            >
              Sign Up
            </Text>
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
            By continuing, you agree to our
          </Text>
          <Text style={{ fontFamily: "montserratSemiBold", color: "#6F6F6F" }}>
            Policy and rules
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
