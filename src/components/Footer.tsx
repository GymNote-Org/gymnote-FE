import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>게시판</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>홈</Text>
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
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        backgroundColor: '#007bff',
    },
    footerButton: {
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    footerButtonText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },
})