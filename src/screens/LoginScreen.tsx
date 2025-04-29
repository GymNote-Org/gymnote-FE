import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/RootNavigator";
import {useNavigation} from "@react-navigation/native";

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

/**
 * 로그인 화면
 * @constructor
 */
export default function LoginScreen() {
    const navigation = useNavigation<LoginScreenProp>()

    const handleLogin = () => {
        // TODO: 실제 로그인 후 처리하도록 수정해야 함
        navigation.replace('Home');
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo-login.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Google로 로그인</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 24,
    },
    logo: {
        width: 180,
        height: 180,
        marginBottom: 48,
    },
    button: {
        backgroundColor: '#4285F4', // Google Blue
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
