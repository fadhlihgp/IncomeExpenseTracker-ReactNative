import Toast from "react-native-toast-message";

export const ToastComponent = ({typeText, message1, message2}) => {
    return(
        Toast.show({
            type: typeText,
            text1: message1,
            text2: message2
        })
    )
}
