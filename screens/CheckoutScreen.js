import { View, Text, Button, Image, StatusBar, Alert, Platform, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import axios from 'axios';
import { Divider } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StripeProvider } from '@stripe/stripe-react-native';
import { PlatformPayButton, isPlatformPaySupported, PlatformPay } from '@stripe/stripe-react-native';
import { confirmPlatformPayPayment } from '@stripe/stripe-react-native';


const CheckoutScreen = () => {
    const { width, height } = Dimensions.get('window');
    const isSmallScreen = width < 380;

    const totalPrice = (parseFloat(price) + 0.50 + 0.35).toFixed(2);

    const [isApplePaySupported, setIsApplePaySupported] = useState(false);

    useEffect(() => {
        verifyPurchaseStatus();
        (async function () {
            setIsApplePaySupported(await isPlatformPaySupported());
        })();
    }, [isPlatformPaySupported]);


    const pay = async () => {
        const clientSecret = await fetchPaymentIntentClientSecret()
        const { error } = await confirmPlatformPayPayment(
            clientSecret,
            {
                applePay: {
                    cartItems: [
                        {
                            label: withFoodSide ? title + " w/ Side" : title,
                            amount: withFoodSide ? (parseFloat(price) + 1.75).toFixed(2) : parseFloat(price).toFixed(2),
                            paymentType: PlatformPay.PaymentType.Immediate,
                        },
                        {
                            label: "Delivery",
                            amount: "0.35",
                            paymentType: PlatformPay.PaymentType.Immediate,
                        },
                        {
                            label: "Service",
                            amount: "0.50",
                            paymentType: PlatformPay.PaymentType.Immediate,
                        },
                        {
                            label: "Tax",
                            amount: "0.00",
                            paymentType: PlatformPay.PaymentType.Immediate,
                        },


                        {
                            label: 'Total',
                            amount: withFoodSide ? (parseFloat(price) + 1.75 + 0.50 + 0.35).toFixed(2) : (parseFloat(price) + 0.50 + 0.35).toFixed(2),
                            paymentType: PlatformPay.PaymentType.Immediate,
                        },
                    ],
                    merchantCountryCode: 'US',
                    currencyCode: 'USD',
                    requiredShippingAddressFields: [
                        PlatformPay.ContactField.PostalAddress,
                    ],
                    requiredBillingContactFields: [PlatformPay.ContactField.PhoneNumber],
                },
            }
        );
        if (error) {

            // handle error
        } else {

            // call functions on success here
            recordOrder();
            confirmationFlow(title, price);
            //   alert('Success', 'Check the logs for payment intent details.');



        }
    };

    const fetchPaymentIntentClientSecret = async () => {
        const response = await fetch(`https://mealbud.us/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               status: "ok",
               value: withFoodSide ? (parseFloat(price) + 1.75 + 0.50 + 0.35).toFixed(2) : (parseFloat(price) + 0.50 + 0.35).toFixed(2),

            }),
        });
        const { clientSecret } = await response.json();

        return clientSecret;
    };

    const recordOrder = async () => {
        const response = await fetch(`https://mealbud.us/recordorder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                value: withFoodSide ? (parseFloat(price) + 1.75).toFixed(2) : parseFloat(price).toFixed(2),
                phone: phoneNumber,
                location: deliveryLocation,
                item: title,
                foodSide: withFoodSide,
                drinkSide: withDrinkSide

            }),
        });
        const { clientSecret } = await response.json();

        return clientSecret;
    };


    const [purchaseStatus, setPurchaseStatus] = useState(null);
    const [deliveryLocation, setDeliveryLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const verifyPurchaseStatus = async () => {
        try {

            const status = await AsyncStorage.getItem('order_status');
            setPurchaseStatus(status);
            return purchaseStatus;
        } catch (e) {
            // error reading value
        }
    }





    const getCurrentTime = () => {
        const negativeMargin = new Date();
        const positiveMargin = new Date();
        // Add 5 minutes to the current time
        negativeMargin.setMinutes(negativeMargin.getMinutes() + 25);
        positiveMargin.setMinutes(positiveMargin.getMinutes() + 45);

        const negativeHours = negativeMargin.getHours();
        const negativeMinutes = negativeMargin.getMinutes();


        const positiveHours = positiveMargin.getHours();
        const positiveMinutes = positiveMargin.getMinutes();


        // Format the minutes with a leading zero
        const negativeFormat = (negativeMinutes < 10 ? '0' : '') + negativeMinutes;
        const positiveFormat = (positiveMinutes < 10 ? '0' : '') + positiveMinutes;


        return [`${negativeHours}:${negativeFormat}`, `${positiveHours}:${positiveFormat}`];



    }





    const confirmationFlow = (title, price) => {
        const orderTimeline = getCurrentTime();
        setOrderConfirm(title, price, deliveryLocation, orderTimeline);
        navigation.navigate("HomeScreen");
    }

    const setOrderConfirm = async (title, price, deliveryLocation, orderTimeline) => {
        try {
            await AsyncStorage.setItem('order_status', "true");
            await AsyncStorage.setItem('order_title', JSON.stringify(title));
            await AsyncStorage.setItem('order_price', JSON.stringify(price));
            await AsyncStorage.setItem('order_location', JSON.stringify(deliveryLocation));
            await AsyncStorage.setItem('order_timeline', JSON.stringify(orderTimeline));

        } catch (e) {
            // saving error
        }
    };



    const { params: { imgUrl, title, price, description, withDrinkSide, withFoodSide } } = useRoute();



    const { location, room, floor } = useSelector(state => state.locationReducer);

    const navigation = useNavigation();


    const [loaded] = useFonts({
        'UberBold': require('../assets/fonts/UberBold.otf'),
        'UberLight': require('../assets/fonts/UberLight.otf'),
        'UberMedium': require('../assets/fonts/UberMedium.otf'),
        'UberMove': require('../assets/fonts/UberMove.otf'),
    });

    return (






        <View style={{ flex: 1 }}>

            <SafeAreaView >

                <StatusBar barStyle="light-content" />

                {purchaseStatus === "true" ? (

                    <View>
                        <View className="flex-row items-center mt-3 mx-5 py-4   bg-[#e40464] rounded-xl ">


                            <View className="flex-1 ml-4">
                                <Text className="text-lg font-[UberBold] text-white">Your buddy is on their way.</Text>
                                <Text className="font-[UberBold] text-xs w-70 text-white" numberOfLines={1}>While in beta, only one order at a time is possible.</Text>
                            </View>

                            <View className="pr-4">
                                <MaterialCommunityIcons name="run-fast" size={30} color="white" />
                            </View>
                        </View>
                    </View>

                ) : (

                    <View className="mt-4">
                        <Text className="font-bold text-gray-400 text-medium left-5 ">DELIVER TO</Text>
                        <View>

                            <View className=" mt-3 mx-5 space-y-2 py-2 px-4  bg-white rounded-xl justify-center">


                                <View className="flex-row space-x-2 pb-2">
                                    <View className="mt-2">
                                        <Ionicons name="location-sharp" size={24} color="black" />
                                    </View>
                                    <TextInput maxLength={50} onChangeText={text => setDeliveryLocation(text)}
                                        value={deliveryLocation} className="px-2  text-base w-full" placeholder='Delivery location and instructions' />
                                </View>


                                <Divider orientation="horizontal" color="#eee" width={1} />



                                <View className="flex-row space-x-2 pb-2">
                                    <View className="pt-2 ml-1">
                                        <FontAwesome name="phone" size={24} color="black" />
                                    </View>
                                    <TextInput maxLength={10} onChangeText={text => setPhoneNumber(text)} value={phoneNumber} className="px-2 text-base w-full" placeholder='Phone number' />
                                </View>




                            </View>

                        </View>
                    </View>

                )}



                <View >
                    {/* <Text className="font-bold text-gray-400 text-medium left-5 ">ORDER</Text> */}
                    <View className="flex-row items-center mt-3 mx-5 py-4   bg-white rounded-xl ">

                        <View className="pl-4">

                            <Image source={{ uri: imgUrl }} className="w-16 h-16 rounded-xl" />


                        </View>
                        <View className="flex-1 ml-4">
                            <Text className="text-lg font-[UberMedium] w-40" numberOfLines={1}>{title}</Text>
                            <Text className="font-[UberMedium] text-sm w-40" numberOfLines={1}>{description}</Text>
                        </View>

                        <View className="pr-4">
                            <Text className="text-base font-[UberMedium]">${price.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>


                <View >

                    {/* <Text className="font-bold text-gray-400 text-medium left-5 ">RECEIPT</Text> */}
                    <View className=" items-center mt-3 mx-5 py-4  space-y-2 bg-white rounded-xl ">

                        <View className="flex-row px-4 content-center">

                            <Text className="font-[UberMedium] text-base flex-1">{withFoodSide ? "Subtotal w/ Side" : "Subtotal"}</Text>
                            <Text className="font-[UberMedium] text-base">${withFoodSide ? (parseFloat(price) + 1.75).toFixed(2) : parseFloat(price).toFixed(2)}</Text>
                        </View>

                        <View className="flex-row px-4 content-center">

                            <Text className="font-[UberMedium] text-base flex-1">Delivery</Text>
                            <Text className="font-[UberMedium] text-base">$0.35</Text>
                        </View>

                        <View className="  flex-row px-4 content-center">

                            <Text className="font-[UberMedium] text-base flex-1">Service</Text>
                            <Text className="font-[UberMedium] text-base">$0.50</Text>
                        </View>

                        <View className="  flex-row px-4 content-center pb-2">

                            <Text className="font-[UberMedium] text-base flex-1">Tax</Text>
                            <Text className="font-[UberMedium] text-base">$0.00</Text>
                        </View>


                        <View className=" flex-row px-4 content-center border-t-2 border-gray-100 pt-3">

                            <Text className="font-[UberBold] text-base flex-1">Total</Text>
                            <Text className="font-[UberBold] text-base">${withFoodSide ? (parseFloat(price) + 1.75 + 0.35 + 0.50).toFixed(2) : (parseFloat(price) + 0.50 + 0.35).toFixed(2)}</Text>
                        </View>



                    </View>

                    {!isSmallScreen && (
                        <View className="px-9 pt-3">
                            <Text className="text-xs text-gray-800 font-[UberBold]">
                                Swipes are valued on average between $14 and $18. Using Apple Pay saves swipes for future app versions, with added tax exemptions – while protecting your privacy.
                            </Text>
                        </View>
                    )}

                </View>


            </SafeAreaView>





            {purchaseStatus === "true" ? (

                <View></View>
            ) : (

                <View style={{ flex: 1 }}>
                    <View className=" absolute bottom-20 flex-row mx-7">

                        <View className="space-y-1 flex-1">
                            <Text className="text-base font-[UberBold]">Estimated Delivery</Text>
                            {/* <Text className="text-3xl font-[UberBold]">6:00 PM - 6:10 PM</Text> */}
                        </View>
                        <View>
                            <Text className="text-base font-[UberBold]">{getCurrentTime()[0]} - {getCurrentTime()[1]}</Text>
                        </View>

                    </View>


                    {/* <View className="px-6 absolute bottom-9 w-full ">

                        <TouchableOpacity onPress={() => confirmationFlow(title, price)} activeOpacity={1} className="w-full bg-[#e40464] items-center py-1 rounded-xl">
                            <View className="flex-row items-center">

                                <FontAwesome5 name="apple-pay" size={48} color="white" />
                            </View>
                        </TouchableOpacity>

                    </View> */}

                    <View className="px-6 absolute bottom-6 w-full">
                        <StripeProvider
                            publishableKey="pk_live_51O1HVzGQH1n5bPxHYWeNprOnIpMBdBsXuPvTNP7kBXCZs8FbVpq7tzUU2kS7lKx3FwXptDYAhDMfRuEm0Q6Ofq4I00Oiv0xPJo"
                            merchantIdentifier="merchant.betamb.com"
                        >
                            <View>
                                {isApplePaySupported && (
                                    <PlatformPayButton
                                        onPress={pay}
                                        type={PlatformPay.ButtonType.Order}
                                        appearance={PlatformPay.ButtonStyle.Black}
                                        borderRadius={9}
                                        style={{
                                            width: '100%',
                                            height: 52,

                                        }}
                                    />
                                )}
                            </View>
                        </StripeProvider>

                    </View>

                </View>

            )}

        </View>


    )
}

export default CheckoutScreen
