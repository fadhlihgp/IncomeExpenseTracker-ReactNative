import {Alert, Button, Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons, SimpleLineIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import * as SecureStorage from "expo-secure-store"
import {logoutAuth} from "../../../Redux/Slices/authSlice";

export const TopBar = () => {
    const dispatch = useDispatch();

    const logout = async () => {
        await SecureStorage.deleteItemAsync("token");
        dispatch(logoutAuth())
    }

    const handleLogout = () => {
        Alert.alert(
            null,
            "Are you sure want logout ?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Yes",
                    onPress: logout
                }
            ],
            {
                cancelable: true
            }
        )
    }

    return(
        <View className="flex-row justify-between w-full items-center">
            <View className="flex flex-col gap-0">
                <Text className="text-lg">Hi, Welcome</Text>
                <Text className="font-bold black text-lg">Fadhlih</Text>
            </View>
            <TouchableOpacity
                className="flex-row gap-2 pr-2 rounded-lg bg-red-500 justify-center items-center pb-2"
                onPress={handleLogout}
            >
                {/*<SimpleLineIcons name={'logout'} size={15} color={'white'} />*/}
                <Text className="font-bold text-white ">Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
