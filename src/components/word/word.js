import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Word({ word, translation }) {
    const [show_tran, setShow_tran] = useState(false);

    const toggleTranslation = () => {
        setShow_tran(!show_tran);
    };

    return (
        <View style={styles.grey_background}>
            <Pressable style={styles.red_background} onPress={toggleTranslation}>
                <Text style={styles.text}>{show_tran ? translation : word}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    grey_background: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    red_background: {
        backgroundColor: '#FF6969',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 80,
        color: 'white',
    },
});
