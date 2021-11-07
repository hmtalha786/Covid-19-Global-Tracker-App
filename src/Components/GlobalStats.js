import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    margin: theme.spacing(2),
  },
  title: {
    color: "#8e2a2c",
    fontWeight: "500",
  },
  chip: {
    margin: theme.spacing(0.5, 0, 0.5, 1.5),
  },
}));

export default function GlobalStats() {
  const classes = useStyles();

  const [data, setData] = useState();
  const [isFetching, setisFetching] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const api = await response.json();
      setData(api);
      setisFetching(true);
    }
    fetchData();
  }, []);

  if (isFetching) {
    return (
      <div>
        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          <ListItem className={classes.title}>Worldwide Cases</ListItem>
          <div>
            <Chip className={classes.chip} label={`Total : ${data.cases}`} />
          </div>
          <div>
            <Chip className={classes.chip} label={`Active : ${data.active}`} />
          </div>
          <div>
            <Chip
              className={classes.chip}
              label={`Critical : ${data.critical}`}
            />
          </div>
          <div>
            <Chip className={classes.chip} label={`Deaths : ${data.deaths}`} />
          </div>
          <div>
            <Chip
              className={classes.chip}
              label={`Recovered : ${data.recovered}`}
            />
          </div>
          <div>
            <Chip className={classes.chip} label={`Tests : ${data.tests}`} />
          </div>

          <br />

          <ListItem className={classes.title}>Today's Statistics</ListItem>
          <div>
            <Chip
              className={classes.chip}
              label={`Cases : ${data.todayCases}`}
            />
          </div>
          <div>
            <Chip
              className={classes.chip}
              label={`Recovered : ${data.todayRecovered}`}
            />
          </div>
          <div>
            <Chip
              className={classes.chip}
              label={`Deaths : ${data.todayDeaths}`}
            />
          </div>
        </List>
      </div>
    );
  } else {
    return (
      <h5 style={{ textAlign: "center", marginTop: "30px" }}>
        Wait data is being fetched .........
      </h5>
    );
  }
}

