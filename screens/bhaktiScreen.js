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

const BhaktiScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() === "rtl";

  function tr(key) {
    return t(`bhaktiScreen:${key}`);
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

  const bhaktiData = [
    {
      key: "1",
      name: "Arti collection",
      image: require("../assets/image/bhakti1.png"),
    },
    {
      key: "2",
      name: "Collection of Ganesha",
      image: require("../assets/image/bhakti2.png"),
    },
    {
      key: "3",
      name: "Collection of shiv",
      image: require("../assets/image/fMusic3.png"),
    },
    {
      key: "4",
      name: "Ramcharitmanas",
      image: require("../assets/image/bhakti4.png"),
    },
    {
      key: "5",
      name: "Collection of Durga",
      image: require("../assets/image/bhakti5.png"),
    },
    {
      key: "6",
      name: "Collection of Buddha",
      image: require("../assets/image/bhakti6.png"),
    },
    {
      key: "7",
      name: "Collection of Laxmi",
      image: require("../assets/image/bhakti7.png"),
    },
    {
      key: "8",
      name: "Bhagvat geeta",
      image: require("../assets/image/bhakti8.png"),
    },
    {
      key: "9",
      name: "Collection of Krishna",
      image: require("../assets/image/bhakti9.png"),
    },
    {
      key: "10",
      name: "Collection of Vishnu",
      image: require("../assets/image/bhakti10.png"),
    },
    {
      key: "11",
      name: "Collection of hanu..",
      image: require("../assets/image/bhakti11.png"),
    },
    {
      key: "12",
      name: "Collection of Ganesha",
      image: require("../assets/image/bhakti2.png"),
    },
  ];
  const renderItemBhaktiData = ({ item, index }) => {
    const isEnd =
      index === bhaktiData.length - 1 || index === bhaktiData.length - 2;

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
        <Text style={Fonts.Bold20White}>{tr("bhakti")}</Text>
      </View>
      <FlatList
        numColumns={2}
        data={bhaktiData}
        renderItem={renderItemBhaktiData}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default BhaktiScreen;
