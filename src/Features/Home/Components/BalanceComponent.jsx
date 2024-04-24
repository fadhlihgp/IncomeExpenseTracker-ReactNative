import {Text, View} from "react-native";
import {Feather} from "@expo/vector-icons";

export const BalanceComponent = () => {
    return(
        <View className="rounded-3xl bg-blue-600 p-2 flex-col text-white">
            <View className="w-full flex justify-center items-center">
                <Text className="font-semibold text-md text-white">Total Balance</Text>
                <Text className="font-extrabold text-lg text-white">RP 5.000.000</Text>
            </View>
            <View className="flex-row gap-2 justify-between">
                <View className="flex-row gap-2 items-center">
                    <Feather name={"arrow-up-circle"} color={"#41B06E"} size={24} />
                    <View>
                        <Text className="font-semibold text-md text-white">Income</Text>
                        <Text className="font-extrabold text-md text-white">RP 5.000.000</Text>
                    </View>
                </View>
                <View className="flex-row gap-2 items-center pr-2">
                    <Feather name={"arrow-down-circle"} color={"#E72929"} size={24} />
                    <View>
                        <Text className="font-semibold text-md text-white">Expense</Text>
                        <Text className="font-extrabold text-md text-white">RP 5.000.000</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
