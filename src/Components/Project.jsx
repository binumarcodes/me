import { Button, Card, CardContent, CardHeader, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { BorderColor } from "@material-ui/icons";
import data from "./Data/ProjectData";
import React, { useState } from "react";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: "10rem",
    backgroundColor: theme.palette.secondary.main,
    height: "auto",
  },
  AboutSection: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
    maxWidth: "100%",
    lineHeight: "7rem",
    marginRight: "auto",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  h4: {
    paddingTop: "2rem",
    fontSize: "1.6rem",
    fontWeight: 700,
    marginBottom: "2rem",
    textAlign: "left",
  },
  button: {
    padding: "1.5rem 5rem",
    // border: '1px solid',
    borderColor: theme.palette.secondary.light,
    color: theme.palette.secondary.light,
    borderRadius: "1.6rem",
    marginRight: "3rem",
    "&:hover": {
      backgroundColor: "rgba(123, 74, 226, 0.5)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  GridContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  TechUsed: {
    display: "flex",
    gap: "1rem",
  },
  ProjectContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    // alignItems: 'center',
    marginTop: "4rem",
    height: "auto",
    width: "100%",
    borderRadius: "1rem",
    backgroundColor: "rgba(89, 101, 224, 1)",
  },
  ProjectCard: {
    background: "transparent",
    height: "100%",
    border: "1px solid",
    borderColor: "rgba(123, 74, 226, 0.5)",
    color: "white",
    marginTop: "8rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
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
    fontWeight: 400,
    textAlign: "left",
  },
  ProjectImage: {
    height: "auto",
    width: "100%",
    borderRadius: ".5rem .5rem 0 0",
    objectFit: "contain",
    objectPosition: "bottom",
  },
  link: {
    textDecoration: "none",
  },
}));

function Project() {
  const classes = useStyles();
  const projects = [
    {
      id: 1,
      name: "schoola.app",
      description:
        "Schoola is a gamified learning application for K12 schools. Students are encouraged to learn through game-like features like points, ranks, tournaments, and duels. Students can participate in tournaments and win amazing prizes",
      image: "http://ibrvheem.github.io/portfolio/Images/schoola-shot.png",
      link: "https://www.schoola.app",
      technologyused: ["HTML", "CSS"],
    },
    {
      id: 2,
      name: "primetech-solutions.com",
      description:
        "PrimeTech is a design and engineering company with inherited experience, working in Nigeria for over decades. It provides reliable, innovative and efficient solutions for the construction of buildings, industries, civil structures, bridges, roads and infrastructure.",
      image: "http://ibrvheem.github.io/portfolio/Images/primetech-shot.png",
      link: "https://primetech-solutions.com",
      technologyused: ["REACTJS", "CSS"],
    },
    {
      id: 3,
      name: "itcentral.ng",
      description:
        "IT Central is a Tech Company that is passionate about software development and training the next generation of tech leaders. They specialize in building innovative software solutions and comprehensive training programs for businesses and developers.",
      image: "http://ibrvheem.github.io/portfolio/Images/itcentral-shot.png",
      link: "https://itcentral.ng/",
      technologyused: ["REACTJS", "MATERIAL-Ui"],
    },
    {
      id: 4,
      name: "Keepin' it real",
      description:
        "Keepin' it real is a personal project that i am building. Basically it is a to-do list web app that is built to be very easy to use and minamalistic. it has color coded cards to show the level of urgency. This project was/is being built with ReactJS and Material-Ui",
      image: "http://ibrvheem.github.io/portfolio/Images/keepinitreal-shot.png",
      link: "https://ibrvheem.github.io/Keepinitreal/",
      technologyused: ["REACTJS", "MATERIAL-Ui"],
    },
    {
      id: 5,
      name: "KlassNaut",
      description: "KlassNaut cutting-edge AI-powered note generator. It is designed to streamline the note-taking process for teachers, making it more efficient and effective.",
      image: "http://ibrvheem.github.io/portfolio/Images/klassNaut-shot.png",
      link: "https://klass-naut.vercel.app/",
      technologyused: ["REACTJS", "MATERIAL-Ui"],
    },
    {
      id: 6,
      name: "HostSpace",
      description: "HostSpace is a DevOps consulting company that aims to  streamline your development process and empowering your teams with DevOps as a service solutions.",
      image: "http://ibrvheem.github.io/portfolio/Images/hostspace-shot.png",
      link: "https://hostspaceng.com/",
      technologyused: ["REACTJS", "MATERIAL-Ui"],
    },
    {
      id: 7,
      name: "OneCenter",
      description:
        "With advanced AI technology and a customer-centric approach, OneCenter is transfroming call centers into seamless, personalized interactions that prioritize the needs of every organisation & their customers.",
      image: "http://ibrvheem.github.io/portfolio/Images/onecenter-shot.png",
      link: "https://onecenter.ai/",
      technologyused: ["REACTJS", "MATERIAL-Ui"],
    },
  ];
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.2,
        ease: "linear",
      },
    },
  };

  const item = (id) => ({
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 * id,
        ease: "linear",
      },
    },
  });
  return (
    <body className={classes.body} id="projects">
      <Container>
        <Grid container className={classes.GridContainer}>
          <Grid item>
            <div className={classes.brief}>
              <Typography variant="h6" className={classes.h6} style={{ display: "flex", alignItems: "center" }}>
                Portfolio!
                <span>
                  <img
                    src="Images/smiley.png"
                    style={{
                      height: "3rem",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: ".5rem",
                    }}
                    alt=""
                    srcset=""
                  />
                </span>
              </Typography>
              <Typography variant="h1" className={classes.h1}>
                Work and Projects
              </Typography>
            </div>
          </Grid>
          {/* <Grid item>
                    <div className={classes.buttons}>
                        <Button variant='outlined'className={classes.button}>ALL</Button>
                        <Button variant='outlined'className={classes.button}>Ongoing</Button>
                        <Button variant='outlined'className={classes.button}>Complete</Button>
                    </div>
                    //commented out
                </Grid> */}
        </Grid>
        <Grid container className={classes.GridContainer} md={12} spacing={2}>
          {projects.map((project) => {
            return (
              <Grid item md={3} sm={6} xs={12}>
                <a href={project.link} target="_blank" className={classes.link}>
                  <Card className={classes.ProjectCard}>
                    <CardHeader
                      classes={{
                        title: classes.CardTitle,
                        subheader: classes.CardSubheader,
                      }}
                      className={classes.CardHeader}
                      title={project.name}
                      subheader={project.description}
                    ></CardHeader>

                    <CardContent>
                      <div className={classes.TechUsed}>
                        <Typography variant="h6" className={classes.h6} style={{ display: "flex", alignItems: "center" }}>
                          {project.technologyused.at(0)}
                        </Typography>
                        <Typography variant="h6" className={classes.h6} style={{ display: "flex", alignItems: "center" }}>
                          {project.technologyused.at(1)}
                        </Typography>
                      </div>
                      <Container className={classes.ProjectContainer}>
                        <Typography variant="h4" className={classes.h4}>
                          {project.name}
                        </Typography>

                        <motion.img variants={item(project.id)} initial="hidden" whileInView="visible" src={project.image} className={classes.ProjectImage} alt="" />
                      </Container>
                    </CardContent>
                  </Card>
                </a>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </body>
  );
}

export default Project;
