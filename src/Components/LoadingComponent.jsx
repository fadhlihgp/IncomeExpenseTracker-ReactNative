import {ActivityIndicator, View} from "react-native";

export const LoadingComponent = () => {
    return(
        <View style={{marginTop: '7%', justifyContent: 'center', alignItems: 'center'}} className='bg-blue-100 w-full h-full'>
            <ActivityIndicator />
        </View>
    )
}