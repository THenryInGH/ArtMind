import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TherapyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>AI Therapy Assistant</Text>
          <Text style={styles.subtitle}>Your personal mental wellness companion</Text>
        </View>

        <View style={styles.chatContainer}>
          <View style={styles.messageReceived}>
            <Text style={styles.messageText}>
              Hello! I'm here to support you on your mental wellness journey. How can I help you today?
            </Text>
          </View>

          <View style={styles.messagePlaceholder}>
            <Text style={styles.placeholderText}>Type your message...</Text>
          </View>
        </View>

        <View style={styles.suggestionsContainer}>
          <Text style={styles.sectionTitle}>Suggested Topics</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.topicsScroll}>
            <View style={styles.topicChip}>
              <Text style={styles.topicText}>Stress Management</Text>
            </View>
            <View style={styles.topicChip}>
              <Text style={styles.topicText}>Anxiety</Text>
            </View>
            <View style={styles.topicChip}>
              <Text style={styles.topicText}>Sleep Issues</Text>
            </View>
            <View style={styles.topicChip}>
              <Text style={styles.topicText}>Relationships</Text>
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
  chatContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    minHeight: 400,
  },
  messageReceived: {
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    borderTopLeftRadius: 4,
    padding: 16,
    marginBottom: 16,
    maxWidth: '80%',
  },
  messageText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  messagePlaceholder: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    padding: 16,
  },
  placeholderText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#9CA3AF',
  },
  suggestionsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#111827',
    marginBottom: 16,
  },
  topicsScroll: {
    flexDirection: 'row',
  },
  topicChip: {
    backgroundColor: '#EEF2FF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  topicText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#4F46E5',
  },
});