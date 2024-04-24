import {View, Text, Button} from "react-native";
import * as SecureStorage from "expo-secure-store";
import {useDispatch} from "react-redux";
import {logoutAuth} from "../Redux/Slices/authSlice";
import {HomeContainer} from "../Features/Home";

export const Home = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await SecureStorage.deleteItemAsync("token");
        dispatch(logoutAuth())
    }

    return(
        // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        //     <Text>Ini Beranda</Text>
        //     <Button title={"Keluar"} onPress={handleLogout} />
        // </View>
        <HomeContainer />
    )
}
