import SafeAreaBackground from '@/components/safe-area-background';
import { ThemedView } from '@/components/themed-view';
import CardComponent from '@/components/tutor-sessions/Card';
import { StyleSheet } from 'react-native';

const TutorSessionsScreen = () => {
  return (
    <SafeAreaBackground>
      <ThemedView style={styles.container}>
        <CardComponent title="TECSUP BOT" destiny="/tutor-session/assistant" icon="robot-excited-outline"/>
        <CardComponent title="TECSUP VOICE" destiny="/(tabs)/tutor-session/voice" icon="microphone-outline"/>
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
  item: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 6,
  },
});

export default TutorSessionsScreen;