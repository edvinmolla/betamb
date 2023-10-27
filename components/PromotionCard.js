import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const PromotionCard = ({ id, imgUrl, title, description }) => {
  return (
    <TouchableOpacity activeOpacity={1} className="mt-3 mr-2">
      <ImageBackground imageStyle={{ borderRadius: 12 }} source={{ uri: imgUrl }} className="h-32 w-80 rounded-2xl">
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,1)"]} // Adjust the gradient colors as needed
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            borderRadius: 10,
          }}
        />
        

          <Text className="font-semibold text-white  text-lg absolute bottom-11 left-3">{title}</Text>
          <Text className="font-medium text-white text-xs   absolute bottom-3 left-4 pr-12">{description}</Text>
      

      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PromotionCard;