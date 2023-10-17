import { Typography, makeStyles, Container, List, ListItem, Button, Icon, IconButton, Card, CardActionArea, CardMedia, CardContent, Grid } from "@material-ui/core";
import { CloudDownloadOutlined, GitHub, Instagram, LinkedIn, Twitter, WhatsApp } from "@material-ui/icons";
import React from "react";
import ReactTyped from "react-typed";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: "10rem",
    backgroundColor: theme.palette.secondary.main,
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5rem",
    },
  },
  HeroSection: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "start",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.light,
    fontWeight: 400,
  },
  memoji: {
    [theme.breakpoints.down("sm")]: {
      margin: "3rem 0rem",
    },
  },
  brief: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  downloadCv: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      bottom: "-110px",
    },
  },
  h6: {
    backgroundColor: "rgba(123, 74, 226, 0.05)",
    padding: ".5rem 1rem",
    color: theme.palette.secondary.light,
    borderRadius: "1.6rem",
    width: "fit-content",
  },
  h1: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    maxWidth: "5rem",
    lineHeight: "7rem",
  },
  track: {
    display: "flex",
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "1.25rem",
    fontWeight: 200,
    cursor: "pointer",
    margin: "2rem 0",
  },
  menuItem: {
    padding: 0,
    "&:hover": {
      color: theme.palette.secondary.light,
      fontWeight: 700,
      transition: "all ease-in-out .5s",
    },
  },

  h2: {
    fontSize: "3rem",
    fontWeight: 700,
  },
  p: {
    fontSize: "1.5rem",
    fontWeight: 200,
    cursor: "pointer",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  whatsAppBtn: {
    display: "flex",
    borderColor: theme.palette.secondary.light,
    color: theme.palette.secondary.light,
    fontWeight: 500,
  },
  icon: {
    fontSize: "2.5rem",
    color: "rgba(255, 255, 255, 0.5)",
    marginRight: "2rem",
  },
  social: {
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: "0",
      left: "30%",
    },
  },
  card: {
    width: "100%",
    padding: "2rem",
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
    transition: "all ease-in-out .2s",
    "&:hover": {
      backgroundColor: "rgba(123, 74, 226, 0.05)",
      transition: "all ease-in-out .2s",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  SectionContainer: {
    display: "flex",
    justifyContent: "center",
  },
  section: {
    marginTop: "15rem",
    padding: "10rem 0rem",
    border: "1px solid",
    borderColor: "rgba(123, 74, 226, 0.2)",
    borderLeft: "none",
    borderRight: "none",
  },
  gridcontainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  gridcontainer2: {
    marginTop: "5rem",
    padding: "3rem 0rem",
    borderRadius: "1.6rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    backgroundColor: "rgba(123, 74, 226, 0.05)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
function HeroSection() {
  const popup = () => {
    let toBeCopied = document.querySelector("#email").innerHTML;
    let popup = document.getElementById("popup");
    navigator.clipboard.writeText(toBeCopied);
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 1500);
  };

  const classes = useStyles();
  return (
    <body className={classes.body} id="HeroSection">
      <Container className={classes.HeroSection}>
        <div className={classes.brief}>
          <Typography variant="h6" className={classes.h6} style={{ display: "flex", alignItems: "center" }}>
            {" "}
            Greetings!
            <span style={{ height: "3rem" }}>
              <img src="https://ibrvheem.github.io/portfolio/Images/wave.png" style={{ height: "3rem", paddingLeft: ".5rem" }} alt="" srcset="" />
            </span>
          </Typography>
          <Typography variant="h1" className={classes.h1}>
            {<ReactTyped strings={["Ibrahim", "Ibro", "Iro", "Ibrahim"]} backSpeed={80} typeSpeed={50} />} Aliyu
          </Typography>
          <div className={classes.track}>
            <span className={classes.menuItem}>Front-End Developer</span>
          </div>
          <div className={classes.social}>
            <Typography variant="body1" className={classes.p} id="popup" color="primary" style={{ display: "none", transition: "all ease-in-out .2s", padding: "0.5rem 0rem", fontSize: "1rem" }}>
              Sorry, I am currently not active on socials!
            </Typography>
            <a href="https://github.com/Ibrvheem" target="_blank">
              <GitHub className={classes.icon} />
            </a>
            <a href="https://www.linkedin.com/in/ibrahim-aliyu-96209a225/" target="_blank">
              <LinkedIn className={classes.icon} />
            </a>
            <Instagram className={classes.icon} onClick={popup} />
            <Twitter className={classes.icon} onClick={popup} />
          </div>
        </div>
        <div className={classes.memoji}>
          <img src="https://ibrvheem.github.io/portfolio/Images/memoji.png" className={classes.image} alt="" srcset="" />
        </div>
        <div className={classes.downloadCv}>
          <Button variant="text" className={classes.p} color="primary" endIcon={<CloudDownloadOutlined />}>
            <a href="https://docs.google.com/document/d/1TBuERb0co-Q2mjCRiWKKwaiP0mP-xzM2-J_n3iO9mh0/edit?usp=sharing" className={classes.link} target="_blank">
              {" "}
              Download CV
            </a>
          </Button>
          <Button variant="outlined" className={classes.whatsAppBtn} startIcon={<WhatsApp />} style={{ borderRadius: "1rem" }}>
            {" "}
            <a href="https://wa.me/2348163089308" target="_blank" className={classes.link}>
              LETS HAVE A CONVERSATION
            </a>
          </Button>
        </div>
      </Container>
      <section className={classes.section}>
        <Container>
          <Grid container className={classes.gridcontainer}>
            <Grid item md={3} sm={6} xs={10}>
              <Card className={classes.card}>
                <CardActionArea>
                  <img src="https://ibrvheem.github.io/portfolio/Images/CodeIcon.svg" alt="" srcset="" />
                  <CardContent>
                    <Typography variant="body1" className={classes.p} color="primary">
                      2 Years Experience
                    </Typography>
                    <Typography variant="h2" className={classes.h2} color="primary">
                      Programmer
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={3} sm={6} xs={10}>
              <Card className={classes.card}>
                <CardActionArea>
                  <img src="https://ibrvheem.github.io/portfolio/Images/DesignIcon.svg" alt="" srcset="" />
                  <CardContent>
                    <Typography variant="body1" className={classes.p} color="primary">
                      1/2 Years Experience
                    </Typography>
                    <Typography variant="h2" className={classes.h2} color="primary">
                      Designer
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={3} sm={6} xs={10}>
              <Card className={classes.card}>
                <CardActionArea>
                  <img src="https://ibrvheem.github.io/portfolio/Images/ProjectsIcon.svg" alt="" srcset="" />
                  <CardContent>
                    <Typography variant="body1" className={classes.p} color="primary">
                      1 Year Experience
                    </Typography>
                    <Typography variant="h2" className={classes.h2} color="primary">
                      Working
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Grid container md={12} className={classes.gridcontainer2}>
            <Grid item md={3}>
              <Typography variant="body1" style={{ color: "#7B4AE2" }} className={classes.p}>
                Developer
              </Typography>
              <Typography variant="h2" style={{ color: "#7B4AE2" }} className={classes.h2}>
                Front-End
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography variant="body1" style={{ color: "#7B4AE2" }} className={classes.p}>
                Dozens of Projects and{" "}
              </Typography>
              <Typography variant="h2" style={{ color: "#7B4AE2" }} className={classes.h2}>
                Experience
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography variant="body1" style={{ color: "#7B4AE2" }} className={classes.p}>
                A Free Lance Designer
              </Typography>
              <Typography variant="h2" style={{ color: "#7B4AE2" }} className={classes.h2}>
                = Graphics
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </body>
  );
}

export default HeroSection;
