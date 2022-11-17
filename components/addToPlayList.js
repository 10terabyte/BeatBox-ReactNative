import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Colors, Fonts, Default } from "../constants/style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BottomSheet } from "react-native-btr";
import Toast from "react-native-root-toast";

const AddToPlayList = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() === "rtl";

  function tr(key) {
    return t(`addToPlayList:${key}`);
  }

  const toastAddedPlayList = () => {
    Toast.show(tr("addedPlayList"), {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: Colors.white,
      textColor: Colors.black,
    });
  };

  return (
    <BottomSheet
      visible={props.visible}
      onBackButtonPress={props.onBackButtonPress}
      onBackdropPress={props.onBackdropPress}
    >
      <View style={styles.bottomSheetMain}>
        <View style={{ flexDirection: isRtl ? "row-reverse" : "row" }}>
          <Text
            style={{
              ...Fonts.Bold20Black,
              flex: 9.3,
              textAlign: "center",
              paddingVertical: Default.fixPadding,
            }}
          >
            {tr("playlist")}
          </Text>

          <TouchableOpacity
            onPress={props.close}
            style={{
              margin: Default.fixPadding * 0.5,
              flex: 0.7,
            }}
          >
            <Ionicons name="close" size={24} color={Colors.lightGrey} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={props.onSelect}
          style={{
            paddingBottom: Default.fixPadding * 2,
            paddingHorizontal: Default.fixPadding * 2,
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 5,
              borderColor: Colors.primary,
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="add-outline" size={25} color={Colors.primary} />
          </View>
          <Text
            style={{
              ...Fonts.SemiBold18Black,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("createNew")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.isClose();
            toastAddedPlayList();
          }}
          style={{
            paddingBottom: Default.fixPadding * 2,
            paddingHorizontal: Default.fixPadding * 2,
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/image/my1.png")} />
          <View style={{ marginHorizontal: Default.fixPadding }}>
            <Text style={{ ...Fonts.SemiBold16Black }}>{tr("playList1")}</Text>
            <Text style={{ ...Fonts.SemiBold12LightGrey }}>
              {tr("songs10")}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.isClose();
            toastAddedPlayList();
          }}
          style={{
            paddingBottom: Default.fixPadding * 2,
            paddingHorizontal: Default.fixPadding * 2,
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/image/my2.png")} />
          <View style={{ marginHorizontal: Default.fixPadding }}>
            <Text style={{ ...Fonts.SemiBold16Black }}>{tr("playList2")}</Text>
            <Text style={{ ...Fonts.SemiBold12LightGrey }}>
              {tr("songs20")}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.isClose();
            toastAddedPlayList();
          }}
          style={{
            paddingBottom: Default.fixPadding * 2,
            paddingHorizontal: Default.fixPadding * 2,
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/image/my1.png")} />
          <View style={{ marginHorizontal: Default.fixPadding }}>
            <Text style={{ ...Fonts.SemiBold16Black }}>{tr("playList3")}</Text>
            <Text style={{ ...Fonts.SemiBold12LightGrey }}>
              {tr("songs10")}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

export default AddToPlayList;

const styles = StyleSheet.create({
  bottomSheetMain: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
