import Header from "../../components/Header";
import { getRecipe, Recipe } from "../../lib/recipe";
import React from "react";
import { getPages } from "../../lib/recipe";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import type { NextPage, GetServerSideProps } from "next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        position: "relative",
      },
    },
    menu: {
      color: "mediumpurple",
    },
    card: {
      padding: 10,
      backgroundColor: "lavender",
      border: "medium solid #ffffff",
    },
    otherCard: {
      padding: 10,
      backgroundColor: "lightgray",
      border: "medium solid #ffffff",
    },
    title: {
      margin: "10px",
    },
    description: {
      paddingInlineStart: "10px",
    },
    ingredients: {
      paddingInlineStart: "10px",
      padding: "2px",
    },
    methods: {
      paddingInlineStart: "40px",
      //padding: "4px",
    },
    method: {
      padding: "4px",
    },
    image: {
      borderRadius: "10px",
    },
    button: {
      position: "relative",
      margin: "10px",
    },
    all: {
      fontSize: "20px",
    },
  })
);

type Props = {
  recipe: Recipe;
};

const RecipePage: NextPage<Props> = (props) => {
  const { recipe } = props;
  const classes = useStyles();
  if (recipe == null) {
    return <div>THERE IS NO RECIPES</div>;
  }
  return (
    <div className={classes.all}>
      <Header />

      {recipe && (
        <main>
          <h2 className={classes.menu}>{recipe.title}</h2>

          {recipe.image_url && (
            <img
              src={recipe.image_url}
              alt="レシピ画像"
              width="300"
              className={classes.image}
            />
          )}
          <Card className={classes.card}>
            <h3 className={classes.title}>POINT!</h3>
            <p className={classes.description}>{recipe.description}</p>
          </Card>

          <Card className={classes.card}>
            <h3 className={classes.title}>材料</h3>
            <ol className={classes.ingredients}>
              {recipe.ingredients.map((ing, i) => (
                <ul key={i} className={classes.ingredients}>
                  {ing.name} : {ing.quantity}
                </ul>
              ))}
            </ol>
          </Card>
          <Card className={classes.card}>
            <h3 className={classes.title}>作り方</h3>
            <ol className={classes.methods}>
              {recipe.steps.map((step, i) => (
                <li key={i} className={classes.method}>
                  {step}
                </li>
              ))}
            </ol>
          </Card>
          <Card className={classes.otherCard}>
            <h3 className={classes.title}>その他情報</h3>
            <p className={classes.description}>
              この料理の投稿者:{recipe.author.user_name}
            </p>
            <p className={classes.description}>レシピID: {recipe.id}</p>
          </Card>
          <div className={classes.button}>
            <div className={classes.root}>
              <Button variant="contained">前へ</Button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id);

  const recipe = await getRecipe(id);
  return {
    props: {
      recipe: recipe,
    },
  };
};

export default RecipePage;
