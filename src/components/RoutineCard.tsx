import {StyleSheet, Text, TouchableOpacity} from "react-native";

type Props = {
    id?: number;
    title?: string;
    description?: string;
    isAddCard?: boolean;
    onPress?: () => void;
    index: number;
}

const routineCardBackgrounds = [
    { backgroundColor: '#0367FC', color: '#FFF' }, // 파란 배경, 흰 글씨
    { backgroundColor: '#D2F801', color: '#161616' }, // 라임 배경, 검정 글씨
    { backgroundColor: '#FFF', color: '#161616' }, // 흰 배경, 검정 글씨
    { backgroundColor: '#161616', color: '#FFF' }, // 검정 배경, 흰 글씨
];

const RoutineCard = ({ id, title, description, isAddCard = false, onPress, index }: Props) => {
    // 배경 색상 지정을 위한 루틴 카드별 목록 인덱스
    const cardStyleIndex = index % routineCardBackgrounds.length;
    const { backgroundColor, color } = routineCardBackgrounds[cardStyleIndex];

    return (
        <TouchableOpacity style={[styles.card, {backgroundColor}, isAddCard && styles.addCard]} onPress={onPress}>
            <Text style={[!isAddCard && styles.cardFont, styles.cardText, {color}]}>{isAddCard ? '+' : title}</Text>
        </TouchableOpacity>
    );
}

export default RoutineCard;

const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 100,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    addCard: {
        opacity: .5,
        fontWeight: 'bold',
    },
    cardFont: {
        fontFamily: 'GiantsInline',
    },
    cardText: {
        fontSize: 24,
    },
});
