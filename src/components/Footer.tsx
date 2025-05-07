import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>루틴분석</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>홈</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>소셜</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>MY</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        backgroundColor: '#0367FC',
        borderColor: '#0367FC',
    },
    footerButton: {
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    footerButtonText: {
        color: '#161616',
        fontFamily: 'GiantsInline',
        fontSize: 20,
    },
});