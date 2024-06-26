
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ThemeToggleButton from './ThemeToggleButton';
import { useTheme } from "./ThemeContext";

const SettingsScreen: React.FC = () => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.content}>
                <View>
                    <Text style={[styles.header, { color: theme.colors.text }]}>Settings</Text>
                </View>
                {['Language', 'My Profile', 'Contact Us', 'Change Password', 'Privacy Policy'].map((option, index) => (
                    <View key={index} style={styles.optionContainer}>
                        <View style={styles.subOptionContainer}>
                            <Text style={[styles.optionText, { color: theme.colors.text }]}>{option}</Text>
                            <Ionicons name="chevron-forward-outline" size={24} color={theme.colors.text} />
                        </View>
                        <View style={styles.line} />
                    </View>
                ))}
            </View>
            <View style={styles.bottom}>
                <Text style={[styles.themeText, { color: theme.colors.text }]}>Theme</Text>
                <ThemeToggleButton />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: '500',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    content: {
        top: 75,
        flex: 1,
        flexDirection: 'column',
    },
    optionContainer: {
        padding: 10,
        margin: 10,
    },
    subOptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 4,
        marginBottom: 8,
    },
    optionText: {
        fontSize: 18,
    },
    line: {
        width: '100%',
        height: 0.35,
        borderWidth: 0.5,
        borderColor: '#AFB0B6FF',
    },
    tuneIcon: {
        color: '#000000',
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 30,
        bottom: 40,
    },
    themeText: {
        fontSize: 22,
        fontWeight: '500',
    },
});

export default SettingsScreen;
