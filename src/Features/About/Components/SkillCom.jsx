import { View, StyleSheet, Image } from "react-native"
import { TitleContent } from "./TitleContent"
import javaIcon from "../../../Assets/java.png";
import csharpIcon from "../../../Assets/c#.png"
import expressIcon from "../../../Assets/express1.png";
import netIcon from "../../../Assets/net1.png"
import reactIcon from "../../../Assets/react1.png"
import tsIcon from "../../../Assets/ts1.png";

export const SkillComp = () => {
    return(
        <View style={styles.container}>
            <TitleContent text={'Skills'} key={'1'} />
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', gap: 25}}>
                <Image source={javaIcon} />
                <Image source={csharpIcon} />
                <Image source={tsIcon}/>
                <Image source={netIcon}/>
                <Image source={expressIcon}/>
                <Image source={reactIcon}/>
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
