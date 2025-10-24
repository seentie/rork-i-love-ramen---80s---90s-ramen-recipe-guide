import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router, Stack } from 'expo-router';
import { ArrowLeft, Clock, Star, Microwave } from 'lucide-react-native';
import { recipes } from '@/data/recipes';
import NoodleBackground from '@/components/NoodleBackground';

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Recipe not found!</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <NoodleBackground>
        <SafeAreaView style={styles.safeArea}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <LinearGradient
                colors={['#FF1493', '#8A2BE2']}
                style={styles.backGradient}
              >
                <ArrowLeft color="#FFF" size={24} />
              </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>RECIPE</Text>
            <View style={styles.placeholder} />
          </View>

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Recipe Image */}
            <View style={styles.imageContainer}>
              <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
              <View style={styles.sketchOverlay} />
            </View>

            {/* Recipe Info */}
            <View style={styles.recipeInfo}>
              <LinearGradient
                colors={['rgba(255, 20, 147, 0.1)', 'rgba(138, 43, 226, 0.1)']}
                style={styles.infoCard}
              >
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <Text style={styles.recipeCategory}>{recipe.category}</Text>
                
                <View style={styles.recipeStats}>
                  <View style={styles.statItem}>
                    <Clock color="#00BFFF" size={16} />
                    <Text style={styles.statText}>{recipe.cookTime}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Star color="#FFD700" size={16} />
                    <Text style={styles.statText}>{recipe.difficulty}</Text>
                  </View>
                  {recipe.microwaveOption && (
                    <View style={styles.statItem}>
                      <Microwave color="#39FF14" size={16} />
                      <Text style={styles.statText}>Microwave OK</Text>
                    </View>
                  )}
                </View>

                <Text style={styles.recipeDescription}>{recipe.description}</Text>
              </LinearGradient>
            </View>

            {/* Ingredients */}
            <View style={styles.section}>
              <LinearGradient
                colors={['#FF4500', '#FF1493']}
                style={styles.sectionHeader}
              >
                <Text style={styles.sectionTitle}>🛒 INGREDIENTS</Text>
              </LinearGradient>
              <View style={styles.sectionContent}>
                {recipe.ingredients.map((ingredient, index) => (
                  <View key={`ingredient-${index}`} style={styles.ingredientItem}>
                    <Text style={styles.ingredientBullet}>•</Text>
                    <Text style={styles.ingredientText}>{ingredient}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Instructions */}
            <View style={styles.section}>
              <LinearGradient
                colors={['#8A2BE2', '#FF1493']}
                style={styles.sectionHeader}
              >
                <Text style={styles.sectionTitle}>👨‍🍳 INSTRUCTIONS</Text>
              </LinearGradient>
              <View style={styles.sectionContent}>
                {recipe.instructions.map((instruction, index) => (
                  <View key={`instruction-${index}`} style={styles.instructionItem}>
                    <LinearGradient
                      colors={['#FF1493', '#8A2BE2']}
                      style={styles.stepNumber}
                    >
                      <Text style={styles.stepText}>{index + 1}</Text>
                    </LinearGradient>
                    <Text style={styles.instructionText}>{instruction}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Microwave Instructions */}
            {recipe.microwaveInstructions && (
              <View style={styles.section}>
                <LinearGradient
                  colors={['#39FF14', '#00BFFF']}
                  style={styles.sectionHeader}
                >
                  <Text style={[styles.sectionTitle, { color: '#000' }]}>
                    📱 MICROWAVE VERSION
                  </Text>
                </LinearGradient>
                <View style={styles.sectionContent}>
                  {recipe.microwaveInstructions.map((instruction, index) => (
                    <View key={`microwave-${index}`} style={styles.instructionItem}>
                      <LinearGradient
                        colors={['#39FF14', '#00BFFF']}
                        style={styles.stepNumber}
                      >
                        <Text style={[styles.stepText, { color: '#000' }]}>
                          {index + 1}
                        </Text>
                      </LinearGradient>
                      <Text style={styles.instructionText}>{instruction}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Tips */}
            {recipe.tips && recipe.tips.length > 0 && (
              <View style={styles.section}>
                <LinearGradient
                  colors={['#FFD700', '#FF4500']}
                  style={styles.sectionHeader}
                >
                  <Text style={[styles.sectionTitle, { color: '#000' }]}>
                    💡 PRO TIPS
                  </Text>
                </LinearGradient>
                <View style={styles.sectionContent}>
                  {recipe.tips.map((tip, index) => (
                    <View key={`tip-${index}`} style={styles.tipItem}>
                      <Text style={styles.tipBullet}>💡</Text>
                      <Text style={styles.tipText}>{tip}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                🍜 TOTALLY TUBULAR RAMEN RECIPE 🍜
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </NoodleBackground>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 10,
  },
  backButton: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  backGradient: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF1493',
    letterSpacing: 1,
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  recipeImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    opacity: 0.85,
  },
  sketchOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    opacity: 0.7,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  recipeInfo: {
    padding: 20,
  },
  infoCard: {
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: '#FF1493',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  recipeCategory: {
    fontSize: 16,
    color: '#00BFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  recipeStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    color: '#FFF',
    marginLeft: 4,
    fontSize: 12,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  recipeDescription: {
    fontSize: 14,
    color: '#FFF',
    lineHeight: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    padding: 12,
    letterSpacing: 1,
  },
  sectionContent: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    marginHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  ingredientBullet: {
    color: '#FF1493',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    marginTop: 2,
  },
  ingredientText: {
    flex: 1,
    color: '#FFF',
    fontSize: 14,
    lineHeight: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  instructionText: {
    flex: 1,
    color: '#FFF',
    fontSize: 14,
    lineHeight: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  tipBullet: {
    fontSize: 16,
    marginRight: 8,
    marginTop: 2,
  },
  tipText: {
    flex: 1,
    color: '#FFF',
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'italic',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  footer: {
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#FF1493',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  errorText: {
    fontSize: 18,
    color: '#FF1493',
    fontWeight: 'bold',
  },
});