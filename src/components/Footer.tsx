import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Footer = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.date}>0000년 00월 00일</Text>
                <Text style={styles.location}>서울특별시 00구 00동</Text>
            </View>
            <TouchableOpacity style={styles.mapButton}>
                <Text style={styles.mapButtonText}>지도</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#007bff',
    },
    date: {
        color: '#fff',
        fontWeight: 'bold',
    },
    location: {
        color: '#fff',
        fontSize: 12,
    },
    mapButton: {
        backgroundColor: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    mapButtonText: {
        color: '#007bff',
        fontWeight: 'bold',
    },
})