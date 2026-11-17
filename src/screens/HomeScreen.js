import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DiaryCardItem from '../components/DiaryCardItem';

export default function HomeScreen({ navigation }) {
  // Menggunakan State (Poin d: Hooks)
  const [diaries, setDiaries] = useState([
    { id: '1', title: 'Belajar React Native', content: 'Hari ini mempelajari konsep dasar component, props, dan state.', mood: '😊 Senang', date: '10 Nov 2026' },
    { id: '2', title: 'Mengerjakan UTS', content: 'Menyelesaikan project Mobile Programming dengan baik dan terstruktur.', mood: '🚀 Bersemangat', date: '11 Nov 2026' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>✨ Daily Diary App ✨</Text>
      
      <FlatList
        data={diaries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DiaryCardItem 
            item={item} 
            onPress={() => navigation.navigate('Detail', { diary: item })} // Mengirim data via Props/Params
          />
        )}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => navigation.navigate('AddDiary', { 
            addDiaryHandler: (newDiary) => setDiaries([newDiary, ...diaries]) 
          })}
        >
          <Text style={styles.addButtonText}>+ Tambah Catatan Baru</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.aboutButton} 
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.aboutButtonText}>Tentang Aplikasi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fdf6f8', padding: 16, paddingTop: 40 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#c75b7a', textAlign: 'center', marginBottom: 20 },
  listContainer: { paddingBottom: 20 },
  buttonContainer: { gap: 10 },
  addButton: { backgroundColor: '#d86b84', padding: 14, borderRadius: 10, alignItems: 'center' },
  addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  aboutButton: { backgroundColor: '#fff', padding: 12, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: '#d86b84' },
  aboutButtonText: { color: '#d86b84', fontSize: 14, fontWeight: 'bold' },
});