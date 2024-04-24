import {TextInput, TouchableOpacity, View, StyleSheet, Text, ActivityIndicator} from "react-native";
import {useSelector} from "react-redux";

export const FormRegisterContainer = ({navigation, handleOnChange, data, handleSubmit}) => {
    const isLoading = useSelector((state) => state.auth.isLoading);

    return(
        <View style={styles.container}>
            <Text style={styles.titleFont}> Register</Text>

            <View style={styles.formContainer}>
                <TextInput style={styles.textInputStyle} value={data.fullname} onChangeText={(value) => handleOnChange("fullname", value)} placeholder="Full Name" />
                <TextInput style={styles.textInputStyle} value={data.userName} onChangeText={(value) => handleOnChange("userName", value)} placeholder="Username" />
                <TextInput style={styles.textInputStyle} value={data.email} onChangeText={(value) => handleOnChange("email", value)} placeholder="Email" />
                <TextInput style={styles.textInputStyle} value={data.phoneNumber} onChangeText={(value) => handleOnChange("phoneNumber", value)} placeholder="Phone Number" />
                <TextInput style={styles.textInputStyle} value={data.password} onChangeText={(value) => handleOnChange("password", value)} placeholder="Password" secureTextEntry={true}/>
                <TextInput style={styles.textInputStyle} value={data.confirmPassword} onChangeText={(value) => handleOnChange("confirmPassword", value)} placeholder="Password" secureTextEntry={true}/>

                <TouchableOpacity
                    disabled={isLoading}
                    style={styles.buttonLogin}
                    onPress={handleSubmit}>
                    {isLoading ? <ActivityIndicator /> : <Text style={{fontWeight: '700', color: 'white'}}>Register</Text> }

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
        height: 575,
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
