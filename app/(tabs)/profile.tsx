import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, Bell, Shield, CircleHelp as HelpCircle } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>
          <Text style={styles.name}>Sarah Johnson</Text>
          <Text style={styles.email}>sarah.j@example.com</Text>
        </View>

        <View style={styles.menuSection}>
          <View style={styles.menuItem}>
            <Settings size={24} color="#111827" />
            <Text style={styles.menuText}>Settings</Text>
          </View>
          <View style={styles.menuItem}>
            <Bell size={24} color="#111827" />
            <Text style={styles.menuText}>Notifications</Text>
          </View>
          <View style={styles.menuItem}>
            <Shield size={24} color="#111827" />
            <Text style={styles.menuText}>Privacy</Text>
          </View>
          <View style={styles.menuItem}>
            <HelpCircle size={24} color="#111827" />
            <Text style={styles.menuText}>Help & Support</Text>
          </View>
        </View>

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Your Progress</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>28</Text>
              <Text style={styles.statLabel}>Journal Entries</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Voice Notes</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>45</Text>
              <Text style={styles.statLabel}>Therapy Sessions</Text>
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
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 32,
    color: '#4F46E5',
  },
  name: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 24,
    color: '#111827',
    marginBottom: 4,
  },
  email: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: '#6B7280',
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 8,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  menuText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#111827',
    marginLeft: 12,
  },
  statsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#111827',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  statNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#4F46E5',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
});