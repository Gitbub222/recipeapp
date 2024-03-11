export interface Ingredient {
    name: string;
    amount: string;
  }
  
export interface Recipe {
    title: string;
    duration: string;
    calories: number;
    serves: number;
    ingredients: Ingredient[];
    preparationSteps: string[];
    image: string;
  }
  

  export type RootStackParamList = {
    Saved: undefined;
    Search: undefined;
    Main: undefined;
    RecipeDetail: {
      recipe: Recipe; // Assuming `Recipe` is a type or interface you've defined
    };
    SearchResults:  {
      recipes: { id: string; title: string; description: string; imageUrl: string; }[]; // Assuming `Recipe` is a type or interface you've defined
    };
    // ... other screen params
  };
  