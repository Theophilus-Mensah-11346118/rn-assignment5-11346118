import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BottomTab from './BottomTab';
import { ThemeProvider } from './ThemeContext'; 

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <BottomTab />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
