import {FlatList, StyleSheet, View} from "react-native";
import {ExerciseChartData} from "../assets/type/ExerciseChartData";
import {LineChart} from "react-native-chart-kit";

type Props = {
    chartDatas: ExerciseChartData[];
};

const ExerciseChartScroll = ({ chartDatas }: Props) => {
    return (
        <FlatList
            data={chartDatas}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <LineChart
                        data={item}
                        width={280}
                        height={176}
                        chartConfig={{
                            backgroundColor: '#fff',
                            backgroundGradientFrom: '#fff',
                            backgroundGradientTo: '#fff',
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: () => '#333',
                        }}
                        withVerticalLabels={false}
                        withShadow={false}
                    />
                </View>
            )}
        />
    );
};

export default ExerciseChartScroll;

const styles = StyleSheet.create({
    horizontalList: {
        paddingHorizontal: 16,
        marginVertical: 12,
    },
    card: {
        width: 280,
        height: 176.84,
        borderColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginRight: 12,
        backgroundColor: '#fff',
        color: '#161616',
    },

});