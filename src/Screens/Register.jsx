import {NavigationContainer} from "@react-navigation/native";
import {RegisterContainer} from "../Features/Auth/Register";

export const Register = ({navigation}) => {
    return(
        <RegisterContainer navigation={navigation} />
    )
}
