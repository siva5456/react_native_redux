
import React from 'react'
import Cart from '../screens/Cart'
import Products from '../screens/Products'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
const Stack=createStackNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Products" component={Products} options={{headerShown:false}} />
    <Stack.Screen name="Cart" component={Cart} />
  </Stack.Navigator>
  </NavigationContainer>

  )
}

export default AppNavigator