import {SafeAreaView, ScrollView, View} from "react-native";
import {TopBar} from "./Components/TopBar";
import {BalanceComponent} from "./Components/BalanceComponent";
import {DashboardTransaction} from "./Components/DashboardTransaction";
import {DashboardData} from "./dashboardData";

export const HomeContainer = ({navigation}) => {
    const data = DashboardData;
    return(
        <SafeAreaView className="flex-grow mt-10">
            <View className="p-5 bg-blue-100 w-full h-full">
                <View>
                    <TopBar />
                </View>
                <View className="mt-10">
                    <BalanceComponent totalBalance={data.data.balance} expense={data.data.expensesTotal} income={data.data.incomeTotal} />
                </View>
                <View className='mt-16'>
                    <DashboardTransaction navigation={navigation} incomeExpenses={data.data.incomeExpenses} />
                </View>
            </View>
        </SafeAreaView>
    )
}
