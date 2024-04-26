import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {TopBar} from "./Components/TopBar";
import {BalanceComponent} from "./Components/BalanceComponent";
import {DashboardTransaction} from "./Components/DashboardTransaction";
import {DashboardData} from "./dashboardData";

export const HomeContainer = ({navigation}) => {
    const data = DashboardData;
    return(
        <View style={{marginTop: '7%', flex: 1}} className="p-5 bg-blue-100 w-full h-full">
            <View>
                <TopBar />
            </View>
            <View className="mt-10">
                <BalanceComponent totalBalance={data.data.balance} expense={data.data.expensesTotal} income={data.data.incomeTotal} />
            </View>

            <View className='mt-10 mb-3'>
                <View className="flex-row justify-between mb-1">
                    <Text className='font-bold text-md'>Last Transaction</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("List")}>
                        <Text className='text-md font-semibold text-[#0F6DC3]'>See All</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <SafeAreaView style={{flex: 1, marginBottom: '10%'}} >
                <DashboardTransaction navigation={navigation} incomeExpenses={data.data.incomeExpenses} />
            </SafeAreaView>
        </View>
    )
}
