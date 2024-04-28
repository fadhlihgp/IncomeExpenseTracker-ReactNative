import {ImageBackground, ScrollView, TouchableOpacity, View, StyleSheet, Text, SafeAreaView} from "react-native";
import bgImage from "../../../Assets/bg1.png";
import {FormRegisterContainer} from "./FormRegisterContainer";
import {useState} from "react";
import Toast from "react-native-toast-message";
import {ToastComponent} from "../../../Components/ToastComponent";
import {useDispatch} from "react-redux";
import {loginRequest, registerSuccess} from "../../../Redux/Slices/authSlice";
import {useRegisterMutation} from "../../../Redux/Services/authApi";

export const RegisterContainer = ({navigation}) => {
    const [data, setData] = useState({
        fullname : "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        roleId: "2"
    })
    const dispatch = useDispatch();
    const [registerData] = useRegisterMutation();
    const handleOnChange = (name, value) => {
        setData({...data, [name]: value})
    }

    const handleRegister = async () => {
        dispatch(loginRequest());
        if (data.password !== data.confirmPassword) {
            ToastComponent("error", "Password and Confirm Password must be the same");
            dispatch(registerSuccess())
            return;
        }

        registerData(data).unwrap()
            .then(res => {
                // console.log(res)
                Toast.show({
                    type: 'success',
                    text1: res.data.message
                })
                setData({
                    fullname : "",
                    userName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    phoneNumber: "",
                    roleId: "2"
                })
                navigation.navigate('LoginScreen')
            })
            .catch((err) => {
                // console.error(err)
                Toast.show({
                    type: 'error',
                    text1: err.data.message
                })
            })
            .finally(() => {
                dispatch(registerSuccess())
            })

        // await register(data)
        //     .then((res) => {
        //         ToastComponent("success", res.data.message);
        //         navigation.replace("LoginScreen")
        //     })
        //     .catch((err) => {
        //         ToastComponent("error", err.response.data.message);
        //     })
        //     .finally(() => {
        //         dispatch(registerSuccess())
        //     })
    }

    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container} >
                <View style={styles.background} className='rounded-b-full bg-blue-600'>
                    <FormRegisterContainer handleSubmit={handleRegister} navigation={navigation} data={data} handleOnChange={handleOnChange} />

                    <View style={styles.register}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Already have an account ?</Text>
                        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
                            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#1F4BBC'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flexGrow: 1,
        backgroundColor: '#F1F1F1'
        // justifyContent: 'center',
    },
    background: {
        height: '70%',
        alignItems: 'center',
        paddingVertical: 50,
        gap: 15
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
