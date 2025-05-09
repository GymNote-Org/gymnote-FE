import {useEffect, useRef, useState} from "react";
import {FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View} from "react-native";

type Props = {
    selected: number;
    onSelect: (value: number) => void;
};

const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = 5;

const RepsNumberPicker = ({ selected, onSelect }: Props) => {
    const listRef = useRef<FlatList>(null);
    const [tempReps, setTempReps] = useState(selected);

    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

    // 초기 위치로 스크롤
    useEffect(() => {
        setTimeout(() => {
            listRef.current?.scrollToIndex({
                index: (selected <= 0) ? 1 : selected - 1,
                animated: false,
            });
        }, 0);
    }, [selected]);

    // 중앙 아이템 계산
    const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / ITEM_HEIGHT);
        const selectedValue = numbers[index];
        setTempReps(selectedValue);
        onSelect(selectedValue); // 모달 닫힐 때 선택될 값 저장
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={listRef}
                data={numbers}
                keyExtractor={(item) => item.toString()}
                showsVerticalScrollIndicator={false}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate="fast"
                bounces={false}
                onMomentumScrollEnd={handleScrollEnd}
                contentContainerStyle={styles.contentContainer}
                getItemLayout={(_, index) => ({
                    length: ITEM_HEIGHT,
                    offset: ITEM_HEIGHT * index,
                    index,
                })}
                renderItem={({ item }) => {
                    const isSelected = item === tempReps;
                    return (
                        <View style={[styles.item, isSelected && styles.selectedItem]}>
                            <Text style={[styles.itemText, isSelected && styles.selectedText]}>
                                {item}
                            </Text>
                        </View>
                    );
                }}
            />

            {/* 중앙 표시용 가이드 라인 */}
            <View
                style={[
                    StyleSheet.absoluteFill,
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                        pointerEvents: 'none',
                    },
                ]}
            >
                <View style={styles.selectorLine} />
            </View>
        </View>
    );
};

export default RepsNumberPicker;

const styles = StyleSheet.create({
    container: {
        height: ITEM_HEIGHT * VISIBLE_ITEMS,
        overflow: 'hidden',
    },
    contentContainer: {
        paddingVertical: (ITEM_HEIGHT * (VISIBLE_ITEMS - 1)) / 2,
    },
    item: {
        width: 80,
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 18,
        color: '#aaa',
    },
    selectedItem: {},
    selectedText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#161616',
    },
    selectorLine: {
        height: 2,
        width: '80%',
        backgroundColor: '#0367FC',
    },
});