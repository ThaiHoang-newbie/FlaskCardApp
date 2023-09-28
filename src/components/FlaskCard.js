import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Flashcard({ word, translation }) {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={toggleTranslation}>
        <Text style={styles.text}>{showTranslation ? translation : word}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
  },
  button: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FF6969',
    backgroundColor: 'grey',
    width: "100%",
    textAlign: 'center',
    paddingBottom: 5,
    borderRadius: 3,
    paddingVertical: 10,
  },
});