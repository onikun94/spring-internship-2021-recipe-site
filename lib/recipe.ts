//import recipes from "../data/recipes.json";

export type Recipe = {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  author: {
    user_name: string;
  };
  published_at: string;
  steps: string[];
  ingredients: {
    name: string;
    quantity: string;
  }[];
  related_recipes: number[];
};

export async function getRecipes(): Promise<Recipe[]> {
  const response = await fetch(
    "https://internship-recipe-api.ckpd.co/recipes",
    {
      headers: { "X-Api-Key": "remark-fish-magician" },
    }
  );
  const jsonData = await response.json();
  const links = jsonData?.links;
  const recipes = jsonData?.recipes;
  return recipes as Recipe[];
}
