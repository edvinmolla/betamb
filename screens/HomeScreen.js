import { View, StyleSheet, Animated, Easing, Button, Switch, Text, useWindowDimensions, SafeAreaView, Pressable, Image, TextInput, TouchableOpacity, ScrollView, StatusBar, Touchable } from "react-native";
import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { Divider } from 'react-native-elements';
import Promotions from "../components/Promotions";
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../redux/actions';
import FeaturedDrinks from "../components/FeaturedDrinks";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Linking } from 'react-native'


const HomeScreen = () => {




    const [currentlocation, setOrderLocation] = useState('');
    const [purchaseStatus, setPurchaseStatus] = useState(null);
    const [orderTimeline, setOrderTimeline] = useState([]);

    const retrieveOrderTimelineFromStorage = async () => {
        try {
            const orderTimelineData = await AsyncStorage.getItem('order_timeline');

            const orderTimelineArray = JSON.parse(orderTimelineData);
            setOrderTimeline(orderTimelineArray);

        } catch (e) {
            // Handle error while retrieving data from storage
        }
    };

    const resetOrderStatus = async () => {
        setPurchaseStatus(false);
        bottomSheetModalRef.current?.dismiss();
        try {
            await AsyncStorage.setItem('order_status', "false");
        } catch (e) {
            // saving error
        }
    };


    const verifyPurchaseStatus = async () => {
        try {
            const purchaseStatus = await AsyncStorage.getItem('order_status');
            return purchaseStatus;
        } catch (e) {
            // error reading value
        }
    }



    const getPurchaseStatus = async () => {
        handlePresentModal();
        try {
            const orderStatus = await AsyncStorage.getItem('order_status');
            const orderTitle = await AsyncStorage.getItem('order_title');
            const orderPrice = await AsyncStorage.getItem('order_price');
            const orderLocation = await AsyncStorage.getItem('order_location');
            setOrderLocation(orderLocation.replace(/"/g, ''));

        } catch (e) {
            // error reading value
        }
    };

    const [animationProgress] = useState(new Animated.Value(0));

    // Animation function to transition background color
    const startAnimation = () => {
        Animated.timing(animationProgress, {
            toValue: 1,
            duration: 2000, // Animation duration in milliseconds
            easing: Easing.linear,
            useNativeDriver: true, // Set to false to animate backgroundColor
        }).start(() => {
            // Reset the animation when it's complete
            animationProgress.setValue(0);
            startAnimation();
        });
    };



    useEffect(() => {



        const checkOrder = navigation.addListener("focus", async () => {
            const purchaseStatus = await verifyPurchaseStatus();
            setPurchaseStatus(purchaseStatus);
        });


        startAnimation();
    }, []);

    // Interpolate color based on animationProgress
    const backgroundColor = animationProgress.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ["#e40464", "#f170a8", "#e40464"], // Colors at 0%, 50%, and 100% animation
    });



    const [darkmode, setDarkmode] = useState(false);
    const [device, setDevice] = useState(false);
    const { width } = useWindowDimensions();
    const [theme, setTheme] = useState("dim");
    const [isOpen, setIsOpen] = useState(false);

    const bottomSheetModalRef = useRef(null);

    const snapPoints = ["60%", "60%"];

    function handlePresentModal() {
        retrieveOrderTimelineFromStorage();
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
            setIsOpen(true);
        }, 100);
    }




    const { location } = useSelector(state => state.locationReducer);



    const navigation = useNavigation();



    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <View style={{ flex: 1 }} className="bg-white" >


            <GestureHandlerRootView style={{ flex: 1 }} >




                <BottomSheetModalProvider style={{ flex: 1 }}  >

                    <SafeAreaView className="bg-white" >
                        <StatusBar barStyle="dark-content" />

                        <View className="flex-row pt-2 mx-3 items-center bg-white mb-3">




                            {purchaseStatus === "true" ? (
                                // <TouchableOpacity
                                //     className="rounded-2xl"
                                //     style={[styles.onTheMoveButton, { backgroundColor }]}
                                //     onPress={getPurchaseStatus}
                                // >
                                //     <View className="py-0.5 mx-4">
                                //         <MaterialCommunityIcons name="run-fast" size={20} color="white" />
                                //     </View>
                                // </TouchableOpacity>

                                <View className="h-4">
                                </View>

                            ) : (

                                <View className="py-0.5 px-4 rounded-2xl bg-gray-100 border-1 ">
                                    <Octicons name="sun" size={20} color="black" />
                                </View>
                            )
                            }
                        </View>

                        {purchaseStatus === "true" ? (

                            <View>

                                <TouchableOpacity activeOpacity={1} onPress={getPurchaseStatus} className="flex-row items-center mt-3 mx-4 py-4   bg-[#e40464] rounded-xl ">


                                    <View className="flex-1 ml-4">
                                        <Text className="text-lg font-[UberBold] text-white">Your buddy is on their way.</Text>
                                        <Text className="font-[UberBold] text-xs w-70 text-white" numberOfLines={1}>While in beta, only one order at a time is possible.</Text>
                                    </View>

                                    <View className="pr-4">
                                        <MaterialCommunityIcons name="run-fast" size={30} color="white" />
                                    </View>
                                </TouchableOpacity>

                            </View>
                        ) : (
                            <View></View>
                        )}

                        {/* <View className="bg-[#e40464] mx-4 py-2 px-4 rounded-lg">
                            <View>
                                <Text className="text-white">ds</Text>
                            </View>
                        </View> */}

                    </SafeAreaView>


                    <ScrollView   >

                        {/* <Promotions nestedScrollEnabled={true}/> */}



                        {/* <Divider orientation="horizontal" color="#eee" className="mt-5" width={8} /> */}

                        <FeaturedDrinks />

                        <Divider orientation="horizontal" color="#eee" className="mt-6" width={8} />




                        <FeaturedRow id="1" />




                    </ScrollView>

                    {isOpen && (
                        <LinearGradient
                            colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.8)']}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                        />
                    )}



                    <BottomSheetModalProvider >
                        <View
                            style={[
                                styles.container,
                                { backgroundColor: isOpen ? "white" : "white" },
                            ]}
                        >

                            <BottomSheetModal
                                ref={bottomSheetModalRef}
                                index={1}
                                snapPoints={snapPoints}
                                backgroundStyle={{ borderRadius: 25, backgroundColor: 'white' }}
                                onDismiss={() => setIsOpen(false)}
                            >
                                <View className="">

                                    <View>
                                        <View className="h-20 px-4 flex-row items-center w-screen ">

                                            <View className="flex-1 flex-row items-center">

                                                <Image source={{ uri: "https://avatars.githubusercontent.com/u/43499049?v=4" }}
                                                    className="h-10 w-10 bg-black rounded-full" />
                                                <View className="pl-5 ">
                                                    <Text className="text-black text-base font-[UberBold]">Michael T. has your order</Text>
                                                    <Text classNamie="text-xs text-gray-800 font-[UberBold] w-48" numberOfLines={1}>{currentlocation}</Text>
                                                </View>

                                            </View>

                                            <View className="flex-row space-x-1">
                                                <TouchableOpacity onPress={() => { Linking.openURL(`sms:4244075941&body=${encodeURIComponent('Hi Machel. Any updates on my order?')}`); }} className=" items-center mr-4">
                                                    <AntDesign name="message1" size={22} color="black" />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => { Linking.openURL('tel:4244075941'); }} className=" items-center mr-4">
                                                    <FontAwesome name="phone" size={24} color="black" />

                                                </TouchableOpacity>

                                            </View>



                                        </View>

                                        <Divider orientation="horizontal" color="#eee" className="mt-2" width={2} />



                                        <View className="left-10 mt-6">

                                            <View >
                                                <Text className="text-base font-[UberBold]">Estimated Delivery</Text>
                                                {/* <Text className="text-3xl font-[UberBold]">6:00 PM - 6:10 PM</Text> */}
                                                <Text className="text-4xl font-[UberMove]">{orderTimeline[0]} - {orderTimeline[1]}</Text>
                                            </View>





                                        </View>

                                        <View className="mt-5" >

                                            <Text className="text-base font-[UberBold] ml-10">Your free coupon for your buddy</Text>



                                            <View className="bg-gray-100 mx-6 items-center py-2 rounded-xl mt-1">
                                                <Text className="text-2xl font-[UberBold]">C 5 1 4</Text>
                                            </View>


                                        </View>

                                        {/* <View className="mt-8 mx-6">


                                            <View className="bg-gray-100 mt-1 rounded-lg h-12 w-full items-center justify-center">
                                                <Text className="font-[UberBold] text-2xl">4 2 8 3</Text>
                                            </View>
                                            <View className="mt-1 ">
                                                <Text className="text-xs text-gray-800 font-[UberMedium]">Confirm code above to our buddy so that delivery completion can be confirmed.</Text>
                                            </View>

                                        </View> */}


                                    </View>

                                </View>
                                <View className="px-6 absolute bottom-8 w-full ">

                                    <TouchableOpacity onPress={resetOrderStatus} activeOpacity={1} className="w-full bg-[#e40464] items-center py-3 rounded-xl">

                                        <Text className=" text-white font-[UberBold] text-lg">Received Order</Text>
                                    </TouchableOpacity>

                                </View>
                            </BottomSheetModal>
                        </View>
                    </BottomSheetModalProvider>

                </BottomSheetModalProvider>


            </GestureHandlerRootView>

        </View>
    );
};



const styles = StyleSheet.create({


    contentContainer: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 15,
    },

    row: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },

});

export default HomeScreen;