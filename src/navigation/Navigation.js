import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ImageDishes from '../screens/ImageDishes';



const Stack = createStackNavigator ();

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{title:'DishList'}}/>
            <Stack.Screen name="imagedishes" component={ImageDishes} options={{title:'DishCard'}}/>
        </Stack.Navigator>
    )
}

export default Navigation


