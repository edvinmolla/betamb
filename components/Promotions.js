import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from "react-native";
import PromotionCard from "./PromotionCard";

function Promotions() {
    return (
        <ScrollView className="mt-2 " contentContainerStyle={{ paddingHorizontal: 15}} horizontal showsHorizontalScrollIndicator={false}
            >

        <PromotionCard id={1} title="UCLA New Student Discount" description="Receive 30% discount on your first 10 orders as a new Bruin" imgUrl={"https://admission.ucla.edu/sites/default/files/hero-landing-images/students-looking-back-2x.jpg"} />
        <PromotionCard id={2} title="UCLA Athletics Discount" description="Den Pass holders receive 40% a 50% discount on their first 10 orders" imgUrl={"https://wallpaperset.com/w/full/9/5/a/29986.jpg"} />
        <PromotionCard id={3} title="Wooden Bulker Discount"  description="Receive a 30% discount coupon on pruchases of 2+ items per order"
        imgUrl={"https://uclaadmissions.files.wordpress.com/2011/11/416529336_xfg9q-32.jpeg"} />

        </ScrollView>
    )
}

export default Promotions