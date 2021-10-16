import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/onboarding/Welcome';

const Stack = createStackNavigator();

const headerOptionForStackPage = {
  headerStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  headerTitleStyle: {color: '#000', fontSize: 16},
  headerShown: false,
  headerTintColor: '#000',
};

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={headerOptionForStackPage}>
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
