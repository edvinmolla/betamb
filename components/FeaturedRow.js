import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import RestaurantCard from "./RestaurantCard";
import { useFonts } from 'expo-font';


const FeaturedRow = ({ id, title, description }) => {

  const [loaded] = useFonts({
    'UberBold': require('../assets/fonts/UberBold.otf'),
    'UberLight': require('../assets/fonts/UberLight.otf'),
    'UberMedium': require('../assets/fonts/UberMedium.otf'),
    'UberMove': require('../assets/fonts/UberMove.otf'),
  });

  return (
    <View>

      <Text className="font-bold text-black text-lg pl-4 pt-4">Featured Restaurants at UCLA</Text>


      <View className="px-4 ">

        <RestaurantCard
          id={1}
          imgUrl="https://epicuria.ucla.edu/img/slide-frutti-de-mare.jpg"
          badgeUrl="https://github.com/edvinmolla/dotfiles/blob/master/epic-square-logo.jpg?raw=true"
          title="Epic at Ackerman"
          description="Mediterrenian Food"
          stars={3}
         
        />


      

      </View>
    </View>
  );
}



export default FeaturedRow;