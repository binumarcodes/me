import { AppBar, Container, List, ListItem, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { hover } from "@testing-library/user-event/dist/hover";
// import Logo from '../../publicImages/Logo.svg'
import React from "react";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "transparent",
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
  navbar: {
    backgroundColor: "rgba(123, 74, 226, 0.05)",
    borderRadius: "1.8rem",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  menu: {
    display: "flex",
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
    fontWeight: 100,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: 100,
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.secondary.light,
      fontWeight: 700,
      transition: "all ease-in-out .5s",
    },
  },
  menuItem: {
    width: "fit-content",
    color: "white",
    "&:hover": {
      color: theme.palette.secondary.light,
      fontWeight: 700,
      transition: "all ease-in-out .5s",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.AppBar} elevation={0}>
      <Container>
        <Toolbar className={classes.navbar}>
          <div className={classes.logo}>
            <img src="https://ibrvheem.github.io/portfolio/Images/Logo.svg" alt="" srcset="" />
          </div>
          <List className={classes.menu}>
            <ListItem className={classes.menuItem}>
              <a href="#HeroSection" className={classes.link}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.menuItem}>
              <a href="#AboutSection" className={classes.link}>
                About Me
              </a>
            </ListItem>
            <ListItem className={classes.menuItem}>
              <a href="#projects" className={classes.link}>
                Projects
              </a>
            </ListItem>
            <ListItem className={classes.menuItem}>
              <a href="#technology" className={classes.link}>
                Technologies
              </a>
            </ListItem>
            <ListItem className={classes.menuItem}>
              <a href="#contact" className={classes.link}>
                Contact Me
              </a>
            </ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
