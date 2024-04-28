import { ImageBackground, StyleSheet, Text, View, Image, ScrollViewBase, SafeAreaView, ScrollView } from "react-native";
import bg2 from "../Assets/rectangle2.png";
import placeIcon from "../Assets/place.png";
import ppIcon from "../Assets/pp.png";
import {AboutMeComp} from "../Features/About/Components/AboutMeComp";
import {SocialMediaComp} from "../Features/About/Components/SocialMediaComp";
import {SkillComp} from "../Features/About/Components/SkillCom";

export const About = () => {
    return(
        <ScrollView style={styles.container}>
            <View className='mb-20'>
                <ImageBackground source={bg2} style={styles.background}>
                    <View style={styles.titleStyle}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center'}}>Fadhlih Girindra Putra</Text>
                        <Text style={{fontWeight: '500', fontSize: 16, color: 'white', textAlign: 'center'}}>FullStack Developer</Text>
                        <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}><Image source={placeIcon} />  Bekasi, Indonesia</Text>
                        <Image source={ppIcon} />
                    </View>
                </ImageBackground>
                <AboutMeComp />
                <SkillComp />
                <SocialMediaComp />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    background: {
        height: 250,
        alignItems: 'center',
    },
    titleStyle: {
        marginTop: 75,
        gap: 7,
        alignItems: 'center',
    }
})
