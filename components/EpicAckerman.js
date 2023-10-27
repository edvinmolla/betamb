import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { Divider } from 'react-native-elements';

const EpicAckerman = () => {
    return (

        <View className="mb-16">



            <View>
                <View>
                    <Text className="font-bold text-black text-lg pl-4 pt-4">Grab a sandwich</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 15 }}>


                    <CategoryCard rating={98} description="Chicken breast, fresh mozzarella, tomato, pesto, arugula, more." price={9.75} imgUrl="https://hips.hearstapps.com/hmg-prod/images/delish-211105-popeyes-chicken-sandwich-001-ab-web-1637207425.jpg?crop=0.8895238095238095xw:1xh;center,top&resize=1200:*" title="Chicken Caprese Sandwich" />
                    <CategoryCard rating={94} description="Salami, Capocollo, Mortadella, Prosciutto, Tomato, Red Onion," price={9.75} imgUrl="https://www.sargento.com/assets/Uploads/Recipe/Image/Sargento11501__FillWzExNzAsNTgzXQ.jpg" title="Italian Sandwich" />
                    <CategoryCard rating={88} description="Baby spinach, caramelized red onion, portabella mushrooms, Campari" price={8.95} imgUrl="https://www.theedgyveg.com/wp-content/uploads/2022/03/DSC02269WEB.jpg" title="Vegetarian Ciabatta Sandwich" />

                </ScrollView>

            </View>

            <Divider orientation="horizontal" color="#eee" className="mt-4" width={8} />

            <View>
                <View>
                    <Text className="font-bold text-black text-lg pl-4 pt-4">Naepolitan specials</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 15 }}>


                    <CategoryCard rating={96} description="Mozzarella, pomodoro, basil, more." price={9.95} imgUrl="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" title="Margherita Pizza" />
                    <CategoryCard rating={90} description="Mozzarella, pomodoro, oregano" price={9.95} imgUrl="https://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg" title="Mozzarella Pizza" />
                    <CategoryCard rating={97} description="Pepperoni, red onions, mozzarella, pomodoro" price={10.95} imgUrl="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" title="Pepperoni Pizza" />
                    <CategoryCard rating={83} description="Garlic, ricotta, mozzarella, Parmesan, dry oregano, thyme, red pepper flakes" price={10.95} imgUrl="https://img.taste.com.au/FAjzyK-1/taste/2016/11/pizza-bianca-75328-1.jpeg" title="Pizza Bianca" />


                </ScrollView>

            </View>

            <Divider orientation="horizontal" color="#eee" className="mt-4" width={8} />


            <View>
                <View>
                    <Text className="font-bold text-black text-lg pl-4 pt-4">Salads</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 15 }}>


                    <CategoryCard rating={98} description="Romaine hearts, garlic crouton, Parmesan, anchovy vinaigrette, more." price={8.95} imgUrl="https://mangia.nyc/wp-content/uploads/2020/08/Garlic-Caesar-Salad-Recipe-4-1200x900.jpg" title="Caesar Salad" />
                    <CategoryCard rating={94} description="Romaine, radicchio, tomatoes, red onion, cucumber, Kalamata olives, feta, lemon oregano vinaigrette, more." price={8.95} imgUrl="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg" title="Greek Salad" />
                    <CategoryCard rating={90} description="Market lettuces, chopped tomato, avocado, red onion, salami, Castelvetrano olives, garbanzo beans, provolone, red wine herb vinaigrette, more." price={9.95} imgUrl="https://static01.nyt.com/images/2022/07/15/dining/MC-Chopped-Salad-15SALADREX/merlin_209652387_1b5eee4c-9da5-443c-90e0-db20ee51a246-threeByTwoMediumAt2X.jpg" title="Our Chopped Salad" />
                    <CategoryCard rating={92} description="Romaine Lettuce, radicchio,arugula with citrus segments, basil, almonds,radish, cider vinaigrette, more." price={8.75} imgUrl="https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad-1.jpg" title="The Best Simple Salad" />

                </ScrollView>

            </View>

            <Divider orientation="horizontal" color="#eee" className="mt-4" width={8} />


            <View>
                <View>
                    <Text className="font-bold text-black text-lg pl-4 pt-4">How 'bout a Pizza pie?</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 15 }}>


                    <CategoryCard rating={92} description="Cornmeal, Cheese, Jalapeno Pie, filled with Pomodoro Sauce, Mozzarella, Fontina, Chicken, Parmesan and Pesto Sauce, more." price={8.95} imgUrl="https://assets.kraftfoods.com/recipe_images/opendeploy/191147_640x428.jpg" title="Chicken Parmesan Pie" />
                    <CategoryCard rating={94} description="Shrimp, calamari, salmon, pomodoro, mozzarella, fresh herbs, more." price={8.95} imgUrl="https://img.taste.com.au/7EPY0hwv/taste/2022/03/easy-one-pot-seafood-pie-177339-2.jpg" title="Frutti De Mare Pie" />
                    <CategoryCard rating={93} description="Pepperoni, meatballs, sautéed mushrooms, peppers, red onion, sausage, mozzarella, Parmesan, more." price={9.95} imgUrl="https://static01.nyt.com/images/2022/07/15/dining/MC-Chopped-Salad-15SALADREX/merlin_209652387_1b5eee4c-9da5-443c-90e0-db20ee51a246-threeByTwoMediumAt2X.jpg" title="Mambo Italiano Pie" />
                   
                </ScrollView>

            </View>

            <Divider orientation="horizontal" color="#eee" className="mt-4" width={8} />


            <View>
                <View>
                    <Text className="font-bold text-black text-lg pl-4 pt-4">Pastas</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 15 }}>


                    <CategoryCard rating={96} description="Parmesan garlic sauce, broccolini, chicken breast, more." price={10.95} imgUrl="https://www.saltandlavender.com/wp-content/uploads/2021/08/garlic-chicken-pasta-recipe-1.jpg" title="Creamy Garlic Parmesan Chicken Fettuccine" />
                    <CategoryCard rating={97} description="Parmesan garlic sauce, broccolini, more." price={9.75} imgUrl="https://www.allrecipes.com/thmb/9aWCdbfttLcsW2dFQWwVQBGJM3E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-236973-CreamyAlfredoSauce-0238-4x3-1-01e7091f47ae452d991abe32cbed5921.jpg" title="Creamy Garlic Parmesan Fettuccine" />
                    <CategoryCard rating={95} description="Parmesan garlic sauce, broccolini, smoked salmon, more." price={10.95} imgUrl="https://images.getrecipekit.com/20220621135229-salmon-20fettuccine-20alfredo-20img-202.jpeg?class=16x9" title="Fettuccine Alfredo w/ Salmon" />
                    <CategoryCard rating={95} description="House made Bolognese Sauce, Garlic, Butter, BAsil and Parmesan Cheese, more." price={10.95} imgUrl="https://supervalu.ie/image/var/files/real-food/recipes/Uploaded-2020/spaghetti-bolognese-recipe.jpg" title="Spaghetti Bolognese" />
                    <CategoryCard rating={85} description="Pomodoro, basil, Parmesan, more." price={10.95} imgUrl="https://www.seriouseats.com/thmb/ou1coX3xvvI7lsVZFDADVZJlDYQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220811-Spaghetti-al-Pomodoro-Crudo--Amanda-Suarez-HERO-5dda9340bb1c4b90ac556108ea12b3d4.JPG" title="Spaghetti Pomodoro" />  

                </ScrollView>

            </View>

           


        </View>

    );
};

export default EpicAckerman;