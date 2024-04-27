import { Text, View } from "react-native";
import { TransactionListComponent } from "../Features/TransactionList";
import { useGetAllQuery } from "../Redux/Slices/inExpApi";
import { LoadingComponent } from "../Components/LoadingComponent";
import Toast from "react-native-toast-message";

export const TransactionList = ({ navigation }) => {
    const {
        data: transactionsData,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllQuery();

    let content;
    if (isLoading) {
        content = <LoadingComponent />;
    } else if (isError) {
        Toast.show({
            type: "error",
            text1: error,
        });
    } else if (isSuccess) {
        content = <TransactionListComponent transactionsData={transactionsData} />;
    }

    return <>{content}</>;
};
