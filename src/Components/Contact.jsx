import { Button, Container, IconButton, makeStyles, Typography } from "@material-ui/core";
import { SendOutlined, WhatsApp, FileCopy, ArrowUpward, ArrowUpwardSharp, ArrowUpwardOutlined } from "@material-ui/icons";
import React from "react";
import ReactTyped from "react-typed";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5rem ",
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
    },
  },
  whatsAppBtn: {
    display: "flex",
    borderColor: theme.palette.secondary.light,
    color: theme.palette.secondary.light,
    fontWeight: 500,
    width: "fit-content",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  email: {
    color: theme.palette.secondary.light,
    cursor: "pointer",
  },
  Contact: {
    display: "flex",
    justifyContent: "center",
    gap: "10rem",
    marginTop: "5rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "2rem",
      marginTop: "0rem",
    },
  },
  icon: {
    color: theme.palette.secondary.light,
  },
  p: {
    fontSize: "1.5rem",
    fontWeight: 100,
    cursor: "pointer",
  },
  ToTop: {
    marginTop: "10rem",
    fontSize: "1rem",
    fontWeight: "400",
    color: theme.palette.secondary.light,
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
    },
  },
  link: {
    textDecoration: "none",
    fontWeight: 700,
    all: "unset",
  },
}));
function Contact() {
  const copyText = () => {
    let toBeCopied = document.querySelector("#email").innerHTML;
    let popup = document.getElementById("show");
    navigator.clipboard.writeText(toBeCopied);
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 1000);
  };
  const classes = useStyles();
  return (
    <section className={classes.section} id="contact">
      <Container className={classes.container}>
        <Typography variant="h6" className={classes.h6}>
          Contact Me
        </Typography>
        <Typography variant="h1" className={classes.h1}>
          Let's {<ReactTyped strings={["Chat!", "Talk!", "Build!"]} typeSpeed={100} backSpeed={100} loop />}
        </Typography>
        <div className={classes.Contact}>
          <Button variant="outlined" className={classes.whatsAppBtn} startIcon={<WhatsApp />} style={{ borderRadius: "1rem" }}>
            {" "}
            <a href="https://wa.me/2348163089308" target="_blank" className={classes.link}>
              LETS HAVE A CONVERSATION
            </a>
          </Button>
          <div className={classes.email} onClick={copyText}>
            <Typography variant="body1" className={classes.p} id="show" style={{ display: "none", transition: "all ease-in-out .2s" }}>
              copied!
            ç</Typography>
            <SendOutlined className={classes.icon} />
            <Typography variant="body1" className={classes.p} id="email">
              i.aliyu019@gmail.com
            </Typography>
            <FileCopy />
          </div>
        </div>

        <a href="#HeroSection" className={classes.link}>
          <Button endIcon={<ArrowUpwardOutlined />} className={classes.ToTop}>
            {" "}
            Go to the top
          </Button>
        </a>
      </Container>
    </section>
  );
}
export default Contact;
