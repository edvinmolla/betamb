
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import BottomTabNavigation from './components/BottomTabNavigation';
import QuickFoodScreen from './screens/QuickFoodScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import SetLocation from './screens/SetLocation';
import { Provider } from 'react-redux';
import { Store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import RestaurantScreen from "./screens/RestaurantScreen";
import { useFonts } from 'expo-font';
import OrderTrackScreen from "./screens/OrderTrackScreen";

const Stack = createNativeStackNavigator();

export default function App() {



  const [loaded] = useFonts({
    'UberBold': require('./assets/fonts/UberBold.otf'),
    'UberLight': require('./assets/fonts/UberLight.otf'),
    'UberMedium': require('./assets/fonts/UberMedium.otf'),
    'UberMove': require('./assets/fonts/UberMove.otf'),
  });


  return (

    <Provider store={Store}>
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="QuickFoodScreen" component={QuickFoodScreen} options={{ headerShown: false, presentation: 'fullscreenModal' }} />
          <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: false, presentation: 'modal' }} />
          <Stack.Screen name="SetLocation" component={SetLocation} options={{ headerShown: false, presentation: 'modal' }} />
          <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OrderTrackScreen" component={OrderTrackScreen} options={{ headerShown: false, presentation: 'fullScreenModal' }} />

        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

