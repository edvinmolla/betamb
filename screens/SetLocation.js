import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native'
import SearchFilter from '../components/SearchFilter';
import { StatusBar } from 'expo-status-bar';

const SetLocation = () => {



    const words = [

        { "id": 1, "name": "Boelter Hall", "room": "2444", "floor": 2 },
        { "id": 2, "name": "Boelter Hall", "room": "2760", "floor": 2 },
        { "id": 3, "name": "Boelter Hall", "room": "3400", "floor": 3 },
        { "id": 4, "name": "Boelter Hall", "room": "4283", "floor": 4 },
        { "id": 5, "name": "Boelter Hall", "room": "4413", "floor": 4 },
        { "id": 6, "name": "Boelter Hall", "room": "5249", "floor": 5 },
        { "id": 7, "name": "Boelter Hall", "room": "5252", "floor": 5 },
        { "id": 8, "name": "Boelter Hall", "room": "5264", "floor": 5 },
        { "id": 9, "name": "Boelter Hall", "room": "5272", "floor": 5 },
        { "id": 10, "name": "Boelter Hall", "room": "5273", "floor": 5 },
        { "id": 11, "name": "Boelter Hall", "room": "5280", "floor": 5 },
        { "id": 12, "name": "Boelter Hall", "room": "5419", "floor": 5 },
        { "id": 13, "name": "Boelter Hall", "room": "5420", "floor": 5 },
        { "id": 14, "name": "Boelter Hall", "room": "5422", "floor": 5 },
        { "id": 15, "name": "Boelter Hall", "room": "5436", "floor": 5 },
        { "id": 16, "name": "Boelter Hall", "room": "5440", "floor": 5 },
        { "id": 17, "name": "Boelter Hall", "room": "5514", "floor": 5 },
        { "id": 18, "name": "Boelter Hall", "room": "9436", "floor": 9 },
        { "id": 19, "name": "Broad Art Center", "room": "2100A", "floor": 2 },
        { "id": 20, "name": "Broad Art Center", "room": "2160E", "floor": 2 },
        { "id": 21, "name": "Bunche Hall", "room": "1209B", "floor": 1 },
        { "id": 22, "name": "Bunche Hall", "room": "1221A", "floor": 1 },
        { "id": 23, "name": "Bunche Hall", "room": "1265", "floor": 1 },
        { "id": 24, "name": "Bunche Hall", "room": "2121", "floor": 2 },
        { "id": 25, "name": "Bunche Hall", "room": "2150", "floor": 2 },
        { "id": 26, "name": "Bunche Hall", "room": "2156", "floor": 2 },
        { "id": 27, "name": "Bunche Hall", "room": "2160", "floor": 2 },
        { "id": 28, "name": "Bunche Hall", "room": "2168", "floor": 2 },
        { "id": 29, "name": "Bunche Hall", "room": "2173", "floor": 2 },
        { "id": 30, "name": "Bunche Hall", "room": "2174", "floor": 2 },
        { "id": 31, "name": "Bunche Hall", "room": "2178", "floor": 2 },
        { "id": 32, "name": "Bunche Hall", "room": "2181", "floor": 2 },
        { "id": 33, "name": "Bunche Hall", "room": "2209A", "floor": 2 },
        { "id": 34, "name": "Bunche Hall", "room": "3117", "floor": 3 },
        { "id": 35, "name": "Bunche Hall", "room": "3123", "floor": 3 },
        { "id": 36, "name": "Bunche Hall", "room": "3143", "floor": 3 },
        { "id": 37, "name": "Bunche Hall", "room": "3150", "floor": 3 },
        { "id": 38, "name": "Bunche Hall", "room": "3153", "floor": 3 },
        { "id": 39, "name": "Bunche Hall", "room": "3156", "floor": 3 },
        { "id": 40, "name": "Bunche Hall", "room": "3157", "floor": 3 },
        { "id": 41, "name": "Bunche Hall", "room": "3164", "floor": 3 },
        { "id": 42, "name": "Bunche Hall", "room": "3170", "floor": 3 },
        { "id": 43, "name": "Bunche Hall", "room": "3178", "floor": 3 },
        { "id": 44, "name": "Bunche Hall", "room": "3211", "floor": 3 },
        { "id": 45, "name": "Bunche Hall", "room": "A152", "floor": 1 },
        { "id": 46, "name": "Dodd Hall", "room": "121", "floor": 1 },
        { "id": 47, "name": "Dodd Hall", "room": "146", "floor": 1 },
        { "id": 48, "name": "Dodd Hall", "room": "147", "floor": 1 },
        { "id": 49, "name": "Dodd Hall", "room": "154", "floor": 1 },
        { "id": 50, "name": "Dodd Hall", "room": "161", "floor": 1 },
        { "id": 51, "name": "Dodd Hall", "room": "162", "floor": 1 },
        { "id": 52, "name": "Dodd Hall", "room": "167", "floor": 1 },
        { "id": 53, "name": "Dodd Hall", "room": "170", "floor": 1 },
        { "id": 54, "name": "Dodd Hall", "room": "175", "floor": 1 },
        { "id": 55, "name": "Dodd Hall", "room": "178", "floor": 1 },
        { "id": 56, "name": "Dodd Hall", "room": "78", "floor": 7 },
        { "id": 57, "name": "Fowler Museum", "room": "A103B", "floor": 1 },
        { "id": 58, "name": "Fowler Museum", "room": "A139", "floor": 1 },
        { "id": 59, "name": "Franz Hall", "room": "1178", "floor": 1 },
        { "id": 60, "name": "Franz Hall", "room": "1260", "floor": 1 },
        { "id": 61, "name": "Franz Hall", "room": "2258A", "floor": 2 },
        { "id": 62, "name": "Franz Hall", "room": "2288", "floor": 2 },
        { "id": 63, "name": "Geology Building", "room": "3656", "floor": 3 },
        { "id": 64, "name": "Geology Building", "room": "4645", "floor": 4 },
        { "id": 65, "name": "Geology Building", "room": "4660", "floor": 4 },
        { "id": 66, "name": "Geology Building", "room": "6704", "floor": 6 },
        { "id": 67, "name": "Haines Hall", "room": "110", "floor": 1 },
        { "id": 68, "name": "Haines Hall", "room": "118", "floor": 1 },
        { "id": 69, "name": "Haines Hall", "room": "122", "floor": 1 },
        { "id": 70, "name": "Haines Hall", "room": "220", "floor": 2 },
        { "id": 71, "name": "Haines Hall", "room": "39", "floor": 3 },
        { "id": 72, "name": "Haines Hall", "room": "A18", "floor": 1 },
        { "id": 73, "name": "Haines Hall", "room": "A2", "floor": 2 },
        { "id": 74, "name": "Haines Hall", "room": "A20", "floor": 2 },
        { "id": 75, "name": "Haines Hall", "room": "A24", "floor": 2 },
        { "id": 76, "name": "Haines Hall", "room": "A25", "floor": 2 },
        { "id": 77, "name": "Haines Hall", "room": "A28", "floor": 2 },
        { "id": 78, "name": "Haines Hall", "room": "A44", "floor": 4 },
        { "id": 79, "name": "Haines Hall", "room": "A6", "floor": 6 },
        { "id": 80, "name": "Haines Hall", "room": "A74", "floor": 7 },
        { "id": 81, "name": "Haines Hall", "room": "A76", "floor": 7 },
        { "id": 82, "name": "Haines Hall", "room": "A78", "floor": 7 },
        { "id": 83, "name": "Haines Hall", "room": "A82", "floor": 8 },
        { "id": 84, "name": "Kaplan Hall", "room": "135", "floor": 1 },
        { "id": 85, "name": "Kaplan Hall", "room": "169", "floor": 1 },
        { "id": 86, "name": "Kaplan Hall", "room": "A26", "floor": 2 },
        { "id": 87, "name": "Kaplan Hall", "room": "A30", "floor": 3 },
        { "id": 88, "name": "Kaplan Hall", "room": "A32", "floor": 3 },
        { "id": 89, "name": "Kaplan Hall", "room": "A40", "floor": 4 },
        { "id": 90, "name": "Kaplan Hall", "room": "A46", "floor": 4 },
        { "id": 91, "name": "Kaplan Hall", "room": "A48", "floor": 4 },
        { "id": 92, "name": "Kaplan Hall", "room": "A51", "floor": 5 },
        { "id": 93, "name": "Kaplan Hall", "room": "A56", "floor": 5 },
        { "id": 94, "name": "Kaplan Hall", "room": "A60", "floor": 6 },
        { "id": 95, "name": "Kaplan Hall", "room": "A65", "floor": 6 },
        { "id": 96, "name": "Kaplan Hall", "room": "A66", "floor": 6 },
        { "id": 97, "name": "Kaplan Hall", "room": "A68", "floor": 6 },
        { "id": 98, "name": "Kaufman Hall", "room": "101", "floor": 1 },
        { "id": 99, "name": "Kaufman Hall", "room": "136", "floor": 1 },
        { "id": 100, "name": "Kaufman Hall", "room": "153", "floor": 1 },
        { "id": 101, "name": "Kinsey Pavilion", "room": "1200B", "floor": 1 },
        { "id": 102, "name": "Kinsey Pavilion", "room": "1220B", "floor": 1 },
        { "id": 103, "name": "Kinsey Pavilion", "room": "1240B", "floor": 1 },
        { "id": 104, "name": "La Kretz Hall", "room": "100", "floor": 1 },
        { "id": 105, "name": "La Kretz Hall", "room": "101", "floor": 1 },
        { "id": 106, "name": "La Kretz Hall", "room": "110", "floor": 1 },
        { "id": 107, "name": "La Kretz Hall", "room": "120", "floor": 1 },
        { "id": 108, "name": "Mathematical Sciences", "room": "3915A", "floor": 3 },
        { "id": 109, "name": "Mathematical Sciences", "room": "3915D", "floor": 3 },
        { "id": 110, "name": "Mathematical Sciences", "room": "3915G", "floor": 3 },
        { "id": 111, "name": "Mathematical Sciences", "room": "3915H", "floor": 3 },
        { "id": 112, "name": "Mathematical Sciences", "room": "4000A", "floor": 4 },
        { "id": 113, "name": "Mathematical Sciences", "room": "5117", "floor": 5 },
        { "id": 114, "name": "Mathematical Sciences", "room": "5118", "floor": 5 },
        { "id": 115, "name": "Mathematical Sciences", "room": "5127", "floor": 5 },
        { "id": 116, "name": "Mathematical Sciences", "room": "5128", "floor": 5 },
        { "id": 117, "name": "Mathematical Sciences", "room": "5137", "floor": 5 },
        { "id": 118, "name": "Mathematical Sciences", "room": "5138", "floor": 5 },
        { "id": 119, "name": "Mathematical Sciences", "room": "5147", "floor": 5 },
        { "id": 120, "name": "Mathematical Sciences", "room": "5148", "floor": 5 },
        { "id": 121, "name": "Mathematical Sciences", "room": "5200", "floor": 5 },
        { "id": 122, "name": "Mathematical Sciences", "room": "5203", "floor": 5 },
        { "id": 123, "name": "Mathematical Sciences", "room": "5217", "floor": 5 },
        { "id": 124, "name": "Mathematical Sciences", "room": "5225", "floor": 5 },
        { "id": 125, "name": "Mathematical Sciences", "room": "5233", "floor": 5 },
        { "id": 126, "name": "Mathematical Sciences", "room": "6201", "floor": 6 },
        { "id": 127, "name": "Mathematical Sciences", "room": "6229", "floor": 6 },
        { "id": 128, "name": "Mathematical Sciences", "room": "7608", "floor": 7 },
        { "id": 129, "name": "Moore Hall", "room": "100", "floor": 1 },
        { "id": 130, "name": "Moore Hall", "room": "1003", "floor": 1 },
        { "id": 131, "name": "Perloff Hall", "room": "1102", "floor": 1 },
        { "id": 132, "name": "Physics and Astronomy Building", "room": "1425", "floor": 1 },
        { "id": 133, "name": "Physics and Astronomy Building", "room": "1434A", "floor": 1 },
        { "id": 134, "name": "Physics and Astronomy Building", "room": "1749", "floor": 1 },
        { "id": 135, "name": "Physics and Astronomy Building", "room": "2434", "floor": 2 },
        { "id": 136, "name": "Physics and Astronomy Building", "room": "2748", "floor": 2 },
        { "id": 137, "name": "Public Affairs Building", "room": "1222", "floor": 1 },
        { "id": 138, "name": "Public Affairs Building", "room": "1234", "floor": 1 },
        { "id": 139, "name": "Public Affairs Building", "room": "1246", "floor": 1 },
        { "id": 140, "name": "Public Affairs Building", "room": "1256", "floor": 1 },
        { "id": 141, "name": "Public Affairs Building", "room": "1264", "floor": 1 },
        { "id": 142, "name": "Public Affairs Building", "room": "1270", "floor": 1 },
        { "id": 143, "name": "Public Affairs Building", "room": "1278", "floor": 1 },
        { "id": 144, "name": "Public Affairs Building", "room": "1284", "floor": 1 },
        { "id": 145, "name": "Public Affairs Building", "room": "1323", "floor": 1 },
        { "id": 146, "name": "Public Affairs Building", "room": "1329", "floor": 1 },
        { "id": 147, "name": "Public Affairs Building", "room": "1337", "floor": 1 },
        { "id": 148, "name": "Public Affairs Building", "room": "1343", "floor": 1 },
        { "id": 149, "name": "Public Affairs Building", "room": "2214", "floor": 2 },
        { "id": 150, "name": "Public Affairs Building", "room": "2232", "floor": 2 },
        { "id": 151, "name": "Public Affairs Building", "room": "2238", "floor": 2 },
        { "id": 152, "name": "Public Affairs Building", "room": "2242", "floor": 2 },
        { "id": 153, "name": "Public Affairs Building", "room": "2250", "floor": 2 },
        { "id": 154, "name": "Public Affairs Building", "room": "2270", "floor": 2 },
        { "id": 155, "name": "Public Affairs Building", "room": "2278", "floor": 2 },
        { "id": 156, "name": "Public Affairs Building", "room": "2284", "floor": 2 },
        { "id": 157, "name": "Public Affairs Building", "room": "2292", "floor": 2 },
        { "id": 158, "name": "Public Affairs Building", "room": "2317", "floor": 2 },
        { "id": 159, "name": "Public Affairs Building", "room": "2319", "floor": 2 },
        { "id": 160, "name": "Public Affairs Building", "room": "2325", "floor": 2 },
        { "id": 161, "name": "Public Affairs Building", "room": "2333", "floor": 2 },
        { "id": 162, "name": "Rolfe Hall", "room": "1200", "floor": 1 },
        { "id": 163, "name": "Rolfe Hall", "room": "3105", "floor": 3 },
        { "id": 164, "name": "Rolfe Hall", "room": "3108", "floor": 3 },
        { "id": 165, "name": "Rolfe Hall", "room": "3115", "floor": 3 },
        { "id": 166, "name": "Rolfe Hall", "room": "3116", "floor": 3 },
        { "id": 167, "name": "Rolfe Hall", "room": "3120", "floor": 3 },
        { "id": 168, "name": "Rolfe Hall", "room": "3121", "floor": 3 },
        { "id": 169, "name": "Rolfe Hall", "room": "3126", "floor": 3 },
        { "id": 170, "name": "Rolfe Hall", "room": "3129", "floor": 3 },
        { "id": 171, "name": "Rolfe Hall", "room": "3134", "floor": 3 },
        { "id": 172, "name": "Rolfe Hall", "room": "3135", "floor": 3 },
        { "id": 173, "name": "Royce Hall", "room": "148", "floor": 1 },
        { "id": 174, "name": "Royce Hall", "room": "150", "floor": 1 },
        { "id": 175, "name": "Royce Hall", "room": "152", "floor": 1 },
        { "id": 176, "name": "Royce Hall", "room": "154", "floor": 1 },
        { "id": 177, "name": "Royce Hall", "room": "156", "floor": 1 },
        { "id": 178, "name": "Royce Hall", "room": "160", "floor": 1 },
        { "id": 179, "name": "Royce Hall", "room": "162", "floor": 1 },
        { "id": 180, "name": "Royce Hall", "room": "164", "floor": 1 },
        { "id": 181, "name": "Royce Hall", "room": "166", "floor": 1 },
        { "id": 182, "name": "Royce Hall", "room": "190", "floor": 1 },
        { "id": 183, "name": "Royce Hall", "room": "362", "floor": 3 },
        { "id": 184, "name": "Slichter", "room": "2834", "floor": 2 },
        { "id": 185, "name": "Young Hall", "room": "1044", "floor": 1 },
        { "id": 186, "name": "Young Hall", "room": "2200", "floor": 2 },
        { "id": 187, "name": "Young Hall", "room": "4216", "floor": 4 },
        { "id": 188, "name": "Young Hall", "room": "CS24", "floor": 1 },
        { "id": 189, "name": "Young Hall", "room": "CS50", "floor": 1 },
        { "id": 190, "name": "Young Hall", "room": "CS76", "floor": 7 },
        { "id": 190, "name": "Daddy Gene's Room", "room": "Murphy Hall", "floor": 2 },

    ]

    const [input, setInput] = useState("");

    return (


        <View style={{ flex: 1 }} className="bg-white">

            <View className="items-center mt-4">
                <Text className="font-bold text-lg">Set Delivery Location</Text>
            </View>
            <View className=" space-x-2 mt-4 mx-6 px-3 flex-row bg-gray-100  rounded-xl items-center">
                <Feather name='search' size={25} color='black' />

                <View className=" w-full">
                    <TextInput height={50} maxLength={30} value={input} onChangeText={(text) => setInput(text)} className="text-lg mb-2" placeholder='Search "Haines Hall 110"' />
                </View>
            </View>

            <View className="mb-48">
                <SearchFilter data={words} input={input} setInput={setInput} />
            </View>

        </View>
    )
}

export default SetLocation