import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Sparkles, Quote, Lightbulb, Shuffle, BookOpen, ShoppingBasket } from 'lucide-react-native';
import { dailyQuotes, funFacts, cookingTips } from '@/data/dailyContent';
import { recipes } from '@/data/recipes';
import NoodleBackground from '@/components/NoodleBackground';

export default function HomeScreen() {
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentFact, setCurrentFact] = useState('');
  const [currentTip, setCurrentTip] = useState('');
  const [showIngredients, setShowIngredients] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Easy' | 'Medium' | 'Hard' | null>(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const today = new Date().getDate();
    setCurrentQuote(dailyQuotes[today % dailyQuotes.length]);
    setCurrentFact(funFacts[today % funFacts.length]);
    setCurrentTip(cookingTips[today % cookingTips.length]);
  }, []);

  const getRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];
    router.push(`/recipe/${randomRecipe.id}`);
  };

  const commonIngredients = [
    { name: '🍜 Ramen Noodles', count: '50+ recipes' },
    { name: '🥚 Eggs', count: '35+ recipes' },
    { name: '🧄 Garlic', count: '30+ recipes' },
    { name: '🧅 Onions', count: '28+ recipes' },
    { name: '🧈 Butter', count: '25+ recipes' },
    { name: '🧀 Cheese', count: '22+ recipes' },
    { name: '🥓 Bacon', count: '18+ recipes' },
    { name: '🌿 Green Onions', count: '32+ recipes' },
    { name: '🥕 Carrots', count: '20+ recipes' },
    { name: '🍗 Chicken', count: '28+ recipes' },
    { name: '🍅 Tomatoes', count: '15+ recipes' },
    { name: '🥬 Vegetables', count: '25+ recipes' },
  ];

  return (
    <NoodleBackground>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 20 }]}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>I LOVE RAMEN</Text>
            <Text style={styles.year}>1985</Text>
            <Text style={styles.subtitle}>🍜 TOTALLY RADICAL RECIPES 🍜</Text>
          </View>

          {/* Ramen Loves You Back */}
          <View style={styles.lovesYouBackContainer}>
            <Text style={styles.yearSubtitle}>Ramen loves you back ❤️</Text>
          </View>

          {/* Daily Quote */}
          <View style={styles.card}>
            <LinearGradient
              colors={['#FF4500', '#FF1493']}
              style={styles.cardGradient}
            >
              <View style={styles.cardHeader}>
                <Quote color="#FFF" size={24} />
                <Text style={styles.cardTitle}>DAILY RAMEN WISDOM</Text>
              </View>
              <Text style={styles.cardContent}>{currentQuote}</Text>
            </LinearGradient>
          </View>

          {/* Fun Fact */}
          <View style={styles.card}>
            <LinearGradient
              colors={['#39FF14', '#00BFFF']}
              style={styles.cardGradient}
            >
              <View style={styles.cardHeader}>
                <Sparkles color="#000" size={24} />
                <Text style={[styles.cardTitle, { color: '#000' }]}>RAMEN FACT OF THE DAY</Text>
              </View>
              <Text style={[styles.cardContent, { color: '#000' }]}>{currentFact}</Text>
            </LinearGradient>
          </View>

          {/* Cooking Tip */}
          <View style={styles.card}>
            <LinearGradient
              colors={['#8A2BE2', '#FF1493']}
              style={styles.cardGradient}
            >
              <View style={styles.cardHeader}>
                <Lightbulb color="#FFF" size={24} />
                <Text style={styles.cardTitle}>COOKING TIP</Text>
              </View>
              <Text style={styles.cardContent}>{currentTip}</Text>
            </LinearGradient>
          </View>

          {/* Difficulty Filters */}
          <View style={styles.difficultyContainer}>
            <Text style={styles.difficultyTitle}>FILTER BY DIFFICULTY:</Text>
            <View style={styles.difficultyButtons}>
              <TouchableOpacity
                style={[
                  styles.difficultyButton,
                  selectedDifficulty === 'Easy' && styles.difficultyButtonActive
                ]}
                onPress={() => {
                  setSelectedDifficulty(selectedDifficulty === 'Easy' ? null : 'Easy');
                  router.push({
                    pathname: '/recipes',
                    params: { difficulty: selectedDifficulty === 'Easy' ? '' : 'Easy' }
                  });
                }}
              >
                <LinearGradient
                  colors={selectedDifficulty === 'Easy' ? ['#39FF14', '#00BFFF'] : ['rgba(57, 255, 20, 0.5)', 'rgba(0, 191, 255, 0.5)']}
                  style={styles.difficultyButtonGradient}
                >
                  <Text style={styles.difficultyButtonText}>EASY</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.difficultyButton,
                  selectedDifficulty === 'Medium' && styles.difficultyButtonActive
                ]}
                onPress={() => {
                  setSelectedDifficulty(selectedDifficulty === 'Medium' ? null : 'Medium');
                  router.push({
                    pathname: '/recipes',
                    params: { difficulty: selectedDifficulty === 'Medium' ? '' : 'Medium' }
                  });
                }}
              >
                <LinearGradient
                  colors={selectedDifficulty === 'Medium' ? ['#FF1493', '#8A2BE2'] : ['rgba(255, 20, 147, 0.5)', 'rgba(138, 43, 226, 0.5)']}
                  style={styles.difficultyButtonGradient}
                >
                  <Text style={styles.difficultyButtonText}>INTERMEDIATE</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.difficultyButton,
                  selectedDifficulty === 'Hard' && styles.difficultyButtonActive
                ]}
                onPress={() => {
                  setSelectedDifficulty(selectedDifficulty === 'Hard' ? null : 'Hard');
                  router.push({
                    pathname: '/recipes',
                    params: { difficulty: selectedDifficulty === 'Hard' ? '' : 'Hard' }
                  });
                }}
              >
                <LinearGradient
                  colors={selectedDifficulty === 'Hard' ? ['#FF4500', '#FF1493'] : ['rgba(255, 69, 0, 0.5)', 'rgba(255, 20, 147, 0.5)']}
                  style={styles.difficultyButtonGradient}
                >
                  <Text style={styles.difficultyButtonText}>ADVANCED</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            {/* All Recipes Button */}
            <TouchableOpacity
              style={styles.allRecipesButton}
              onPress={() => router.push('/recipes')}
            >
              <LinearGradient
                colors={['#FF1493', '#8A2BE2']}
                style={styles.allRecipesGradient}
              >
                <BookOpen color="#FFF" size={36} />
                <Text style={styles.allRecipesText}>ALL RECIPES</Text>
                <Text style={styles.allRecipesSubtext}>50+ RECIPES</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Feeling Lucky Button */}
            <TouchableOpacity
              style={styles.luckyButton}
              onPress={getRandomRecipe}
            >
              <LinearGradient
                colors={['#FF4500', '#FF1493']}
                style={styles.luckyGradient}
              >
                <Shuffle color="#FFF" size={32} />
                <Text style={styles.luckyText}>FEELING LUCKY?</Text>
                <Text style={styles.luckySubtext}>RANDOM</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Common Ingredients Button */}
          <TouchableOpacity
            style={styles.ingredientsButton}
            onPress={() => setShowIngredients(!showIngredients)}
          >
            <LinearGradient
              colors={['#39FF14', '#00BFFF']}
              style={styles.ingredientsGradient}
            >
              <ShoppingBasket color="#000" size={24} />
              <Text style={styles.ingredientsButtonText}>
                {showIngredients ? 'HIDE COMMON INGREDIENTS' : 'SHOW COMMON INGREDIENTS'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Ingredients List */}
          {showIngredients && (
            <View style={styles.ingredientsContainer}>
              <LinearGradient
                colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.08)']}
                style={styles.ingredientsCard}
              >
                <Text style={styles.ingredientsTitle}>ESSENTIAL INGREDIENTS</Text>
                <Text style={styles.ingredientsSubtitle}>Stock these to make most recipes!</Text>
                <View style={styles.ingredientsList}>
                  {commonIngredients.map((ingredient, index) => (
                    <View key={index} style={styles.ingredientItem}>
                      <Text style={styles.ingredientName}>{ingredient.name}</Text>
                      <Text style={styles.ingredientCount}>{ingredient.count}</Text>
                    </View>
                  ))}
                </View>
              </LinearGradient>
            </View>
          )}

          {/* Quick Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>50+</Text>
              <Text style={styles.statLabel}>RECIPES</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>6</Text>
              <Text style={styles.statLabel}>CATEGORIES</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>∞</Text>
              <Text style={styles.statLabel}>FLAVOR</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              🌟 TOTALLY TUBULAR SINCE 1985 🌟
            </Text>
          </View>
      </ScrollView>
    </NoodleBackground>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 2,
  },
  year: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginTop: 4,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    letterSpacing: 3,
  },
  yearSubtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF0000',
    textAlign: 'center',
    marginTop: 4,
    textShadowColor: '#FFF',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    letterSpacing: 2,
    fontStyle: 'italic' as const,
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  cardGradient: {
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
    letterSpacing: 1,
  },
  cardContent: {
    fontSize: 16,
    color: '#FFF',
    lineHeight: 22,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 15,
  },
  allRecipesButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#FF1493',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  allRecipesGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allRecipesText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 8,
    letterSpacing: 1,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  allRecipesSubtext: {
    fontSize: 11,
    color: '#FFF',
    marginTop: 4,
    fontWeight: 'bold',
    opacity: 0.9,
    textAlign: 'center',
  },
  luckyButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#FF4500',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  luckyGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  luckyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 6,
    letterSpacing: 1,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  luckySubtext: {
    fontSize: 11,
    color: '#FFF',
    marginTop: 2,
    fontWeight: 'bold',
    opacity: 0.9,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statBox: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 10,
    minWidth: 80,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 4,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  ingredientsButton: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#39FF14',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  ingredientsGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    gap: 10,
  },
  ingredientsButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 1,
  },
  ingredientsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  ingredientsCard: {
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  ingredientsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1,
  },
  ingredientsSubtitle: {
    fontSize: 14,
    color: '#39FF14',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  ingredientsList: {
    gap: 12,
  },
  ingredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
  },
  ingredientName: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
  ingredientCount: {
    fontSize: 12,
    color: '#39FF14',
    fontWeight: 'bold',
  },
  difficultyContainer: {
    marginVertical: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 15,
    padding: 15,
  },
  difficultyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  difficultyButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 8,
  },
  difficultyButton: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  difficultyButtonActive: {
    elevation: 8,
    shadowOpacity: 0.5,
  },
  difficultyButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  difficultyButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFF',
    letterSpacing: 0.3,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  lovesYouBackContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
});