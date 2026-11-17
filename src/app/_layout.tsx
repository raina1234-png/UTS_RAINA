import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#d86b84' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'DiaryCard - Home' }} />
      <Stack.Screen name="add-diary" options={{ title: 'Tambah Catatan' }} />
      <Stack.Screen name="detail" options={{ title: 'Detail Catatan' }} />
      <Stack.Screen name="about" options={{ title: 'Tentang Aplikasi' }} />
    </Stack>
  );
}