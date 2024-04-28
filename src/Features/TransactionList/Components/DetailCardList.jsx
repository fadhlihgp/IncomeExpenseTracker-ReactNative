import {Alert, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {changeCurrencyFormat} from "../../../Utils/changeFormat";
import moment from "moment/moment";
import {Badge} from "../../../Components/Badge";
import {FontAwesome, FontAwesome6} from "@expo/vector-icons";
import {useDeleteIncomeExpenseMutation} from "../../../Redux/Services/inExpApi";
import Toast from "react-native-toast-message";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";

export const DetailCardList = ({incomeExpense}) => {
    const navigation = useNavigation();
    const [deleteIncomeExpense, { isLoading, isError, error, data }] = useDeleteIncomeExpenseMutation();

    const handleDelete = () => {
        deleteIncomeExpense(incomeExpense);
    };

    useEffect(() => {
        if (data) {
            Toast.show({
                type: 'success',
                text1: data.message
            });
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            Toast.show({
                type: 'error',
                text1: error.response.message
            });
        }
    }, [error]);

    const showDeleteConfirmation = () => {
        Alert.alert(
            null,
            "Are you sure want delete this item ?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Yes",
                    onPress: handleDelete
                }
            ],
            {
                cancelable: true
            }
        )
    }

    return(
        <TouchableOpacity style={{marginTop: 5}} onPress={() => navigation.navigate('TransactionDetail', {incomeExpense})}>
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

                <TouchableOpacity onPress={showDeleteConfirmation}>
                    <FontAwesome6 name="trash" size={28} color="black" />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    )
}