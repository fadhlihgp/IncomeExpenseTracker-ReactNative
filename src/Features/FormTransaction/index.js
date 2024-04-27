import {
    Button,
    SafeAreaView, ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {SelectList} from "react-native-dropdown-select-list";
import {useState} from "react";
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from "react-native-toast-message";
import {useAddIncomeExpenseMutation} from "../../Redux/Slices/inExpApi";

export const FormTransactionContainer = ({navigation}) => {
    const [openDate, setOpenDate] = useState(false);
    const [dataInput, setDataInput] = useState({
        isIncome: true,
        amountString: '0',
        amount: 0,
        date: new Date(),
        information: ""
    })

    const [addTrans] = useAddIncomeExpenseMutation();

    const type = [
        {key: true, value: 'Income'},
        {key: false, value: 'Expense'}
    ]

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setOpenDate(false);
        setDataInput({...dataInput, date: currentDate})
    };

    const onChangeInput = (name, value) => {
        if (name === 'amountString') {
            setDataInput({...dataInput, amount: parseInt(value), amountString: value});
            return;
        }
        setDataInput({...dataInput, [name]: value})
    }

    const handleSubmit = () => {
        addTrans(dataInput);
        console.log(dataInput)
        Toast.show({
            type: 'success',
            text1: 'Successfully saved'
        })
        setDataInput({
            isIncome: true,
            amountString: '0',
            amount: 0,
            date: new Date(),
            information: ""
        })
        navigation.goBack();
    }
    return(
        <>
            {/*<Toast />*/}
            <ScrollView
                style={{marginTop: '7%' }} className='bg-blue-100 w-full h-full py-3 px-6'>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="return-up-back-outline" size={32} color="black" />
                </TouchableOpacity>

                <View className="mt-5">
                    <Text className='text-slate-800 font-bold text-lg text-center mb-7'>Add Transactions</Text>
                    <View style={{rowGap: 20}}>
                        <View style={{gap: 10}}>
                            <Text>Type</Text>
                            <SelectList
                                data={type}
                                setSelected={(value) => onChangeInput("isIncome", value)}
                                save="key"
                                defaultOption={{key: true, value: 'Income'}}
                                boxStyles={{backgroundColor: 'white', height: 50, borderRadius: 16}}
                            />
                        </View>

                        <View style={{gap: 10}}>
                            <Text>Amount</Text>
                            <TextInput
                                value={dataInput.amountString}
                                keyboardType="numeric"
                                className='bg-white rounded-2xl text-lg p-4'
                                onChangeText={(value) => onChangeInput("amountString", (value))}
                            />
                        </View>

                        <View style={{gap: 10}}>
                            <Text>Date</Text>
                            <TextInput
                                onPressIn={() => setOpenDate(true)}
                                value={moment(dataInput.date).format('DD MMMM yyyy')}
                                // editable={false}
                                className='bg-white rounded-2xl text-lg p-4' />
                        </View>

                        {openDate && (
                            <DateTimePicker
                                value={dataInput.date}
                                testID='datetimepicker'
                                onChange={onChangeDate}
                                mode={'date'}
                            />
                        )}

                        <View style={{gap: 10}}>
                            <Text>Note</Text>
                            <TextInput
                                value={dataInput.information}
                                onChangeText={(value) => onChangeInput("information", value)}
                                className='bg-white rounded-2xl text-lg p-4' />
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={handleSubmit}
                    className='w-full h-11 bg-blue-700 justify-center items-center rounded-3xl mt-12'>
                    <Text className='text-white font-bold text-lg'>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderStyle: 'solid',
        backgroundColor: 'white',

    }
})