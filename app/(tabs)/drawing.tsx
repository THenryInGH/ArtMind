import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Download, Eraser, Palette, Undo2 } from 'lucide-react-native';

const COLORS = [
  '#000000', // Black
  '#EF4444', // Red
  '#F59E0B', // Yellow
  '#10B981', // Green
  '#3B82F6', // Blue
  '#8B5CF6', // Purple
  '#EC4899', // Pink
];

const PROMPTS = [
  {
    title: 'Express Your Emotions',
    description: 'Draw how you feel right now using colors and shapes',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Safe Space',
    description: 'Illustrate a place where you feel calm and secure',
    image: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Growth Journey',
    description: 'Create a visual representation of your personal growth',
    image: 'https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=800&auto=format&fit=crop&q=60',
  },
];

export default function DrawingScreen() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Art Therapy</Text>
          <Text style={styles.subtitle}>Express yourself through drawing</Text>
        </View>

        <View style={styles.canvasCard}>
          <View style={styles.toolbar}>
            <View style={styles.toolbarLeft}>
              {COLORS.map((color) => (
                <Pressable
                  key={color}
                  style={[
                    styles.colorButton,
                    { backgroundColor: color },
                    selectedColor === color && styles.colorButtonSelected,
                  ]}
                  onPress={() => setSelectedColor(color)}
                />
              ))}
            </View>
            <View style={styles.toolbarRight}>
              <Pressable style={styles.toolButton}>
                <Eraser size={24} color="#4B5563" />
              </Pressable>
              <Pressable style={styles.toolButton}>
                <Undo2 size={24} color="#4B5563" />
              </Pressable>
              <Pressable style={styles.toolButton}>
                <Download size={24} color="#4B5563" />
              </Pressable>
            </View>
          </View>
          <View style={styles.canvas}>
            <Text style={styles.canvasPlaceholder}>Start drawing here...</Text>
          </View>
        </View>

        <View style={styles.promptsSection}>
          <Text style={styles.sectionTitle}>Drawing Prompts</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.promptsScroll}
          >
            {PROMPTS.map((prompt, index) => (
              <View key={index} style={styles.promptCard}>
                <Image
                  source={{ uri: prompt.image }}
                  style={styles.promptImage}
                />
                <View style={styles.promptContent}>
                  <Text style={styles.promptTitle}>{prompt.title}</Text>
                  <Text style={styles.promptDescription}>
                    {prompt.description}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.gallerySection}>
          <Text style={styles.sectionTitle}>Your Gallery</Text>
          <View style={styles.galleryGrid}>
            <View style={styles.galleryItem}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&auto=format&fit=crop&q=60' }}
                style={styles.galleryImage}
              />
              <Text style={styles.galleryDate}>Today, 2:30 PM</Text>
            </View>
            <View style={styles.galleryItem}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&auto=format&fit=crop&q=60' }}
                style={styles.galleryImage}
              />
              <Text style={styles.galleryDate}>Yesterday</Text>
            </View>
            <View style={styles.galleryItem}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&auto=format&fit=crop&q=60' }}
                style={styles.galleryImage}
              />
              <Text style={styles.galleryDate}>2 days ago</Text>
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
  canvasCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  toolbarLeft: {
    flexDirection: 'row',
    gap: 8,
  },
  toolbarRight: {
    flexDirection: 'row',
    gap: 8,
  },
  colorButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  colorButtonSelected: {
    borderColor: '#6366F1',
  },
  toolButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    height: 300,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvasPlaceholder: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#9CA3AF',
  },
  promptsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#111827',
    marginBottom: 16,
  },
  promptsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  promptCard: {
    width: 280,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  promptImage: {
    width: '100%',
    height: 140,
  },
  promptContent: {
    padding: 16,
  },
  promptTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#111827',
    marginBottom: 4,
  },
  promptDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  gallerySection: {
    marginBottom: 24,
  },
  galleryGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  galleryItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  galleryImage: {
    width: '100%',
    height: 120,
  },
  galleryDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    padding: 8,
  },
});