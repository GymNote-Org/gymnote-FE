import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import exerciseItems from "../assets/data/exerciseItem";
import Exercise from "../assets/type/Exercise";

type Props = {
    handleExerciseNameChange: (item: Exercise) => void;
};

const ExerciseFilterDropDown = ({ handleExerciseNameChange }: Props) => {
    const [exercises, setExercises] = useState<Exercise[]>(exerciseItems);
    const [searchText, setSearchText] = useState<string>("");

    return (
        <View style={styles.dropDownModalContainer}>
            <TextInput
                placeholder="운동 이름 검색"
                value={searchText}
                onChangeText={setSearchText}
                style={styles.searchInput}
            />
            <FlatList
                data={exercises.filter(exercise => exercise.name.toLowerCase().includes(searchText.toLowerCase()))}
                keyExtractor={(exercise) => exercise.name}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleExerciseNameChange(item)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.dropDownText, styles.dropDownTextName]}>{item.name}</Text>
                            <Text style={[styles.dropDownText, styles.dropDownTextTarget]}>({item.target[0]})</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyboardShouldPersistTaps="handled" // 키보드 떠있을 때 터치 허용
            />
        </View>
    );
};

export default ExerciseFilterDropDown;

const styles = StyleSheet.create({
    dropDownModalContainer: {
        position: "absolute",
        top: 100, // 위치 조정 필요
        left: 20,
        right: 20,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        elevation: 5,
        maxHeight: 600,
    },
    searchInput: {
        borderBottomWidth: 1,
        paddingVertical: 5,
        marginBottom: 10,
    },
    dropDownText: {
        paddingVertical: 8,
        borderBottomWidth: 0.5,
        borderColor: "#e1e1e1",
        color: '#161616',
    },
    dropDownTextName: {
        fontSize: 18,
    },
    dropDownTextTarget: {
        fontSize: 12,
        marginLeft: 4,
    }
});

