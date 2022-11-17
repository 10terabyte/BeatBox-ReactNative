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

const TopArtistsScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() === "rtl";

  function tr(key) {
    return t(`topArtistsScreen:${key}`);
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

  const artistsData = [
    {
      key: "1",
      name: "Sonu Nigam",
      image: require("../assets/image/singer1.png"),
    },
    {
      key: "2",
      name: "Badshah ",
      image: require("../assets/image/singer2.png"),
    },
    {
      key: "3",
      name: "Darshan",
      image: require("../assets/image/singer3.png"),
    },
    {
      key: "4",
      name: "Arijit Singh",
      image: require("../assets/image/singer4.png"),
    },
    {
      key: "5",
      name: "Luis Fonsi",
      image: require("../assets/image/singer5.png"),
    },
    {
      key: "6",
      name: "Thalía sodi",
      image: require("../assets/image/singer6.png"),
    },
    {
      key: "7",
      name: "Shakira",
      image: require("../assets/image/singer7.png"),
    },
    {
      key: "8",
      name: "Armaan Malik",
      image: require("../assets/image/singer8.png"),
    },
    {
      key: "9",
      name: "Vishal Shekhar",
      image: require("../assets/image/singer9.png"),
    },
    {
      key: "10",
      name: "Neha Kakkar",
      image: require("../assets/image/singer10.png"),
    },
    {
      key: "11",
      name: "Kumar Sanu",
      image: require("../assets/image/singer11.png"),
    },
    {
      key: "12",
      name: "Pritam",
      image: require("../assets/image/singer12.png"),
    },
    {
      key: "13",
      name: "Justin Bieber",
      image: require("../assets/image/singer13.png"),
    },
    {
      key: "14",
      name: "Lady Gaga",
      image: require("../assets/image/singer14.png"),
    },
    {
      key: "15",
      name: "Asha Bhosle",
      image: require("../assets/image/singer15.png"),
    },
  ];
  const renderItemArtists = ({ item, index }) => {
    const isEnd =
      index === artistsData.length - 1 ||
      index === artistsData.length - 2 ||
      index === artistsData.length - 3;
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("artistScreen")}
        style={{
          marginTop: Default.fixPadding * 1.5,
          marginBottom: isEnd ? Default.fixPadding * 1.5 : 0,
          marginHorizontal: Default.fixPadding * 1.5,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Image source={item.image} />
        <Text
          style={{
            ...Fonts.SemiBold14White,
            marginTop: Default.fixPadding * 0.5,
            textAlign: "center",
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
        <Text style={Fonts.Bold20White}>{tr("topArtists")}</Text>
      </View>
      <FlatList
        numColumns={3}
        data={artistsData}
        renderItem={renderItemArtists}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default TopArtistsScreen;
