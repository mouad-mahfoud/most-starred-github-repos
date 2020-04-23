import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Container } from "@material-ui/core";
import { getRepos } from "../../API";
import RepoItem from "../../components/Repo/RepoItem";
import InfiniteScroll from "react-infinite-scroller";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

let page = 1;

export default function ReposList() {
  const classes = useStyles();
  const [repos, setRepos] = useState([]);
  const [incompleteResults, setIncompleteResults] = useState();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      fetchMoreListItems();
    }
  });

  const fetchMoreListItems = async () => {
    const response = await getRepos(page);
    setRepos(repos.concat(response.items));
    setIncompleteResults(response.incomplete_results);
    page++;
    setInitialized(true);
  };

  return (
    <Container>
      {repos ? (
        <List className={classes.root}>
          <InfiniteScroll
            pageStart={page}
            loadMore={fetchMoreListItems}
            hasMore={incompleteResults}
            loader={
              <div className="loader" key={0}>
                fetching more repos ...
              </div>
            }
          >
            {repos.map((item, index) => (
              <RepoItem repo={item} key={index} />
            ))}
          </InfiniteScroll>
        </List>
      ) : (
        <h2>Loading .....</h2>
      )}
    </Container>
  );
}
