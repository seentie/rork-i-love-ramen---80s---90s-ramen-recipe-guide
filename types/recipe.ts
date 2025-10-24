export interface Recipe {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  cookTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  microwaveOption: boolean;
  ingredients: string[];
  instructions: string[];
  microwaveInstructions?: string[];
  tips?: string[];
}