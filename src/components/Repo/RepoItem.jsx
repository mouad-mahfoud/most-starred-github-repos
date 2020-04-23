import React from "react";
import {
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import BugReportIcon from "@material-ui/icons/BugReport";

function RepoItem({ repo }) {
  return (
    <React.Fragment key={repo.id}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={repo.owner.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={repo.name}
          secondary={
            <React.Fragment>
              <Chip
                key={1}
                size="small"
                icon={<StarIcon />}
                component={"span"}
                variant="outlined"
                label={"Stars : " + repo.stargazers_count}
              />
              <Chip
                key={2}
                size="small"
                icon={<BugReportIcon />}
                component={"span"}
                variant="outlined"
                label={"Issues : " + repo.open_issues_count}
              />
              <br />
              {repo.description}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
}

export default RepoItem;
