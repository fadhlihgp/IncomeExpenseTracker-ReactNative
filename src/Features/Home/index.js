import {ScrollView, View} from "react-native";
import {TopBar} from "./Components/TopBar";
import {BalanceComponent} from "./Components/BalanceComponent";

export const HomeContainer = ({navigation}) => {
    return(
        <ScrollView className="p-8 bg-blue-200 w-full h-full pt-16 flex-grow gap-3">
            <TopBar />
            <BalanceComponent />
        </ScrollView>
    )
}
