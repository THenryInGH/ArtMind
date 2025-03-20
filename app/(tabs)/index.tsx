import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome back, Sarah</Text>
          <Text style={styles.subtitle}>How are you feeling today?</Text>
        </View>

        <View style={styles.moodCard}>
          <Text style={styles.cardTitle}>Your Mood Trends</Text>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Mood chart will be displayed here</Text>
          </View>
        </View>

        <View style={styles.insightsCard}>
          <Text style={styles.cardTitle}>AI Insights</Text>
          <Text style={styles.insightText}>
            Based on your recent entries, you've been showing positive progress in managing stress.
            Keep up with your journaling practice!
          </Text>
        </View>

        <View style={styles.actionsCard}>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <View style={styles.actionButtons}>
            <View style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Start Journaling</Text>
            </View>
            <View style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Voice Entry</Text>
            </View>
            <View style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Chat with AI</Text>
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
  greeting: {
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
  moodCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#111827',
    marginBottom: 16,
  },
  placeholder: {
    height: 200,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  insightsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  insightText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  actionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  actionButtons: {
    gap: 12,
  },
  actionButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  actionButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#374151',
  },
});