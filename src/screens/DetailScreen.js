import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailScreen({ route }) {
  const { diary } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.date}>{diary.date}</Text>
        <Text style={styles.mood}>Mood: {diary.mood}</Text>
        <Text style={styles.title}>{diary.title}</Text>
        <View style={styles.divider} />
        <Text style={styles.content}>{diary.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fdf6f8', padding: 20 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: '#f0d9df' },
  date: { fontSize: 12, color: '#888', marginBottom: 4 },
  mood: { fontSize: 14, fontWeight: 'bold', color: '#d86b84', marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  divider: { height: 1, backgroundColor: '#eee', marginBottom: 12 },
  content: { fontSize: 15, color: '#555', lineHeight: 22 },
});