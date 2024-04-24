import {useDispatch} from "react-redux";
import {useFocusEffect} from "@react-navigation/native";
import {useCallback} from "react";
import * as SecureStore from "expo-secure-store";
import {loginSuccess} from "../Redux/Slices/authSlice";
import {View, Text} from "react-native";

const SplashScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    useFocusEffect(
        useCallback(() => {
            const validateToken = async () => {
                try {
                    const token = await SecureStore.getItemAsync("token");

                    if (token) {
                        // eslint-disable-next-line no-param-reassign
                        console.log("Token Detected, Validating");
                        dispatch(loginSuccess({ token }));

                        return;
                    }

                    // If no token go to login
                    navigation.replace("LoginScreen");
                } catch (error) {
                    console.log("Token Not Valid");
                    await SecureStore.deleteItemAsync("token");
                    console.error(error);
                }
            };

            validateToken();
        }, []),
    );

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>SplashScreen</Text>
        </View>
    );
};

export default SplashScreen;
