import { View, Text } from 'react-native'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { setLocation, setRoom, setFloor } from '../redux/actions';
import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import { useFonts } from 'expo-font';

const SearchFilter = ({ data, input }) => {

    const [loaded] = useFonts({
        'UberBold': require('../assets/fonts/UberBold.otf'),
        'UberLight': require('../assets/fonts/UberLight.otf'),
        'UberMedium': require('../assets/fonts/UberMedium.otf'),
        'UberMove': require('../assets/fonts/UberMove.otf'),
      });


    const dispatch = useDispatch();
    const room = useSelector((state) => state.room);
    const floor = useSelector((state) => state.floor);
    const navigation = useNavigation();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Filter the data when the input changes
        if (input) {
            const lowerCaseInput = input.toLowerCase();
            const filteredItems = data.filter(item => item.name.toLowerCase().includes(lowerCaseInput));
            setFilteredData(filteredItems);
        } else {
            setFilteredData([]);
        }
    }, [input, data]);

    const handleLocationChange = (item) => {
        dispatch(setLocation(item.name)); // Dispatch the location to the global state
        dispatch(setRoom(item.room)); // Dispatch the room to the global state
        dispatch(setFloor(item.floor)); // Dispatch the floor to the global state
        navigation.goBack();
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleLocationChange(item)}>
            <View style={{ padding: 10, flexDirection: 'row' }}>
                <View style={{ paddingTop: 3 }} className="pr-3 mt-1">
                    <Ionicons name="location-sharp" size={28} color="black" />
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: 'gray', flex: 1, paddingBottom: 10 }}>
                    <Text  className="font-[UberBold] text-base">{item.name} {item.room}</Text>
                    <Text className="font-[UberMove]">UCLA Main Campus</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={{ margin: 16 }}>
            <FlatList showsVerticalScrollIndicator={false}
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()} // Use a unique key for each item
            />
        </View>
    )
}

export default SearchFilter