import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

// Context
import DataContext from './DataContext';

// Importing the screens
import Dashboard from './Screens/Dashboard';
import InstallmentScheduling from './Screens/InstallmentScheduling';
import HomeScreen from './Screens/Home';

const Stack = createStackNavigator();

export default function App() {
  const [installments, setInstallments] = useState([]);

  return (
    <DataContext.Provider value={{ installments, setInstallments }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="InstallmentScheduling" component={InstallmentScheduling} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
}
