import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40, top: 50 }}
        placeholder="url"
        onChangeText={text => setText(text)}
        value={text}
      />

      <WebView source={{ uri: text }} style={{ marginTop: 20 }} />;
    </View>
  );
}
