// src/components/ThemeToggleButton.tsx
import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const ThemeToggleButton: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <View style={styles.container}>
            <Switch
                value={isDarkMode}
                onValueChange={toggleTheme}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ThemeToggleButton;
