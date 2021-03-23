import Link from "next/link";
import { getRecipes } from "../lib/recipe";

import type { NextPage } from "next";
import type { Recipe } from "../lib/recipe";

type Props = {
  recipes: Recipe[];
  link: { next?: string; prev?: string };
};

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>料理</h1>
      <h2>test</h2>
      <ul>
        <li>aa</li>
        {props.recipes.map((recipeData) => {
          //console.log(recipeData);
          <li key={recipeData.id}>{recipeData.title}</li>;
        })}
      </ul>
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
