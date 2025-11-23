import SafeAreaBackground from '@/components/safe-area-background';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { getEstadisticasUsuarios } from '@/services/userService';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

const DashboardScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    try {
      setLoading(true);
      const estadisticas = await getEstadisticasUsuarios();
      console.log(estadisticas);
    } catch (err) {
      setError((err as Error).message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    getData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SafeAreaBackground>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Dashboard</ThemedText>
        
        {loading && <ThemedText>Cargando...</ThemedText>}
        {error && <ThemedText>{error}</ThemedText>}
        
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
   glassView: {
    position: 'absolute',
    top: 100,
    width: "90%",
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default DashboardScreen;