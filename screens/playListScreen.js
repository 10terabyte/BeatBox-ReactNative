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

const PlayListScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() === "rtl";

  function tr(key) {
    return t(`playListScreen:${key}`);
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

  const playlistForYou = [
    {
      key: "1",
      name: "Hindi Romance",
      image: require("../assets/image/pList9.png"),
    },
    {
      key: "2",
      name: "International song",
      image: require("../assets/image/pList10.png"),
    },
    {
      key: "3",
      name: "Workout song",
      image: require("../assets/image/pList11.png"),
    },
    {
      key: "4",
      name: "Arijit singh special",
      image: require("../assets/image/pList12.png"),
    },
    {
      key: "5",
      name: "Heartbreak song",
      image: require("../assets/image/pList1.png"),
    },
    {
      key: "6",
      name: "Party song",
      image: require("../assets/image/pList2.png"),
    },
    {
      key: "7",
      name: "Latest in dance",
      image: require("../assets/image/pList3.png"),
    },
    {
      key: "8",
      name: "Love Hit",
      image: require("../assets/image/pList4.png"),
    },
    {
      key: "9",
      name: "90s song",
      image: require("../assets/image/pList5.png"),
    },
    {
      key: "10",
      name: "Best of pritam",
      image: require("../assets/image/pList6.png"),
    },
    {
      key: "11",
      name: "Best op Kk",
      image: require("../assets/image/pList7.png"),
    },
    {
      key: "12",
      name: "Journy song",
      image: require("../assets/image/pList8.png"),
    },
  ];
  const renderItemPlaylistForYou = ({ item, index }) => {
    const isEnd =
      index === playlistForYou.length - 1 ||
      index === playlistForYou.length - 2;

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
        <Text style={Fonts.Bold20White}>{tr("playList")}</Text>
      </View>
      <FlatList
        numColumns={2}
        data={playlistForYou}
        renderItem={renderItemPlaylistForYou}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PlayListScreen;
