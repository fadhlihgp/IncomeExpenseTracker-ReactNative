import { StyleSheet, Text, View, Image } from "react-native";
import igIcon from "../../../Assets/Instagram.png";
import linkedinIcon from "../../../Assets/LinkedIn.png";
import waIcon from "../../../Assets/WhatsApp.png";
import { TitleContent } from "./TitleContent";

export const SocialMediaComp = () => {
    return(
        <View style={styles.container}>
            <TitleContent text={'Contacts'} key={'contact'} />
            <View style={{flex: 2, flexDirection: 'row', width: '100%', justifyContent: 'space-between', gap: 50}}>
                <View style={{flex: 2, flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={linkedinIcon}  />
                    <Text style={{fontSize: 15, textAlign: 'center',}}>Fadhlih Girindra Putra</Text>
                </View>
                <View style={{flex: 2, flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={waIcon}  />
                    <Text style={{fontSize: 15, textAlign: 'center',}}>08123455677</Text>
                </View>
                {/* <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}><Image source={placeIcon} />  Bekasi, Indonesia</Text> */}
            </View>
            <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={{flex: 2, flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={igIcon}  />
                    <Text style={{fontSize: 15, textAlign: 'center',}}>@fadhlih17</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15
    }
 })
