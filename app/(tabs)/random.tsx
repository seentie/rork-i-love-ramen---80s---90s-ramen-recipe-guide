import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Eye } from 'lucide-react-native';
import { recipes } from '@/data/recipes';
import { Recipe } from '@/types/recipe';
import NoodleBackground from '@/components/NoodleBackground';

export default function RandomScreen() {
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const insets = useSafeAreaInsets();

  const getRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    setCurrentRecipe(recipes[randomIndex]);
  };

  return (
    <NoodleBackground>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 20 }]}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>RAMEN PICKS FOR YOU</Text>
          <Text style={styles.subtitle}>🍜 LET RAMEN CHOOSE! 🍜</Text>
        </View>

        {/* Neon Ramen Image in Wooden Frame */}
        <View style={styles.imageContainer}>
          <View style={styles.woodenFrame}>
            <TouchableOpacity
              style={styles.imageButton}
              onPress={getRandomRecipe}
              activeOpacity={0.8}
            >
              <Image
                source={{ uri: 'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/l8xs5kv2rykhqydxr1b8h' }}
                style={styles.neonImage}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.instructionText}>
            TAP THE PICTURE TO SEE WHAT RAMEN CHOOSES FOR YOU TO MAKE
          </Text>
        </View>

        {/* Recipe Display */}
        {currentRecipe && (
          <View style={styles.recipeContainer}>
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)']}
              style={styles.recipeCard}
            >
              <Image 
                source={{ uri: currentRecipe.image }} 
                style={styles.recipeImage} 
              />
              <View style={styles.recipeInfo}>
                <Text style={styles.recipeTitle}>{currentRecipe.title}</Text>
                <Text style={styles.recipeCategory}>{currentRecipe.category}</Text>
                <View style={styles.recipeDetails}>
                  <Text style={styles.recipeTime}>⏱️ {currentRecipe.cookTime}</Text>
                  <Text style={styles.recipeDifficulty}>
                    {currentRecipe.difficulty === 'Easy' ? '⭐ Easy' : 
                     currentRecipe.difficulty === 'Medium' ? '⭐⭐ Medium' : '⭐⭐⭐ Hard'}
                  </Text>
                </View>
                <Text style={styles.recipeDescription} numberOfLines={3}>
                  {currentRecipe.description}
                </Text>
              </View>
            </LinearGradient>

            {/* View Recipe Button */}
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => router.push(`/recipe/${currentRecipe.id}`)}
            >
              <LinearGradient
                colors={['#39FF14', '#00BFFF']}
                style={styles.viewGradient}
              >
                <Eye color="#000" size={20} />
                <Text style={styles.viewText}>VIEW FULL RECIPE</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}

        {!currentRecipe && (
          <View style={styles.placeholder}>
            <View style={styles.neonCircle}>
              <View style={styles.emptyBowl}>
                <Text style={styles.bowlEmoji}>🍜</Text>
                <Text style={styles.questionMark}>?</Text>
              </View>
            </View>
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            ✨ OVER 50 RECIPES TO DISCOVER ✨
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
    marginBottom: 30,
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

  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  woodenFrame: {
    padding: 12,
    backgroundColor: '#8B4513',
    borderRadius: 12,
    borderWidth: 4,
    borderColor: '#654321',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  imageButton: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#4A2511',
  },
  neonImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  instructionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    lineHeight: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  },
  recipeContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  recipeCard: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  recipeInfo: {
    padding: 20,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  recipeCategory: {
    fontSize: 16,
    color: '#00BFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  recipeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  recipeTime: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
  recipeDifficulty: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
  recipeDescription: {
    fontSize: 14,
    color: '#FFF',
    lineHeight: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  viewButton: {
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#39FF14',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  viewGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  viewText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
    letterSpacing: 1,
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  neonCircle: {
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: 'rgba(138, 43, 226, 0.5)',
    borderWidth: 6,
    borderColor: '#8A2BE2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
  },
  emptyBowl: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bowlEmoji: {
    fontSize: 160,
    opacity: 1,
  },
  questionMark: {
    fontSize: 120,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: -40,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
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