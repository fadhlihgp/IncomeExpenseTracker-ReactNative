import {Text, View} from "react-native";
import {styled} from "nativewind";
import {changeCurrencyFormat} from "../../../Utils/changeFormat";
import moment from "moment";
const StyledView = styled(View);
export const DashboardCard = ({incomeExpense}) => {
    return(
        <View className='rounded-3xl bg-white w-full p-3 flex-row justify-between items-center px-5'>
            <View>
                <Text className='font-bold text-lg text-black'>{incomeExpense.information}</Text>
            </View>

            <View className='flex-col gap-2'>
                <Text
                    className="font-semibold"
                    style={{color: incomeExpense.isIncome ? 'green' : 'red'}}>
                    {changeCurrencyFormat("Rp", incomeExpense.amount)}
                </Text>
                <Text className="text-slate-700 font-semibold">{moment(incomeExpense.date).format("DD MMMM yyyy")}</Text>
            </View>
        </View>
    )
}