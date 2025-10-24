import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Flame } from 'lucide-react-native';
import NoodleBackground from '@/components/NoodleBackground';

interface SpicyOption {
  name: string;
  icon: string;
  description: string;
  heatLevel: string;
  usageNotes: string;
}

const spicyOptions: SpicyOption[] = [
  {
    name: 'Gochujang',
    icon: '🌶️',
    description: 'Korean fermented chili paste',
    heatLevel: 'Medium-Hot',
    usageNotes: 'Add 1-2 tsp for sweet, savory heat. Perfect for Korean-style ramen.'
  },
  {
    name: 'Sriracha',
    icon: '🔥',
    description: 'Thai hot chili sauce',
    heatLevel: 'Medium',
    usageNotes: 'Squirt generously on top. Tangy and garlicky heat.'
  },
  {
    name: 'Chili Oil',
    icon: '🌶️',
    description: 'Oil infused with chili peppers',
    heatLevel: 'Medium-Hot',
    usageNotes: 'Drizzle 1-2 tsp for aromatic, lingering heat. Crispy bits add texture!'
  },
  {
    name: 'Fresh Chili Peppers',
    icon: '🌶️',
    description: 'Jalapeño, serrano, or Thai chilies',
    heatLevel: 'Varies',
    usageNotes: 'Slice thin and add fresh. Remove seeds for less heat.'
  },
  {
    name: 'Red Pepper Flakes',
    icon: '🌶️',
    description: 'Crushed dried chili peppers',
    heatLevel: 'Medium',
    usageNotes: 'Sprinkle 1/2 to 1 tsp. Classic pizza shop heat!'
  },
  {
    name: 'Cayenne Pepper',
    icon: '🔥',
    description: 'Ground red chili powder',
    heatLevel: 'Hot',
    usageNotes: 'Start with 1/4 tsp - it\'s potent! Pure, clean heat.'
  },
  {
    name: 'Hot Sauce',
    icon: '🔥',
    description: 'Tabasco, Frank\'s, or Louisiana style',
    heatLevel: 'Medium',
    usageNotes: 'Splash to taste. Vinegary heat cuts through richness.'
  },
  {
    name: 'Kimchi',
    icon: '🥬',
    description: 'Fermented spicy cabbage',
    heatLevel: 'Medium',
    usageNotes: 'Add 1/2 cup for funky, spicy kick. Use the juice too!'
  },
  {
    name: 'Black Pepper',
    icon: '⚫',
    description: 'Classic ground pepper',
    heatLevel: 'Mild',
    usageNotes: 'Generous grinding adds warmth without overwhelming.'
  },
  {
    name: 'White Pepper',
    icon: '⚪',
    description: 'Milder, earthy heat',
    heatLevel: 'Mild',
    usageNotes: 'Traditional in Asian soups. Use 1/4 tsp for subtle warmth.'
  },
  {
    name: 'Sambal Oelek',
    icon: '🌶️',
    description: 'Indonesian chili paste',
    heatLevel: 'Medium-Hot',
    usageNotes: 'Add 1 tsp for fresh, bright heat with garlic notes.'
  },
  {
    name: 'Habanero Sauce',
    icon: '🔥🔥',
    description: 'Super hot pepper sauce',
    heatLevel: 'Very Hot',
    usageNotes: 'Use sparingly! Just a few drops pack serious heat.'
  },
  {
    name: 'Wasabi',
    icon: '💚',
    description: 'Japanese horseradish paste',
    heatLevel: 'Sharp Heat',
    usageNotes: 'Mix small amount for nasal-clearing heat. Different from chili heat!'
  },
  {
    name: 'Curry Powder',
    icon: '🟡',
    description: 'Spiced blend with chili',
    heatLevel: 'Mild-Medium',
    usageNotes: 'Add 1-2 tsp for complex, warm heat with spice notes.'
  },
  {
    name: 'Chili Garlic Sauce',
    icon: '🧄',
    description: 'Chunky chili-garlic blend',
    heatLevel: 'Medium',
    usageNotes: 'Spoon in 1-2 tsp for garlicky heat with texture.'
  },
  {
    name: 'Ghost Pepper Sauce',
    icon: '💀',
    description: 'Extremely hot pepper sauce',
    heatLevel: 'Extreme',
    usageNotes: 'For daredevils only! ONE drop is enough. Seriously.'
  },
  {
    name: 'Szechuan Peppercorns',
    icon: '⭕',
    description: 'Numbing Chinese spice',
    heatLevel: 'Tingling',
    usageNotes: 'Crush 1/4 tsp for unique numbing sensation alongside heat.'
  },
  {
    name: 'Buffalo Sauce',
    icon: '🔥',
    description: 'Buttery hot sauce blend',
    heatLevel: 'Medium',
    usageNotes: 'Stir in 2-3 tbsp for tangy, buttery heat. Great with chicken!'
  },
  {
    name: 'Chipotle Peppers',
    icon: '🌶️',
    description: 'Smoked jalapeños in adobo',
    heatLevel: 'Medium',
    usageNotes: 'Chop 1-2 peppers for smoky, deep heat.'
  },
  {
    name: 'Harissa',
    icon: '🔥',
    description: 'North African chili paste',
    heatLevel: 'Medium-Hot',
    usageNotes: 'Mix in 1 tsp for smoky, aromatic heat with cumin notes.'
  },
];

