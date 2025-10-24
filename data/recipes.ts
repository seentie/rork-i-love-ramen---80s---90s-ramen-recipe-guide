import { Recipe } from '@/types/recipe';

export const categories = [
  'Soup Main',
  'Soup Starter', 
  'Fusion',
  'Breakfast',
  'Snack',
  'Dessert'
];

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Chicken Ramen Supreme',
    category: 'Soup Main',
    description: 'The ultimate comfort food with tender chicken, soft-boiled egg, and fresh scallions in a rich, savory broth.',
    image: 'https://r2-pub.rork.com/generated-images/d7f40814-9338-41e5-aa90-b6eec863d1d9.png',
    cookTime: '15 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '1 package chicken-flavored ramen noodles',
      '1 boneless chicken breast, sliced thin',
      '1 soft-boiled egg',
      '2 green onions, chopped',
      '1 sheet nori (seaweed)',
      '1 tsp sesame oil',
      '1 clove garlic, minced',
      '2 cups water'
    ],
    instructions: [
      'Boil 2 cups of water in a pot',
      'Add minced garlic and sliced chicken, cook for 3 minutes',
      'Add ramen noodles and cook for 3 minutes',
      'Stir in seasoning packet and sesame oil',
      'Transfer to bowl, top with soft-boiled egg, green onions, and nori'
    ],
    microwaveInstructions: [
      'Place chicken and garlic in microwave-safe bowl with 2 cups water',
      'Microwave on high for 2 minutes',
      'Add noodles and seasoning, microwave 3 more minutes',
      'Stir in sesame oil, top with egg, green onions, and nori'
    ],
    tips: [
      'Marinate chicken in soy sauce for extra flavor',
      'Don\'t overcook the egg - 6 minutes for perfect soft-boiled',
      'Add sesame oil at the end to preserve its flavor'
    ]
  },
  {
    id: '2',
    title: 'Spicy Kimchi Ramen Explosion',
    category: 'Soup Main',
    description: 'Korean-inspired fiery ramen with tangy kimchi, perfect for those who like it hot and funky!',
    image: 'https://r2-pub.rork.com/generated-images/9b0f18ce-ac59-4368-92fd-d7e2c1482723.png',
    cookTime: '12 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '1 package spicy ramen noodles',
      '1/2 cup kimchi, chopped',
      '1 egg',
      '1 tbsp kimchi juice',
      '1 tsp gochujang (Korean chili paste)',
      '1 green onion, sliced',
      '1 tsp sesame seeds',
      '2 cups water'
    ],
    instructions: [
      'Boil water and add kimchi, simmer for 2 minutes',
      'Add ramen noodles and cook for 3 minutes',
      'Crack egg into the broth and let it poach',
      'Stir in seasoning packet, kimchi juice, and gochujang',
      'Garnish with green onions and sesame seeds'
    ],
    microwaveInstructions: [
      'Combine water, kimchi, and noodles in microwave-safe bowl',
      'Microwave for 4 minutes on high',
      'Crack egg on top, microwave 1 more minute',
      'Stir in seasonings and garnish'
    ],
    tips: [
      'Use aged kimchi for deeper flavor',
      'Adjust gochujang to your spice tolerance',
      'Save some kimchi juice - it\'s liquid gold!'
    ]
  },
  {
    id: '3',
    title: 'Breakfast Ramen Sunrise',
    category: 'Breakfast',
    description: 'Start your day right with this protein-packed breakfast ramen featuring bacon and a perfectly fried egg.',
    image: 'https://r2-pub.rork.com/generated-images/4430b769-eafc-49f4-b4be-59413f0bd45e.png',
    cookTime: '10 mins',
    difficulty: 'Easy',
    microwaveOption: false,
    ingredients: [
      '1 package chicken ramen noodles',
      '2 strips bacon, chopped',
      '1 fried egg',
      '1 tbsp butter',
      '1 green onion, chopped',
      'Black pepper to taste',
      '2 cups water'
    ],
    instructions: [
      'Cook bacon in a pan until crispy, set aside',
      'Boil water and cook ramen noodles for 3 minutes',
      'Drain most water, leaving just a little broth',
      'Stir in half the seasoning packet and butter',
      'Top with fried egg, bacon, and green onions'
    ],
    tips: [
      'Cook the egg sunny-side up for a runny yolk',
      'Save bacon grease to fry the egg for extra flavor',
      'Use less seasoning packet to avoid oversalting with bacon'
    ]
  },
  {
    id: '4',
    title: 'Ramen Carbonara Fusion',
    category: 'Fusion',
    description: 'East meets West in this creamy, cheesy ramen that tastes like Italian carbonara with an Asian twist.',
    image: 'https://r2-pub.rork.com/generated-images/4fa8aebb-cfdb-4337-b19f-5b476bd2dce7.png',
    cookTime: '8 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '1 package chicken ramen noodles',
      '2 egg yolks',
      '1/4 cup grated parmesan cheese',
      '2 strips bacon, diced',
      '1 clove garlic, minced',
      '2 tbsp heavy cream',
      'Black pepper to taste',
      '1.5 cups water'
    ],
    instructions: [
      'Cook bacon until crispy, add garlic for 30 seconds',
      'Cook ramen noodles in boiling water for 2 minutes',
      'Whisk egg yolks with cream and parmesan',
      'Drain noodles, toss with hot bacon and garlic',
      'Remove from heat, quickly stir in egg mixture until creamy'
    ],
    tips: [
      'Work quickly to prevent eggs from scrambling',
      'Use freshly grated parmesan for best results',
      'Don\'t use the seasoning packet - the cheese provides the salt'
    ]
  },
  {
    id: '5',
    title: 'Veggie Power Ramen Bowl',
    category: 'Soup Main',
    description: 'Packed with colorful vegetables and plant-based protein, this healthy ramen will fuel your day.',
    image: 'https://r2-pub.rork.com/generated-images/b8eb0c0c-8fed-4c51-be03-4ec0c51366f9.png',
    cookTime: '12 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '1 package vegetable ramen noodles',
      '1/2 cup broccoli florets',
      '1/4 cup carrots, julienned',
      '1/4 cup snap peas',
      '2 mushrooms, sliced',
      '1 tbsp soy sauce',
      '1 tsp sesame oil',
      '1 green onion, chopped',
      '2 cups vegetable broth'
    ],
    instructions: [
      'Bring vegetable broth to a boil',
      'Add carrots and broccoli, cook for 2 minutes',
      'Add mushrooms and snap peas, cook 1 minute',
      'Add ramen noodles and cook for 3 minutes',
      'Stir in seasoning packet, soy sauce, and sesame oil'
    ],
    microwaveInstructions: [
      'Combine all vegetables and broth in microwave-safe bowl',
      'Microwave for 3 minutes on high',
      'Add noodles and seasonings, microwave 3 more minutes',
      'Stir and let stand 1 minute before serving'
    ],
    tips: [
      'Cut vegetables uniformly for even cooking',
      'Add delicate vegetables last to maintain crunch',
      'Use low-sodium soy sauce to control salt levels'
    ]
  },
  {
    id: '6',
    title: 'Miso Butter Ramen Deluxe',
    category: 'Soup Main',
    description: 'Rich, umami-packed ramen with miso paste and butter creating an incredibly satisfying broth.',
    image: 'https://r2-pub.rork.com/generated-images/14b51634-a02f-4496-969e-7468fa60a38f.png',
    cookTime: '10 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '1 package chicken ramen noodles',
      '2 tbsp white miso paste',
      '1 tbsp butter',
      '1 soft-boiled egg',
      '1 green onion, sliced',
      '1 sheet nori',
      '1 tsp sesame seeds',
      '2 cups water'
    ],
    instructions: [
      'Boil water and cook ramen noodles for 3 minutes',
      'In serving bowl, whisk miso paste with a little hot broth',
      'Add cooked noodles and remaining broth',
      'Stir in butter until melted',
      'Top with egg, green onions, nori, and sesame seeds'
    ],
    microwaveInstructions: [
      'Cook noodles in microwave with water for 4 minutes',
      'Stir in miso paste and butter',
      'Add toppings and serve immediately'
    ],
    tips: [
      'Dissolve miso paste completely to avoid lumps',
      'Add butter at the end for richest flavor',
      'White miso is milder than red miso'
    ]
  },
  {
    id: '7',
    title: 'Ramen Grilled Cheese Sandwich',
    category: 'Snack',
    description: 'Crispy ramen noodles meet melted cheese in this innovative twist on the classic grilled cheese.',
    image: 'https://r2-pub.rork.com/generated-images/9bd98754-391d-442b-90b5-bf85a3d8e9bd.png',
    cookTime: '15 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '1 package chicken ramen noodles',
      '4 slices bread',
      '4 slices cheddar cheese',
      '2 tbsp butter',
      '1 tbsp seasoning packet',
      '1 egg, beaten',
      '1 cup water'
    ],
    instructions: [
      'Cook ramen noodles until just tender, drain well',
      'Mix noodles with seasoning packet and beaten egg',
      'Spread noodle mixture on 2 slices of bread',
      'Top with cheese and remaining bread slices',
      'Butter outside of sandwiches and grill until golden'
    ],
    tips: [
      'Make sure noodles are well-drained to prevent soggy bread',
      'Press sandwich while grilling for better cohesion',
      'Let cool slightly before cutting to prevent cheese from oozing out'
    ]
  },
  {
    id: '8',
    title: 'Thai-Style Coconut Ramen',
    category: 'Fusion',
    description: 'Creamy coconut milk transforms ordinary ramen into an exotic Thai-inspired soup with lemongrass and lime.',
    image: 'https://r2-pub.rork.com/generated-images/407419d3-02a4-4452-b5bc-07b7d6b2ff86.png',
    cookTime: '15 mins',
    difficulty: 'Medium',
    microwaveOption: true,
    ingredients: [
      '1 package chicken ramen noodles',
      '1 can coconut milk (400ml)',
      '1 stalk lemongrass, bruised',
      '2 kaffir lime leaves',
      '1 tbsp fish sauce',
      '1 tsp brown sugar',
      '1 red chili, sliced',
      '1 lime, juiced',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Simmer coconut milk with lemongrass and lime leaves for 5 minutes',
      'Add fish sauce, brown sugar, and chili',
      'Add ramen noodles and cook for 3 minutes',
      'Remove lemongrass and lime leaves',
      'Finish with lime juice and cilantro'
    ],
    microwaveInstructions: [
      'Microwave coconut milk with aromatics for 2 minutes',
      'Add noodles and seasonings, microwave 4 minutes',
      'Stir in lime juice and garnish'
    ],
    tips: [
      'Bruise lemongrass with knife handle to release oils',
      'Don\'t boil coconut milk vigorously or it may curdle',
      'Adjust sweetness and sourness to your taste'
    ]
  },
  {
    id: '9',
    title: 'Ramen Burger Patty',
    category: 'Fusion',
    description: 'Use cooked ramen noodles as a burger bun! This viral sensation is crispy, fun, and totally Instagram-worthy.',
    image: 'https://r2-pub.rork.com/generated-images/4d94a2f8-c4a1-4b45-b4fc-595e1ce784b1.png',
    cookTime: '20 mins',
    difficulty: 'Hard',
    microwaveOption: false,
    ingredients: [
      '2 packages chicken ramen noodles',
      '2 eggs, beaten',
      '1 lb ground beef',
      '2 slices cheese',
      'Lettuce, tomato, onion',
      'Burger sauce of choice',
      '2 tbsp oil for frying'
    ],
    instructions: [
      'Cook ramen noodles, drain and cool completely',
      'Mix noodles with beaten eggs and seasoning packets',
      'Form into 4 patties, refrigerate 30 minutes',
      'Pan-fry noodle patties until golden and crispy',
      'Cook beef patties, assemble burgers with noodle "buns"'
    ],
    tips: [
      'Chill noodle patties to help them hold together',
      'Press patties firmly while cooking',
      'Serve immediately while noodle buns are crispy'
    ]
  },
  {
    id: '10',
    title: 'Chocolate Ramen Dessert',
    category: 'Dessert',
    description: 'Sweet and salty dessert using ramen noodles with chocolate, marshmallows, and nuts. Totally radical!',
    image: 'https://r2-pub.rork.com/generated-images/eafe635d-2197-4a44-8eac-0d9949657bd5.png',
    cookTime: '10 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '1 package ramen noodles (discard seasoning)',
      '1 cup chocolate chips',
      '1/2 cup mini marshmallows',
      '1/4 cup chopped peanuts',
      '2 tbsp butter',
      '1 tsp vanilla extract'
    ],
    instructions: [
      'Break uncooked ramen noodles into small pieces',
      'Melt chocolate chips and butter in double boiler',
      'Stir in vanilla extract',
      'Mix in broken noodles, marshmallows, and peanuts',
      'Drop spoonfuls onto parchment paper, let cool'
    ],
    microwaveInstructions: [
      'Microwave chocolate chips and butter for 1 minute',
      'Stir until smooth, add vanilla',
      'Mix in remaining ingredients, form clusters'
    ],
    tips: [
      'Don\'t use the seasoning packet for dessert!',
      'Let clusters cool completely before storing',
      'Try different nuts or dried fruits for variety'
    ]
  },
  {
    id: '11',
    title: 'Beef Stroganoff Ramen',
    category: 'Fusion',
    description: 'Creamy, hearty stroganoff flavors meet ramen noodles in this comfort food mashup.',
    image: 'https://r2-pub.rork.com/generated-images/ede6498d-d26c-473e-aab6-e3d2b38222ff.png',
    cookTime: '18 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '1 package beef ramen noodles',
      '1/2 lb ground beef',
      '1/2 cup sour cream',
      '1 can cream of mushroom soup',
      '1/2 cup mushrooms, sliced',
      '1 onion, diced',
      '2 tbsp flour',
      '1 cup beef broth'
    ],
    instructions: [
      'Brown ground beef with onions and mushrooms',
      'Sprinkle flour over meat, cook 1 minute',
      'Add beef broth and cream of mushroom soup',
      'Cook ramen noodles separately, drain',
      'Stir in sour cream and noodles, heat through'
    ],
    tips: [
      'Don\'t boil after adding sour cream',
      'Use lean ground beef to avoid greasiness',
      'Fresh mushrooms work better than canned'
    ]
  },
  {
    id: '12',
    title: 'Ramen Salad Crunch',
    category: 'Snack',
    description: 'Cold, crunchy salad featuring broken ramen noodles, perfect for potlucks and summer gatherings.',
    image: 'https://r2-pub.rork.com/generated-images/f5a9ef5d-8e58-490c-8918-6483e4caeac5.png',
    cookTime: '15 mins',
    difficulty: 'Easy',
    microwaveOption: false,
    ingredients: [
      '2 packages chicken ramen noodles',
      '1 bag coleslaw mix',
      '1/4 cup sunflower seeds',
      '1/4 cup sliced almonds',
      '3 green onions, chopped',
      '1/4 cup vegetable oil',
      '2 tbsp rice vinegar',
      '2 tbsp sugar'
    ],
    instructions: [
      'Break uncooked ramen noodles into pieces',
      'Toast noodles, almonds, and sunflower seeds until golden',
      'Mix coleslaw and green onions in large bowl',
      'Whisk oil, vinegar, sugar, and seasoning packets',
      'Toss everything together just before serving'
    ],
    tips: [
      'Toast nuts and noodles for extra crunch',
      'Add dressing right before serving to prevent sogginess',
      'This salad gets better after sitting for 30 minutes'
    ]
  },
  {
    id: '13',
    title: 'Pizza Ramen Fusion',
    category: 'Fusion',
    description: 'All your favorite pizza flavors in ramen form - pepperoni, cheese, and Italian herbs!',
    image: 'https://r2-pub.rork.com/generated-images/9c5288a6-cef2-4ec5-bc05-ff90ac54a686.png',
    cookTime: '12 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '1 package chicken ramen noodles',
      '1/4 cup pepperoni, diced',
      '1/4 cup mozzarella cheese',
      '2 tbsp tomato sauce',
      '1 tsp Italian seasoning',
      '1 tbsp parmesan cheese',
      '1 clove garlic, minced',
      '2 cups water'
    ],
    instructions: [
      'Cook ramen noodles in boiling water for 3 minutes',
      'Drain, leaving small amount of broth',
      'Stir in tomato sauce, garlic, and Italian seasoning',
      'Add pepperoni and heat through',
      'Top with mozzarella and parmesan cheese'
    ],
    microwaveInstructions: [
      'Cook noodles in microwave for 4 minutes',
      'Stir in sauce and seasonings',
      'Add pepperoni and cheese, microwave 1 more minute'
    ],
    tips: [
      'Use pizza sauce instead of tomato sauce for more flavor',
      'Add cheese while noodles are hot for melting',
      'Try different pizza toppings like mushrooms or olives'
    ]
  },
  {
    id: '14',
    title: 'Ramen Stir-Fry Supreme',
    category: 'Fusion',
    description: 'Quick and easy stir-fry using ramen noodles instead of rice - perfect for busy weeknights!',
    image: 'https://r2-pub.rork.com/generated-images/1920082c-7739-473d-9840-776077a440ed.png',
    cookTime: '10 mins',
    difficulty: 'Easy',
    microwaveOption: false,
    ingredients: [
      '1 package chicken ramen noodles',
      '2 tbsp vegetable oil',
      '1 cup mixed vegetables',
      '2 cloves garlic, minced',
      '2 tbsp soy sauce',
      '1 tsp sesame oil',
      '1 egg, beaten',
      '2 green onions, chopped'
    ],
    instructions: [
      'Cook ramen noodles until just tender, drain',
      'Heat oil in wok or large pan',
      'Stir-fry vegetables and garlic for 2 minutes',
      'Add noodles and soy sauce, toss well',
      'Push noodles aside, scramble egg, then mix together'
    ],
    tips: [
      'Don\'t overcook the noodles initially',
      'Keep ingredients moving in the pan',
      'Have all ingredients prepped before starting'
    ]
  },
  {
    id: '15',
    title: 'Breakfast Ramen Hash',
    category: 'Breakfast',
    description: 'Crispy ramen noodles replace potatoes in this hearty breakfast hash with eggs and vegetables.',
    image: 'https://r2-pub.rork.com/generated-images/dfe62c9a-0db0-4afa-b96c-fb05b411c67a.png',
    cookTime: '15 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '2 packages chicken ramen noodles',
      '4 eggs',
      '1/2 cup diced bell peppers',
      '1/2 cup diced onions',
      '4 strips bacon, chopped',
      '2 tbsp vegetable oil',
      'Salt and pepper to taste',
      'Hot sauce for serving'
    ],
    instructions: [
      'Cook ramen noodles, drain and set aside',
      'Cook bacon until crispy, remove from pan',
      'Sauté onions and peppers in bacon fat',
      'Add noodles to pan, press down to crisp',
      'Make wells in hash, crack eggs into wells, cover and cook'
    ],
    tips: [
      'Press noodles down to get them crispy',
      'Don\'t move the hash too much while crisping',
      'Cover pan to cook egg whites while keeping yolks runny'
    ]
  },
  {
    id: '16',
    title: 'Mexican Street Corn Ramen',
    category: 'Fusion',
    description: 'Elote flavors meet ramen - corn, lime, chili powder, and cotija cheese in a warming bowl.',
    image: 'https://r2-pub.rork.com/generated-images/ad2b2f86-9d28-49d1-ba97-08c327f7b16e.png',
    cookTime: '12 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '1 package chicken ramen noodles',
      '1 cup corn kernels',
      '2 tbsp mayonnaise',
      '2 tbsp cotija cheese, crumbled',
      '1 tsp chili powder',
      '1 lime, juiced',
      '1 tbsp butter',
      'Cilantro for garnish'
    ],
    instructions: [
      'Cook ramen noodles in boiling water',
      'In separate pan, sauté corn with butter until lightly charred',
      'Drain noodles, reserving some broth',
      'Mix noodles with corn, mayo, and lime juice',
      'Top with cotija cheese, chili powder, and cilantro'
    ],
    microwaveInstructions: [
      'Cook noodles and corn together in microwave for 4 minutes',
      'Stir in remaining ingredients except garnishes',
      'Top with cheese, chili powder, and cilantro'
    ],
    tips: [
      'Char the corn for authentic street corn flavor',
      'Mexican crema can substitute for mayonnaise',
      'Add jalapeños for extra heat'
    ]
  },
  {
    id: '17',
    title: 'Ramen Mac and Cheese',
    category: 'Fusion',
    description: 'Creamy, cheesy comfort food using ramen noodles - like mac and cheese but way more fun!',
    image: 'https://r2-pub.rork.com/generated-images/460bec08-0ba4-42bc-ba07-e92ed10a8077.png',
    cookTime: '10 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '2 packages chicken ramen noodles',
      '1 cup shredded cheddar cheese',
      '1/4 cup milk',
      '2 tbsp butter',
      '1 tbsp cream cheese',
      '1/4 tsp garlic powder',
      'Breadcrumbs for topping',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook ramen noodles, drain well',
      'Melt butter in same pot',
      'Add milk, cream cheese, and garlic powder',
      'Stir in cheddar cheese until melted',
      'Add noodles back, toss to coat, top with breadcrumbs'
    ],
    microwaveInstructions: [
      'Cook noodles in microwave, drain',
      'Add butter, milk, and cheeses',
      'Microwave 1 minute, stir until creamy',
      'Top with breadcrumbs'
    ],
    tips: [
      'Use block cheese for better melting',
      'Don\'t use all the seasoning packet',
      'Add cooked bacon bits for extra flavor'
    ]
  },
  {
    id: '18',
    title: 'Pho-Style Ramen Bowl',
    category: 'Soup Main',
    description: 'Vietnamese pho flavors with ramen noodles - star anise, ginger, and fresh herbs create magic.',
    image: 'https://r2-pub.rork.com/generated-images/912e8a0e-c024-48d0-97be-2ce806dc9598.png',
    cookTime: '20 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '1 package beef ramen noodles',
      '2 cups beef broth',
      '1 star anise pod',
      '1 inch ginger, sliced',
      '1 cinnamon stick',
      '1 onion, halved and charred',
      'Bean sprouts, basil, cilantro',
      'Lime wedges',
      'Sriracha and hoisin sauce'
    ],
    instructions: [
      'Char onion halves under broiler until blackened',
      'Simmer broth with star anise, ginger, cinnamon, and onion for 15 minutes',
      'Strain broth, return to pot',
      'Cook ramen noodles in the aromatic broth',
      'Serve with fresh herbs, bean sprouts, and sauces'
    ],
    tips: [
      'Charring the onion adds authentic smoky flavor',
      'Don\'t skip the aromatics - they make the broth',
      'Serve condiments on the side for customization'
    ]
  },
  {
    id: '19',
    title: 'Ramen Fried Rice',
    category: 'Fusion',
    description: 'Fried rice technique using ramen noodles instead of rice - crispy, savory, and totally satisfying.',
    image: 'https://r2-pub.rork.com/generated-images/1920082c-7739-473d-9840-776077a440ed.png',
    cookTime: '12 mins',
    difficulty: 'Easy',
    microwaveOption: false,
    ingredients: [
      '2 packages chicken ramen noodles',
      '3 eggs, beaten',
      '2 tbsp vegetable oil',
      '1 cup frozen peas and carrots',
      '3 green onions, chopped',
      '3 tbsp soy sauce',
      '1 tsp sesame oil',
      '2 cloves garlic, minced'
    ],
    instructions: [
      'Cook ramen noodles, drain and cool completely',
      'Heat oil in large pan or wok',
      'Scramble eggs, remove from pan',
      'Add noodles to pan, breaking them up as they fry',
      'Add vegetables, soy sauce, and scrambled eggs back'
    ],
    tips: [
      'Use day-old cooked noodles for best texture',
      'High heat is key for proper frying',
      'Add soy sauce around edges of pan for better flavor'
    ]
  },
  {
    id: '20',
    title: 'Buffalo Chicken Ramen',
    category: 'Soup Main',
    description: 'Spicy buffalo chicken flavors in a warming ramen bowl - perfect for game day!',
    image: 'https://r2-pub.rork.com/generated-images/e4f44203-d15b-476a-a50d-9653da9c4005.png',
    cookTime: '15 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '1 package chicken ramen noodles',
      '1 cup cooked chicken, shredded',
      '1/4 cup buffalo sauce',
      '2 tbsp cream cheese',
      '1 celery stalk, diced',
      '2 tbsp blue cheese crumbles',
      '1 green onion, chopped',
      '2 cups chicken broth'
    ],
    instructions: [
      'Heat chicken broth in pot',
      'Add ramen noodles and cook for 3 minutes',
      'Stir in buffalo sauce and cream cheese',
      'Add shredded chicken and heat through',
      'Top with celery, blue cheese, and green onions'
    ],
    microwaveInstructions: [
      'Combine broth, noodles, and chicken in microwave-safe bowl',
      'Microwave 4 minutes on high',
      'Stir in buffalo sauce and cream cheese',
      'Add toppings and serve'
    ],
    tips: [
      'Use rotisserie chicken for convenience',
      'Adjust buffalo sauce to your heat preference',
      'Ranch dressing can substitute for blue cheese'
    ]
  },
  {
    id: '21',
    title: 'Ramen Pad Thai',
    category: 'Fusion',
    description: 'Thai street food flavors with ramen noodles - sweet, sour, and totally addictive!',
    image: 'https://r2-pub.rork.com/generated-images/dfcb4761-3868-4a89-9293-ed98a5dc80ba.png',
    cookTime: '15 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '2 packages chicken ramen noodles',
      '2 tbsp tamarind paste',
      '2 tbsp fish sauce',
      '2 tbsp brown sugar',
      '2 eggs',
      '1 cup bean sprouts',
      '3 green onions, chopped',
      'Crushed peanuts and lime wedges'
    ],
    instructions: [
      'Cook ramen noodles until just tender, drain',
      'Mix tamarind paste, fish sauce, and brown sugar',
      'Heat oil in wok, scramble eggs',
      'Add noodles and sauce, toss well',
      'Add bean sprouts and green onions, serve with peanuts and lime'
    ],
    tips: [
      'Don\'t overcook the bean sprouts',
      'Tamarind paste is key for authentic flavor',
      'Serve immediately while hot'
    ]
  },
  {
    id: '22',
    title: 'Loaded Potato Ramen',
    category: 'Soup Main',
    description: 'All the flavors of a loaded baked potato in ramen form - bacon, cheese, and chives!',
    image: 'https://r2-pub.rork.com/generated-images/c8adaf25-da51-478f-9a26-06edecf4d22d.png',
    cookTime: '15 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '1 package chicken ramen noodles',
      '1 medium potato, diced small',
      '4 strips bacon, chopped',
      '1/4 cup sour cream',
      '1/4 cup cheddar cheese, shredded',
      '2 tbsp chives, chopped',
      '2 cups chicken broth'
    ],
    instructions: [
      'Cook bacon until crispy, remove from pan',
      'Cook diced potatoes in bacon fat until tender',
      'Add chicken broth and bring to boil',
      'Add ramen noodles and cook 3 minutes',
      'Stir in sour cream, top with cheese, bacon, and chives'
    ],
    microwaveInstructions: [
      'Microwave potatoes with a little water for 3 minutes',
      'Add broth and noodles, microwave 4 more minutes',
      'Stir in sour cream and toppings'
    ],
    tips: [
      'Dice potatoes small for faster cooking',
      'Don\'t boil after adding sour cream',
      'Pre-cook bacon in microwave if using that method'
    ]
  },
  {
    id: '23',
    title: 'Ramen Sloppy Joes',
    category: 'Fusion',
    description: 'Classic sloppy joe flavors served over ramen noodles instead of buns - messy and delicious!',
    image: 'https://r2-pub.rork.com/generated-images/4d94a2f8-c4a1-4b45-b4fc-595e1ce784b1.png',
    cookTime: '15 mins',
    difficulty: 'Easy',
    microwaveOption: false,
    ingredients: [
      '2 packages beef ramen noodles',
      '1 lb ground beef',
      '1/2 cup ketchup',
      '2 tbsp brown sugar',
      '1 tbsp Worcestershire sauce',
      '1 onion, diced',
      '1 bell pepper, diced',
      'Pickles for serving'
    ],
    instructions: [
      'Cook ramen noodles, drain and set aside',
      'Brown ground beef with onions and peppers',
      'Add ketchup, brown sugar, and Worcestershire',
      'Simmer until thickened',
      'Serve over ramen noodles with pickles'
    ],
    tips: [
      'Drain excess fat from ground beef',
      'Simmer sauce until it coats the meat',
      'Serve with dill pickle slices for authentic flavor'
    ]
  },
  {
    id: '24',
    title: 'Ramen Chicken Noodle Soup',
    category: 'Soup Starter',
    description: 'Comfort food classic made with ramen noodles - perfect for when you\'re feeling under the weather.',
    image: 'https://r2-pub.rork.com/generated-images/0a92fd95-80dc-4e7f-a104-e7781d2f793a.png',
    cookTime: '20 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '2 packages chicken ramen noodles',
      '2 cups chicken broth',
      '1 cup cooked chicken, diced',
      '2 carrots, sliced',
      '2 celery stalks, diced',
      '1 onion, diced',
      '2 tbsp olive oil',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Sauté onions, carrots, and celery in olive oil',
      'Add chicken broth and bring to boil',
      'Add ramen noodles and cook 3 minutes',
      'Stir in cooked chicken and heat through',
      'Garnish with fresh parsley'
    ],
    microwaveInstructions: [
      'Combine vegetables and broth in microwave-safe bowl',
      'Microwave 5 minutes on high',
      'Add noodles and chicken, microwave 4 more minutes'
    ],
    tips: [
      'Use rotisserie chicken for convenience',
      'Don\'t overcook the vegetables',
      'Season with salt and pepper to taste'
    ]
  },
  {
    id: '25',
    title: 'Ramen Chili Mac',
    category: 'Fusion',
    description: 'Hearty chili served over ramen noodles with cheese - perfect cold weather comfort food.',
    image: 'https://r2-pub.rork.com/generated-images/e67d1f80-ab71-4186-9a20-a75f36be7da5.png',
    cookTime: '25 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '2 packages beef ramen noodles',
      '1 lb ground beef',
      '1 can diced tomatoes',
      '1 can kidney beans',
      '1 packet chili seasoning',
      '1 cup beef broth',
      '1 cup shredded cheese',
      'Sour cream and green onions'
    ],
    instructions: [
      'Brown ground beef, drain fat',
      'Add tomatoes, beans, chili seasoning, and broth',
      'Simmer 15 minutes',
      'Cook ramen noodles separately, drain',
      'Serve chili over noodles, top with cheese and garnishes'
    ],
    tips: [
      'Let chili simmer to develop flavors',
      'Use block cheese for better melting',
      'Serve with cornbread for a complete meal'
    ]
  },
  {
    id: '26',
    title: 'Breakfast Ramen Burrito',
    category: 'Breakfast',
    description: 'Portable breakfast with scrambled eggs, ramen noodles, and cheese wrapped in a tortilla.',
    image: 'https://r2-pub.rork.com/generated-images/99c26441-0754-4b9d-9a85-bd477619ea41.png',
    cookTime: '12 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '1 package chicken ramen noodles',
      '4 large eggs',
      '4 large tortillas',
      '1 cup shredded cheese',
      '4 strips bacon, cooked',
      '1/4 cup salsa',
      '2 tbsp butter',
      'Hot sauce to taste'
    ],
    instructions: [
      'Cook ramen noodles, drain well',
      'Scramble eggs with butter until fluffy',
      'Warm tortillas in microwave',
      'Fill tortillas with noodles, eggs, cheese, and bacon',
      'Roll tightly and serve with salsa'
    ],
    tips: [
      'Don\'t overfill the tortillas',
      'Warm tortillas for easier rolling',
      'Wrap in foil for portable eating'
    ]
  },
  {
    id: '27',
    title: 'Ramen Meatball Soup',
    category: 'Soup Main',
    description: 'Hearty soup with homemade meatballs and ramen noodles in a rich, savory broth.',
    image: 'https://r2-pub.rork.com/generated-images/0a92fd95-80dc-4e7f-a104-e7781d2f793a.png',
    cookTime: '25 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '2 packages beef ramen noodles',
      '1 lb ground beef',
      '1 egg',
      '1/4 cup breadcrumbs',
      '4 cups beef broth',
      '1 onion, diced',
      '2 carrots, sliced',
      'Italian seasoning'
    ],
    instructions: [
      'Mix ground beef, egg, breadcrumbs, and seasoning',
      'Form into small meatballs',
      'Brown meatballs in pot, remove',
      'Sauté onions and carrots, add broth',
      'Return meatballs, add noodles, simmer until tender'
    ],
    tips: [
      'Keep meatballs small for faster cooking',
      'Brown meatballs for better flavor',
      'Simmer gently to keep meatballs intact'
    ]
  },
  {
    id: '28',
    title: 'Ramen Tuna Casserole',
    category: 'Fusion',
    description: 'Classic tuna casserole reimagined with ramen noodles - creamy, comforting, and budget-friendly.',
    image: 'https://r2-pub.rork.com/generated-images/4cb57915-62fa-42ad-bca1-3b3bad43479c.png',
    cookTime: '30 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '3 packages chicken ramen noodles',
      '2 cans tuna, drained',
      '1 can cream of mushroom soup',
      '1 cup frozen peas',
      '1 cup shredded cheese',
      '1/2 cup breadcrumbs',
      '2 tbsp butter'
    ],
    instructions: [
      'Cook ramen noodles, drain',
      'Mix noodles, tuna, soup, and peas',
      'Transfer to baking dish, top with cheese',
      'Sprinkle breadcrumbs, dot with butter',
      'Bake at 350°F for 20 minutes until bubbly'
    ],
    microwaveInstructions: [
      'Mix all ingredients except breadcrumbs in microwave-safe dish',
      'Microwave 8 minutes on medium power',
      'Top with breadcrumbs and cheese, microwave 2 more minutes'
    ],
    tips: [
      'Use tuna in water, not oil',
      'Don\'t overbake or noodles will get mushy',
      'Add crushed potato chips for extra crunch'
    ]
  },
  {
    id: '29',
    title: 'Ramen Spring Rolls',
    category: 'Snack',
    description: 'Fresh spring rolls filled with cooked ramen noodles, vegetables, and herbs - light and refreshing.',
    image: 'https://r2-pub.rork.com/generated-images/92755bd7-d7ea-460c-9b83-05972a874a00.png',
    cookTime: '20 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '2 packages chicken ramen noodles',
      '8 rice paper rounds',
      '1 cucumber, julienned',
      '2 carrots, julienned',
      '1 cup lettuce, shredded',
      'Fresh mint and cilantro',
      'Peanut dipping sauce'
    ],
    instructions: [
      'Cook ramen noodles, rinse with cold water, drain',
      'Soften rice paper in warm water',
      'Place noodles and vegetables on rice paper',
      'Add herbs and roll tightly',
      'Serve with peanut dipping sauce'
    ],
    tips: [
      'Don\'t oversoak rice paper',
      'Keep filled rolls covered with damp towel',
      'Cut in half diagonally for prettier presentation'
    ]
  },
  {
    id: '30',
    title: 'Ramen Chicken Alfredo',
    category: 'Fusion',
    description: 'Creamy alfredo sauce with chicken and ramen noodles - Italian comfort food with an Asian twist.',
    image: 'https://r2-pub.rork.com/generated-images/f061630b-6095-44d1-8b7b-766a45fc6a8a.png',
    cookTime: '15 mins',
    difficulty: 'Medium',
    microwaveOption: true,
    ingredients: [
      '2 packages chicken ramen noodles',
      '1 cup cooked chicken, sliced',
      '1/2 cup heavy cream',
      '1/2 cup parmesan cheese',
      '3 tbsp butter',
      '2 cloves garlic, minced',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Cook ramen noodles, drain',
      'Melt butter, sauté garlic for 30 seconds',
      'Add cream and bring to simmer',
      'Stir in parmesan cheese until melted',
      'Toss with noodles and chicken, garnish with parsley'
    ],
    microwaveInstructions: [
      'Cook noodles in microwave, drain',
      'Microwave butter and garlic 30 seconds',
      'Add cream and cheese, microwave 2 minutes',
      'Stir until smooth, toss with noodles and chicken'
    ],
    tips: [
      'Use freshly grated parmesan for best results',
      'Don\'t let cream boil or it may curdle',
      'Add pasta water if sauce gets too thick'
    ]
  },
  {
    id: '31',
    title: 'Ramen Egg Drop Soup',
    category: 'Soup Starter',
    description: 'Chinese restaurant favorite made with ramen noodles - silky egg ribbons in savory broth.',
    image: 'https://r2-pub.rork.com/generated-images/0a92fd95-80dc-4e7f-a104-e7781d2f793a.png',
    cookTime: '8 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '1 package chicken ramen noodles',
      '3 cups chicken broth',
      '2 eggs, beaten',
      '1 tbsp cornstarch',
      '2 tbsp water',
      '1 green onion, chopped',
      '1 tsp sesame oil',
      'White pepper to taste'
    ],
    instructions: [
      'Bring chicken broth to boil',
      'Add ramen noodles, cook 2 minutes',
      'Mix cornstarch and water, stir into soup',
      'Slowly drizzle beaten eggs while stirring',
      'Season with sesame oil and white pepper'
    ],
    microwaveInstructions: [
      'Microwave broth and noodles 4 minutes',
      'Stir in cornstarch mixture',
      'Microwave 1 minute, then slowly add beaten eggs while stirring'
    ],
    tips: [
      'Stir constantly while adding eggs',
      'Use a fork to create thin egg ribbons',
      'White pepper is traditional, but black pepper works too'
    ]
  },
  {
    id: '32',
    title: 'Ramen Shepherd\'s Pie',
    category: 'Fusion',
    description: 'Classic shepherd\'s pie with a ramen noodle crust instead of mashed potatoes - totally radical!',
    image: 'https://r2-pub.rork.com/generated-images/c0a83b3d-53af-4e54-b817-ef5d36dba2dd.png',
    cookTime: '35 mins',
    difficulty: 'Hard',
    microwaveOption: false,
    ingredients: [
      '3 packages beef ramen noodles',
      '1 lb ground lamb or beef',
      '2 eggs, beaten',
      '1 cup mixed vegetables',
      '2 tbsp tomato paste',
      '1 cup beef broth',
      '1 cup shredded cheese',
      '2 tbsp flour'
    ],
    instructions: [
      'Cook ramen noodles, drain and mix with beaten eggs',
      'Press noodle mixture into greased baking dish',
      'Brown meat, add vegetables, flour, and tomato paste',
      'Add broth, simmer until thickened',
      'Pour over noodle crust, top with cheese, bake 25 minutes'
    ],
    tips: [
      'Press noodle crust firmly to hold together',
      'Let filling cool slightly before adding to crust',
      'Cover with foil if top browns too quickly'
    ]
  },
  {
    id: '33',
    title: 'Ramen Chicken Parmesan',
    category: 'Fusion',
    description: 'Crispy ramen-crusted chicken with marinara sauce and melted cheese - Italian-Asian fusion at its best!',
    image: 'https://r2-pub.rork.com/generated-images/ecf8efb5-44fb-4737-950a-1507bab17f41.png',
    cookTime: '25 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '2 packages chicken ramen noodles',
      '4 chicken breasts, pounded thin',
      '2 eggs, beaten',
      '1 cup marinara sauce',
      '1 cup mozzarella cheese',
      '1/2 cup parmesan cheese',
      'Oil for frying'
    ],
    instructions: [
      'Crush ramen noodles into fine crumbs',
      'Dip chicken in eggs, then coat with ramen crumbs',
      'Fry chicken until golden and cooked through',
      'Top with marinara and cheeses',
      'Bake until cheese melts and bubbles'
    ],
    tips: [
      'Pound chicken evenly for uniform cooking',
      'Don\'t skip the seasoning packets in the coating',
      'Let chicken rest before slicing'
    ]
  },
  {
    id: '34',
    title: 'Ramen Clam Chowder',
    category: 'Soup Main',
    description: 'Creamy New England style chowder with ramen noodles instead of potatoes - coastal comfort food.',
    image: 'https://r2-pub.rork.com/generated-images/47e26480-b976-49d6-bbf4-09e3ccf4785b.png',
    cookTime: '20 mins',
    difficulty: 'Medium',
    microwaveOption: true,
    ingredients: [
      '2 packages chicken ramen noodles',
      '2 cans minced clams with juice',
      '4 strips bacon, diced',
      '1 onion, diced',
      '2 cups heavy cream',
      '2 tbsp flour',
      'Fresh thyme and parsley'
    ],
    instructions: [
      'Cook bacon until crispy, remove',
      'Sauté onion in bacon fat',
      'Sprinkle flour, cook 1 minute',
      'Add clam juice and cream, bring to simmer',
      'Add noodles and clams, cook until tender'
    ],
    microwaveInstructions: [
      'Microwave bacon and onion 3 minutes',
      'Stir in flour, then gradually add liquids',
      'Add noodles and clams, microwave 5 minutes, stirring halfway'
    ],
    tips: [
      'Don\'t boil the cream or it may curdle',
      'Reserve some bacon for garnish',
      'Fresh herbs make a big difference'
    ]
  },
  {
    id: '35',
    title: 'Ramen Breakfast Pancakes',
    category: 'Breakfast',
    description: 'Savory pancakes made with crushed ramen noodles - crispy, unique, and perfect for weekend brunch.',
    image: 'https://r2-pub.rork.com/generated-images/6dea4a8f-c922-41f9-973a-7ac7d62d7627.png',
    cookTime: '15 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '2 packages chicken ramen noodles',
      '2 eggs',
      '1/2 cup flour',
      '1/2 cup milk',
      '2 green onions, chopped',
      '1 tsp baking powder',
      'Oil for cooking',
      'Syrup or hot sauce for serving'
    ],
    instructions: [
      'Crush ramen noodles into small pieces',
      'Mix flour, baking powder, and seasoning packets',
      'Whisk eggs and milk, combine with dry ingredients',
      'Fold in crushed noodles and green onions',
      'Cook like regular pancakes until golden'
    ],
    tips: [
      'Don\'t overmix the batter',
      'Let batter rest 5 minutes before cooking',
      'Serve with both sweet and savory toppings'
    ]
  },
  {
    id: '36',
    title: 'Ramen Stuffed Peppers',
    category: 'Fusion',
    description: 'Bell peppers stuffed with seasoned ramen noodles, ground meat, and cheese - a complete meal in a pepper!',
    image: 'https://r2-pub.rork.com/generated-images/dfe62c9a-0db0-4afa-b96c-fb05b411c67a.png',
    cookTime: '45 mins',
    difficulty: 'Medium',
    microwaveOption: true,
    ingredients: [
      '2 packages beef ramen noodles',
      '4 large bell peppers, tops cut off',
      '1 lb ground beef',
      '1 onion, diced',
      '1 cup shredded cheese',
      '1 can diced tomatoes',
      '1 cup beef broth'
    ],
    instructions: [
      'Cook ramen noodles, drain',
      'Brown beef and onion, drain fat',
      'Mix noodles, beef, tomatoes, and half the cheese',
      'Stuff peppers with mixture',
      'Place in baking dish with broth, cover and bake 35 minutes'
    ],
    microwaveInstructions: [
      'Prepare filling as above',
      'Stuff peppers and place in microwave-safe dish',
      'Add broth, cover and microwave 15 minutes on medium power'
    ],
    tips: [
      'Choose peppers that stand upright',
      'Partially cook peppers first if you like them softer',
      'Top with remaining cheese in last 5 minutes'
    ]
  },
  {
    id: '37',
    title: 'Ramen Chicken Tortilla Soup',
    category: 'Soup Main',
    description: 'Mexican-inspired soup with ramen noodles, chicken, and all the classic tortilla soup flavors.',
    image: 'https://r2-pub.rork.com/generated-images/d4de5ddc-0004-4a8c-bcae-4072ce0cbe55.png',
    cookTime: '20 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '2 packages chicken ramen noodles',
      '2 cups cooked chicken, shredded',
      '1 can diced tomatoes',
      '1 can black beans',
      '2 cups chicken broth',
      '1 tsp cumin',
      'Tortilla chips, cheese, avocado for topping'
    ],
    instructions: [
      'Combine broth, tomatoes, and cumin in pot',
      'Bring to boil, add ramen noodles',
      'Cook 3 minutes, add chicken and beans',
      'Heat through and season to taste',
      'Serve with tortilla chips, cheese, and avocado'
    ],
    microwaveInstructions: [
      'Combine all ingredients except toppings in microwave-safe bowl',
      'Microwave 6 minutes on high, stirring halfway',
      'Add toppings and serve'
    ],
    tips: [
      'Use rotisserie chicken for convenience',
      'Crush tortilla chips for texture',
      'Add lime juice for brightness'
    ]
  },
  {
    id: '38',
    title: 'Ramen Meatloaf',
    category: 'Fusion',
    description: 'Classic meatloaf with crushed ramen noodles as the binder - moist, flavorful, and totally retro!',
    image: 'https://r2-pub.rork.com/generated-images/feab8e1b-c1c1-482c-9b4e-ee963e8c4ee9.png',
    cookTime: '60 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '1 package beef ramen noodles',
      '2 lbs ground beef',
      '2 eggs',
      '1 onion, diced',
      '1/2 cup ketchup',
      '2 tbsp Worcestershire sauce',
      '1/4 cup milk',
      'Salt and pepper'
    ],
    instructions: [
      'Crush ramen noodles and mix with seasoning packet',
      'Combine all ingredients except half the ketchup',
      'Form into loaf and place in baking dish',
      'Top with remaining ketchup',
      'Bake at 350°F for 45-60 minutes until cooked through'
    ],
    tips: [
      'Don\'t overmix or meatloaf will be tough',
      'Let rest 10 minutes before slicing',
      'Use a meat thermometer to check doneness'
    ]
  },
  {
    id: '39',
    title: 'Ramen Chicken and Dumplings',
    category: 'Soup Main',
    description: 'Comfort food classic with ramen noodles standing in for traditional dumplings - warm and satisfying.',
    image: 'https://r2-pub.rork.com/generated-images/0a92fd95-80dc-4e7f-a104-e7781d2f793a.png',
    cookTime: '25 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '3 packages chicken ramen noodles',
      '2 cups cooked chicken, diced',
      '4 cups chicken broth',
      '2 carrots, sliced',
      '2 celery stalks, diced',
      '1 onion, diced',
      '2 tbsp flour',
      'Fresh herbs for garnish'
    ],
    instructions: [
      'Sauté vegetables until tender',
      'Sprinkle flour over vegetables, cook 1 minute',
      'Add broth gradually, bring to boil',
      'Break ramen noodles into pieces, add to pot',
      'Add chicken, simmer until noodles are tender'
    ],
    tips: [
      'Break noodles into bite-sized pieces',
      'Thicken broth with flour for authentic texture',
      'Add fresh herbs just before serving'
    ]
  },
  {
    id: '40',
    title: 'Ramen Sushi Bowl',
    category: 'Fusion',
    description: 'Deconstructed sushi in a bowl with ramen noodles, fresh fish, and all your favorite sushi toppings.',
    image: 'https://r2-pub.rork.com/generated-images/b959442c-7695-4633-8ec2-0027a90a54e1.png',
    cookTime: '15 mins',
    difficulty: 'Medium',
    microwaveOption: true,
    ingredients: [
      '2 packages chicken ramen noodles',
      '1/2 lb sushi-grade tuna or salmon',
      '1 cucumber, diced',
      '1 avocado, sliced',
      '2 tbsp soy sauce',
      '1 tbsp rice vinegar',
      'Wasabi, pickled ginger, nori sheets'
    ],
    instructions: [
      'Cook ramen noodles, rinse with cold water',
      'Season noodles with soy sauce and rice vinegar',
      'Dice fish into small cubes',
      'Arrange noodles in bowls, top with fish and vegetables',
      'Serve with wasabi, ginger, and torn nori'
    ],
    microwaveInstructions: [
      'Cook noodles in microwave, rinse with cold water',
      'Season and arrange as above'
    ],
    tips: [
      'Use only sushi-grade fish',
      'Keep everything cold until serving',
      'Add sesame seeds for extra flavor'
    ]
  },
  {
    id: '41',
    title: 'Ramen French Onion Soup',
    category: 'Soup Starter',
    description: 'Classic French onion soup with ramen noodles added for heartiness - topped with melted cheese.',
    image: 'https://r2-pub.rork.com/generated-images/0a92fd95-80dc-4e7f-a104-e7781d2f793a.png',
    cookTime: '45 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '2 packages beef ramen noodles',
      '4 large onions, sliced thin',
      '4 cups beef broth',
      '1/2 cup dry white wine',
      '2 tbsp butter',
      '1 cup gruyere cheese, grated',
      'French bread slices',
      'Fresh thyme'
    ],
    instructions: [
      'Caramelize onions in butter for 30 minutes',
      'Add wine and broth, bring to boil',
      'Add ramen noodles, cook until tender',
      'Ladle into oven-safe bowls',
      'Top with bread and cheese, broil until bubbly'
    ],
    tips: [
      'Don\'t rush the onion caramelization',
      'Use good quality cheese for best flavor',
      'Watch carefully under broiler'
    ]
  },
  {
    id: '42',
    title: 'Ramen Chicken Pot Pie',
    category: 'Fusion',
    description: 'Comfort food classic with ramen noodles mixed into the filling - all the flavors in one dish.',
    image: 'https://r2-pub.rork.com/generated-images/495786b9-9097-4095-be52-51330f637485.png',
    cookTime: '40 mins',
    difficulty: 'Hard',
    microwaveOption: false,
    ingredients: [
      '2 packages chicken ramen noodles',
      '2 cups cooked chicken, diced',
      '1 cup mixed vegetables',
      '1 can cream of chicken soup',
      '1/2 cup milk',
      '2 pie crusts',
      '1 egg, beaten'
    ],
    instructions: [
      'Cook ramen noodles, drain',
      'Mix noodles, chicken, vegetables, soup, and milk',
      'Place bottom crust in pie pan, add filling',
      'Cover with top crust, seal edges',
      'Brush with egg, bake at 425°F for 30 minutes'
    ],
    tips: [
      'Pre-bake bottom crust for 5 minutes',
      'Cut steam vents in top crust',
      'Let cool 10 minutes before serving'
    ]
  },
  {
    id: '43',
    title: 'Ramen Jambalaya',
    category: 'Fusion',
    description: 'Louisiana flavors meet ramen noodles in this spicy, satisfying one-pot meal with sausage and shrimp.',
    image: 'https://r2-pub.rork.com/generated-images/ede6498d-d26c-473e-aab6-e3d2b38222ff.png',
    cookTime: '25 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '3 packages chicken ramen noodles',
      '1/2 lb andouille sausage, sliced',
      '1/2 lb shrimp, peeled',
      '1 bell pepper, diced',
      '1 onion, diced',
      '2 celery stalks, diced',
      '3 cups chicken broth',
      'Cajun seasoning, hot sauce'
    ],
    instructions: [
      'Brown sausage, remove from pan',
      'Sauté vegetables until tender',
      'Add broth and Cajun seasoning, bring to boil',
      'Add ramen noodles, cook 2 minutes',
      'Add sausage and shrimp, cook until shrimp is pink'
    ],
    tips: [
      'Don\'t overcook the shrimp',
      'Adjust spice level to your taste',
      'Let flavors meld for a few minutes before serving'
    ]
  },
  {
    id: '44',
    title: 'Ramen Chicken Caesar Salad',
    category: 'Snack',
    description: 'Classic Caesar salad with crispy ramen noodles instead of croutons - crunchy and delicious!',
    image: 'https://r2-pub.rork.com/generated-images/e1c7548d-376a-4c5b-b245-3c6dcaaa86a7.png',
    cookTime: '15 mins',
    difficulty: 'Easy',
    microwaveOption: false,
    ingredients: [
      '2 packages chicken ramen noodles',
      '1 head romaine lettuce',
      '1 cup cooked chicken, sliced',
      '1/2 cup Caesar dressing',
      '1/4 cup parmesan cheese',
      '2 tbsp olive oil',
      'Black pepper to taste'
    ],
    instructions: [
      'Break ramen noodles into pieces',
      'Toss with olive oil and seasoning packets',
      'Bake at 350°F for 10 minutes until golden',
      'Toss lettuce with dressing',
      'Top with chicken, crispy noodles, and parmesan'
    ],
    tips: [
      'Watch noodles carefully while baking',
      'Add noodles just before serving to maintain crunch',
      'Use freshly grated parmesan for best flavor'
    ]
  },
  {
    id: '45',
    title: 'Ramen Beef Stroganoff',
    category: 'Fusion',
    description: 'Creamy beef stroganoff served over ramen noodles instead of egg noodles - rich and satisfying.',
    image: 'https://r2-pub.rork.com/generated-images/ede6498d-d26c-473e-aab6-e3d2b38222ff.png',
    cookTime: '20 mins',
    difficulty: 'Medium',
    microwaveOption: false,
    ingredients: [
      '3 packages beef ramen noodles',
      '1 lb beef strips',
      '1 cup mushrooms, sliced',
      '1 onion, sliced',
      '1 cup sour cream',
      '2 tbsp flour',
      '2 cups beef broth',
      'Fresh parsley'
    ],
    instructions: [
      'Brown beef strips, remove from pan',
      'Sauté onions and mushrooms',
      'Sprinkle flour, cook 1 minute',
      'Add broth gradually, bring to simmer',
      'Return beef, stir in sour cream, serve over cooked noodles'
    ],
    tips: [
      'Don\'t boil after adding sour cream',
      'Slice beef against the grain',
      'Garnish with fresh parsley'
    ]
  },
  {
    id: '46',
    title: 'Ramen Minestrone Soup',
    category: 'Soup Starter',
    description: 'Italian vegetable soup with ramen noodles - hearty, healthy, and full of Mediterranean flavors.',
    image: 'https://r2-pub.rork.com/generated-images/0a92fd95-80dc-4e7f-a104-e7781d2f793a.png',
    cookTime: '25 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '2 packages vegetable ramen noodles',
      '1 can diced tomatoes',
      '1 can kidney beans',
      '2 cups vegetable broth',
      '1 zucchini, diced',
      '1 carrot, diced',
      '2 tbsp olive oil',
      'Italian herbs, parmesan cheese'
    ],
    instructions: [
      'Heat olive oil, sauté vegetables',
      'Add tomatoes, broth, and herbs',
      'Bring to boil, add ramen noodles',
      'Cook until noodles are tender',
      'Stir in beans, serve with parmesan'
    ],
    microwaveInstructions: [
      'Combine all ingredients in microwave-safe bowl',
      'Microwave 8 minutes on high, stirring halfway',
      'Let stand 2 minutes before serving'
    ],
    tips: [
      'Add beans at the end to prevent mushiness',
      'Use fresh herbs when possible',
      'Serve with crusty bread'
    ]
  },
  {
    id: '47',
    title: 'Ramen Chicken Teriyaki Bowl',
    category: 'Fusion',
    description: 'Japanese-inspired bowl with teriyaki chicken, vegetables, and ramen noodles - sweet and savory perfection.',
    image: 'https://r2-pub.rork.com/generated-images/3ae5544b-0d21-43a4-9005-d55f8c572440.png',
    cookTime: '15 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '2 packages chicken ramen noodles',
      '1 lb chicken thighs, sliced',
      '1/4 cup teriyaki sauce',
      '1 cup broccoli florets',
      '1 carrot, julienned',
      '1 tbsp sesame oil',
      '1 tbsp sesame seeds',
      '2 green onions, chopped'
    ],
    instructions: [
      'Cook chicken in teriyaki sauce until glazed',
      'Steam vegetables until crisp-tender',
      'Cook ramen noodles, drain',
      'Toss noodles with sesame oil',
      'Serve chicken and vegetables over noodles'
    ],
    microwaveInstructions: [
      'Microwave chicken with teriyaki sauce 5 minutes',
      'Steam vegetables in microwave 3 minutes',
      'Cook noodles, combine all ingredients'
    ],
    tips: [
      'Don\'t overcook the vegetables',
      'Let chicken caramelize for better flavor',
      'Garnish with sesame seeds and green onions'
    ]
  },
  {
    id: '48',
    title: 'Ramen Taco Soup',
    category: 'Soup Main',
    description: 'Mexican-inspired soup with all your favorite taco flavors and ramen noodles - fiesta in a bowl!',
    image: 'https://r2-pub.rork.com/generated-images/d4de5ddc-0004-4a8c-bcae-4072ce0cbe55.png',
    cookTime: '20 mins',
    difficulty: 'Easy',
    microwaveOption: true,
    ingredients: [
      '2 packages beef ramen noodles',
      '1 lb ground beef',
      '1 packet taco seasoning',
      '1 can corn, drained',
      '1 can black beans',
      '2 cups beef broth',
      'Cheese, sour cream, tortilla chips'
    ],
    instructions: [
      'Brown ground beef, drain fat',
      'Add taco seasoning and broth',
      'Bring to boil, add ramen noodles',
      'Cook 3 minutes, add corn and beans',
      'Serve with cheese, sour cream, and crushed chips'
    ],
    microwaveInstructions: [
      'Microwave beef 5 minutes, breaking up halfway',
      'Add remaining ingredients except toppings',
      'Microwave 6 more minutes, stirring once'
    ],
    tips: [
      'Drain beef well to avoid greasy soup',
      'Crush tortilla chips for texture',
      'Add jalapeños for extra heat'
    ]
  },
  {
    id: '49',
    title: 'Ramen Chicken Cordon Bleu',
    category: 'Fusion',
    description: 'Elegant chicken cordon bleu with a ramen noodle crust - ham, cheese, and crispy coating!',
    image: 'https://r2-pub.rork.com/generated-images/ecf8efb5-44fb-4737-950a-1507bab17f41.png',
    cookTime: '30 mins',
    difficulty: 'Hard',
    microwaveOption: false,
    ingredients: [
      '2 packages chicken ramen noodles',
      '4 chicken breasts, butterflied',
      '4 slices ham',
      '4 slices swiss cheese',
      '2 eggs, beaten',
      '1/2 cup flour',
      'Oil for frying'
    ],
    instructions: [
      'Pound chicken thin, layer with ham and cheese',
      'Roll up and secure with toothpicks',
      'Crush ramen noodles for coating',
      'Dredge in flour, egg, then ramen crumbs',
      'Fry until golden and cooked through'
    ],
    tips: [
      'Secure rolls well to prevent opening',
      'Use meat thermometer to check doneness',
      'Let rest before slicing to keep filling inside'
    ]
  },
  {
    id: '50',
    title: 'Ramen Ice Cream Sundae',
    category: 'Dessert',
    description: 'Sweet and salty dessert with vanilla ice cream topped with caramelized ramen noodles - totally tubular!',
    image: 'https://r2-pub.rork.com/generated-images/8988da85-22b3-44d2-896e-f64583e060e2.png',
    cookTime: '10 mins',
    difficulty: 'Easy',
    microwaveOption: false,
    ingredients: [
      '1 package ramen noodles (discard seasoning)',
      '4 scoops vanilla ice cream',
      '1/4 cup butter',
      '1/4 cup brown sugar',
      '2 tbsp honey',
      'Whipped cream',
      'Maraschino cherries'
    ],
    instructions: [
      'Break ramen noodles into small pieces',
      'Melt butter in pan, add brown sugar and honey',
      'Add noodle pieces, stir until caramelized',
      'Let cool slightly',
      'Serve ice cream topped with caramelized noodles and whipped cream'
    ],
    tips: [
      'Don\'t use the seasoning packet!',
      'Watch carefully to prevent burning',
      'Serve immediately while noodles are still warm'
    ]
  }
];