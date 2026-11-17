import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import AddDiaryScreen from './src/screens/AddDiaryScreen';
import DetailScreen from './src/screens/DetailScreen';
import AboutScreen from './src/screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#d86b84' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'DiaryCard' }} />
        <Stack.Screen name="AddDiary" component={AddDiaryScreen} options={{ title: 'Tambah Catatan' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Catatan' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Tentang Aplikasi' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}