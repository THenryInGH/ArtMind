import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function JournalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Journal</Text>
          <Text style={styles.subtitle}>Express your thoughts and feelings</Text>
        </View>

        <View style={styles.entryCard}>
          <Text style={styles.entryPlaceholder}>
            What's on your mind today?
          </Text>
        </View>

        <View style={styles.promptsContainer}>
          <Text style={styles.sectionTitle}>Writing Prompts</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promptsScroll}>
            <View style={styles.promptCard}>
              <Text style={styles.promptTitle}>Gratitude</Text>
              <Text style={styles.promptText}>What are three things you're grateful for today?</Text>
            </View>
            <View style={styles.promptCard}>
              <Text style={styles.promptTitle}>Reflection</Text>
              <Text style={styles.promptText}>What was the most challenging part of your day?</Text>
            </View>
            <View style={styles.promptCard}>
              <Text style={styles.promptTitle}>Goals</Text>
              <Text style={styles.promptText}>What's one small step you can take today?</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 24,
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: '#6B7280',
  },
  entryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    minHeight: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  entryPlaceholder: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#9CA3AF',
  },
  promptsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#111827',
    marginBottom: 16,
  },
  promptsScroll: {
    flexDirection: 'row',
  },
  promptCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginRight: 16,
    width: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  promptTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#111827',
    marginBottom: 8,
  },
  promptText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
});