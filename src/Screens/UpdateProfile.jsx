import {useEffect, useState} from "react";
import {useGetAccountQuery, useUpdateAccountMutation} from "../Redux/Services/accountApi";
import Toast from "react-native-toast-message";
import {Ionicons} from "@expo/vector-icons";
import {ScrollView, TextInput, TouchableOpacity, View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const UpdateProfile = ({navigation}) => {
    const [dataInput, setDataInput] = useState({
        fullname: "",
        username: "",
        email: "",
        phoneNumber: ""
    });

    useEffect(() => {
        // console.log(accountData.data)
        setDataInput(accountData.data)
    }, [accountData])

    const {
        data: accountData,
        isLoading, isError, isSuccess, error
    } = useGetAccountQuery();

    const [updateAccount] = useUpdateAccountMutation();

    const handleUpdate = () => {
        updateAccount(dataInput).unwrap()
            .then((res) => {
                Toast.show({
                    type: 'success',
                    text1: res.message ?? 'Success '
                })
                navigation.navigate('Profile')
            })
            .catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: err.data.message ?? 'Failed update profile'
                })
            })
    }

    return(
        <ScrollView style={{flex: 1}} className='bg-blue-100'>
            <View
                className='bg-blue-100 py-3 px-6'>
                <View className="mt-5">
                    <Text className='text-slate-800 font-bold text-lg text-center mb-3'>Profile</Text>

                    <View className='flex w-full justify-center items-center mb-5'>
                        <View className='rounded-full justify-center items-center'>
                            <Ionicons name="person-circle-outline" size={87} color="black" />
                        </View>
                    </View>

                    <View style={{rowGap: 20}}>
                        <View style={{gap: 10}}>
                            <Text>Full Name</Text>
                            <TextInput
                                onChangeText={(text) => setDataInput({...dataInput, fullname: text})}
                                value={dataInput.fullname}
                                style={{backgroundColor: 'white'}}
                                className='rounded-2xl text-lg p-4' />
                        </View>

                        <View style={{gap: 10}}>
                            <Text>Username</Text>
                            <TextInput
                                onChangeText={(text) => setDataInput({...dataInput, username: text})}
                                value={dataInput.username}
                                style={{backgroundColor: 'white'}}
                                className='rounded-2xl text-lg p-4' />
                        </View>

                        <View style={{gap: 10}}>
                            <Text>Email</Text>
                            <TextInput
                                onChangeText={(text) => setDataInput({...dataInput, email: text})}
                                value={dataInput.email}
                                style={{backgroundColor: 'white'}}
                                className='rounded-2xl text-lg p-4' />
                        </View>

                        <View style={{gap: 10}}>
                            <Text>Phone Number</Text>
                            <TextInput
                                onChangeText={(text) => setDataInput({...dataInput, phoneNumber: text})}
                                value={dataInput.phoneNumber}
                                keyboardType={'numeric'}
                                style={{backgroundColor: 'white'}}
                                className='rounded-2xl text-lg p-4' />
                        </View>
                    </View>

                </View>

                <TouchableOpacity
                    onPress={handleUpdate}
                    className='w-full mt-7 bg-blue-700 rounded-xl py-3 justify-center items-center'>
                    <Text className='text-white font-bold'>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className='w-full mt-3 bg-red-700 rounded-xl py-3 justify-center items-center'>
                    <Text className='text-white font-bold'>Cancel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}
