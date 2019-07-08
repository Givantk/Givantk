import React from 'react';
import { I18nManager } from 'react-native';
I18nManager.forceRTL(true);

import AppConfigured from './src/AppConfigured';

const App = () => <AppConfigured />;

export default App;
