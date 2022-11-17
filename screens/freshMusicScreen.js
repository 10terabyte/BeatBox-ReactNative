import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  Image,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Colors, Fonts, Default } from "../constants/style";
import Ionicons from "react-native-vector-icons/Ionicons";

const FreshMusicScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() === "rtl";

  function tr(key) {
    return t(`freshMusicScreen:${key}`);
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

  const freshNewMusic = [
    {
      key: "1",
      name: "New music hindi",
      image: require("../assets/image/fMusic1.png"),
    },
    {
      key: "2",
      name: "New music Panjabi",
      image: require("../assets/image/fMusic2.png"),
    },
    {
      key: "3",
      name: "Pop super hit",
      image: require("../assets/image/fMusic3.png"),
    },
    {
      key: "4",
      name: "New music Friday",
      image: require("../assets/image/fMusic4.png"),
    },
    {
      key: "5",
      name: "New in dance",
      image: require("../assets/image/fMusic5.png"),
    },
    {
      key: "6",
      name: "Latest Malayalam",
      image: require("../assets/image/fMusic6.png"),
    },
    {
      key: "7",
      name: "Classical new music",
      image: require("../assets/image/fMusic7.png"),
    },
    {
      key: "8",
      name: "Best Rapper",
      image: require("../assets/image/fMusic8.png"),
    },
    {
      key: "9",
      name: "New in dance",
      image: require("../assets/image/fMusic5.png"),
    },
    {
      key: "10",
      name: "Latest Malayalam",
      image: require("../assets/image/fMusic6.png"),
    },
    {
      key: "11",
      name: "New music hindi",
      image: require("../assets/image/fMusic1.png"),
    },
    {
      key: "12",
      name: "New music Panjabi",
      image: require("../assets/image/fMusic2.png"),
    },
    {
      key: "13",
      name: "Pop super hit",
      image: require("../assets/image/fMusic3.png"),
    },
    {
      key: "14",
      name: "New music Friday",
      image: require("../assets/image/fMusic4.png"),
    },
  ];
  const renderItemFreshNewMusic = ({ item, index }) => {
    const isEnd =
      index === freshNewMusic.length - 1 || index === freshNewMusic.length - 2;

    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("partySongScreen")}
        style={{
          marginLeft: Default.fixPadding * 1.5,
          marginRight: index % 2 === 0 ? 0 : Default.fixPadding * 1.5,
          marginTop: Default.fixPadding * 1.5,
          marginBottom: isEnd ? Default.fixPadding * 1.5 : 0,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Image source={item.image} style={{ alignSelf: "center" }} />
        <Text
          style={{
            ...Fonts.SemiBold14White,
            marginTop: Default.fixPadding * 0.5,
            textAlign: isRtl ? "right" : "left",
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
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
        <Text style={Fonts.Bold20White}>{tr("freshMusic")}</Text>
      </View>
      <FlatList
        numColumns={2}
        data={freshNewMusic}
        renderItem={renderItemFreshNewMusic}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FreshMusicScreen;
