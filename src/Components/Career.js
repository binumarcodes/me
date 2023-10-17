import { Card, CardActionArea, CardContent, CardHeader, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.secondary.main,
    paddingTop: "15rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5rem",
    },
  },
  h1: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    maxWidth: "100%",
    lineHeight: "7rem",
    marginRight: "auto",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  h2: {
    fontSize: "3rem",
    fontWeight: 700,
    color: "white",
    margin: "5rem 0rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      margin: "1rem 0",
    },
  },
  h4: {
    color: theme.palette.secondary.light,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  h6: {
    backgroundColor: "rgba(123, 74, 226, 0.05)",
    padding: ".5rem 1rem",
    color: theme.palette.secondary.light,
    borderRadius: "1.6rem",
    width: "fit-content",
  },
  card: {
    background: "transparent",
    border: "1px solid",
    borderColor: "rgba(123, 74, 226, 0.5)",
    color: "white",
    textAlign: "left",
    marginBottom: "2rem",
    "&:hover": {
      backgroundColor: "rgba(123, 74, 226, 0.05)",
    },
  },
  CardTitle: {
    color: "rgba(255, 255, 255)",
    fontSize: "1.8rem",
    fontWeight: 700,
  },
  CardSubheader: {
    paddingTop: "2rem",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "1.3rem",
    fontWeight: 200,
    textAlign: "left",
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Professional = [
  {
    header: "Frontend developer at iT Central",
    subheader: "I create web-based applications and websites using both Vanilla Javascript and React JS, and I utilize tools like Redux and Material-UI to improve the user interface and experience.",
    Duration: "3 months +",
    timeframe: "September 2022 - Date",
  },
  {
    header: "Frontend developer at Schoola",
    subheader: "I was responsible for developing Schoola's primary website using various frontend tools and libraries to create a user-friendly interface that enhanced the overall user experience.",
    Duration: "5 months",
    timeframe: "May - October 2022",
  },
];
const academic = [
  {
    header: "Bayero University Kano",
    subheader: "I am currently pursuing a major in Information Technology at Bayero University Kano's Faculty of Computing.",
    Duration: "4 Years",
    timeframe: "September 2018 - Date",
  },
  {
    header: "Future Leaders International School",
    subheader: "I graduated high-school from future leaders international school. I'd like to think i was a good student. atleast above average. haha!",
    Duration: "5 Years",
    timeframe: "September 2013 - August 2018",
  },
];

function Career() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Typography variant="h6" className={classes.h6} style={{ margin: "auto", display: "flex", alignItems: "center" }}>
        Career!
        <span>
          <img src="https://ibrvheem.github.io/portfolio/Images/technologist.png" style={{ height: "3rem", paddingLeft: ".5rem" }} alt="" srcset="" />
        </span>
      </Typography>
      <Typography variant="h1" className={classes.h1}>
        Current Path
      </Typography>
      <Container className={classes.CareerContainer}>
        <Grid container md={12} spacing={4}>
          <Grid item md={6}>
            <Typography variant="h2" className={classes.h2}>
              Professional
            </Typography>
            {Professional.map((each) => {
              return (
                <Card className={classes.card}>
                  <CardHeader classes={{ title: classes.CardTitle, subheader: classes.CardSubheader }} className={classes.CardHeader} title={each.header} subheader={each.subheader} />
                  <CardActionArea disabled>
                    <CardContent className={classes.CardContent}>
                      <Typography variant="h4" className={classes.h4} color="primary">
                        {each.Duration}
                      </Typography>
                      <Typography variant="h4" className={classes.h4} color="primary">
                        {each.timeframe}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Grid>
          <Grid item md={6}>
            <Typography variant="h2" className={classes.h2}>
              Academic
            </Typography>
            {academic.map((each) => {
              return (
                <Card className={classes.card}>
                  <CardHeader classes={{ title: classes.CardTitle, subheader: classes.CardSubheader }} className={classes.CardHeader} title={each.header} subheader={each.subheader} />
                  <CardActionArea disabled>
                    <CardContent className={classes.CardContent}>
                      <Typography variant="h4" className={classes.h4} color="primary">
                        {each.Duration}
                      </Typography>
                      <Typography variant="h4" className={classes.h4} color="primary">
                        {each.timeframe}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Career;
