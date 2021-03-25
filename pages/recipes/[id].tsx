import { useRouter } from "next/router";
import Header from "../../components/Header";
import type { NextPage, GetServerSideProps } from "next";
import { getRecipe, Recipe } from "../../lib/recipe";
//getserversideprops

type Props = {
  recipe: Recipe;
};

const RecipePage: NextPage<Props> = (props) => {
  const router = useRouter();
  const { recipe } = props;
  if (recipe == null) {
    return <div>THERE IS NO RECIPES</div>;
  }
  return (
    <div>
      <Header />

      {recipe && (
        <main>
          <h2>{recipe.title}</h2>

          {recipe.image_url && (
            <img src={recipe.image_url} alt="レシピ画像" width="300" />
          )}

          <p>{recipe.description}</p>

          <h3>材料</h3>
          <ol>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>
                {ing.name} : {ing.quantity}
              </li>
            ))}
          </ol>

          <h3>手順</h3>
          <ol>
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </main>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id);
  if (id === 0 || isNaN(id)) {
    return {
      notFound: true,
    };
  } else {
    const recipe = await getRecipe(id);
    return {
      props: {
        recipe: recipe,
      },
    };
  }
};

export default RecipePage;
