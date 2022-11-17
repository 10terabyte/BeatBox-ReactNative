import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  BackHandler,
  StatusBar,
  TouchableOpacity,
  Share,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Default, Fonts } from "../constants/style";
import BottomMusic from "../components/bottomMusic";
import MainBottomSheet from "../components/mainBottomSheet";
import AddToPlayList from "../components/addToPlayList";
import NewPlayList from "../components/newPlayList";

const PartySongScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() === "rtl";

  function tr(key) {
    return t(`partySongScreen:${key}`);
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

  const toggleClose = () => {
    setVisible(!visible);
  };

  const [addPlayList, setAddPlayList] = useState(false);

  const toggleCloseAddPlayList = () => {
    setAddPlayList(!addPlayList);
  };

  const [newPlayList, setNewPlayList] = useState(false);

  const toggleCloseNewPlayList = () => {
    setNewPlayList(!newPlayList);
  };
  const [isVisible, setIsVisible] = useState(false);

  const shareMessage = () => {
    setVisible(false);
    Share.share({
      message: toString(),
    });
  };
  const playListData = [
    {
      key: "1",
      name: "Kala chasma",
      singer: "Amar Arshi",
      image: require("../assets/image/p1.png"),
    },
    {
      key: "2",
      name: "The Hook Up ",
      singer: "Shekhar Ravjiani",
      image: require("../assets/image/p2.png"),
    },
    {
      key: "3",
      name: "Kar Gayi Chull",
      singer: "Badshah,Neha Kakkar",
      image: require("../assets/image/p3.png"),
    },
    {
      key: "4",
      name: "Just Dance",
      singer: "Lady Gaga",
      image: require("../assets/image/p4.png"),
    },
    {
      key: "5",
      name: "Dancing With Myself",
      singer: "Billy Idol",
      image: require("../assets/image/p5.png"),
    },
    {
      key: "6",
      name: "Call Me Maybe",
      singer: "Carly Rae Jepsen",
      image: require("../assets/image/p6.png"),
    },
    {
      key: "7",
      name: "It's the Time to Disco",
      singer: "Shaan,Vasundhara Das",
      image: require("../assets/image/p7.png"),
    },
    {
      key: "8",
      name: "London Thumakda",
      singer: "Labh Janjua, Sonu Kakkar",
      image: require("../assets/image/p8.png"),
    },
    {
      key: "9",
      name: "Besharmi Ki Height",
      singer: "Shalmali Kholgade",
      image: require("../assets/image/p9.png"),
    },
    {
      key: "10",
      name: "Crazy Kiya Re",
      singer: "Sunidhi Chauhan",
      image: require("../assets/image/p10.png"),
    },
    {
      key: "11",
      name: "In da Club",
      singer: "50 Cent",
      image: require("../assets/image/p11.png"),
    },
    {
      key: "12",
      name: "Desi Girl",
      singer: "Sunidhi Chauhan",
      image: require("../assets/image/p12.png"),
    },
  ];

  const renderItemPlayList = ({ item, index }) => {
    const isFirst = index === 0;

    return (
      <View
        style={{
          marginTop: isFirst ? Default.fixPadding * 1.5 : 0,
          marginBottom: Default.fixPadding * 1.5,
          flexDirection: isRtl ? "row-reverse" : "row",
          marginHorizontal: Default.fixPadding * 1.5,
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("playScreen")}
          style={{ flex: 9, flexDirection: isRtl ? "row-reverse" : "row" }}
        >
          <Image source={item.image} />
          <View
            style={{
              justifyContent: "center",
              marginHorizontal: Default.fixPadding,
              alignItems: isRtl ? "flex-end" : "flex-start",
            }}
          >
            <Text
              style={{
                ...(isFirst ? Fonts.SemiBold16Primary : Fonts.SemiBold16White),
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                ...Fonts.SemiBold14Grey,
              }}
            >
              {item.singer}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="ellipsis-vertical"
            color={Colors.white}
            size={24}
            style={{
              justifyContent: "center",
            }}
          />
        </TouchableOpacity>
      </View>
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
          flexDirection: isRtl ? "row-reverse" : "row",
          marginHorizontal: Default.fixPadding * 1.5,
          marginVertical: Default.fixPadding,
          backgroundColor: Colors.boldBlack,
        }}
      >
        <View style={{ flex: 7, flexDirection: isRtl ? "row-reverse" : "row" }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons
              name={isRtl ? "arrow-forward" : "arrow-back"}
              size={25}
              color={Colors.white}
              style={{
                alignSelf: isRtl ? "flex-end" : "flex-start",
                color: Colors.white,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              ...Fonts.Bold20White,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("partySongs")}
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            justifyContent: isRtl ? "flex-start" : "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => setIsVisible((preState) => !preState)}
          >
            <Ionicons
              name={isVisible ? "heart-outline" : "heart"}
              size={24}
              color={Colors.white}
              style={{
                color: Colors.white,
                marginHorizontal: Default.fixPadding,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Ionicons
              name="ellipsis-vertical"
              size={24}
              color={Colors.white}
              style={{
                color: Colors.white,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginVertical: Default.fixPadding * 1.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/image/party.png")}
          style={{ resizeMode: "cover" }}
        />
      </View>
      <View
        style={{
          ...Default.shadow,
          backgroundColor: Colors.lightBlack,
          justifyContent: "center",
          flexDirection: isRtl ? "row-reverse" : "row",
          paddingVertical: Default.fixPadding * 1.5,
          marginBottom: Default.fixPadding * 1.5,
        }}
      >
        <View style={{ flex: 7, marginHorizontal: Default.fixPadding * 1.5 }}>
          <Text style={{ ...Fonts.Bold18White }}>{tr("partySongs")}</Text>
          <Text style={{ ...Fonts.SemiBold14LightGrey }}>{tr("hitSong")}</Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 1.5,
          }}
        >
          <View
            style={{
              ...Default.shadowPrimary,
              backgroundColor: Colors.primary,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Bold16White,
                paddingHorizontal: Default.fixPadding * 1.5,
                paddingVertical: Default.fixPadding * 0.5,
              }}
            >
              {tr("playAll")}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: Default.fixPadding * 1.5,
        }}
      >
        <Text style={{ ...Fonts.Bold18White }}>{tr("partySongs")}</Text>
      </View>

      <FlatList
        data={playListData}
        renderItem={renderItemPlayList}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />

      <MainBottomSheet
        visible={visible}
        onBackButtonPress={toggleClose}
        onBackdropPress={toggleClose}
        close={toggleClose}
        onDownload={() => {
          toggleClose();
          props.navigation.navigate("premiumScreen");
        }}
        shareMessage={() => {
          shareMessage();
        }}
        onPlaylist={() => {
          toggleClose();
          setAddPlayList(true);
        }}
        onLyrics={() => {
          toggleClose();
          props.navigation.navigate("lyricsScreen");
        }}
        onInformation={() => {
          toggleClose();
          props.navigation.navigate("songInformation");
        }}
      />

      <AddToPlayList
        visible={addPlayList}
        onBackButtonPress={toggleCloseAddPlayList}
        onBackdropPress={toggleCloseAddPlayList}
        close={toggleCloseAddPlayList}
        onSelect={() => {
          setAddPlayList(false);
          setNewPlayList(true);
        }}
        isClose={toggleCloseAddPlayList}
      />
      <NewPlayList
        visible={newPlayList}
        onBackButtonPress={toggleCloseNewPlayList}
        onBackdropPress={toggleCloseNewPlayList}
        cancel={toggleCloseNewPlayList}
      />

      <BottomMusic onSelect={() => props.navigation.navigate("playScreen")} />
    </SafeAreaView>
  );
};

export default PartySongScreen;
