import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function BasicJavascript() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic Javaascript di React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
