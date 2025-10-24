import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { recipes, categories } from '@/data/recipes';
import { Recipe } from '@/types/recipe';
import NoodleBackground from '@/components/NoodleBackground';

export default function RecipesScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (params.difficulty) {
      setSelectedDifficulty(params.difficulty as string);
    }
  }, [params.difficulty]);

  const filteredRecipes = recipes.filter(recipe => {
    const categoryMatch = selectedCategory === 'All' || recipe.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const renderRecipeCard = ({ item }: { item: Recipe }) => (
    <TouchableOpacity
      style={styles.recipeCard}
      onPress={() => router.push(`/recipe/${item.id}`)}
    >
      <LinearGradient
        colors={['#FF1493', '#8A2BE2']}
        style={styles.cardGradient}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.recipeImage} />
          <View style={styles.sketchOverlay} />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.recipeTitle} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.recipeCategory}>{item.category}</Text>
          </View>
          <View style={styles.recipeInfo}>
            <View style={styles.infoItem}>
              <Text style={styles.recipeTime}>⏱️ {item.cookTime}</Text>
            </View>
            <View style={styles.difficultyContainer}>
              <Text style={styles.recipeDifficulty}>
                {item.difficulty === 'Easy' ? '⭐' : item.difficulty === 'Medium' ? '⭐⭐' : '⭐⭐⭐'}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <NoodleBackground>
      <View style={styles.content}>
        <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
          <Text style={styles.title}>RAMEN RECIPES</Text>
          <Text style={styles.subtitle}>🍜 {filteredRecipes.length} RADICAL RECIPES 🍜</Text>
        </View>

        {/* Difficulty Filter */}
        <View style={styles.filterSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
            contentContainerStyle={styles.categoryScrollContainer}
          >
            {['All', 'Easy', 'Medium', 'Hard'].map((difficulty) => (
              <TouchableOpacity
                key={difficulty}
                style={[
                  styles.categoryButton,
                  selectedDifficulty === difficulty && styles.categoryButtonActive
                ]}
                onPress={() => setSelectedDifficulty(difficulty)}
              >
                <LinearGradient
                  colors={selectedDifficulty === difficulty 
                    ? ['#39FF14', '#00BFFF'] 
                    : ['#333', '#555']
                  }
                  style={styles.categoryGradient}
                >
                  <Text style={[
                    styles.categoryText,
                    selectedDifficulty === difficulty && styles.categoryTextActive
                  ]}>
                    {difficulty === 'All' ? 'ALL' : difficulty === 'Medium' ? 'INTERMEDIATE' : difficulty.toUpperCase()}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Category Filter */}
        <View style={styles.filterSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
            contentContainerStyle={styles.categoryScrollContainer}
          >
            {['All', ...categories].map((category) => (
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
        </View>

        {/* Recipe Grid */}
        <FlatList
          data={filteredRecipes}
          renderItem={renderRecipeCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.recipeGrid}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.row}
        />
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
    paddingHorizontal: 20,
    paddingBottom: 15,
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  subtitle: {
    fontSize: 14,
    color: '#00BFFF',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  filterSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    marginBottom: 5,
  },
  categoryScroll: {
    maxHeight: 60,
  },
  categoryScrollContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  categoryButton: {
    marginRight: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  categoryButtonActive: {},
  categoryGradient: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  categoryText: {
    color: '#CCC',
    fontWeight: 'bold',
    fontSize: 12,
  },
  categoryTextActive: {
    color: '#FFF',
  },
  recipeGrid: {
    padding: 20,
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  recipeCard: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#FF1493',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  cardGradient: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    position: 'relative',
  },
  recipeImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    opacity: 0.9,
  },
  sketchOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    opacity: 0.6,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  cardContent: {
    padding: 12,
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 6,
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    lineHeight: 18,
  },
  categoryContainer: {
    backgroundColor: 'rgba(0, 191, 255, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  recipeCategory: {
    fontSize: 10,
    color: '#00BFFF',
    fontWeight: 'bold',
  },
  recipeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  recipeTime: {
    fontSize: 10,
    color: '#FFF',
    fontWeight: '600',
  },
  difficultyContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  recipeDifficulty: {
    fontSize: 12,
  },
});