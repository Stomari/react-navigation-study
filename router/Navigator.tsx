import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import Home from '../pages/home/Home';
import HelloWorld from '../pages/helloWorld/HelloWorld';
import User from '../pages/user/User';

// Types
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => (
  <NavigationContainer>
    {/* Navigator contains Screen elements to define the routes */}
    <Stack.Navigator>
      {/*
        Routers configuration
        The order of the routes matter, Home will be the first route to render
      */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="HelloWorld"
        component={HelloWorld}
        options={{
          title: 'Hello World',
        }}
      />
      <Stack.Screen name="User" component={User} initialParams={{userId: ''}} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
