import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { kitchenGear, GearItem } from '@/data/kitchenGear';
import NoodleBackground from '@/components/NoodleBackground';

export default function GearScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Essential');
  const insets = useSafeAreaInsets();

  const categories = ['Essential', 'Utensils', 'Microwave', 'Advanced'];
  const filteredGear = kitchenGear.filter(item => item.category === selectedCategory);

  const getLevelInfo = (level: string) => {
    switch (level) {
      case 'beginner':
        return { emoji: '🟢', text: 'BEGINNER MUST HAVE', color: '#00FF7F' };
      case 'intermediate':
        return { emoji: '🟡', text: 'INTERMEDIATE', color: '#FFD700' };
      case 'chef':
        return { emoji: '🔴', text: 'CHEF LEVEL', color: '#FF4500' };
      default:
        return { emoji: '⚪', text: 'STANDARD', color: '#CCC' };
    }
  };

  const renderGearItem = (item: GearItem) => {
    const levelInfo = getLevelInfo(item.level);
    
    return (
      <View key={item.id} style={styles.gearCard}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.6)']}
          style={styles.cardGradient}
        >
          <View style={styles.gearInfo}>
            <View style={styles.gearHeader}>
              <Text style={styles.gearName}>{item.name}</Text>
              <View style={[styles.levelBadge, { backgroundColor: levelInfo.color }]}>
                <Text style={styles.levelText}>{levelInfo.emoji} {levelInfo.text}</Text>
              </View>
            </View>
            
            <View style={styles.descriptionContainer}>
              <Text style={styles.gearDescription}>{item.description}</Text>
            </View>

            <View style={styles.tagsContainer}>
              {item.microwaveSafe && (
                <View style={styles.microwaveTag}>
                  <Text style={styles.microwaveText}>📱 MICROWAVE SAFE</Text>
                </View>
              )}
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <NoodleBackground>
      <View style={[styles.content, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Text style={styles.title}>KITCHEN GEAR</Text>
          <Text style={styles.subtitle}>🔥 TOTALLY RAD TOOLS 🔥</Text>
        </View>

        {/* Category Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <LinearGradient
                colors={selectedCategory === category 
                  ? ['#FF1493', '#FF4500'] 
                  : ['#333', '#555']
                }
                style={styles.categoryGradient}
              >
                <Text style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive
                ]}>
                  {category.toUpperCase()}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Gear List */}
        <ScrollView 
          style={styles.gearList}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.gearGrid}>
            {filteredGear.map(renderGearItem)}
          </View>

          {/* Pro Tips */}
          <View style={styles.tipsSection}>
            <LinearGradient
              colors={['#8A2BE2', '#FF1493']}
              style={styles.tipsCard}
            >
              <Text style={styles.tipsTitle}>🎯 PRO TIPS</Text>
              <Text style={styles.tipsText}>
                • Start with essential gear - you don&apos;t need everything at once!{'\n'}
                • Microwave-safe bowls are perfect for dorm cooking{'\n'}
                • A good strainer makes all the difference{'\n'}
                • Chopsticks aren&apos;t just for eating - great for stirring too!{'\n'}
                • Keep it simple and focus on flavor over fancy tools
              </Text>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
    </NoodleBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF1493',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 4,
    fontWeight: 'bold',
  },
  categoryScroll: {
    maxHeight: 60,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  categoryButton: {
    marginRight: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  categoryButtonActive: {},
  categoryGradient: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryText: {
    color: '#CCC',
    fontWeight: 'bold',
    fontSize: 12,
  },
  categoryTextActive: {
    color: '#FFF',
  },
  gearList: {
    flex: 1,
  },
  gearGrid: {
    padding: 20,
  },
  gearCard: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  cardGradient: {
    padding: 16,
  },
  gearInfo: {
    flex: 1,
  },
  gearHeader: {
    marginBottom: 8,
  },
  gearName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 6,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  levelText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  descriptionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  gearDescription: {
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  microwaveTag: {
    backgroundColor: '#00BFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 8,
  },
  microwaveText: {
    fontSize: 10,
    color: '#FFF',
    fontWeight: 'bold',
  },
  tipsSection: {
    padding: 20,
    paddingTop: 0,
  },
  tipsCard: {
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 12,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  tipsText: {
    fontSize: 14,
    color: '#FFF',
    lineHeight: 20,
  },
});