import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Colors, Fonts, Default } from "../../constants/style";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useTranslation } from "react-i18next";
import Loader from "../../components/loader";

const { width } = Dimensions.get("window");

const SignInScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() === "rtl";

  function tr(key) {
    return t(`signInScreen:${key}`);
  }

  const [visible, setVisible] = useState(false);

  const handleLogin = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      // props.navigation.navigate("signUpScreen");
    }, 1500);
  };
  const handleSignup = () => {
    props.navigation.navigate("signUpScreen");
  };

  const [textNo, onChangeTextNo] = useState();
  const [textEmail, onChangeTextEmail] = useState();
  const [textPassword, onChangeTextPassword] = useState();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={Colors.black}
        barStyle={Platform.OS === "android" ? "light-content" : "default"}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ImageBackground
          source={require("../../assets/image/background.png")}
          style={{ flex: 1 }}
        >
          <View
            style={{
              marginHorizontal: Default.fixPadding * 1.5,
              marginTop: Default.fixPadding * 5,
            }}
          >
            <Text style={{ ...Fonts.ExtraBold24White }}>{tr("login")}</Text>
            <Text
              style={{
                ...Fonts.SemiBold14LightGrey,
                marginTop: Default.fixPadding,
                marginBottom: Default.fixPadding * 3,
              }}
            >
              {tr("hello")}
            </Text>

            <View
              style={{
                ...Default.shadow,
                borderRadius: 10,
                backgroundColor: Colors.lightBlack,
                padding: Default.fixPadding * 1.5,
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="mail-outline"
                color={Colors.white}
                size={20}
                style={{ flex: 0.7 }}
              />
              <TextInput
                placeholder={tr("enterEmail")}
                placeholderTextColor={Colors.white}
                onChangeText={onChangeTextEmail}
                selectionColor={Colors.primary}
                value={textEmail}
                keyboardType={"email-address"}
                style={{
                  ...Fonts.Medium15White,
                  flex: 9.3,
                  textAlign: isRtl ? "right" : "left",
                  marginHorizontal: Default.fixPadding * 0.5,
                }}
              />
            </View>
            <View
              style={{
                ...Default.shadow,
                borderRadius: 10,
                backgroundColor: Colors.lightBlack,
                padding: Default.fixPadding * 1.5,
                marginTop: Default.fixPadding * 1.5,
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="ios-key-outline"
                color={Colors.white}
                size={20}
                style={{ flex: 0.7 }}
              />
              <TextInput
                placeholder={tr("enterPassword")}
                placeholderTextColor={Colors.white}
                onChangeText={onChangeTextPassword}
                selectionColor={Colors.primary}
                value={textPassword}
                secureTextEntry = {true}
                keyboardType={"number-pad"}
                style={{
                  ...Fonts.Medium15White,
                  flex: 9.3,
                  textAlign: isRtl ? "right" : "left",
                  marginHorizontal: Default.fixPadding * 0.5,
                }}
              />
            </View>
           

            <Text
              style={{
                ...Fonts.SemiBold14LightGrey,
                textAlign: "center",
                marginVertical: Default.fixPadding * 3,
              }}
            >
              {tr("or")}
            </Text>

            <TouchableOpacity
                style={{
                  ...Default.shadow,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.lightBlack,
                  paddingVertical: Default.fixPadding * 1.5,
                  borderRadius: 10,
                }}
              >
                <FontAwesome
                  name="facebook-f"
                  size={20}
                  color={Colors.white}
                  style={{ marginHorizontal: Default.fixPadding }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...Default.shadow,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.lightBlack,
                  paddingVertical: Default.fixPadding * 1.5,
                  marginTop: Default.fixPadding * 1.5,
                  borderRadius: 10,
                }}
              >
                <Ionicons
                  name="logo-google"
                  size={20}
                  color={Colors.white}
                  style={{ marginHorizontal: Default.fixPadding }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...Default.shadow,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.lightBlack,
                  paddingVertical: Default.fixPadding * 1.5,
                  marginTop: Default.fixPadding * 1.5,
                  borderRadius: 10,
                }}
              >
                <Ionicons
                  name="ios-logo-apple"
                  size={20}
                  color={Colors.white}
                  style={{ marginHorizontal: Default.fixPadding }}
                />
              </TouchableOpacity>
            <Loader visible={visible} />

            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "space-between",
                marginTop: Default.fixPadding * 1.5,
              }}>
                <TouchableOpacity
                onPress={handleLogin}
                style={{
                  ...Default.shadow,
                  backgroundColor: Colors.primary,
                  width: width / 2.5,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: Default.fixPadding * 1.5,
                  borderRadius: 10,
                  
                }}
              >
                <Text style={{ ...Fonts.ExtraBold20White }}>{tr("login")}</Text>
              </TouchableOpacity>
              <TouchableOpacity

                onPress={handleSignup}
                style={{
                  ...Default.shadow,
                  width: width / 2.5,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.lightRed,
                  paddingVertical: Default.fixPadding * 1.5,
                  borderRadius: 10,
                }}
              >
                <Text style={{ ...Fonts.ExtraBold20White }}>{tr("singup")}</Text>
              </TouchableOpacity>
            
            </View>
            
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
