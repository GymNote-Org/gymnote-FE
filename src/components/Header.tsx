import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const Header = () => {
    return (
      <View style={styles.container}>
          <View style={styles.logoSection}>
              <Image
                  source={require('../assets/header-logo.png')}
                  style={styles.logoImg}
                  resizeMode="contain"
              />
          </View>
          <View style={styles.proSection}>
              <Text style={styles.proMode}>PRO</Text>
          </View>
      </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 4,
        paddingVertical: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#ccc',
    },
    logoSection: {
        paddingVertical: 2,
        paddingHorizontal: 12,
    },
    logoImg: {
        width: 40,
    },
    proSection: {
        paddingVertical: 2,
        paddingHorizontal: 12,
    },
    proMode: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})