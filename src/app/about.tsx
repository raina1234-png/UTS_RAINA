import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tentang Aplikasi</Text>
        <Text style={styles.text}>Aplikasi **DiaryCard** dibuat untuk memenuhi UTS Mobile Programming Native.</Text>
        <Text style={styles.text}>👤 Teknik Informatika UMMI</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fdf6f8', padding: 20, justifyContent: 'center' },
  card: { backgroundColor: '#fff', padding: 24, borderRadius: 12, borderWidth: 1, borderColor: '#f0d9df', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', color: '#d86b84', marginBottom: 12 },
  text: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 8, lineHeight: 20 },
});