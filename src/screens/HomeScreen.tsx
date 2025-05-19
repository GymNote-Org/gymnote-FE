import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoutineCard from "../components/RoutineCard";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/RootNavigator";
import ExerciseChartScroll from "../components/ExerciseChartScroll";
import {ExerciseChartData} from "../assets/type/ExerciseChartData";

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const dummyRecentExerciseLogs = [
    { id: 1, title: "루틴. 가슴, 이두", date: "2025.04.29", startTime: "오후 04:00", endTime: "오후 5:27", duration: "87분 08초", setCounts: 14, volume: "10,000kg" },
    { id: 2, title: "루틴. 등, 삼두", date: "2025.04.30", startTime: "오후 04:00", endTime: "오후 5:15", duration: "75분 07초", setCounts: 18, volume: "10,000kg" },
];

const dummyRoutines = [
    { id: 1, title: "루틴 A", description: "가슴, 이두" },
    { id: 2, title: "루틴 B", description: "등, 삼두" },
    { id: 3, title: "루틴 C", description: "하체" },
    { id: 4, title: "루틴 A", description: "가슴, 이두" },
    { id: 999999, isAddCard: true },    // 루틴 추가 카드
];

const exerciseChartDatas: ExerciseChartData[] = [
    {
        chart: 'line',
        labels: [],
        datasets: [
            {
                data: [10000, 10030, 9990, 10010],
                color: () => '#0367FC',
                strokeWidth: 2,
            },
            {
                data: [5100, 4990, 5050, 5040],
                color: () => '#D2F801',
                strokeWidth: 2,
            },
            {
                data: [6750, 6800, 6850, 6900],
                color: () => '#161616',
                strokeWidth: 2,
            },
        ],
        radarDatas: [],
        legend: ['루틴 A', '루틴 B', '루틴 C'],
    },
    {
        chart: 'radar',
        labels: ["가슴", "등", "어깨", "복근", "허벅지", "엉덩이"],
        datasets: [],
        radarDatas: [0.7, 0.6, 0.9, 0.5, 0.3, 0.8],
        legend: [],
    },
];

/**
 * 메인 홈 화면
 * @constructor
 */
export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenProp>();

    const handleAddRoutine = () => {
        navigation.navigate('AddRoutine');
    }

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView>
                {/* 유저 정보 카드 */}
                <View style={styles.userPersonalBox}>
                    <Text style={{ fontSize: 14, color: '#0367FC', }}>트랄랄레로 트랄랄라</Text>
                    <View style={styles.userSocialIcons}>
                        <Image
                            source={require('../assets/sns_instagram.png')}
                            style={styles.snsIconImg}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/sns_facebook.png')}
                            style={styles.snsIconImg}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={styles.userCard}>
                    <View style={styles.avatarBox}>
                        <Image
                            source={require('../assets/default-avatar.png')}
                            style={styles.avatarImg}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.userInfoBox}>
                        <Text style={styles.userGoalText}>운동목표: 근육량 증가</Text>
                        <Text style={styles.userExerciseLogTitle}>이전운동</Text>
                        <ScrollView style={{ height: 120 }}>
                            {dummyRecentExerciseLogs.map((exerciseLog, logIdx) => (
                                <View style={styles.userExerciseLogContainer} key={logIdx.toString()}>
                                    <View>
                                        <Text style={styles.userExerciseLogTextImportant}>- {exerciseLog.title}</Text>
                                        <Text style={styles.userExerciseLogTextPlain}>{exerciseLog.date}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.userExerciseLogTextPlain}>{exerciseLog.duration}</Text>
                                        <Text style={styles.userExerciseLogTextImportant}>{exerciseLog.setCounts} SET 총볼륨 {exerciseLog.volume}</Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>

                {/* 최근 운동 루틴 카드 리스트 */}
                <ExerciseChartScroll chartDatas={exerciseChartDatas}/>

                {/* 하단 루틴 카드 리스트 */}
                <FlatList
                    data={dummyRoutines} // + 버튼 포함
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalList}
                    renderItem={({ item, index }) => {
                        if ('isAddCard' in item && item.isAddCard) {    // isAddCard가 true이면 루틴 추가 버튼 카드 렌더링
                            return <RoutineCard isAddCard onPress={handleAddRoutine} index={index} />;
                        }
                        return <RoutineCard id={item.id} title={item.title} description={item.description} index={index} />;
                    }}
                />
            </ScrollView>

            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fAfAfA',
        fontFamily: 'Pretendard',
    },
    userPersonalBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 12,
        backgroundColor: '#fff',
    },
    userSocialIcons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    snsIconImg: {
        width: 24,
        height: 24,
        marginHorizontal: 4,
    },
    userCard: {
        padding: 16,
        flexDirection: 'row',
        marginBottom: 24,
        backgroundColor: '#fff'
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
    userInfoBox: {
        alignItems: 'flex-start',
    },
    userGoalText: {
        fontSize: 12,
    },
    userExerciseLogTitle: {
        fontSize: 16,
        color: '#161616',
        marginBottom: 12,
    },
    userExerciseLogContainer: {
        flexDirection: 'column',
        paddingVertical: 4,
    },
    userExerciseLogTextImportant: {
        fontSize: 14,
        color: '#161616',
    },
    userExerciseLogTextPlain: {
        fontSize: 12,
        color: '#161616',
    },
    horizontalList: {
        paddingHorizontal: 16,
        marginVertical: 12,
    },
});