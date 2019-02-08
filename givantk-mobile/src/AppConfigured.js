import { Provider } from 'react-redux';
import { Root } from 'native-base';
import React from 'react';

import { loadFonts } from './assets/styles/fonts/loadFonts';
import App from './routes/MainNavigator';
import LoadingScreen from './screens/commons/LoadingScreen/LoadingScreen';
import store from './store/createStore';

// This is the main app, with these configured:
// 1- Customized fonts loaded
// 2- Redux
// 3- Native Base Root
// 4- checking if is user has signed in before

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

    return (
      <Provider store={store}>
        <Root>
          <App />
        </Root>
      </Provider>
    );
  }
}
