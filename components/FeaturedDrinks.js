import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import RestaurantCard from "./RestaurantCard";
import { useFonts } from 'expo-font';
import DrinksCard from "../components/DrinksCard"
import LiquidCard from "./LiquidCard";

const FeaturedDrinks = ({ id, title, description }) => {

    const [loaded] = useFonts({
        'UberBold': require('../assets/fonts/UberBold.otf'),
        'UberLight': require('../assets/fonts/UberLight.otf'),
        'UberMedium': require('../assets/fonts/UberMedium.otf'),
        'UberMove': require('../assets/fonts/UberMove.otf'),
    });

    return (
        <View>

            <Text className="font-bold text-black text-lg pt-4 pl-4">Delicious Delights</Text>


            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}>


                <LiquidCard description="Bananas, Strawberries, Pineapple, more." price={5.00} imgUrl="https://joyfoodsunshine.com/wp-content/uploads/2019/01/healthy-strawberry-banana-smoothie-recipe-7-e1549147043893.jpg" title="Bruin Fresh" />
                <LiquidCard description="Green Tea, Ice, Tapioca Balls, more." price={5.00} imgUrl="https://theoregondietitian.com/wp-content/uploads/2022/06/MatchaBubbleTea-1200-x-1200.jpg" title="Green Milk Tea Boba" />
            
               
               
                <LiquidCard description="Mangoes, Passionfruit-Mango Juice, more." price={5.00} imgUrl="https://smallfarmbiglife.com/wp-content/uploads/2022/07/Mango-Pineapple-Smoothie-1549-scaled.jpg" title="Mango Madness" />
                <LiquidCard description="Water, Tapioca Balls, Horchata Mix" price={5.00} imgUrl="https://www.vidhyashomecooking.com/wp-content/uploads/2021/07/InstantPotHorchataBoba.jpg" title="Horchata Boba" />
                <LiquidCard description="Peaches, Strawberries, Orange Sherbet, more." price={5.00} imgUrl="https://reneenicoleskitchen.com/wp-content/uploads/2021/03/Strawberry-Peach-Smoothie-Image-1-1.jpg" title="Caribbean Island" />
                <LiquidCard description="Milk Tea, Ice, Tapioca Balls" price={5.00} imgUrl="https://balancewithjess.com/wp-content/uploads/2022/07/Almond-Milk-Tea-Feat.jpg" title="Milk Tea Boba" />
                <LiquidCard description="Strawberries, Apple-Strawberry Juice, more." price={5.00} imgUrl="https://sipsipsmoothie.com/wp-content/uploads/2023/01/a-strawberry-apple-smoothie..jpg" title="Strawberry Sensation" />

                <LiquidCard description="Taro Powder, Non Dairy Creamer, Water, more." price={5.00} imgUrl="https://www.siftandsimmer.com/wp-content/uploads/2020/12/real-taro-milk-bubble-tea1-500x500.jpg" title="Taro Boba" />
                <LiquidCard description="Thai Iced Tea, Tapioca Balls, Honey Syrup, more." price={5.00} imgUrl="https://teakandthyme.com/wp-content/uploads/2023/06/thai-milk-tea-boba-DSC_3229-1x1-1200.jpg" title="Thai Tea Boba" />

                <LiquidCard description="Vietnamese Iced Coffee, Ice, Tapioca Balls, more." price={5.00} imgUrl="https://kitchenconfidante.com/wp-content/uploads/2020/04/Dalgona-Coffee-with-Boba-kitchenconfidante.com-7352-750x1124.jpg" title="Vietnamese Coffee Boba" />





            </ScrollView>




        </View>
    );
}



export default FeaturedDrinks;