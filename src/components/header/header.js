import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Play ({props.message} Cards )</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});
