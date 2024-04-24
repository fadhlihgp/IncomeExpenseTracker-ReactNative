import {Text, View} from "react-native";

export const BalanceComponent = () => {
    return(
        <View className="rounded-lg bg-blue-700 p-3 flex-row w-full gap-2 text-white">
            <View className="w-full flex justify-center items-center">
                <Text className="font-semibold text-md">Total Balance</Text>
                <Text className="font-extrabold text-lg">RP 5.000.000</Text>
            </View>
            <View>
                <Text>Hlo</Text>
            </View>
        </View>
    )
}
