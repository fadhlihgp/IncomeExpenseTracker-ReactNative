import {Text, View} from "react-native";
import {changeCurrencyFormat} from "../../../Utils/changeFormat";

export const BalanceListComponent = () => {
    return(
        <View className='rounded-3xl bg-blue-600 px-4 flex-row py-5 text-white justify-between'>
            <View>
                <Text className="text-md text-white">Balance</Text>
                <Text className="font-extrabold text-md text-white text-green-300">{changeCurrencyFormat("Rp", 10000000)}</Text>
            </View>
            <View className='h-full w-0.5 bg-white'></View>
            <View>
                <Text className="text-md text-white">Income</Text>
                <Text className="font-extrabold text-md text-white">{changeCurrencyFormat("Rp", 1000000)}</Text>
            </View>
            <View className='h-full w-0.5 bg-white'></View>
            <View>
                <Text className="text-md text-white">Expense</Text>
                <Text className="font-extrabold text-md text-white">{changeCurrencyFormat("Rp", 50000000)}</Text>
            </View>
        </View>
    )
}