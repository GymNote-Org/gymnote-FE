import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecentExerciseCard from "../components/RecentExerciseCard";
import RoutineCard from "../components/RoutineCard";

const dummyRecentExercises = [
    { id: 3, title: "루틴 A", description: "가슴, 이두", date: "2025.04.30", startTime: "오후 04:00", endTime: "오후 5:27", duration: "87분 08초", volume: "10,000kg", location: "신정동" },
    { id: 2, title: "루틴 B", description: "등, 삼두", date: "2025.04.29", startTime: "오후 04:00", endTime: "오후 5:15", duration: "75분 07초", volume: "10,000kg", location: "신정동" },
    { id: 1, title: "루틴 C", description: "하체", date: "2025.04.28", startTime: "오후 04:00", endTime: "오후 5:07", duration: "67분 05초", volume: "10,000kg", location: "신정동" },
];

const dummyRoutines = [
    { id: 1, title: "루틴 A", description: "가슴, 이두" },
    { id: 2, title: "루틴 B", description: "등, 삼두" },
    { id: 3, title: "루틴 C", description: "하체" },
    { id: 999999, isAddCard: true },    // 루틴 추가 카드
];

/**
 * 메인 홈 화면
 * @constructor
 */
export default function HomeScreen() {
    const handleAddRoutine = () => {
        console.log('루틴 생성 버튼 클릭');
    }

    return (
        <View style={styles.container}>
            <Header />

            {/* 유저 정보 카드 */}
            <View style={styles.userCard}>
                <View style={styles.avatarBox}>
                    <Image
                        source={require('../assets/default-avatar.png')}
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
                <View style={styles.userInfo}>
                    <Text>보유코인: 0 코인</Text>
                </View>
            </View>

            {/* 최근 운동 루틴 카드 리스트 */}
            <FlatList
                data={dummyRecentExercises}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalList}
                inverted    // 최근 운동기록이 맨 오른쪽에 보이도록
                renderItem={({ item }) => <RecentExerciseCard exercise={item} />}
            />

            {/* 하단 루틴 카드 리스트 */}
            <FlatList
                data={dummyRoutines} // + 버튼 포함
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalList}
                renderItem={({ item }) => {
                    if ('isAddCard' in item && item.isAddCard) {    // isAddCard가 true이면 루틴 추가 버튼 카드 렌더링
                        return <RoutineCard isAddCard onPress={handleAddRoutine} />;
                    }
                    return <RoutineCard id={item.id} title={item.title} description={item.description} />;
                }}
            />

            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    userCard: {
        padding: 16,
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
        fontSize: 12,
        justifyContent: 'space-between',
    },
    horizontalList: {
        paddingHorizontal: 16,
        marginVertical: 12,
    },
});