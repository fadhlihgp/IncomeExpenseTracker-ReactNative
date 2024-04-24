import {ImageBackground, ScrollView, TouchableOpacity, View, Image, StyleSheet, Text} from "react-native";
import bgImage from "../../../Assets/bg1.png";
import rect1 from "../../../Assets/rectangle1.png";
import {FormLoginContainer} from "../Login/FormLoginContainer";
import {FormRegisterContainer} from "./FormRegisterContainer";
import {useState} from "react";
import {register} from "../../../Redux/actions/authActions";
import Toast from "react-native-toast-message";
import {ToastComponent} from "../../../Components/ToastComponent";
import {useTimeout} from "react-native-toast-message/lib/src/hooks";
import {useDispatch} from "react-redux";
import {loginRequest, registerSuccess} from "../../../Redux/Slices/authSlice";

export const RegisterContainer = ({navigation}) => {
    const [error, setError] = useState();
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

        await register(data)
            .then((res) => {
                ToastComponent("success", res.data.message);
                navigation.replace("LoginScreen")
            })
            .catch((err) => {
                ToastComponent("error", err.response.data.message);
            })
            .finally(() => {
                dispatch(registerSuccess())
            })
    }

    return(
        <View>
            <ScrollView contentContainerStyle={styles.container} >
                <ImageBackground source={bgImage} style={styles.background}>
                    <FormRegisterContainer handleSubmit={handleRegister} navigation={navigation} data={data} handleOnChange={handleOnChange} />

                    <View style={styles.register}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Already have an account ?</Text>
                        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
                            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#1F4BBC'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F1F1F1'
        // justifyContent: 'center',
    },
    background: {
        flex: 1,
        // resizeMode: 'contain',
        height: '80%',
        alignItems: 'center',
        paddingVertical: 80,
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
