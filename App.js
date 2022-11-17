import i18n from "./languages/index"; //don't remove this line
import React from "react";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { withTranslation } from "react-i18next";
import SplashScreen from "./screens/splashScreen";
import OnboardingScreen from "./screens/auth/onboardingScreen";
import SignInScreen from "./screens/auth/signInScreen";
import SignUpScreen from "./screens/auth/signUpScreen";
import VerificationScreen from "./screens/auth/verificationScreen";
import BottomTab from "./components/bottomTab";
import TopArtistsScreen from "./screens/topArtistsScreen";
import RecentlyPlayScreen from "./screens/recentlyPlayScreen";
import PlayListScreen from "./screens/playListScreen";
import FreshMusicScreen from "./screens/freshMusicScreen";
import BhaktiScreen from "./screens/bhaktiScreen";
import MoodScreen from "./screens/moodScreen";
import ArtistScreen from "./screens/artistScreen";
import PlayScreen from "./screens/playScreen";
import PayListSeeAllScreen from "./screens/playListSeeAllScreen";
import TrendingPodcastScreen from "./screens/trendingPodcastScreen";
import AroundWorldScreen from "./screens/aroundWorldScreen";
import FamousPersonalitiesScreen from "./screens/famousPersonalitiesScreen";
import MotivationPodcastScreen from "./screens/motivationPodcastScreen";
import PodcastDetailScreen from "./screens/podcastDetailScreen";
import SearchMusicScreen from "./screens/searchMusicScreen";
import PremiumScreen from "./screens/premiumScreen";
import AddToPlayList from "./components/addToPlayList";
import NewPlayList from "./components/newPlayList";
import MainBottomSheet from "./components/mainBottomSheet";
import LyricsScreen from "./screens/lyricsScreen";
import SongInformation from "./screens/songInformation";
import NotificationScreen from "./screens/notificationScreen";
import PartySongScreen from "./screens/partySongScreen";
import LibraryMyLikeScreen from "./screens/libraryMyLikeScreen";
import LibraryArtistScreen from "./screens/libraryArtistScreen";
import LibraryPlayListScreen from "./screens/libraryPlayListScreen";
import LibraryPodcastScreen from "./screens/libraryPodcastScreen";
import EditProfileScreen from "./screens/editProfileScreen";
import LanguageScreen from "./screens/languageScreen";
import AboutUsScreen from "./screens/aboutUsScreen";
import HelpAndSupportScreen from "./screens/helpAndSupportScreen";
import AppSettingScreen from "./screens/appSettingScreen";
import CreditCardScreen from "./screens/creditCardScreen";
import SuccessScreen from "./screens/successScreen";
import SimilarArtistScreen from "./screens/similarArtistScreen";
const Stack = createStackNavigator();

const MainNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="verificationScreen"
          component={VerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="bottomTab"
          component={BottomTab}
          options={{
            ...TransitionPresets.DefaultTransition,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="topArtistsScreen"
          component={TopArtistsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="recentlyPlayScreen"
          component={RecentlyPlayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="playListScreen"
          component={PlayListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="freshMusicScreen"
          component={FreshMusicScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="bhaktiScreen"
          component={BhaktiScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="moodScreen"
          component={MoodScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="artistScreen"
          component={ArtistScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="playScreen"
          component={PlayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="playListSeeAllScreen"
          component={PayListSeeAllScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="trendingPodcastScreen"
          component={TrendingPodcastScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="aroundWorldScreen"
          component={AroundWorldScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="famousPersonalitiesScreen"
          component={FamousPersonalitiesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="motivationPodcastScreen"
          component={MotivationPodcastScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="podcastDetailScreen"
          component={PodcastDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="searchMusicScreen"
          component={SearchMusicScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="premiumScreen"
          component={PremiumScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="addToPlayList"
          component={AddToPlayList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="newPlayList"
          component={NewPlayList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="mainBottomSheet"
          component={MainBottomSheet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="lyricsScreen"
          component={LyricsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="songInformation"
          component={SongInformation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="notificationScreen"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="partySongScreen"
          component={PartySongScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="libraryMyLikeScreen"
          component={LibraryMyLikeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="libraryArtistScreen"
          component={LibraryArtistScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="libraryPlayListScreen"
          component={LibraryPlayListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="libraryPodcastScreen"
          component={LibraryPodcastScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="editProfileScreen"
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="languageScreen"
          component={LanguageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="aboutUsScreen"
          component={AboutUsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="helpAndSupportScreen"
          component={HelpAndSupportScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="appSettingScreen"
          component={AppSettingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="creditCardScreen"
          component={CreditCardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="successScreen"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="similarArtistScreen"
          component={SimilarArtistScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const ReloadAppOnLanguageChange = withTranslation("translation", {
  bindI18n: "languageChanged",
  bindStore: false,
})(MainNavigation);

export default function App() {
  const [loaded] = useFonts({
    Regular: require("./assets/font/Mulish-Regular.ttf"),
    Medium: require("./assets/font/Mulish-Medium.ttf"),
    SemiBold: require("./assets/font/Mulish-SemiBold.ttf"),
    Bold: require("./assets/font/Mulish-Bold.ttf"),
    ExtraBold: require("./assets/font/Mulish-ExtraBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <ReloadAppOnLanguageChange />;
}
