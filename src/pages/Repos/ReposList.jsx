import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Container } from "@material-ui/core";
import { getRepos } from "../../API";
import RepoItem from "../../components/Repo/RepoItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function ReposList() {
  const classes = useStyles();
  const [repos, setRepos] = useState();

  useEffect(() => {
    (async () => {
      const response = await getRepos();
      setRepos(response.items);
    })();
  });

  return (
    <Container>
      {repos ? (
        <List className={classes.root}>
          {repos.map((item, index) => (
            <RepoItem repo={item} key={index} />
          ))}
        </List>
      ) : (
        <h2>Loading......</h2>
      )}
    </Container>
  );
}