export default function SpicyScreen() {
  const insets = useSafeAreaInsets();

  return (
    <NoodleBackground>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 20 }]}>
        <View style={styles.header}>
          <Flame color="#FF4500" size={48} />
          <Text style={styles.title}>SPICY OPTIONS</Text>
          <Text style={styles.subtitle}>🔥 HEAT UP YOUR RAMEN 🔥</Text>
        </View>

        <View style={styles.introCard}>
          <LinearGradient
            colors={['#FF4500', '#FF1493']}
            style={styles.introGradient}
          >
            <Text style={styles.introText}>
              Turn up the heat! From mild warmth to volcanic fire, here are all the ways to add spiciness to your ramen. Mix and match for your perfect heat level!
            </Text>
          </LinearGradient>
        </View>

        <View style={styles.optionsContainer}>
          {spicyOptions.map((option, index) => (
            <View key={index} style={styles.optionCard}>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.5)']}
                style={styles.optionGradient}
              >
                <View style={styles.optionHeader}>
                  <Text style={styles.optionIcon}>{option.icon}</Text>
                  <View style={styles.optionTitleContainer}>
                    <Text style={styles.optionName}>{option.name}</Text>
                    <Text style={styles.heatLevel}>{option.heatLevel}</Text>
                  </View>
                </View>
                <Text style={styles.optionDescription}>{option.description}</Text>
                <View style={styles.usageContainer}>
                  <Text style={styles.usageLabel}>HOW TO USE:</Text>
                  <Text style={styles.usageNotes}>{option.usageNotes}</Text>
                </View>
              </LinearGradient>
            </View>
          ))}
        </View>

        <View style={styles.tipsCard}>
          <LinearGradient
            colors={['#8A2BE2', '#FF1493']}
            style={styles.tipsGradient}
          >
            <Text style={styles.tipsTitle}>🌟 PRO TIPS 🌟</Text>
            <Text style={styles.tipText}>• Start small and add more - you can always make it spicier!</Text>
            <Text style={styles.tipText}>• Combine different heat sources for complex flavor</Text>
            <Text style={styles.tipText}>• Dairy helps cool the burn - add sour cream or cheese</Text>
            <Text style={styles.tipText}>• Oil-based heat (chili oil) lingers longer than sauce-based</Text>
            <Text style={styles.tipText}>• Fresh chilies add crunch, dried chilies add depth</Text>
            <Text style={styles.tipText}>• Sugar balances heat - add a pinch to mellow extreme spice</Text>
          </LinearGradient>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            🔥 SPICE IT UP, RADICAL STYLE! 🔥
          </Text>
        </View>
      </ScrollView>
    </NoodleBackground>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 2,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  introCard: {
    marginBottom: 25,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  introGradient: {
    padding: 20,
  },
  introText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '600',
  },
  optionsContainer: {
    gap: 15,
    marginBottom: 25,
  },
  optionCard: {
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  optionGradient: {
    padding: 15,
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  optionTitleContainer: {
    flex: 1,
  },
  optionName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  heatLevel: {
    fontSize: 12,
    color: '#FF4500',
    fontWeight: 'bold',
    marginTop: 2,
  },
  optionDescription: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 10,
    opacity: 0.9,
  },
  usageContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 8,
  },
  usageLabel: {
    fontSize: 11,
    color: '#39FF14',
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: 1,
  },
  usageNotes: {
    fontSize: 13,
    color: '#FFF',
    lineHeight: 18,
  },
  tipsCard: {
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginBottom: 20,
  },
  tipsGradient: {
    padding: 20,
  },
  tipsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 15,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1,
  },
  tipText: {
    fontSize: 14,
    color: '#FFF',
    lineHeight: 22,
    marginBottom: 8,
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
