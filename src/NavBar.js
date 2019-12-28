import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const NavBar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#ca3e47',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 70,
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});
