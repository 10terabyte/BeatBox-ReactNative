import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Default } from "../constants/style";
import { useTranslation } from "react-i18next";
import DashedLine from "react-native-dashed-line";
import Loader from "../components/loader";

const PremiumScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() === "rtl";

  function tr(key) {
    return t(`premiumScreen:${key}`);
  }

  const backAction = () => {
    props.navigation.goBack();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const [visible, setVisible] = useState(false);

  const optionsCategory = [
    {
      id: "1",
      text: tr("specialOffer"),
      premium: tr("1month"),
      other: "$20",
    },
    {
      id: "2",
      text: tr("6month"),
      premium: tr("premium"),
      other: "$50",
    },
    {
      id: "3",
      text: tr("12month"),
      premium: tr("premium"),
      other: "$95",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(tr("specialOffer"));
  const category = (text) => {
    setSelectedCategory(text);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.boldBlack }}>
      <StatusBar
        backgroundColor={Colors.boldBlack}
        barStyle={Platform.OS === "android" ? "light-content" : "default"}
      />
      <View
        style={{
          paddingVertical: Default.fixPadding,
          backgroundColor: Colors.boldBlack,
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ marginHorizontal: Default.fixPadding * 1.5 }}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons
            name={isRtl ? "arrow-forward" : "arrow-back"}
            size={25}
            color={Colors.white}
          />
        </TouchableOpacity>
        <Text style={Fonts.Bold20White}>{tr("premium")}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: Default.fixPadding * 1.5 }}>
          <Text
            style={{
              ...Fonts.Bold16White,
              marginBottom: Default.fixPadding,
            }}
          >
            {tr("premiumPlans")}
          </Text>

          {optionsCategory.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{
                  ...Default.shadow,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  paddingVertical: Default.fixPadding * 1.5,
                  paddingHorizontal: Default.fixPadding * 1.5,
                  backgroundColor: Colors.lightBlack,
                  marginVertical: Default.fixPadding,
                  borderColor:
                    selectedCategory === item.text ? Colors.yellow : null,
                  borderWidth: selectedCategory === item.text ? 2 : 0,
                }}
                onPress={() => {
                  category(item.text);
                }}
              >
                <View
                  style={{
                    marginHorizontal: Default.fixPadding,
                    flexDirection: isRtl ? "row-reverse" : "row",
                  }}
                >
                  <View style={{ flex: 8 }}>
                    <Text
                      style={
                        selectedCategory === item.text
                          ? Fonts.Bold16Yellow
                          : Fonts.Bold16White
                      }
                    >
                      {item.text}
                    </Text>
                    <Text style={{ ...Fonts.Bold14LightGrey }}>
                      {item.premium}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ ...Fonts.Bold20White }}>{item.other}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <DashedLine
          axis="horizontal"
          dashLength={2}
          dashColor={Colors.lightGrey}
        />
        <View style={{ margin: Default.fixPadding * 1.5 }}>
          <Text style={{ ...Fonts.Bold16White }}>{tr("benefits")}</Text>
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              marginTop: Default.fixPadding,
            }}
          >
            <Ionicons
              name="ellipse"
              size={7}
              color={Colors.lightGrey}
              style={{
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                ...Fonts.Medium16LightGrey,
                marginHorizontal: Default.fixPadding * 0.5,
              }}
            >
              {tr("hdMusic")}
            </Text>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              marginTop: Default.fixPadding,
            }}
          >
            <Ionicons
              name="ellipse"
              size={7}
              color={Colors.lightGrey}
              style={{
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                ...Fonts.Medium16LightGrey,
                marginHorizontal: Default.fixPadding * 0.5,
              }}
            >
              {tr("experience")}
            </Text>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              marginTop: Default.fixPadding,
            }}
          >
            <Ionicons
              name="ellipse"
              size={7}
              color={Colors.lightGrey}
              style={{
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                ...Fonts.Medium16LightGrey,
                marginHorizontal: Default.fixPadding * 0.5,
              }}
            >
              {tr("unlimited")}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Loader visible={visible} />
      <TouchableOpacity
        onPress={() => props.navigation.navigate("creditCardScreen")}
        style={{
          ...Default.shadow,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.primary,
          marginHorizontal: Default.fixPadding * 1.5,
          marginVertical: Default.fixPadding * 1.5,
          paddingVertical: Default.fixPadding * 1.5,
          borderRadius: 25,
        }}
      >
        <Text style={{ ...Fonts.ExtraBold20White }}>{tr("continue")}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PremiumScreen;
