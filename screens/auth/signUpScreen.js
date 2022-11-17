import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Default } from "../../constants/style";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Loader from "../../components/loader";

const SignUpScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() === "rtl";

  function tr(key) {
    return t(`signUpScreen:${key}`);
  }

  const [visible, setVisible] = useState(false);

  const handleRegister = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      props.navigation.navigate("verificationScreen");
    }, 1500);
  };

  const [textNo, onChangeTextNo] = useState();
  const [textName, onChangeTextNAme] = useState();
  const [textEmail, onChangeTextEmail] = useState();
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
          <TouchableOpacity
            style={{
              marginHorizontal: Default.fixPadding * 1.5,
              marginBottom: Default.fixPadding * 3,
              marginTop: Default.fixPadding * 0.5,
              alignItems: isRtl ? "flex-end" : "flex-start",
            }}
            onPress={() => props.navigation.navigate("signInScreen")}
          >
            <Ionicons
              name={isRtl ? "arrow-forward" : "arrow-back"}
              size={30}
              color={Colors.white}
            />
          </TouchableOpacity>
          <View
            style={{
              marginHorizontal: Default.fixPadding * 1.5,
            }}
          >
            <Text style={{ ...Fonts.ExtraBold24White }}>{tr("register")}</Text>
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
                marginBottom: Default.fixPadding * 1.5,
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="person-outline"
                color={Colors.white}
                size={20}
                style={{
                  flex: 0.7,
                }}
              />
              <TextInput
                placeholder={tr("name")}
                placeholderTextColor={Colors.white}
                onChangeText={onChangeTextNAme}
                selectionColor={Colors.primary}
                value={textName}
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
                marginBottom: Default.fixPadding * 1.5,
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="phone-portrait-outline"
                color={Colors.white}
                size={20}
                style={{ flex: 0.7 }}
              />
              <TextInput
                placeholder={tr("number")}
                placeholderTextColor={Colors.white}
                onChangeText={onChangeTextNo}
                selectionColor={Colors.primary}
                value={textNo}
                maxLength={10}
                keyboardType={"number-pad"}
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
                placeholder={tr("email")}
                placeholderTextColor={Colors.white}
                onChangeText={onChangeTextEmail}
                selectionColor={Colors.primary}
                value={textEmail}
                style={{
                  ...Fonts.Medium15White,
                  flex: 9.3,
                  textAlign: isRtl ? "right" : "left",
                  marginHorizontal: Default.fixPadding * 0.5,
                }}
                keyboardType="email-address"
              />
            </View>
            <Loader visible={visible} />

            <TouchableOpacity
              onPress={handleRegister}
              style={{
                ...Default.shadow,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.primary,
                marginVertical: Default.fixPadding * 3,
                paddingVertical: Default.fixPadding * 1.5,
                borderRadius: 25,
              }}
            >
              <Text style={{ ...Fonts.ExtraBold20White }}>
                {tr("register")}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
