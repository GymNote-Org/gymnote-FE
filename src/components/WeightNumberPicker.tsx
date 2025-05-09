import {StyleSheet, View} from "react-native";
import {RulerPicker} from "react-native-ruler-picker";

type Props = {
    initialValue: number;
    onValueChange: (value: number) => void;
};

const WeightNumberPicker = ({ initialValue, onValueChange }: Props) => {
    return (
        <View style={styles.numberPicker}>
            <RulerPicker
                min={0}
                max={300}
                step={5}
                initialValue={initialValue}
                onValueChangeEnd={(value) => onValueChange(Number(value))}
                unit="kg"
                unitTextStyle={styles.unitText}
                valueTextStyle={styles.valueText}
                indicatorColor="#007AFF"
                indicatorHeight={50}
                width={300}
                height={100}
            />
        </View>
    );
};

export default WeightNumberPicker;

const styles = StyleSheet.create({
    numberPicker: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        fontFamily: 'Pretendard',
    },
    unitText: {
        fontSize: 16,
        color: '#202020'
    },
    valueText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#161616',
    },
});