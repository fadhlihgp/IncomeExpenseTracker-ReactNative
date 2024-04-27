import {FlatList, Text, Touchable, TouchableOpacity, View} from "react-native";
import {DashboardCard} from "./DashboardCard";
import {styled} from "nativewind";

export const DashboardTransaction = ({navigation, incomeExpenses}) => {
    return(
        <View>
            {incomeExpenses.length > 0 ? <FlatList
                data={incomeExpenses}
                renderItem={({item}) => <View className="mb-4"><DashboardCard incomeExpense={item} /></View> }
                keyExtractor={(item) => item.id}
                style={{
                    flexWrap: "wrap",
                    gap: 18
                }}
            /> :
                <View className='flex w-full justify-center items-center'>
                    <Text className="font-semibold text-lg text-center">No Transaction found</Text>
                </View>
            }
        </View>
    )
}