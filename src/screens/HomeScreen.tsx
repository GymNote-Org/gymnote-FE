import { Text, View, StyleSheet } from 'react-native';

/**
 * 메인 홈 화면
 * @constructor
 */
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>GymNote 홈 화면입니다</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});