import SafeAreaBackground from '@/components/safe-area-background';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <SafeAreaBackground>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Perfil</ThemedText>
        <ThemedText>Este es un placeholder de perfil. Conecta con tu sistema de autenticación para mostrar datos reales.</ThemedText>
      </ThemedView>
    </SafeAreaBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 8,
    height: '100%',
  },
});

export default ProfileScreen;