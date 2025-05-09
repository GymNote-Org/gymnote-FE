import RootNavigator from './src/navigation/RootNavigator';
import {View} from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {useCallback, useEffect, useState} from "react";
import {PaperProvider} from "react-native-paper";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    Pretendard: require('./src/assets/font/Pretendard-Regular.ttf'),
                    GiantsInline: require('./src/assets/font/Giants-Inline.otf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <PaperProvider>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
                <RootNavigator />
            </View>
        </PaperProvider>
    );
}