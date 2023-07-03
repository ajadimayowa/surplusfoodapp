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
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { colors } from "../../constants/colors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../controllers/requests";
import { loginUser } from "../../store/slices/authSlice";
import { useNavigation } from "@react-navigation/native";

const SignInModal = ({ on, off }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    id: "657362",
    email: "",
    password: "",
    token: "xyzabc/2",
  });
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleUserLogin = () => {
    handleLogin(userInfo);
    dispatch(loginUser(userInfo));
  };

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
          height: "70%",
        }}
      >
        <View style={{ width: "100%", paddingHorizontal: "5%" }}>
          <Text style={{ fontFamily: "montserratSemiBold" }}>
            Login with :{" "}
          </Text>
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
          }}
        >
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
                style={{
                  width: "90%",
                  color: "#5B5B5B",
                  fontFamily: "montserratRegular",
                }}
                onChangeText={(input) =>
                  setUserInfo({ ...userInfo, email: input })
                }
              />

              <Ionicons name="mail" size={14} color="gray" />
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
              }}
            >
              <TextInput
                placeholder="Password"
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
                <Ionicons name="eye-off" size={14} color="gray" />
              </Pressable>
            </View>

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
                <Text
                  style={{ color: "#fff", fontFamily: "montserratSemiBold" }}
                >
                  {loading ? <ActivityIndicator /> : "Login"}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={{ fontFamily: "montserratRegular" }}>
            Don’t have an account?
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("signup");
              off();
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
    </Modal>
  );
};
export default SignInModal;
