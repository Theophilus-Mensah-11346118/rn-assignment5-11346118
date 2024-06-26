import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext';

const Homepage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View>
        <View style={styles.header}>
          <Image source={require('./assets/profile.png')} style={styles.profileIcon} />
          <View style={styles.profileText}>
            <Text style={[styles.welcomeText, { color: theme.colors.text }]}>Welcome back,</Text>
            <Text style={[styles.profileName, { color: theme.colors.text }]}>Eric Atsu</Text>
          </View>
          <Image source={require('./assets/search.png')} style={styles.searchIcon} />
        </View>
        <View>
          <Image source={require('./assets/Card.png')} style={styles.cardImage} />
        </View>
        <View style={styles.iconsSection}>
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <Image source={require('./assets/send.png')} style={styles.icon} />
            </View>
            <Text style={{ color: theme.colors.text }}>Send</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <Image source={require('./assets/recieve.png')} style={styles.icon} />
            </View>
            <Text style={{ color: theme.colors.text }}>Receive</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <Image source={require('./assets/loan.png')} style={styles.icon} />
            </View>
            <Text style={{ color: theme.colors.text }}>Loan</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <Image source={require('./assets/topUp.png')} style={styles.icon} />
            </View>
            <Text style={{ color: theme.colors.text }}>Topup</Text>
          </View>
        </View>
      </View>
      <View style={styles.transactionSection}>
        <View style={styles.transactionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Transaction</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.transactionItem, { backgroundColor: theme.colors.background }]}>
          <View style={styles.transactionDetails}>
            <View style={styles.iconCircles}>
              <Image source={require('./assets/apple.png')} style={styles.transactionIcon} />
            </View>
            <View style={styles.transactionTextContainer}>
              <Text style={[styles.transactionText, { color: theme.colors.text }]}>Apple Store</Text>
              <Text style={[styles.transactionSubText, { color: theme.colors.text }]}>Entertainment</Text>
            </View>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.colors.text }]}>-$5.99</Text>
        </View>
        <View style={[styles.transactionItem, { backgroundColor: theme.colors.background }]}>
          <View style={styles.transactionDetails}>
            <View style={styles.iconCircles}>
              <Image source={require('./assets/spotify.png')} style={styles.transactionIcon} />
            </View>
            <View style={styles.transactionTextContainer}>
              <Text style={[styles.transactionText, { color: theme.colors.text }]}>Spotify</Text>
              <Text style={[styles.transactionSubText, { color: theme.colors.text }]}>Music</Text>
            </View>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.colors.text }]}>-$12.99</Text>
        </View>
        <View style={[styles.transactionItem, { backgroundColor: theme.colors.background }]}>
          <View style={styles.transactionDetails}>
            <View style={styles.iconCircles}>
              <Image source={require('./assets/moneyTransfer.png')} style={styles.transactionIcon} />
            </View>
            <View style={styles.transactionTextContainer}>
              <Text style={[styles.transactionText, { color: theme.colors.text }]}>MoneyTransfer</Text>
              <Text style={[styles.transactionSubText, { color: theme.colors.text }]}>Transaction</Text>
            </View>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.colors.text }]}>$300</Text>
        </View>
        <View style={[styles.transactionItem, { backgroundColor: theme.colors.background }]}>
          <View style={styles.transactionDetails}>
            <View style={styles.iconCircles}>
              <Image source={require('./assets/grocery.png')} style={styles.transactionIcon} />
            </View>
            <View style={styles.transactionTextContainer}>
              <Text style={[styles.transactionText, { color: theme.colors.text }]}>Grocery</Text>
              <Text style={[styles.transactionSubText, { color: theme.colors.text }]}>Food</Text>
            </View>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.colors.text }]}>-$88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 40,
    paddingTop: 30,
  },
  profileIcon: {
    width: 40,
    height: 40,
    alignItems: 'flex-end',
  },
  profileText: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  iconsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 65,
    height: 65,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  iconCircles: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  transactionSection: {
    marginBottom: 20,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    color: 'blue',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 10,
  },
  transactionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionTextContainer: {
    flexDirection: 'column',
  },
  transactionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  transactionSubText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Homepage;
