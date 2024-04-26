import {Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {changeCurrencyFormat} from "../../../Utils/changeFormat";
import moment from "moment/moment";
import {Badge} from "../../../Components/Badge";
import {FontAwesome, FontAwesome6} from "@expo/vector-icons";

export const DetailCardList = ({incomeExpense}) => {
    return(
        <TouchableOpacity style={{marginTop: 5}}>
            <View className='rounded-3xl bg-white w-full p-3 flex-row justify-between items-center px-5'>
                <View>
                    <Text className='font-bold text-lg text-black'>{incomeExpense.information}</Text>
                </View>

                <View style={{gap: 5}}>
                    <Text
                        style={{color: incomeExpense.isIncome ? 'green' : 'red'}}
                    >
                        {!incomeExpense.isIncome ? '- ' : ''}
                        {changeCurrencyFormat("Rp", incomeExpense.amount)}
                    </Text>
                    {incomeExpense.isIncome ? <Badge color={'green'} text={'Income'} /> :
                        <Badge color={'red'} text={'Expense'} />
                    }

                </View>

                <TouchableOpacity>
                    <FontAwesome6 name="trash" size={28} color="black" />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    )
}