import {ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from "react-native";
import bgImage from "../../../Assets/bg1.png"
import rect1 from "../../../Assets/rectangle1.png";
import { FormLoginContainer } from "./FormLoginContainer";
import {useState} from "react";
import * as SecureStorage from "expo-secure-store";
import {useDispatch, useSelector} from "react-redux";
import {loginFailure, loginRequest, loginSuccess, registerSuccess} from "../../../Redux/Slices/authSlice";
import Toast from "react-native-toast-message";
import {useLoginMutation} from "../../../Redux/Services/authApi";
import {Entypo} from "@expo/vector-icons";

export const LoginContainer = ({navigation}) => {
    const dispatch = useDispatch();
    const [dataInput, setDataInput] = useState({
        email: "",
        password: ""
    })

    const [login] = useLoginMutation()

    const handleOnChange = (field, value) => {
        setDataInput({...dataInput, [field]: value})
    }

    const handleLogin = () => {
        dispatch(loginRequest());
        login(dataInput).unwrap()
            .then((res) => {
                const token = res.data.token;
                SecureStorage.setItem("token", token);
                dispatch(loginSuccess({token: token}))
                Toast.show({
                    type: 'success',
                    text1: res.message
                })
            })
            .catch((err) => {
                dispatch(loginFailure({error: "Error"}))
                console.log(err.data.message)
                Toast.show({
                    type: "error",
                    text1: err.data.message ?? "Failed to login"
                })
            })
            .finally(() => {
                dispatch(registerSuccess())
            })

    }

    return(
        <>
            <ScrollView contentContainerStyle={styles.container} >
                <View style={styles.background} className='rounded-b-full bg-blue-600'>
                    <Text style={styles.title}>Income Expense Tracker</Text>
                    {/*<Image source={rect1} />*/}
                    <Entypo name="flattr" size={48} color="white" />
                    <FormLoginContainer handleSubmit={handleLogin} navigation={navigation} data={dataInput} handleOnChange={handleOnChange} />

                    <View style={styles.register}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Don't have an account ?</Text>
                        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
                            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#1F4BBC'}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F1F1F1',
        // justifyContent: 'center',
    },
    background: {
        // flex: 1,
        // resizeMode: 'contain',
        height: '75%',
        alignItems: 'center',
        paddingVertical: 50,
        gap: 15
    },
    title: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        marginTop: 30
    },
    register: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});
