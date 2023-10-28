// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';
import InstallmentScheduling from './InstallmentScheduling';


const Stack = createStackNavigator();

function Navigation() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Schedule" component={InstallmentScheduling} />
      </Stack.Navigator>
    </NavigationContainer> 
  
  );
}

export default Navigation;
