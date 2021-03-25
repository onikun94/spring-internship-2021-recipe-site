import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      margin: theme.spacing(1),
      fontSize: 40,
      fontWeight: 100,
      fontFamily: "Raleway, Arial",
    },
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <header>
        <h1 className={classes.header}>recipe</h1>
      </header>
    </div>
  );
};

export default Header;
