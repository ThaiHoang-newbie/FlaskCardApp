import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Play_screen from './src/page/play_screen/play_screen';
import Setting from './src/page/setting/setting';
import { DarkModeProvider } from './src/DarkModeContext';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <DarkModeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={
            ({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Setting') {
                  iconName = focused ? 'ios-list' : 'ios-list-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#FF6969',
              tabBarInactiveTintColor: 'gray',
            })}
        >
          <Tab.Screen name="Home" component={Play_screen} />
          <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>

      </NavigationContainer>
    </DarkModeProvider>
  );
}


const styles = StyleSheet.create({
  container: {
  },

});