import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native"
import {useSelector} from "react-redux";

export const FormLoginContainer = ({navigation, handleOnChange, data, handleSubmit}) => {
    let isLoading = useSelector((state) => state.auth.isLoading);

    return(
        <View style={styles.container}>
            <Text style={styles.titleFont}> Welcome Back</Text>
            <Text style={{textAlign: 'center'}}>Login to continue</Text>

            <View style={styles.formContainer}>
                <TextInput style={styles.textInputStyle} value={data.email} onChangeText={(value) => handleOnChange("email", value)} placeholder="Username or Email" />
                <TextInput style={styles.textInputStyle} value={data.password} onChangeText={(value) => handleOnChange("password", value)} placeholder="Password" secureTextEntry={true}/>
                <TouchableOpacity style={{marginTop: 10}}>
                <Text style={{color: '#3166CC', fontWeight: '800', fontSize: 15}}>
                    Forgot Password ?
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    disabled={isLoading}
                    style={styles.buttonLogin}
                    onPress={handleSubmit}>
                    {isLoading ?
                            <ActivityIndicator />:
                        <Text style={{fontWeight: '700', color: 'white'}}>Login</Text>}

                </TouchableOpacity>


            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 25,
        alignContent: 'center',
        height: 425,
        paddingHorizontal: 40,

    },
    titleFont: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
    },
    formContainer: {
        flex: 1,
        alignContent: 'center',
        marginVertical: 25
    },
    textInputStyle: {
        borderBottomWidth: 2,
        height: 40,
        width: 200,
        borderColor: '#1F4BBC',
        marginTop: 25
    },
    buttonLogin: {
        backgroundColor: '#3166CC',
        marginTop: 40,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
