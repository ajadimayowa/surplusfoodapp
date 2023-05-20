import React from "react";
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
} from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const LoginModal = ({ on, off,emailSin }) => {
    const navigation =useNavigation()
  return (
    <Modal
      onBackdropPress={() => off()}
      animationIn="slideInUp"
      isVisible={on}
      style={{ margin: 0, justifyContent: "flex-end", padding: 1 }}
    >
      <View
        style={{
          paddingVertical: "10%",
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          backgroundColor: "#fff",
          width: "100%",
          alignItems: "center",
          height: "50%",
        }}
      >
        <View style={{ width: "100%", paddingHorizontal: "5%" }}>
          <Text style={{ fontFamily: "montserratSemiBold" }}>Login Page :</Text>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
            paddingHorizontal: "5%",
            paddingVertical: "5%",
          }}
        >
          <Pressable style={{ width: "50%" }}>
            <View
              style={{
                elevation: 2,
                backgroundColor: "#F6F6F6",
                justifyContent: "center",
                alignItems: "center",
                height: 45,
                paddingHorizontal: 40,
                paddingVertical: 10,
                borderRadius: 5,
              }}
            >
              <Text
                style={{ color: "#C93131", fontFamily: "montserratSemiBold" }}
              >
                Google +
              </Text>
            </View>
          </Pressable>

          <Pressable style={{ width: "50%" }}>
            <View
              style={{
                elevation: 2,
                backgroundColor: "#448FFF",
                justifyContent: "center",
                alignItems: "center",
                height: 45,
                paddingHorizontal: 40,
                paddingVertical: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#fff", fontFamily: "montserratSemiBold" }}>
                Facebook
              </Text>
            </View>
          </Pressable>
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            gap: 10,
            paddingHorizontal: "5%",
            paddingVertical: "5%",
          }}
        >
          <Pressable onPress={()=>emailSin()} style={{ width: "100%" }}>
            <View
              style={{
                elevation: 2,
                backgroundColor: "#10815C",
                justifyContent: "center",
                alignItems: "center",
                height: 45,
                paddingHorizontal: 40,
                paddingVertical: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#fff", fontFamily: "montserratSemiBold" }}>
                Email or phone number
              </Text>
            </View>
          </Pressable>

          <Pressable style={{ width: "100%" }}>
            <View
              style={{
                elevation: 2,
                backgroundColor: "#166B8F",
                justifyContent: "center",
                alignItems: "center",
                height: 45,
                paddingHorizontal: 40,
                paddingVertical: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#fff", fontFamily: "montserratSemiBold" }}>
                Trucaller
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
          <Pressable onPress={()=>{
            navigation.navigate('signup');
            off()
            }}>
                
          <Text
            style={{ fontFamily: "montserratSemiBold", color: colors.primary }}
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
    </Modal>
  );
};
export default LoginModal;
