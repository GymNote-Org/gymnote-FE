import React from "react";
import {View} from "react-native";
import Svg, {Line, Polygon, Text} from "react-native-svg";

type Props = {
    labels: string[];
    data: number[];
};

const RadarChart = ({ labels, data }: Props) => {
    const radius = 80;
    const centerX = 100;
    const centerY = 100;
    const numPoints = labels.length;
    const angleStep = (2 * Math.PI) / numPoints;

    // 점 좌표 계산
    const getPoint = (value: number, index: number) => {
        const angle = angleStep * index - Math.PI / 2;
        const r = radius * value;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        return `${x},${y}`;
    };

    const points = data.map((val, i) => getPoint(val, i)).join(" ");

    return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Svg height="200" width="200">
                {/* 배경 원형 격자 */}
                {[0.25, 0.5, 0.75, 1].map((r, idx) => (
                    <Polygon
                        key={idx}
                        points={labels.map((_, i) => getPoint(r, i)).join(" ")}
                        stroke="#ccc"
                        fill="none"
                    />
                ))}

                {/* 축선 */}
                {labels.map((_, i) => {
                    const angle = angleStep * i - Math.PI / 2;
                    const x = centerX + radius * Math.cos(angle);
                    const y = centerY + radius * Math.sin(angle);
                    return (
                        <Line
                            key={i}
                            x1={centerX}
                            y1={centerY}
                            x2={x}
                            y2={y}
                            stroke="#ccc"
                        />
                    );
                })}

                {/* 레이더 데이터 */}
                <Polygon points={points} fill="rgba(0, 123, 255, 0.4)" stroke="#007bff" />

                {/* 라벨 */}
                {labels.map((label, i) => {
                    const angle = angleStep * i - Math.PI / 2;
                    const x = centerX + (radius + 12) * Math.cos(angle);
                    const y = centerY + (radius + 12) * Math.sin(angle);
                    return (
                        <Text
                            key={i}
                            x={x}
                            y={y}
                            fontSize="10"
                            fill="#333"
                            textAnchor="middle"
                        >
                            {label}
                        </Text>
                    );
                })}
            </Svg>
        </View>
    );
};

export default RadarChart;
