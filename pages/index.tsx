//import { useRouter } from "next/router";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { getPages, getRecipes, search } from "../lib/recipe";
import { FC, useState, useEffect } from "react";
import Header from "../components/Header";
import OverView from "../components/OverView";
import type { Recipe, Links } from "../lib/recipe";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),

        //padding: theme.spacing(2),
      },
    },
    field: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);
const TopPage: FC = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [keyword, setKeyword] = useState<string>("");
  const [link, setLink] = useState<Links | null>(null);
  const classes = useStyles();

  const handleSubmit = async (words: string) => {
    if (keyword !== "") {
      const res = await search(words);
      console.log(`res = ${res.recipes}`);
      setRecipes(res.recipes);
      setLink(res.links);
    }
  };

  const handlePage = async () => {
    if (link !== null && link.next) {
      const response = await getPages(link?.next);
      setRecipes(response.recipes);
      setLink(response.links);
    }
  };

  const handlePage2 = async () => {
    if (link !== null && link.prev) {
      const response = await getPages(link?.prev);
      setRecipes(response.recipes);
      setLink(response.links);
    }
  };

  const handleWord = (word: string) => {
    setKeyword(word);
  };
  useEffect(() => {
    (async () => {
      const response = await getRecipes();
      setRecipes(response.recipes);
      setLink(response.links);
    })();
  }, []);

  if (recipes === null) return <div>THERE IS NO RECIPES</div>;

  return (
    <div>
      <Header />

      <div>
        <form
          className={classes.field}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(keyword);
            //console.log(keyword);
          }}
        >
          <TextField
            id="filled-basic"
            label="料理名"
            variant="filled"
            value={keyword}
            onChange={(e) => {
              handleWord(e.target.value);
            }}
          />
        </form>
      </div>

      {recipes.map((r) => (
        <div key={r.id}>
          <OverView
            id={r.id}
            title={r.title}
            description={r.description}
            image_url={r.image_url}
          />
        </div>
      ))}
      <div className="buttonState">
        <div className={classes.root}>
          <Button variant="contained" onClick={handlePage2}>
            前へ
          </Button>
          <Button variant="contained" onClick={handlePage}>
            次へ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
