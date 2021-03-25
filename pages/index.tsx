//import { useRouter } from "next/router";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { getPages, getRecipes, search } from "../lib/recipe";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import Header from "../components/Header";
import OverView from "../components/OverView";
import type { Recipe, Links } from "../lib/recipe";
import { NONAME } from "node:dns";
//import { test_color } from "../style/Test";
//import "../style/App.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    field: {
      "& > *": {
        margin: "0px",
        marginBottom: "10px",
        width: "30ch",
      },
    },
    link: {
      fontSize: 16,
      color: "black",
      textDecoration: "none",
    },
    card: {
      //maxWidth: 600,
      padding: 10,
      paddingBottom: "0px",
      backgroundColor: "lavender",
      border: "medium solid #ffffff",
    },
    cardBottom: {
      paddingBottom: "0px",
    },
    all: {
      backgroundColor: "#ffffff",
      overflowX: "hidden",
      //width: "100%",
      //height: "100%",
    },
    image: {
      //textAlign: "left",
      verticalAlign: "middle",
      borderRadius: "10px",
    },
    text: {
      //textAlign: "right",
      marginLeft: "10px",
      verticalAlign: "middle",
    },
    button: {
      position: "relative",
      //left: "250px",
    },
    flex: {
      display: "flex",
    },
  })
);

const TopPage: FC = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [keyword, setKeyword] = useState<string>("");
  const [link, setLink] = useState<Links | null>(null);
  const classes = useStyles();
  const image = null;

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
      const response = await getPages(link.next);
      setRecipes(response.recipes);
      setLink(response.links);
    }
  };

  const handlePage2 = async () => {
    if (link !== null && link.prev) {
      const response = await getPages(link.prev);
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

  if (recipes === null) return <div>LOADING</div>;

  return (
    <div className={classes.all}>
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
            label="料理名・食材でレシピ検索"
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
          <div>
            <Card className={classes.card}>
              <div className={classes.link}>
                <Link href={`/recipes/${r.id}`}>
                  <div>
                    <CardActionArea>
                      <a className={classes.link}>{r.title}</a>
                      <div className={classes.flex}>
                        <p>
                          {r.image_url && (
                            <img
                              src={r.image_url}
                              alt="レシピ画像"
                              width="140"
                              className={classes.image}
                            />
                          )}
                        </p>
                        <p className={classes.text}>{r.description}</p>
                      </div>
                    </CardActionArea>
                  </div>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      ))}
      <div className={classes.button}>
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
