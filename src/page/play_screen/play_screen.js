import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/header/header';
import Small_button from '../../components/buttons/small_buttons';
import Big_button from '../../components/buttons/big_buttons';
import Word from '../../components/word/word';
import init_flashcard from '../../data';
// import darkMode from '../setting/setting';

export default function Play_screen() {
  const [index, setIndex] = useState(0);

  const [flashcards, setFlashcards] = useState(init_flashcard);
  const cards = flashcards.length;

  const Next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  }
  const Previous = () => {
    setIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  }

  const Remove = () => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards.splice(index, 1);
    if (updatedFlashcards.length === 0) {
      setIndex(0);
    } else {
      setFlashcards(updatedFlashcards);
      setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    }
  };

  const Reset = () => {
    setFlashcards(init_flashcard);
    setIndex(0);
  };

  const darkMode = false;

  return (
    <View style={styles.container}>
      <Header message={cards} />

      <Word word={flashcards[index].word} translation={flashcards[index].translation} />

      <View style={styles.small_button_view}>
        <Small_button button_text={"Previous"} function={Previous}></Small_button>
        <Small_button button_text={"Next"} function={Next}></Small_button>
      </View>

      <View style={styles.big_button_view}>
        <Big_button button_text={"Remove From Deck"} function={Remove}></Big_button>
        <Big_button button_text={"Reset Deck"} function={Reset}></Big_button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  small_button_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  big_button_view: {
    flex: 1,
  },
});
