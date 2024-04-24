import {Button, Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons, SimpleLineIcons} from "@expo/vector-icons";

export const TopBar = ({navigiation}) => {
    return(
        <View className="flex-row justify-between w-full items-center">
            <View className="flex flex-col gap-0">
                <Text className="text-lg">Hi, Welcome</Text>
                <Text className="font-bold black text-lg">Fadhlih</Text>
            </View>
            <TouchableOpacity className="flex-row gap-2 pr-2 rounded-lg bg-red-500 items-center justify-center items-center pb-2">
                {/*<SimpleLineIcons name={'logout'} size={15} color={'white'} />*/}
                <Text className="font-bold text-white ">Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
