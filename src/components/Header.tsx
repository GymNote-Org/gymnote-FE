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
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    logoSection: {
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    logoImg: {
        width: 50,
        height: 50,
    },
    proSection: {
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    proMode: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})