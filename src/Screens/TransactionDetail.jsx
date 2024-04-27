import {Button, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {SelectList} from "react-native-dropdown-select-list";
import moment from "moment/moment";
import DateTimePicker from "@react-native-community/datetimepicker";

export const TransactionDetail = ({navigation, route}) => {
    const { incomeExpense } = route.params;
    return(
        <>
            {/*<Toast />*/}
            <ScrollView
                style={{marginTop: '7%' }} className='bg-blue-100 w-full h-full py-3 px-6'>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="return-up-back-outline" size={32} color="black" />
                </TouchableOpacity>

                <View className="mt-5">
                    <Text className='text-slate-800 font-bold text-lg text-center mb-7'>Transaction Detail</Text>
                    <View style={{rowGap: 20}}>
                        <View style={{gap: 10}}>
                            <Text>Type</Text>
                            <Text className='bg-white rounded-2xl text-lg p-4'>{incomeExpense.isIncome ? 'Income' : 'Expense'}</Text>
                        </View>

                        <View style={{gap: 10}}>
                            <Text>Amount</Text>
                            <Text className='bg-white rounded-2xl text-lg p-4'>{incomeExpense.amount}</Text>
                        </View>

                        <View style={{gap: 10}}>
                            <Text>Date</Text>
                            <Text className='bg-white rounded-2xl text-lg p-4'>{moment(incomeExpense.date).format('DD MMMM yyyy')}</Text>
                        </View>

                        <View style={{gap: 10}}>
                            <Text>Note</Text>
                            <Text className='bg-white rounded-2xl text-lg p-4'>{incomeExpense.information}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}