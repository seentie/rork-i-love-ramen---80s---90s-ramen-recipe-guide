export interface GearItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  microwaveSafe?: boolean;
  level: 'beginner' | 'intermediate' | 'chef';
}

export const kitchenGear: GearItem[] = [
  // Essential
  {
    id: 'e1',
    name: 'Large Mixing Bowl',
    description: 'Perfect for mixing ramen with eggs, vegetables, and sauces. Microwave-safe ceramic.',
    category: 'Essential',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    microwaveSafe: true,
    level: 'beginner'
  },
  {
    id: 'e2',
    name: 'Medium Saucepan',
    description: 'Essential for cooking ramen noodles. Non-stick coating makes cleanup easy.',
    category: 'Essential',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'beginner'
  },
  {
    id: 'e3',
    name: 'Fine Mesh Strainer',
    description: 'Drain your ramen perfectly every time. Stainless steel construction.',
    category: 'Essential',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'beginner'
  },
  {
    id: 'e4',
    name: 'Sharp Chef\'s Knife',
    description: 'For chopping vegetables, slicing meat, and prepping garnishes.',
    category: 'Essential',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'intermediate'
  },
  {
    id: 'e5',
    name: 'Cutting Board Set',
    description: 'Color-coded boards for meat, vegetables, and other ingredients.',
    category: 'Essential',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'beginner'
  },

  // Utensils
  {
    id: 'u1',
    name: 'Bamboo Chopsticks Set',
    description: 'Authentic way to eat ramen! Reusable bamboo chopsticks with carrying case.',
    category: 'Utensils',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'beginner'
  },
  {
    id: 'u2',
    name: 'Ramen Spoon',
    description: 'Deep ceramic spoon perfect for sipping broth and eating noodles.',
    category: 'Utensils',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'beginner'
  },
  {
    id: 'u3',
    name: 'Silicone Tongs',
    description: 'Perfect for handling hot noodles and ingredients. Heat-resistant.',
    category: 'Utensils',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'intermediate'
  },
  {
    id: 'u4',
    name: 'Wooden Stirring Spoon',
    description: 'Won\'t scratch your non-stick pans. Perfect for stirring ramen.',
    category: 'Utensils',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'beginner'
  },
  {
    id: 'u5',
    name: 'Egg Separator',
    description: 'For perfect soft-boiled eggs in your ramen. Easy to use.',
    category: 'Utensils',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'intermediate'
  },

  // Microwave
  {
    id: 'm1',
    name: 'Microwave Ramen Cooker',
    description: 'Specially designed for cooking perfect ramen in the microwave.',
    category: 'Microwave',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    microwaveSafe: true,
    level: 'beginner'
  },
  {
    id: 'm2',
    name: 'Microwave-Safe Bowl Set',
    description: 'Set of 4 bowls perfect for microwave ramen cooking. BPA-free.',
    category: 'Microwave',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    microwaveSafe: true,
    level: 'beginner'
  },
  {
    id: 'm3',
    name: 'Microwave Egg Cooker',
    description: 'Cook perfect eggs for your ramen in the microwave.',
    category: 'Microwave',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    microwaveSafe: true,
    level: 'beginner'
  },
  {
    id: 'm4',
    name: 'Microwave Steamer Basket',
    description: 'Steam vegetables for your ramen quickly and easily.',
    category: 'Microwave',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    microwaveSafe: true,
    level: 'intermediate'
  },
  {
    id: 'm5',
    name: 'Microwave Cover Set',
    description: 'Prevent splatters while cooking ramen in the microwave.',
    category: 'Microwave',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    microwaveSafe: true,
    level: 'beginner'
  },

  // Advanced
  {
    id: 'a1',
    name: 'Ramen Bowl Set',
    description: 'Authentic Japanese ramen bowls with matching spoons. Set of 4.',
    category: 'Advanced',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'intermediate'
  },
  {
    id: 'a2',
    name: 'Electric Egg Cooker',
    description: 'Perfect soft, medium, or hard-boiled eggs every time.',
    category: 'Advanced',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'intermediate'
  },
  {
    id: 'a3',
    name: 'Mandoline Slicer',
    description: 'Slice vegetables paper-thin for professional-looking garnishes.',
    category: 'Advanced',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'chef'
  },
  {
    id: 'a4',
    name: 'Immersion Blender',
    description: 'Blend broths and sauces right in the pot. Multiple attachments.',
    category: 'Advanced',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'chef'
  },
  {
    id: 'a5',
    name: 'Digital Kitchen Scale',
    description: 'Measure ingredients precisely for consistent results.',
    category: 'Advanced',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'intermediate'
  },
  {
    id: 'a6',
    name: 'Noodle Making Machine',
    description: 'Make fresh ramen noodles from scratch! Manual crank operation.',
    category: 'Advanced',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    level: 'chef'
  }
];