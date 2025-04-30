import {StyleSheet, Text, View} from "react-native";

type Props = {
    exercise: {
        id: number;
        title: string;
        description: string;
        date: string;
        startTime: string;
        endTime: string;
        duration: string;
        volume: string;
        location: string;
    }
};

const RecentExerciseCard = (exercise: Props) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>{exercise.exercise.title}. {exercise.exercise.description}</Text>
                <View style={styles.meta}>
                    <Text>{exercise.exercise.date}</Text>
                    <Text>{exercise.exercise.location}</Text>
                </View>
            </View>
            <Text style={styles.info}>총 볼륨: {exercise.exercise.volume}</Text>
            <Text style={styles.info}>총 운동시간: {exercise.exercise.duration} ({exercise.exercise.startTime} ~ {exercise.exercise.endTime})</Text>
            <View style={styles.graphPlaceholder}>
                <Text>그래프 박스</Text>
            </View>
        </View>
    );
}

export default RecentExerciseCard;

const styles = StyleSheet.create({
    card: {
        width: 280,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 12,
        marginRight: 12,
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    meta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        fontSize: 14,
        marginTop: 2,
    },
    graphPlaceholder: {
        marginTop: 8,
        height: 100,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
});