import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}  
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 15 }}>


            <CategoryCard price={9.95} imgUrl="https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg" title="Margherita Pizza"  />
            <CategoryCard price={9.95} imgUrl="https://lilluna.com/wp-content/uploads/2020/12/margherita-pizza-resize-3.jpg" title="Mozzarella Pizza" />
            <CategoryCard price={9.95} imgUrl="https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aGNlL2hmZC8xNTk2ODYyNTc4NjkxMC5qcGd8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA" title="Pepperoni  Pizza" />
            <CategoryCard price={9.95} imgUrl="https://www.ourhappymess.com/wp-content/uploads/2023/03/Grilled-Chicken-Sandwich-square-featured.jpg" title="Chicken Sandwich" />
            <CategoryCard price={9.95} imgUrl="https://www.sargento.com/assets/Uploads/Recipe/Image/Sargento11501__FillWzExNzAsNTgzXQ.jpg" title="Italian Sandwich" />
            <CategoryCard price={9.95} imgUrl="https://cdn-rdb.arla.com/Files/puckarabia-en/2467521664/a8adc6bf-52a6-4428-ae42-5a59697a226c.jpg?mode=crop&w=1200&h=630&ak=aee88f72&hm=a4800bce" title="Spaghetti Bolognese" />
        </ScrollView>
    );
};

export default Categories;