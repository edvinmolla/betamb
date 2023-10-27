import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const CategoryCard = ({ imgUrl, title, price, description }) => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        'UberBold': require('../assets/fonts/UberBold.otf'),
        'UberLight': require('../assets/fonts/UberLight.otf'),
        'UberMedium': require('../assets/fonts/UberMedium.otf'),
        'UberMove': require('../assets/fonts/UberMove.otf'),
    });

    return (
        <View className="mr-4 mt-4">
            <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate("CheckoutScreen", { imgUrl, title, price, description }) }}>
                <Image source={{ uri: imgUrl }} className="h-28 w-28 rounded-lg" />

                <View className="ml-1">
                    <View>
                        
                            <Text numberOfLines={1}

                                className="font-semibold text-sm w-24  text-black mt-1 ">{title}</Text>
                        

                    </View>

                    <View className="flex-row items-center">
                        <Text numberOfLines={1} className="font-regular w-12 flex-1 text-xs text-gray-600">{description}</Text>
                        <Text className="font-bold mr-1">${price}</Text>
                    </View>


                </View>
            </TouchableOpacity>
        </View>

    );
};

export default CategoryCard;