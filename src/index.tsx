import React, { PropsWithChildren } from 'react';

import {
  StatusBar,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';

export const IS_IOS = Platform.OS === 'ios';

type Props = PropsWithChildren<{
  backgroundColor?: string;
  statusBarStyle?: 'light-content' | 'default' | 'dark-content';
  keyboardBehavior?: 'padding' | 'height' | 'position';
}>;

const NormalizedView = (props: Props) => {
  const {
    backgroundColor = '#fff',
    statusBarStyle = 'light-content',
    keyboardBehavior = 'padding',
  } = props;

  return (
    <>
      <StatusBar barStyle={statusBarStyle} />
      <SafeAreaView style={{ ...styles.safeAreaView, backgroundColor }}>
        <KeyboardAvoidingView
          // https://facebook.github.io/react-native/docs/keyboardavoidingview#behavior
          behavior={keyboardBehavior}
          style={styles.keyboardAvoidingView}
          enabled={IS_IOS}
        >
          <View style={styles.childrenView}>{props.children}</View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};
export default NormalizedView;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  childrenView: {
    alignItems: 'stretch',
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});
