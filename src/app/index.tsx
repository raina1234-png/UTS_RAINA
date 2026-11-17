import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [diaries, setDiaries] = useState([
    { id: '1', title: 'Belajar React Native', content: 'Mempelajari komponen, props, state, dan routing.', mood: '😊 Senang', date: '10 Nov 2026' },
    { id: '2', title: 'Mengerjakan UTS', content: 'Menyelesaikan tugas Mobile Programming dengan baik dan benar.', mood: '🚀 Bersemangat', date: '11 Nov 2026' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>✨ Daily Diary App ✨</Text>
      
      <FlatList
        data={diaries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => router.push({ pathname: '/detail', params: item })}
          >
            <View style={styles.headerCard}>
              <Text style={styles.mood}>Mood: {item.mood}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.content} numberOfLines={2}>{item.content}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => router.push('/add-diary')}
      >
        <Text style={styles.addButtonText}>+ Tambah Catatan Baru</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.aboutButton} 
        onPress={() => router.push('/about')}
      >
        <Text style={styles.aboutButtonText}>Tentang Aplikasi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fdf6f8', padding: 16 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#c75b7a', textAlign: 'center', marginVertical: 16 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#f0d9df' },
  headerCard: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  mood: { fontSize: 14, fontWeight: 'bold', color: '#d86b84' },
  date: { fontSize: 12, color: '#888' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  content: { fontSize: 14, color: '#666' },
  addButton: { backgroundColor: '#d86b84', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  aboutButton: { backgroundColor: '#fff', padding: 12, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: '#d86b84', marginTop: 10 },
  aboutButtonText: { color: '#d86b84', fontSize: 14, fontWeight: 'bold' },
});