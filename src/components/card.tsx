import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default Card;