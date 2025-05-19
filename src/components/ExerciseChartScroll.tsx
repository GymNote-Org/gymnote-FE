import {FlatList, StyleSheet, View} from "react-native";
import {ExerciseChartData} from "../assets/type/ExerciseChartData";
import {LineChart} from "react-native-chart-kit";
import RadarChart from "./RadarChart";

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
            renderItem={({ item }) => {
                if (item.chart === 'line') {
                    return <View style={styles.card}>
                        <LineChart
                            data={item}
                            width={265}
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
                }
                if (item.chart === 'radar') {
                    return <View style={styles.card}>
                        <RadarChart
                            labels={item.labels}
                            data={item.radarDatas}
                        />
                    </View>
                }

                return null;
            }}
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
        height: 200,
        borderColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginRight: 12,
        backgroundColor: '#fff',
        color: '#161616',
    },

});