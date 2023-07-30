import { Container, makeStyles, Typography } from "@material-ui/core";
import { CallMissedSharp, Height } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.secondary.main,
    height: "auto",
  },
  brief: {
    paddingTop: "15rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5rem",
    },
  },
  h6: {
    backgroundColor: "rgba(123, 74, 226, 0.05)",
    padding: ".5rem 1rem",
    color: theme.palette.secondary.light,
    borderRadius: "1.6rem",
    width: "fit-content",
    margin: "auto",
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
      width: "120vw",
    },
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    margin: "2rem 0rem 0rem 0rem",
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      width: "3rem",
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
    fontSize: "1.2rem",
    textAlign: "left",
  },
  containerMulitple: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

function Technology() {
  const icons = [
    {
      image: "http://ibrvheem.github.io/portfolio/Images/Figma.png",
    },
    {
      image: "http://ibrvheem.github.io/portfolio/Images/Github.png",
    },
    {
      image: "http://ibrvheem.github.io/portfolio/Images/mui.png",
    },
    {
      image: "http://ibrvheem.github.io/portfolio/Images/HTML5.png",
    },
    {
      image: "http://ibrvheem.github.io/portfolio/Images/React.png",
    },
    {
      image: "http://ibrvheem.github.io/portfolio/Images/Javascript.png",
    },
  ];
  const classes = useStyles();
  return (
    <section className={classes.body} id="technology">
      <Container className={classes.containerMulitple}>
        <Container className={classes.containerMulitple}>
          <Container className={classes.containerMulitple}>
            <Container className={classes.containerMulitple}>
              <Container className={classes.containerMulitple}>
                <div className={classes.brief}>
                  <Typography variant="h6" className={classes.h6} style={{ display: "flex", alignItems: "center" }}>
                    Skills
                    <span style={{ height: "3rem" }}>
                      <img src="Images/smiley.png" style={{ height: "3rem", paddingLeft: ".5rem" }} alt="" srcset="" />
                    </span>
                  </Typography>
                  <Typography variant="h1" className={classes.h1}>
                    Technologies That I Use
                  </Typography>
                </div>
                <div className={classes.icons}>
                  {icons.map((icon) => {
                    return <img src={icon.image} className={classes.image} />;
                  })}
                </div>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}

export default Technology;
