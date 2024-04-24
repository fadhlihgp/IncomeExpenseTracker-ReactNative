import {ScrollView, View} from "react-native";
import {TopBar} from "./Components/TopBar";
import {BalanceComponent} from "./Components/BalanceComponent";

export const HomeContainer = ({navigation}) => {
    return(
        <ScrollView className="flex-grow">
            <View className="p-5 bg-blue-200 w-full h-full pt-16">
                <View>
                    <TopBar />
                </View>
                <View className="mt-5">
                    <BalanceComponent />
                </View>
            </View>
        </ScrollView>
    )
}
