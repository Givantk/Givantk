import { AppLoading } from "expo";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { loadFonts } from "../assets/styles/fonts/loadFonts";
import LoadingScreen from "./screens/commons/LoadingScreen/LoadingScreen";
import Navigator from "./routes/MainNavigator";

//This is the main app, with these configured:
//customized fonts loaded

export default class AppConfigured extends React.Component {
  state = {
    fontLoaded: false
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Promise.all(loadFonts);

    this.setState(() => ({ fontLoaded: true }));
  }

  render() {
    if (!this.state.fontLoaded) {
      return <LoadingScreen />;
    }

    return <Navigator />;
  }
}
