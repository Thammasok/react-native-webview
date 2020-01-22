import React from 'react';
import { WebView } from 'react-native-webview';

export default function LinksScreen({ navigation }) {
  return (
    <WebView source={{ uri: navigation.getParam('url', 'NO-ID') }} style={{ marginTop: 20 }} />
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};
