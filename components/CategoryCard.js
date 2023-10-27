import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const CategoryCard = ({ imgUrl, title, price, description, rating }) => {
  const navigation = useNavigation();

  const [loaded] = useFonts({
    'UberBold': require('../assets/fonts/UberBold.otf'),
    'UberLight': require('../assets/fonts/UberLight.otf'),
    'UberMedium': require('../assets/fonts/UberMedium.otf'),
    'UberMove': require('../assets/fonts/UberMove.otf'),
  });

  return (

    <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate("QuickFoodScreen", { imgUrl, title, price, description, rating }) }} className="bg-transparent pr-4">
      <Image source={{ uri: imgUrl }} className="h-32 w-64  rounded-xl" />

      <View className="ml-1">
        <View className="flex-row items-center">
          <View className="flex-1" >
            <Text numberOfLines={1}
          
            className="font-semibold text-base w-48 text-black mt-1 ">{title}</Text>
          </View>
          <Text
          
          className="font-bold mr-1 mt-1.5">${price}</Text>
        </View>

        <View className="flex-row  w-52">
          <Text className="text-xs  flex-1" numberOfLines={1}>{description}</Text>
          {/* <Text className="font-bold text-xs mr-1">10+ min</Text> */}
        </View>

        <View className="flex-row items-center">
          <Text className="text-xs text-gray-800 flex-1">$0.35 Delivery Fee · <Octicons name="thumbsup" size={14} color="#424242" /> {rating}%</Text>
          {/* <Text className="font-bold text-xs mr-1">10+ min</Text> */}
        </View>


      </View>
    </TouchableOpacity>


  );
};

export default CategoryCard;