export type ExerciseChartData = {
    chart: string;
    labels: string[];   // Line, Radar 차트 공통
    datasets: lineChartDataSet[];   // Line 차트
    radarDatas: number[];   // Radar 차트
    legend: string[];   // Line 차트
};

type lineChartDataSet = {
    data: number[];
    color: () => string;
    strokeWidth: number;
};