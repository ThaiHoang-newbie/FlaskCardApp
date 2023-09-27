import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Small_button(props) {
    return (
        <View style={styles.container}>
            <Pressable onPress={props.function}>
                <Text style={styles.text}>{props.button_text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FF6969',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#FF6969',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});
