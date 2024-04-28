import {ActivityIndicator, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {TopBar} from "./Components/TopBar";
import {BalanceComponent} from "./Components/BalanceComponent";
import {DashboardTransaction} from "./Components/DashboardTransaction";
import {DashboardData} from "./dashboardData";
import {useGetDashboardQuery} from "../../Redux/Services/inExpApi";
import {useEffect, useState} from "react";
import {LoadingComponent} from "../../Components/LoadingComponent";
import {useGetAccountQuery} from "../../Redux/Services/accountApi";

export const HomeContainer = ({navigation}) => {
    const dataAll = DashboardData;
    const [dataDashboard, setDataDashboard] = useState();

    const {
        data: dashboardData,
        isLoading, isSuccess, isError, error
    } = useGetDashboardQuery();

    let content;
    if (isLoading) {
        content = <ActivityIndicator />
    } else if (isSuccess) {
        content = <>
            <View>
                <TopBar navigation={navigation} />
            </View>
            <View className="mt-10">
                <BalanceComponent totalBalance={dashboardData.data.balance} expense={dashboardData.data.expensesTotal} income={dashboardData.data.incomeTotal} />
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
                <DashboardTransaction navigation={navigation} incomeExpenses={dashboardData.data.incomeExpenses} />
            </SafeAreaView>
        </>
    } else if (isError) {
        content = <Text>error</Text>
    }

    return(
        isLoading ?
            <LoadingComponent />
            :
                <View style={{paddingTop: '15%', flex: 1}} className="p-5 bg-blue-100 w-full h-full">
                    {content}
                </View>
    )
}
