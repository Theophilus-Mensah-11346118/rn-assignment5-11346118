import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';
import Homepage from './Homepage';
import Settings from './Settings';
import { useTheme } from './ThemeContext';

const Tab = createBottomTabNavigator();

const icons = {
  Home: require('./assets/home.png'),
  'My cards': require('./assets/myCards.png'),
  Statistics: require('./assets/statictics.png'),
  Settings: require('./assets/settings.png'),
};

function BottomTab() {
  const { theme } = useTheme();
  
  const tabBarStyle = {
    height: 60,
    paddingBottom: 5,
    backgroundColor: theme.dark ? '#1B2631' : theme.colors.background,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icon = icons[route.name];
            return (
              <View style={{ alignItems: 'center' }}>
                <Image source={icon} style={{ tintColor: focused ? theme.colors.primary : theme.colors.border, width: size, height: size }} />
                <Text style={{ color: focused ? theme.colors.primary : theme.colors.border, fontSize: 12 }}>{route.name}</Text>
              </View>
            );
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.border,
          tabBarShowLabel: false,  // Disable the default tab labels
          tabBarStyle: tabBarStyle,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="My cards" component={() => null} />
        <Tab.Screen name="Statistics" component={() => null} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTab;
