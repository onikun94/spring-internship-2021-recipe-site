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

export type Links = {
  next?: string;
  prev?: string;
};

export type Res = {
  recipes: Recipe[];
  links: Links;
};

export async function getRecipes(): Promise<Res> {
  const response = await fetch(
    "https://internship-recipe-api.ckpd.co/recipes",
    {
      headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY as string },
      method: "GET",
    }
  );
  const recipes = await response.json();
  //const links = jsonData?.links;
  //const recipes = jsonData?.recipes;
  return recipes as Res;
}

export async function getPages(nextLink: string): Promise<Res> {
  const response = await fetch(nextLink, {
    headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY as string },
    method: "GET",
  });
  const recipes = await response.json();
  //const links = jsonData?.links;
  //const recipes = jsonData?.recipes;
  return recipes as Res;
}

export async function getRecipe(id: number): Promise<Res | null> {
  const response = await fetch(
    `https://internship-recipe-api.ckpd.co/recipes/${id}`,
    {
      headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY as string },
      method: "GET",
    }
  );
  const recipe = await response.json();
  return recipe as Res;
}

export async function search(keyword: string): Promise<Res> {
  const response = await fetch(
    `https://internship-recipe-api.ckpd.co/search?keyword=${keyword}`,
    {
      headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY as string },
      method: "GET",
    }
  );

  const searchRes = await response.json();
  return searchRes as Res;
}
