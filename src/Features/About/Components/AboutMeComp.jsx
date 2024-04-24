import { StyleSheet, Text, TextInput, View } from "react-native"
import { TitleContent } from "./TitleContent"

export const AboutMeComp = () => {
    return(
        <View style={styles.container}>
            <TitleContent text={'About Me'} />
            <Text style={{textAlign: 'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 70,
        padding: 15
    }
 })