import {ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from "react-native";
import bgImage from "../../../Assets/bg1.png"
import rect1 from "../../../Assets/rectangle1.png";
import { FormLoginContainer } from "./FormLoginContainer";
import {login} from "../../../Redux/actions/authActions";
import {useState} from "react";
import * as SecureStorage from "expo-secure-store";
import {useDispatch, useSelector} from "react-redux";
import {loginFailure, loginRequest, loginSuccess, registerSuccess} from "../../../Redux/Slices/authSlice";
import Toast from "react-native-toast-message";
import {useTimeout} from "react-native-toast-message/lib/src/hooks";

export const LoginContainer = ({navigation}) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (field, value) => {
        setData({...data, [field]: value})
    }

    const handleLogin = async () => {
        dispatch(loginRequest());
        // console.log(data)
        await login(data)
            .then((res) => {
                // console.log(res)
                const token = res.data.data.token;
                SecureStorage.setItem("token", token);
                dispatch(loginSuccess({token: token}))
            })
            .catch((err) => {
                dispatch(loginFailure({error: "Error"}))
                console.log(err)
                Toast.show({
                    type: "error",
                    text1: err.response.data.message ?? "Failed to login"
                })
            })
            .finally(() => {
                dispatch(registerSuccess())
            })

    }

    return(
        <>
            <ScrollView contentContainerStyle={styles.container} >
                <ImageBackground source={bgImage} style={styles.background}>
                    <Text style={styles.title}>Income Expense Tracker</Text>
                    <Image source={rect1} />

                    <FormLoginContainer handleSubmit={handleLogin} navigation={navigation} data={data} handleOnChange={handleOnChange} />

                    <View style={styles.register}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Don't have an account ?</Text>
                        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
                            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#1F4BBC'}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F1F1F1',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        // resizeMode: 'contain',
        height: '80%',
        alignItems: 'center',
        paddingVertical: 50,
        gap: 25
    },
    title: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    register: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
    }
});
