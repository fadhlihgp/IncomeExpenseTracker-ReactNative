import {useDispatch} from "react-redux";
import {useFocusEffect} from "@react-navigation/native";
import {useCallback, useRef} from "react";
import * as SecureStore from "expo-secure-store";
import {loginSuccess} from "../Redux/Slices/authSlice";
import {View, Text} from "react-native";
import {Entypo} from "@expo/vector-icons";
import {useTimeout} from "react-native-toast-message/lib/src/hooks";

const SplashScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useFocusEffect(
        useCallback(() => {
            const validateToken = async () => {
                try {
                    const token = await SecureStore.getItemAsync("token");

                    if (token) {
                        console.log("Token Detected, Validating");
                        dispatch(loginSuccess({ token }));
                    } else {
                        // If no token go to login
                        navigation.replace("LoginScreen");
                    }
                } catch (error) {
                    console.log("Token Not Valid");
                    await SecureStore.deleteItemAsync("token");
                    console.error(error);
                }
            };

            const timeout = setTimeout(() => {
                validateToken();
            }, 3000);

            return () => clearTimeout(timeout);
        }, [dispatch, navigation])
    );

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} className='bg-blue-900'>
            <Entypo name="flattr" size={52} color="white" />
            <Text className='text-white font-bold text-lg'>Income Expense Tracker</Text>
        </View>
    );
};

export default SplashScreen;
