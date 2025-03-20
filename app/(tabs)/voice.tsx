import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mic } from 'lucide-react-native';

export default function VoiceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Voice Journal</Text>
          <Text style={styles.subtitle}>Record your thoughts and feelings</Text>
        </View>

        <View style={styles.recordCard}>
          <View style={styles.recordButton}>
            <Mic size={32} color="#4F46E5" />
          </View>
          <Text style={styles.recordText}>Tap to start recording</Text>
        </View>

        <View style={styles.entriesContainer}>
          <Text style={styles.sectionTitle}>Recent Recordings</Text>
          <View style={styles.entryList}>
            <View style={styles.entryItem}>
              <Text style={styles.entryTitle}>Morning Reflection</Text>
              <Text style={styles.entryMeta}>2 min • Today, 9:30 AM</Text>
            </View>
            <View style={styles.entryItem}>
              <Text style={styles.entryTitle}>Evening Thoughts</Text>
              <Text style={styles.entryMeta}>5 min • Yesterday, 8:45 PM</Text>
            </View>
            <View style={styles.entryItem}>
              <Text style={styles.entryTitle}>Weekly Goals</Text>
              <Text style={styles.entryMeta}>3 min • 2 days ago</Text>
            </View>
          </View>
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
  recordCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 32,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  recordText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#4F46E5',
  },
  entriesContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#111827',
    marginBottom: 16,
  },
  entryList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  entryItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  entryTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#111827',
    marginBottom: 4,
  },
  entryMeta: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
});