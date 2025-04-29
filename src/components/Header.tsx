import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';

const Header = () => {
    return (
      <View style={styles.container}>
          <TouchableOpacity>
              <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Gym⚡️Note</Text>
          <TouchableOpacity style={styles.calendarButton}>
              <Text style={styles.calendarButton}>캘린더</Text>
          </TouchableOpacity>
      </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    calendarButton: {
        backgroundColor: '#007bff',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    calendarText: {
        color: '#fff',
        fontSize: 14,
    },
})