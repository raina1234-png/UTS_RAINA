import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddDiaryScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('😊 Senang');

  const handleSave = () => {
    if (!title || !content) {
      alert('Judul dan isi catatan tidak boleh kosong!');
      return;
    }
    alert('Catatan berhasil ditambahkan!');
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Judul Catatan</Text>
      <TextInput style={styles.input} placeholder="Masukkan judul..." value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Pilih Mood</Text>
      <TextInput style={styles.input} placeholder="Misal: 😊 Senang" value={mood} onChangeText={setMood} />

      <Text style={styles.label}>Isi Catatan</Text>
      <TextInput style={[styles.input, styles.textArea]} placeholder="Tuliskan hari-mu..." multiline value={content} onChangeText={setContent} />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Simpan Catatan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fdf6f8', padding: 20 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#555', marginBottom: 6, marginTop: 12 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e6c7d0', borderRadius: 8, padding: 12, fontSize: 14 },
  textArea: { height: 120, textAlignVertical: 'top' },
  saveButton: { backgroundColor: '#d86b84', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 24 },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});