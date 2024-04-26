import {FlatList, SafeAreaView, ScrollView, Text, View} from "react-native";
import {BalanceListComponent} from "./Components/BalanceListComponent";
import {DetailCardList} from "./Components/DetailCardList";
import {DataContainer} from "./Components/DataContainer";
import {listDummyData} from "./listDummyData";
import {SelectList} from "react-native-dropdown-select-list";
import {useEffect, useState} from "react";

const months = [
    {key: 99, value: 'All Months'},
    {key: 0, value: 'January'},
    {key: 1, value: 'February'},
    {key: 2, value: 'March'},
    {key: 3, value: 'April'},
    {key: 4, value: 'Mei'},
    {key: 5, value: 'June'},
    {key: 6, value: 'July'},
    {key: 7, value: 'August'},
    {key: 8, value: 'September'},
]

const years = [
    {key: 99, value: 'All Years'},
    {key: 2022, value: '2022'},
    {key: 2023, value: '2023'},
    {key: 2024, value: '2024'},
    {key: 2025, value: '2025'},
    {key: 2026, value: '2026'},
    {key: 2027, value: '2027'},
    {key: 2028, value: '2028'},
    {key: 2029, value: '2029'},
    {key: 2030, value: '2030'},
    {key: 2031, value: '2031'},
    {key: 2032, value: '2032'},
    {key: 2033, value: '2033'},
    {key: 2034, value: '2034'},
    {key: 2035, value: '2035'},
]
export const TransactionListComponent = () => {


    const data = listDummyData;
    const [filter, setFilter] = useState(data.data);
    const [yearFilter, setYearFilter] = useState(99);
    const [monthFilter, setMonthFilter] = useState(99)
    // const filter = data;

    useEffect(() => {
        let filter1;

        if (yearFilter === 99 && monthFilter === 99) {
            filter1 = data.data
        } else if (yearFilter === 99) {
            filter1 = data.data.filter(d => new Date(d.date).getMonth() === monthFilter);
        } else if (monthFilter === 99) {
            filter1 = data.data.filter(d => new Date(d.date).getFullYear() === yearFilter);
        } else {
            filter1 = data.data.filter(d => new Date(d.date).getFullYear() === yearFilter
                && new Date(d.date).getMonth() === monthFilter
            );
        }

        setFilter(filter1);

    }, [yearFilter, monthFilter, setYearFilter, setMonthFilter]);

    const onChangeYears = (value) => {
        if (value === 99) {
            setFilter(data.data);
        } else {
            let filter1 = data.data.filter(d => new Date(d.date).getFullYear() === value);
            console.log(filter1)
            setFilter(filter1)
        }
    }

    const onChangeMonths = (value) => {
        if (value === 99) {
            setFilter(data.data);
        } else {
            let filter1 = data.data.filter(d => new Date(d.date).getMonth() === value);
            console.log(filter1)
            setFilter(filter1)
        }
    }

    return(
        <View style={{flex: 1, marginTop: '7%' }} className='bg-blue-100 p-5' >
            <View className='mt-7'>
                <Text className='text-slate-800 font-extrabold text-xl text-center mb-7'>Transaction List</Text>
                <BalanceListComponent />
            </View>

            <SafeAreaView style={{flex: 1, marginBottom: '10%', marginTop: '5%'}}>
                <View className='mt-5' style={{flexWrap: 'wrap', gap: 5, flexDirection: 'row', marginBottom: 10}}>
                    <SelectList
                        data={months}
                        setSelected={(value) => setMonthFilter(value)}
                        save="key"
                        defaultOption={{key: 99, value: 'All Months'}}
                        dropdownStyles={{top: -10, width: '100%', backgroundColor: 'white'}} // Atur top sesuai dengan kebutuhan Anda
                        inputStyles={{fontSize: 12, fontWeight: 'bold'}}
                        boxStyles={{backgroundColor: 'white', height: 40, borderRadius: 16}}
                    />

                    <SelectList
                        data={years}
                        setSelected={(value) => setYearFilter(value)}
                        save="key"

                        defaultOption={{key: 99, value: 'All Years'}}
                        dropdownStyles={{top: -10, width: '100%', backgroundColor: 'white'}} // Atur top sesuai dengan kebutuhan Anda
                        inputStyles={{fontSize: 12, fontWeight: 'bold'}}
                        boxStyles={{backgroundColor: 'white', height: 40, borderRadius: 16}}
                    />
                </View>

                <DataContainer listData={filter} />
            </SafeAreaView>
        </View>
    )
}