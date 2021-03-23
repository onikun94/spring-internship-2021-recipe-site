import Link from "next/link";
import { getRecipes } from "../lib/recipe";

import type { NextPage } from "next";
import type { Recipe } from "../lib/recipe";

type Props = {
  recipes: Recipe[];
  link: { next: string | null; prev?: string | null };
};

const Home: NextPage<Props> = (props) => {
  const recipeArray = props.recipes;
  return (
    <div>
      {recipeArray.map((r) => (
        <p>{r.title}</p>
      ))}
      <h1>aa</h1>
    </div>
  );
};

export const getStaticProps = async () => {
  const recipes = await getRecipes();
  return {
    props: {
      recipes: recipes,
    },
  };
};

export default Home;
