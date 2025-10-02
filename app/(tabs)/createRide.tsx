import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Explore</ThemedText>
      <ThemedText style={styles.description}>
        Welcome to the Explore tab! Check out features and example content.
      </ThemedText>

      <Link href="/modal" style={styles.link}>
        <ThemedText type="link">Open Modal Screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  description: { marginTop: 10, fontSize: 16, textAlign: 'center' },
  link: { marginTop: 20, paddingVertical: 10 },
});
