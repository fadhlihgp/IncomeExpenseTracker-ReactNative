import { Text } from "react-native"
export const TitleContent = ({text}) => {
    return(
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>{text}</Text>
    )
}