import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AddRoutineScreen from "../screens/AddRoutineScreen";

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    AddRoutine: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

/**
 * 화면 간 이동을 위한 Navigator
 * @constructor
 */
export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AddRoutine" component={AddRoutineScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}