import React from 'react';

import { loadFonts } from './assets/styles/fonts/loadFonts';
import LoadingScreen from './screens/commons/LoadingScreen/LoadingScreen';
import Navigator from './routes/MainNavigator';

// This is the main app, with these configured:
// 1-customized fonts loaded

export default class AppConfigured extends React.Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Promise.all(loadFonts);

    this.setState(() => ({ fontLoaded: true }));
  }

  render() {
    const { fontLoaded } = this.state;

    if (!fontLoaded) {
      return <LoadingScreen />;
    }

    return <Navigator />;
  }
}
