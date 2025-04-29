import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * 메인 홈 화면
 * @constructor
 */
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.content}>
                {/* 사용자 정보 및 운동 목표 */}
                <View style={styles.userCard}>
                    <View style={styles.avatarBox}>
                        <Image
                            source={require('../assets/fakeavatar.png')}
                            style={styles.avatarImg}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.userInfo}>
                        <Text>운동목표: 근육량 증가</Text>
                        <Text>현재체중: 76kg</Text>
                        <Text>목표체중: 80kg</Text>
                        <Text>골격근량: 33kg</Text>
                        <Text>체지방량: 17%</Text>
                    </View>
                </View>

                {/* 최근 운동기록 */}
                <View style={styles.exerciseHistory}>
                    <Text style={styles.historyTitle}>최근 운동기록</Text>
                    <Text>0000년 00월 00일 루틴 A, 총운동볼륨: 000kg</Text>
                    <Text>0000년 00월 00일 루틴 B, 총운동볼륨: 000kg</Text>
                    <Text>0000년 00월 00일 루틴 C, 총운동볼륨: 000kg</Text>
                </View>

                {/* 운동 시작 */}
                <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>운동 시작</Text>
                </TouchableOpacity>
            </ScrollView>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 16,
    },
    userCard: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    avatarBox: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    avatarImg: {
        width: 100,
        height: 100,
    },
    userInfo: {
        justifyContent: 'space-between',
    },
    exerciseHistory: {
        marginBottom: 24,
    },
    historyTitle: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    startButton: {
        backgroundColor: '#007bff',
        marginTop: 12,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    startButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});