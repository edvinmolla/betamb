import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';

const RestaurantCard = ({ imgUrl, title, description, stars, badgeUrl }) => {
    const numberOfViews = 3;
    const viewArray = Array.from({ length: stars }, (_, index) => index + 1);

    const [loaded] = useFonts({
        'UberBold': require('../assets/fonts/UberBold.otf'),
        'UberLight': require('../assets/fonts/UberLight.otf'),
        'UberMedium': require('../assets/fonts/UberMedium.otf'),
        'UberMove': require('../assets/fonts/UberMove.otf'),
    });


    const navigation = useNavigation();
    return (

        <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate("RestaurantScreen", { imgUrl, title, description, stars }) }}
            className="bg-transparent w-80 mt-4 mr-4">

            <Image source={{ uri: imgUrl }} className="h-44 rounded-2xl" />

            <LinearGradient className="h-44 rounded-2xl "
                colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.1)']}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            />


            <View className="absolute">

                {/* <View>
          <Image source={{ uri: badgeUrl }}
            className="h-14 w-14 rounded-tl-2xl  bg-white" />
        </View> */}
            </View>
            <View className=" absolute right-5">
                <View className="flex-row space-x-0.5">

                    {viewArray.map((index) => (
                        <View key={index} className="mt-2">
                            <Feather name="star" size={18} color="white" />
                        </View>
                    ))}


                </View>

            </View>

            <View className="ml-1">
                <View className="flex-row items-center">
                    <Text className="font-semibold text-xl mt-1 flex-1">{title}</Text>
                    <Text className="font-semibold mr-1 mt-1.5">from $7.30</Text>
                </View>

                <View className="flex-row items-center">
                    <Text className="text-xs  text-gray-800 flex-1">$0.35 Delivery Fee · <Octicons name="star" size={14} color="#424242" /> <Octicons name="star" size={14} color="#424242" /> <Octicons name="star" size={14} color="#424242" /> </Text>
                    <Text className="font-bold text-xs mr-1">10+ min</Text>
                </View>


            </View>
        </TouchableOpacity>


    );
};

export default RestaurantCard;