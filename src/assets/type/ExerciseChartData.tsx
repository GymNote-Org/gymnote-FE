export type ExerciseChartData = {
    labels: string[];
    datasets: dataSet[];
    legend: string[];
};

type dataSet = {
    data: number[];
    color: () => string;
    strokeWidth: number;
};