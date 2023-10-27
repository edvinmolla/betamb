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
import Checkbox from 'expo-checkbox';
import { useFonts } from 'expo-font';


const QuickFoodScreen = () => {

    const [loaded] = useFonts({
        'UberBold': require('../assets/fonts/UberBold.otf'),
        'UberLight': require('../assets/fonts/UberLight.otf'),
        'UberMedium': require('../assets/fonts/UberMedium.otf'),
        'UberMove': require('../assets/fonts/UberMove.otf'),
    });

    const { params: { imgUrl, title, price, description, rating } } = useRoute();

    const navigation = useNavigation();

    const [side_checkboxes, setSideCheckboxes] = useState([
        { id: 1, label: 'Oatmeal Raisin', checked: false },
        { id: 2, label: 'Chocolate Chip', checked: false },
        { id: 3, label: 'Banana', checked: false },
        { id: 4, label: 'Apple', checked: false },
        { id: 5, label: 'Orange', checked: false },
    ]);

    const [drink_checkboxes, setDrinkCheckboxes] = useState([
        { id: 1, label: 'Medium Coke', checked: false },
        { id: 2, label: 'Medium Diet Coke', checked: false },
        { id: 3, label: 'Medium Dr Pepper', checked: false },
        { id: 4, label: 'Medium Diet Dr Pepper', checked: false },
        { id: 5, label: 'Medium Fanta', checked: false },
        { id: 6, label: 'Medium Diet Fanta', checked: false },
        { id: 7, label: 'Medium Sweet Ice Tea', checked: false },
        { id: 8, label: 'Medium Orange Juice', checked: false },

    ]);

    const handleSideCheckboxPress = (id) => {
        // Toggle the checkbox state for the clicked checkbox
        const updatedSideCheckboxes = side_checkboxes.map((checkbox) => {
            if (checkbox.id === id) {
                return { ...checkbox, checked: true };
            } else {
                return { ...checkbox, checked: false };
            }


        });
        setSideCheckboxes(updatedSideCheckboxes);
    };

    const handleDrinkCheckboxPress = (id) => {
        // Toggle the checkbox state for the clicked checkbox
        const updatedDrinkCheckboxes = drink_checkboxes.map((checkbox) => {
            const drinkCheckboxValue = checkbox.id;
            if (checkbox.id === id) {
                return { ...checkbox, checked: true };
            } else {
                return { ...checkbox, checked: false };
            }


        });
        setDrinkCheckboxes(updatedDrinkCheckboxes);
    };


    return (
        <View style={{ flex: 1, height: '80%' }} className="bg-white">
            {/* <View style={{ flex: 1 }}> */}
            {/* <View className="flex-row items-center align-middle px-1  bg-white space-x-3 border-b-2 border-gray-100">

                
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 0, paddingTop: 0 }} className="pb-2">



                    <TouchableOpacity>
                        <View className="    px-2 py-1 rounded-2xl flex-row items-center space-x-1">
                            <Image source={{ uri: imgUrl }} className="h-2 w-2 p-3 rounded-full" />
                            <Text className="font-bold text-sm text-black ">Mozzarella Pizza</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="    px-2 py-1 rounded-2xl flex-row items-center space-x-1">
                            <Image source={{ uri: imgUrl }} className="h-2 w-2 p-3 rounded-full" />
                            <Text className="font-bold text-sm text-black ">Mozzarella Pizza</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="    px-2 py-1 rounded-2xl flex-row items-center space-x-1">
                            <Image source={{ uri: imgUrl }} className="h-2 w-2 p-3 rounded-full" />
                            <Text className="font-bold text-sm text-black ">Mozzarella Pizza</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="    px-2 py-1 rounded-2xl flex-row items-center space-x-1">
                            <Image source={{ uri: imgUrl }} className="h-2 w-2 p-3 rounded-full" />
                            <Text className="font-bold text-sm text-black ">Mozzarella Pizza</Text>
                        </View>
                    </TouchableOpacity>


                </ScrollView>
            </View> */}
            <View className="relative">

                <Image source={{ uri: imgUrl }} className="w-full h-48 p-4" />
                <LinearGradient
                    colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.1)']}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                />

                <View className="absolute bg-white rounded-full p-3 top-16 left-6">
                    <TouchableOpacity activeOpacity={1} onPress={navigation.goBack} >
                        <Feather name='x' size={28} color='black' />
                    </TouchableOpacity>

                </View>



            </View>
            <View className="mb-2">

                <View className="px-3 pt-3">
                    <View className="flex-row">
                        <Text className="text-3xl font-[UberBold] flex-1">{title}</Text>
                        <Text className="font-[UberBold] text-2xl mr-1 mt-1">${price}</Text>
                    </View>

                    <Text className="font-[UberBold]">fom Epic at Ackerman · <Octicons name="thumbsup" size={14} color="black" /> {rating}% · 10+ min</Text>

                </View>
                <View className="mt-2 mx-3">
                    <Text className="">{description}</Text>
                </View>
                <View className=" py-2 mx-2 rounded-lg mt-3 px-2 flex-row space-x-2">
                    <Image className="w-6 h-6" source={{ uri: 'https://menu.dining.ucla.edu/Content/Images/WebCodes/128px/v.png' }} />
                    <Image className="w-6 h-6" source={{ uri: 'https://menu.dining.ucla.edu/Content/Images/WebCodes/128px/atnt.png' }} />
                    <Image className="w-6 h-6" source={{ uri: 'https://menu.dining.ucla.edu/Content/Images/WebCodes/128px/awht.png' }} />
                    <Image className="w-6 h-6" source={{ uri: 'https://menu.dining.ucla.edu/Content/Images/WebCodes/128px/agtn.png' }} />
                    <Image className="w-6 h-6" source={{ uri: 'https://menu.dining.ucla.edu/Content/Images/WebCodes/128px/asoy.png' }} />
                    <Image className="w-6 h-6" source={{ uri: 'https://menu.dining.ucla.edu/Content/Images/WebCodes/128px/amlk.png' }} />
                </View>




            </View>



            <ScrollView tyle={{ flex: 1 }} className="mb-28 border-b-2 border-gray-200 bg-transparent">
                <StatusBar barStyle="light-content" />



                <Divider orientation="horizontal" color="#eee" className="mt-4" width={8} />


                <View className="mt-4 ">

                    <View className="flex-row items-center">
                        <Text className="font-[UberBold] text-lg ml-3 flex-1">Select Side</Text>

                        <Text className="mr-5 font-[UberBold] text-lg">$1.75</Text>
                    </View>
                    {side_checkboxes.map((checkbox) => (
                        <TouchableOpacity key={checkbox.id} onPress={() => handleSideCheckboxPress(checkbox.id)}>
                            <View className="  mt-2 mx-3  flex-row items-center">
                                <Text className="flex-1 text-base font-[UberMedium]">{checkbox.label}</Text>
                                <Checkbox
                                    className="m-2 border-black rounded-full p-2.5"
                                    value={checkbox.checked}
                                    onValueChange={() => handleSideCheckboxPress(checkbox.id)}
                                    disabled={side_checkboxes.some((c) => c.checked) && !checkbox.checked}
                                    color={checkbox.checked ? 'black' : undefined}
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <Divider orientation="horizontal" color="#eee" className="mt-4" width={8} />

                <View className=" mt-8 mb-10 ">
                    <View className="flex-row items-center">
                        <Text className="font-[UberBold] text-lg ml-3 flex-1">Select Drink</Text>

                        <Text className="mr-5 font-[UberBold] text-md">FREE with Mealbud</Text>
                    </View>
                    {drink_checkboxes.map((checkbox) => (
                        <TouchableOpacity key={checkbox.id} onPress={() => handleDrinkCheckboxPress(checkbox.id)}>
                            <View className="  mt-2 mx-3  flex-row items-center">
                                <Text className="flex-1 text-base font-[UberMedium]">{checkbox.label}</Text>
                                <Checkbox
                                    className="m-2 border-black  rounded-full p-2.5"
                                    value={checkbox.checked}
                                    onValueChange={() => handleDrinkcheckboxPress(checkbox.id)}
                                    disabled={side_checkboxes.some((c) => c.checked) && !checkbox.checked}
                                    color={checkbox.checked ? 'black' : undefined}
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>



            </ScrollView>
            <View className="px-4 absolute bottom-10 w-full ">

                <TouchableOpacity onPress={() => {
                    const selectedDrink = drink_checkboxes.find((checkbox) => checkbox.checked);
                    const selectedSide = side_checkboxes.find((checkbox) => checkbox.checked);

                    const params = {
                        imgUrl,
                        title,
                        price,
                        description,
                      };
                  

                    if (selectedDrink || selectedSide) {


                        if (selectedDrink) {
                            params.withDrinkSide = selectedDrink.label;
                        }
            
                        if (selectedSide) {
                            params.withFoodSide = selectedSide.label;
                        }
         
                    }
                    

                    navigation.navigate("CheckoutScreen", params) 

                }} activeOpacity={1} className="w-full bg-[#e40464] items-center py-3 rounded-xl">

                    <Text className=" text-white font-[UberBold] text-lg">Order Now</Text>
                </TouchableOpacity>

            </View>
            {/* </View> */}
        </View>
    );
}



export default QuickFoodScreen