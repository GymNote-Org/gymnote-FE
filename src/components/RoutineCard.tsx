import {StyleSheet, Text, TouchableOpacity} from "react-native";

type Props = {
    id?: number;
    title?: string;
    description?: string;
    isAddCard?: boolean;
    onPress?: () => void;
}

const RoutineCard = ({ id, title, description, isAddCard = false, onPress }: Props) => {
    return (
        <TouchableOpacity style={[styles.card, isAddCard && styles.addCard]} onPress={onPress}>
            <Text style={styles.cardText}>{isAddCard ? '+' : title}</Text>
        </TouchableOpacity>
    );
}

export default RoutineCard;

const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 100,
        borderRadius: 16,
        backgroundColor: '#add8e6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    addCard: {
        backgroundColor: '#a0e0a0',
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
