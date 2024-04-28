import {FontAwesome6, Ionicons, MaterialIcons} from "@expo/vector-icons";
import moment from "moment";
import {ScrollView, TextInput, TouchableOpacity, View, Text, Button, TouchableHighlight, Alert} from "react-native";
import {useEffect, useState} from "react";
import {useGetAccountQuery, useUpdateAccountMutation} from "../../Redux/Services/accountApi";
import Toast from "react-native-toast-message";
import {useNavigation} from "@react-navigation/native";
// import * as DocumentPicker from "react-native-document-picker";

export const ProfileContainer = () => {
    const navigation = useNavigation();
    const [isEdited, setIsEdited] = useState(false);
    const [dataInput, setDataInput] = useState({
        fullname: "",
        username: "",
        email: "",
        phoneNumber: ""
    });

    const {
        data: accountData,
        isLoading, isError, isSuccess, error
    } = useGetAccountQuery();
    useEffect(() => {
        // console.log(accountData.data)
        setDataInput(accountData.data)
    }, [accountData, isEdited, setIsEdited])

    const [updateAccount] = useUpdateAccountMutation();

    const handleUpdate = () => {
        updateAccount(dataInput).unwrap()
            .then((res) => {
                setIsEdited(false);
                console.log(res)
                Toast.show({
                    type: 'success',
                    text1: res.message ?? 'Success '
                })
            })
            .catch((err) => {
                console.log(err)
                Toast.show({
                    type: 'error',
                    text1: err.data.message ?? 'Failed update profile'
                })
                setIsEdited(true)
            })
    }

    const handleSetEdited = () => {
        if (isEdited) {
            setIsEdited(false)
            // console.log(false)
        } else {
            setIsEdited(true)
        }
    }

    return(
        <ScrollView style={{flex: 1}}>
            <View style={{paddingVertical: 24, paddingHorizontal: 24, marginBottom: 50}}>
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
                                editable={isEdited}
                                style={{backgroundColor: isEdited ? 'white' : '#FFF7FC'}}
                                className='rounded-2xl text-lg p-4' />
                        </View>

                        <View style={{gap: 10}}>
                            <Text>Username</Text>
                            <TextInput
                                onChangeText={(text) => setDataInput({...dataInput, username: text})}
                                value={dataInput.username}
                                editable={isEdited}
                                style={{backgroundColor: isEdited ? 'white' : '#FFF7FC'}}
                                className='rounded-2xl text-lg p-4' />
                        </View>

                        <View style={{gap: 10}}>
                            <Text>Email</Text>
                            <TextInput
                                onChangeText={(text) => setDataInput({...dataInput, email: text})}
                                value={dataInput.email}
                                editable={isEdited}
                                style={{backgroundColor: isEdited ? 'white' : '#FFF7FC'}}
                                className='rounded-2xl text-lg p-4' />
                        </View>

                        <View style={{gap: 10}}>
                            <Text>Phone Number</Text>
                            <TextInput
                                onChangeText={(text) => setDataInput({...dataInput, phoneNumber: text})}
                                value={dataInput.phoneNumber}
                                keyboardType={'numeric'}
                                editable={isEdited} style={{backgroundColor: isEdited ? 'white' : '#FFF7FC'}}
                                className='rounded-2xl text-lg p-4' />
                        </View>
                    </View>

                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('UpdateProfile')}
                    className='w-full mt-7 bg-blue-700 rounded-xl py-3 justify-center items-center'>
                    <Text className='text-white font-bold'>{isEdited ? 'Submit' : 'Update Data'}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}
