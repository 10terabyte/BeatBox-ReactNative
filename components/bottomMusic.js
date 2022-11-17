import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Default } from "../constants/style";
import { Audio } from "expo-av";

const BottomMusic = (props) => {
  const [isVisible, setVisible] = useState(false);

  const sound = React.useRef(new Audio.Sound());
  const [Status, SetStatus] = React.useState(false);

  React.useEffect(() => {
    LoadAudio();
    return () => sound.current.unloadAsync();
  }, []);

  const LoadAudio = async () => {
    const result = await sound.current.loadAsync(
      require("../assets/music/cuteSmile.mp3"),

      true
    );
    if (result.isLoaded === true) {
    } else {
      PlayAudio();
    }
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
          SetStatus(true);
        }
      } else {
        LoadAudio();
      }
    } catch (error) {
      SetStatus(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
          SetStatus(false);
        }
      }
    } catch (error) {
      SetStatus(false);
    }
  };

  return (
    <TouchableOpacity
      onPress={props.onSelect}
      style={{
        paddingVertical: Default.fixPadding,
        backgroundColor: Colors.primary,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginHorizontal: Default.fixPadding,
        }}
      >
        <Image
          source={require("../assets/image/photo1.png")}
          style={{ alignSelf: "center" }}
        />
        <View
          style={{
            marginHorizontal: Default.fixPadding,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...Fonts.Bold16White }}>Teri Cute Si Smile </Text>
          <Text style={{ ...Fonts.SemiBold14White }}>Aroob Khan</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ marginHorizontal: Default.fixPadding * 0.5 }}
          onPress={() => setVisible((preState) => !preState)}
        >
          <Ionicons
            name={isVisible ? "heart-outline" : "heart"}
            size={20}
            color={Colors.white}
          />
        </TouchableOpacity>
        <View style={{ marginHorizontal: Default.fixPadding * 0.5 }}>
          <Ionicons name="play-skip-back" size={24} color={Colors.white} />
        </View>
        <TouchableOpacity
          onPress={Status === false ? PlayAudio : PauseAudio}
          style={{ marginHorizontal: Default.fixPadding * 0.5 }}
        >
          <Ionicons
            name={Status === false ? "play-circle" : "pause-circle"}
            size={28}
            color={Colors.white}
          />
        </TouchableOpacity>
        <View style={{ marginHorizontal: Default.fixPadding * 0.5 }}>
          <Ionicons name="play-skip-forward" size={24} color={Colors.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BottomMusic;