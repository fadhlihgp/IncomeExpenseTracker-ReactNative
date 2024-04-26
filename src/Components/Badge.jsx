import {Text, View} from "react-native";

export const Badge = ({text, color}) => {
    return(
        <View className='rounded-2xl py-0.5 px-1.5 justify-center items-center' style={{backgroundColor: color}}>
            <Text className='text-white font-semibold text-sm'>
                {text}
            </Text>
        </View>
    )
}