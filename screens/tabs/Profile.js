import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import {} from "react-native";
import LoginModal from "../../assets/components/modals/loginModal";
import SignInModal from "../../assets/components/modals/signInModal";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../assets/constants/colors";
import { useDispatch } from "react-redux";

export function Profile() {
  const [loginModal, setLoginModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const getAuth = useSelector((state) => state.auth.userInfo);

  const goHome = () => {
    setLoginModal(true);
  };

  const handleUserLogin = () => {
    getAuth?.token == ""
      ? goHome()
      : console.log("already logged in", getAuth?.token);
  };

  const logUserOut = ()=>{
    navigation.navigate('login');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerRight: () => (
        
        <View style={{paddingHorizontal:'5%'}}>
            <Pressable
            onPress={()=> logUserOut()}
              style={({ pressed }) => (pressed ? { opacity: 0.6 } : null)}
            >
              <Ionicons
                name="power"
                size={18}
                color={colors.primary}
              />
            </Pressable>
            </View>
      ),
    });
  }, [navigation]);

  // useEffect(() => {
  //   handleUserLogin();
  // });

  const handleEmailLogin = () => {
    setLoginModal(false);
    setSignInModal(true);
  };

  return (
    <SafeAreaView style={page.container}>
      <View>
        <LoginModal
          on={loginModal}
          off={() => setLoginModal(false)}
          emailLogin={handleEmailLogin}
        />
        <SignInModal on={signInModal} off={() => setSignInModal(false)} />
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
