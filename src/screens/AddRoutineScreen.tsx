import {useRef, useState} from "react";
import {Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WeightNumberPicker from "../components/WeightNumberPicker";
import RepsNumberPicker from "../components/RepsNumberPicker";
import {Menu} from "react-native-paper";

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

    // 체중, 운동횟수 등 모달 사용 용 상태 구성
    const [selectedExerciseIndex, setSelectedExerciseIndex] = useState<number | null>(null);
    const [selectedSetsIndex, setSelectedSetsIndex] = useState<number | null>(null);
    const [isWeightPickerVisible, setWeightPickerVisible] = useState(false);
    const [isRepsPickerVisible, setRepsPickerVisible] = useState(false);
    const [tempWeight, setTempWeight] = useState<number>(0);
    const [tempReps, setTempReps] = useState<number>(0);
    const [visibleExerciseDeleteMenuIndex, setVisibleExerciseDeleteMenuIndex] = useState<number | null>(null);

    // ref 참조
    const deleteMenuRef = useRef(null);

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

    /**
     * 운동 종목 카드 삭제 메뉴 버튼 열림
     */
    const toggleExerciseDeleteMenu = (exerciseIndex: number) => {
        setVisibleExerciseDeleteMenuIndex((prevIndex) => prevIndex === exerciseIndex ? null : exerciseIndex);
    };

    /**
     * 운동 종목 카드 삭제 버튼 이벤트
     */
    const handleExerciseDelete = (exerciseIndex: number) => {
        setExercises((currentExercises) => currentExercises.filter((_, index) => index !== exerciseIndex));
    };

    /**
     * 무게 숫자 터치 시 무게 조정 모달 띄우기 이벤트
     */
    const handleWeightPress = (exerciseIndex: number, setsIndex: number) => {
        const currentWeight = Number(exercises[exerciseIndex].sets[setsIndex].weight);
        setSelectedExerciseIndex(exerciseIndex);
        setSelectedSetsIndex(setsIndex);
        setTempWeight(currentWeight);
        setWeightPickerVisible(true);
    };

    /**
     * 횟수 숫자 터치 시 횟수 조정 모달 띄우기 이벤트
     */
    const handleRepsPress = (exerciseIndex: number, setsIndex: number) => {
        const currentReps = Number(exercises[exerciseIndex].sets[setsIndex].reps);
        setSelectedExerciseIndex(exerciseIndex);
        setSelectedSetsIndex(setsIndex);
        setTempReps(currentReps);
        setRepsPickerVisible(true);
    };


    return (
        <><View style={styles.container}>
            <Header/>

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
                    // 운동 종목 카드
                    <View key={idx} style={styles.exerciseCardWrap}>
                        {/* 운동 종목 카드 삭제 메뉴 버튼 */}
                        <Menu
                            visible={visibleExerciseDeleteMenuIndex === idx}
                            anchor={
                                <TouchableOpacity
                                    style={styles.exerciseCard} activeOpacity={1.0}
                                    onPress={() => toggleExerciseExpand(idx)}
                                    onLongPress={() => toggleExerciseDeleteMenu(idx)}
                                >
                                    <Text style={styles.exerciseCardText}>
                                        {exercise.name} {exercise.isExpanded ? '▲' : '▼'}
                                    </Text>
                                </TouchableOpacity>
                            }
                        >
                            <Menu.Item onPress={() => { setVisibleExerciseDeleteMenuIndex(null); handleExerciseDelete(idx); }} title="삭제"/>
                        </Menu>

                        {/* 세트 카드 파트 */}
                        {exercise.isExpanded && (
                            <>
                                {/* 펼쳤을 때만 세트 목록 보이게 */}
                                {exercise.sets.map((set, setIdx) => (
                                    <View key={setIdx} style={styles.setsCard}>
                                        <Text>{setIdx + 1}set</Text>
                                        <TouchableOpacity onPress={() => handleWeightPress(idx, setIdx)}>
                                            <Text>{set.weight} kg</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleRepsPress(idx, setIdx)}>
                                            <Text>{set.reps} Reps</Text>
                                        </TouchableOpacity>
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
            <Footer/>
        </View>

        {/* 중량 조절 모달 */}
        <Modal
            visible={isWeightPickerVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setWeightPickerVisible(false)}
        >
            <View style={styles.weightModalOverlay}>
                <Pressable
                    style={styles.weightModalBackground}
                    onPress={() => {
                        if (selectedExerciseIndex !== null && selectedSetsIndex !== null) {
                            const updateExercises = [...exercises];
                            updateExercises[selectedExerciseIndex].sets[selectedSetsIndex].weight = tempWeight;
                            setExercises(updateExercises);
                        }
                        setWeightPickerVisible(false);
                }}/>
                    <View style={styles.weightModalContent}>
                        <WeightNumberPicker
                            initialValue={Number(
                                selectedExerciseIndex !== null && selectedSetsIndex !== null
                                    ? exercises[selectedExerciseIndex].sets[selectedSetsIndex].weight
                                    : 0
                            )}
                            onValueChange={(value) => setTempWeight(value)}
                        />
                    </View>
            </View>
        </Modal>

        {/* 운동 횟수 조절 모달 */}
        <Modal
            visible={isRepsPickerVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setRepsPickerVisible(false)}
        >
            <View style={styles.repsModalOverlay}>
                <Pressable
                    style={styles.repsModalBackground}
                    onPress={() => {
                        if (selectedExerciseIndex !== null && selectedSetsIndex !== null) {
                            const updateExercises = [...exercises];
                            updateExercises[selectedExerciseIndex].sets[selectedSetsIndex].reps = tempReps;
                            setExercises(updateExercises);
                        }
                        setRepsPickerVisible(false);
                    }}
                />
                <View style={styles.repsModalContent}>
                    <RepsNumberPicker
                        selected={
                            selectedExerciseIndex !== null && selectedSetsIndex !== null
                                ? Number(exercises[selectedExerciseIndex].sets[selectedSetsIndex].reps)
                                : 1
                        }
                        onSelect={(value) => setTempReps(value)}
                    />
                </View>
            </View>
        </Modal>
        </>
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
    weightModalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    weightModalBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    weightModalContent: {
        backgroundColor: '#fff',
        paddingVertical: 24,
        borderRadius: 16,
        elevation: 5,
        width: '90%',
        alignItems: 'center',
    },
    repsModalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    repsModalBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    repsModalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
    },
});