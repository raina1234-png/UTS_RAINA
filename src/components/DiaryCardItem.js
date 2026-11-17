import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DiaryCardItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.headerCard}>
        <Text style={styles.mood}>Mood: {item.mood}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.content} numberOfLines={2}>{item.content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f0d9df', // Nuansa soft pink / rose gold
    elevation: 2,
  },
  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  mood: { fontSize: 14, fontWeight: 'bold', color: '#d86b84' },
  date: { fontSize: 12, color: '#888' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  content: { fontSize: 14, color: '#666' },
});