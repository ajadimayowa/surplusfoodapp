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
import successEMoji from "../../images/success-emoji.png";

const SuccessModal = ({ on, off, emailLogin }) => {
  const navigation = useNavigation();
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
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          height: "50%",
        }}
      >
        <Image style={{ height: 100, width: 100 }} source={successEMoji} />
        <View
          style={{
            width: "100%",
            alignItems:'center',
            paddingVertical: 5,
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "montserratBold",
              color: "#6F6F6F",
              fontSize: 24,
              maxWidth:'40%',
              textAlign:'center'
            }}
          >
            Registration Successful
          </Text>

          <Text
            style={{
              fontFamily: "montserratSemiBold",
              color: "red",
              fontSize: 14,
              maxWidth:'40%',
              textAlign:'center'
            }}
          >
           You can now login
          </Text>
        </View>

        <Pressable onPress={off} style={{ width: "30%", marginTop:20 }}>
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
             Ok
            </Text>
          </View>
        </Pressable>
      </View>
    </Modal>
  );
};
export default SuccessModal;
