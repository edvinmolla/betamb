import { View, Image, SafeAreaView, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-ui-lib';
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EpicAckerman from '../components/EpicAckerman';
import { useFonts } from 'expo-font';






const QuickFoodScreen = () => {
   




    const { params: { imgUrl, title, description, stars } } = useRoute();

    const navigation = useNavigation();

    const [loaded] = useFonts({
        'UberBold': require('../assets/fonts/UberBold.otf'),
        'UberLight': require('../assets/fonts/UberLight.otf'),
        'UberMedium': require('../assets/fonts/UberMedium.otf'),
        'UberMove': require('../assets/fonts/UberMove.otf'),
    });




    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView className="bg-white">
                {/* <View style={{ flex: 1 }}> */}
                <View className="flex-row items-center  bg-white  border-b-2 border-gray-100">


                    <View className="flex-1 absolute items-center  w-full">
                        <Text className="font-bold text-base mb-2">{title}</Text>
                    </View>

                    <View className="mb-2 ml-2">
                        <TouchableOpacity activeOpacity={1} onPress={navigation.goBack} >
                            <Feather name='arrow-left' size={28} color='black' />
                        </TouchableOpacity>

                    </View>



                </View>



            </SafeAreaView>
            <ScrollView tyle={{ flex: 1 }} className="bg-white" >
                <View>
                    <View className="relative">

                        <Image source={{ uri: imgUrl }} className="w-full h-48 p-4" />
                        <LinearGradient
                            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.4)']}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                        />


                        <View className="absolute bottom-5">

                            <View className="px-3 pt-3">
                                <View className="flex-row">
                                    <Text className="text-4xl font-bold flex-1 text-white font-[UberBold]">{title}</Text>

                                </View>

                                <Text className="font-[UberBold] text-white">{description} · <Octicons name="star-fill" size={14} color="white" /> <Octicons name="star-fill" size={14} color="white" /> <Octicons name="star-fill" size={14} color="white" />  · 10+ min · $7 - $10</Text>
                            </View>

                        </View>

                    </View>


                </View>
                <StatusBar barStyle="dark-content" />



                <EpicAckerman />




            </ScrollView>


            


        </View>
    );
}



export default QuickFoodScreen