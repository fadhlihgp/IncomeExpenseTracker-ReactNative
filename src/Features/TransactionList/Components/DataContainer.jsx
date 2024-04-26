import {FlatList, SafeAreaView, Text, View} from "react-native";
import {DetailCardList} from "./DetailCardList";
import moment from "moment";
export const DataContainer = ({listData}) => {
    return(
        <>
            {listData && listData.length > 0 ? (
               <FlatList
                   data={listData}
                   keyExtractor={(item, index) => item.date}
                   renderItem={({item}) => (
                       <View style={{marginBottom: 20}}>
                           <Text className='text-slate-600 text-md font-bold mb-3'>{moment(item.date).format("DD MMMM yyyy")}</Text>
                           <FlatList
                               data={item.incomeExpenses}
                               renderItem={({item}) => (
                                   <View style={{marginTop: 5}}>
                                       <DetailCardList incomeExpense={item} />
                                   </View>
                               )}
                           />
                       </View>
                   )}
               />
            ) : <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '20%'}}>
                <Text>No Data</Text>
            </View>

            }
        </>
    )
}