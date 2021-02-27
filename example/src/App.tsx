import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import NormalizedView from 'react-native-normalized-view';

export default function App() {
  return (
    <NormalizedView backgroundColor="#000000">
      <View style={styles.view}>
        <Text style={styles.text}>Safe area</Text>
      </View>
    </NormalizedView>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#1C1C1C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: '#fff', fontSize: 24 },
});
