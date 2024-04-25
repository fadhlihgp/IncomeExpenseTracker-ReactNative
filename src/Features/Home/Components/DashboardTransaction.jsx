import {FlatList, Text, Touchable, TouchableOpacity, View} from "react-native";
import {DashboardCard} from "./DashboardCard";
import {styled} from "nativewind";
const StyledView = styled(View)

export const DashboardTransaction = ({navigation, incomeExpenses}) => {
    return(
        <StyledView className='w-full flex-col gap-3 pb-10'>
            <StyledView className="flex-row justify-between mb-1">
                <Text className='font-bold text-md'>Last Transaction</Text>
                <TouchableOpacity onPress={() => navigation.navigate("List")}>
                    <Text className='text-md font-semibold text-[#0F6DC3]'>See All</Text>
                </TouchableOpacity>
            </StyledView>

            {incomeExpenses.length > 1 ? <FlatList
                data={incomeExpenses}
                renderItem={({item}) => <View className="mb-4"><DashboardCard incomeExpense={item} /></View> }
                keyExtractor={(item) => item.id}
                style={{
                    flexWrap: "wrap",
                    gap: 18
                }}
            /> :
                <StyledView className='flex w-full justify-center items-center'>
                    <Text className="font-semibold text-lg text-center">No Transaction found</Text>
                </StyledView>
            }


        </StyledView>
    )
}