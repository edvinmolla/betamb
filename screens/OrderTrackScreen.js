import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const OrderTrackScreen = () => {

    const navigation = useNavigation();


    return (
        <View style={{ flex: 1 }}>

            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" />
                <View className="flex-row">
                    <View className=" left-8 top-10 rounded-full p-2 bg-black">
                        <TouchableOpacity activeOpacity={1} onPress={() => {

                            navigation.navigate("HomeScreen");
                        }}>
                            <Feather name='x' size={35} color='white' />
                        </TouchableOpacity>
                    </View>

                </View>

                <View className="absolute bottom-20">

                    <View>
                        <View className="h-20 px-5 flex-row items-center w-screen bg-black">

                            <View className="flex-1 flex-row items-center">

                                <Image source={{ uri: "https://community.fabric.microsoft.com/t5/image/serverpage/image-id/295871iEBA2258D1FD5EA88/image-size/large/is-moderation-mode/true?v=v2&px=999" }}
                                    className="h-10 w-10 bg-white rounded-full" />
                                <View className="pl-5 ">
                                    <Text className="text-white text-base font-[UberBold]">Michael T. has your order</Text>
                                    <Text className="text-xs text-gray-300 font-[UberBold]">Mathematical Sciences 5523</Text>
                                </View>

                            </View>

                            <View className="flex-row space-x-6 items-center">
                                <AntDesign name="message1" size={22} color="white" />
                                <FontAwesome name="phone" size={24} color="white" />

                            </View>
                        </View>

                        <View className="left-10 mt-6">

                            <View className="space-y-1">
                                <Text className="text-xl font-[UberBold]">Estimated Delivery</Text>
                                <Text className="text-3xl font-[UberBold]">6:00 PM - 6:10 PM</Text>
                               
                            </View>

                        </View>
                    </View>
                </View>
            </SafeAreaView>

        </View>
    )
}

export default OrderTrackScreen