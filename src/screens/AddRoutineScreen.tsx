import {useState} from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * 루틴 추가 화면
 * @constructor
 */
export default function AddRoutineScreen() {
    const [exercises, setExercises] = useState([
        {
            name: '벤치프레스',
            isExpanded: true,
            sets: [
                { weight: 60, reps: 12 },
                { weight: 60, reps: 12 },
                { weight: 60, reps: 12 },
                { weight: 60, reps: 12 },
            ],
        },
        {
            name: '케이블익스텐션',
            isExpanded: false,
            sets: [
                { weight: 25, reps: 12 },
                { weight: 25, reps: 12 },
                { weight: 30, reps: 12 },
                { weight: 30, reps: 12 },
            ],
        },
    ]);

    /**
     * 운동 세트 카드 추가 이벤트
     * @param exerciseIndex
     */
    const handleAddSets = (exerciseIndex: number) => {
        const newExercises = [...exercises];
        newExercises[exerciseIndex].sets.push({ weight: 0, reps: 0 });
        setExercises(newExercises);
    };

    /**
     * 운동 세트 카드 삭제 이벤트
     */
    const handleDeleteSets = (exerciseIndex: number, setsIndex: number) => {
        const updateExercises = [...exercises];
        updateExercises[exerciseIndex].sets.splice(setsIndex, 1);
        setExercises(updateExercises);
    };

    /**
     * 운동 종목 추가 이벤트
     */
    const handleAddExercise = () => {
        setExercises([...exercises, { name: '운동 이름', isExpanded: false, sets: [] }]);
    };

    /**
     * 운동 종목 카드 드롭박스 토글 이벤트
     */
    const toggleExerciseExpand = (exerciseIndex: number) => {
        const newExercises = [...exercises];
        newExercises[exerciseIndex].isExpanded = !newExercises[exerciseIndex].isExpanded;
        setExercises(newExercises);
    };

    return (
        <View style={styles.container}>
            <Header />

            {/* 루틴 화면 탑 */}
            <View style={styles.routineScreenHeader}>
                <Text style={styles.routineScreenHeaderTitle}>루틴 추가</Text>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>저장</Text>
                </TouchableOpacity>
            </View>

            {/* 루틴 이름 */}
            <View style={styles.routineNameCard}>
                <Text style={styles.routineNameCardText}>루틴 A</Text>
            </View>

            <ScrollView>
                {exercises.map((exercise, idx) => (
                    <View key={idx} style={styles.exerciseCardWrap}>
                        <TouchableOpacity style={styles.exerciseCard} activeOpacity={1.0} onPress={() => toggleExerciseExpand(idx)}>
                            <Text style={styles.exerciseCardText}>
                                {exercise.name} {exercise.isExpanded ? '▲' : '▼'}
                            </Text>
                        </TouchableOpacity>

                        {/* 세트 카드 파트 */}
                        {exercise.isExpanded && (
                            <>
                                {/* 펼쳤을 때만 세트 목록 보이게 */}
                                {exercise.sets.map((set, setIdx) => (
                                    <View key={setIdx} style={styles.setsCard}>
                                        <Text>{setIdx + 1}set</Text>
                                        <Text>{set.weight} kg</Text>
                                        <Text>{set.reps} Reps</Text>
                                        <TouchableOpacity onPress={() => handleDeleteSets(idx, setIdx)}>
                                            <Text>🅇</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}

                                {/* 세트 카드 추가 버튼 */}
                                <TouchableOpacity style={styles.addSetsButton} onPress={() => handleAddSets(idx)}>
                                    <Text style={styles.addSetsButtonText}> + </Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>

                ))}

                {/* 운동 항목 추가 버튼 */}
                <TouchableOpacity style={styles.addExerciseButton} onPress={() => handleAddExercise()}>
                    <Text style={styles.addExerciseButtonText}> + </Text>
                </TouchableOpacity>
            </ScrollView>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fAfAfA',
        fontFamily: 'Pretendard',
    },
    routineScreenHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16,
    },
    routineScreenHeaderTitle: {
        fontSize: 20,
        color: '#161616',
        fontWeight: 'bold',
    },
    saveButton: {
        backgroundColor: '#0367FC',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 8,
    },
    saveButtonText: {
        color: '#fff'
    },
    routineNameCard: {
        backgroundColor: '#0367FC',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    routineNameCardText: {
        color: '#fff',
        fontSize: 20,
        marginTop: 12,
        marginRight: 12,
        fontFamily: 'GiantsInline',
    },
    exerciseCardWrap: {
        marginBottom: 24,
    },
    exerciseCard: {
        backgroundColor: '#0367FC',
        padding: 10,
        borderRadius: 2,
    },
    exerciseCardText: {
        color: '#fff',
        fontSize: 16,
    },
    setsCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderRadius: 2,
        borderColor: 'none',
        backgroundColor: '#fff',
        color: '#161616',
    },
    addSetsButton: {
        alignItems: 'center',
        padding: 12,
        marginBottom: 12,
        borderRadius: 2,
        borderColor: 'none',
        backgroundColor: '#fff',
    },
    addSetsButtonText: {
        color: '#161616',
        fontWeight: 'bold',
    },
    addExerciseButton: {
        backgroundColor: '#0367FC',
        padding: 12,
        borderRadius: 2,
        alignItems: 'center',
        marginBottom: 12,
    },
    addExerciseButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});