import { Button, Card, CardContent, CardHeader, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { BorderColor } from '@material-ui/icons'
import data from './Data/ProjectData'
import React, { useState } from 'react'

const useStyles = makeStyles((theme)=>({
    body:{
        paddingTop:'10rem',
        backgroundColor: theme.palette.secondary.main,
        height: 'auto',
    },
    AboutSection:{
        height: "100%",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    h6:{
        backgroundColor: "rgba(123, 74, 226, 0.05)",
        padding: '.5rem 1rem',
        color: theme.palette.secondary.light,
        borderRadius: '1.6rem',
        width: 'fit-content'
    },
    h1:{
        color: theme.palette.primary.main,
        fontWeight: 700,
        maxWidth: '100%',
        lineHeight: '7rem',
        marginRight: 'auto',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            fontSize:'3rem'
    },
    },
    h4:{
        paddingTop: '2rem',
        fontSize: '1.6rem',
        fontWeight:700,
        marginBottom: '2rem',
        textAlign: 'left'
    },
    button:{
        padding: '1.5rem 5rem',
        // border: '1px solid',
        borderColor: theme.palette.secondary.light,
        color: theme.palette.secondary.light,
        borderRadius:'1.6rem',
        marginRight: '3rem',
        '&:hover':{
            backgroundColor: "rgba(123, 74, 226, 0.5)",
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
    },
    },
    GridContainer:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    TechUsed:{
        display:'flex',
        gap:'1rem'
    },
    ProjectContainer:{
        display: 'flex',
        justifyContent:'flex-end',
        flexDirection: 'column',
        // alignItems: 'center',
        marginTop:'4rem',
        height: 'auto',
        width: '100%',
        borderRadius: '1rem',
        backgroundColor: 'rgba(89, 101, 224, 1)'
    },
    ProjectCard:{
        background: 'transparent',
        border: '1px solid',
        borderColor: "rgba(123, 74, 226, 0.5)",
        color: 'white',
        marginTop: '8rem',
        [theme.breakpoints.down('sm')]:{
            marginTop: '2rem'
        }

    },
    CardTitle:{
        color:'rgba(255, 255, 255)',
        fontSize:'1.8rem',
        fontWeight: 700
        
    },
    CardSubheader:{
        paddingTop: '2rem',
        color:'rgba(255, 255, 255, 0.5)',
        fontSize:'1.2rem',
        textAlign:'left'
        
    },
    ProjectImage:{
        height: 'auto',
        width:"100%",
        borderRadius: '.5rem .5rem 0 0',
        objectFit:'contain',
        objectPosition:'bottom'
    },
    link:{
        textDecoration: 'none'
    }
}))

function Project() {
   const classes = useStyles()
   const projects = [
    {
        name: 'schoola.app',
        description: 'Schoola is a gamified all of that',
        image: 'Images/schoola-shot.png',
        link: 'https://www.schoola.app',
        technologyused: ['HTML', 'CSS']
    },
    {
        name: 'primetech-solutions.com',
        description: 'Schoola is a gamified all of that',
        image: 'Images/primetech-shot.png',
        link: 'https://primetech-solution.com',
        technologyused: ['REACTJS', 'CSS']
    },
    {
        name: 'itcentral.ng',
        description: 'Schoola is a gamified all of that',
        image: 'Images/itcentral-shot.png',
        link: 'https://itcentral.ng/',
        technologyused: ['REACTJS', 'MATERIAL-Ui']
        
    },
    {
        name: "Keepin' it real",
        description: 'Schoola is a gamified all of that',
        image: 'Images/itcentral-shot.png',
        technologyused: ['REACTJS', 'MATERIAL-Ui']
        
    }
]
return (

    <body className = {classes.body}>
        
        <Container>
            <Grid container className={classes.GridContainer}>
                <Grid item>
                    <div className={classes.brief}>
                        <Typography variant='h6'className={classes.h6} style = {{display:'flex', alignItems:'center'}}>Portfolio!<span><img src="/Images/smiley.png"  style = {{height:'3rem',display: 'flex', alignItems: 'center', paddingLeft:'.5rem'}}alt="" srcset="" /></span></Typography>
                        <Typography variant='h1'className={classes.h1}>Work and Projects</Typography>
                    </div>
                </Grid>
                {/* <Grid item>
                    <div className={classes.buttons}>
                        <Button variant='outlined'className={classes.button}>ALL</Button>
                        <Button variant='outlined'className={classes.button}>Ongoing</Button>
                        <Button variant='outlined'className={classes.button}>Complete</Button>
                    </div>
                </Grid> */}
            </Grid>
            <Grid container className={classes.GridContainer} md = {12} spacing = {2}>

                    {projects.map((project)=>{
                        return(
                            <Grid item md = {3} sm = {12} xs = {12}>
                                <a href={project.link} className = {classes.link}>
                                    
                                    <Card className={classes.ProjectCard}>
                                        <CardHeader  classes = {{title: classes.CardTitle, subheader: classes.CardSubheader}} className={classes.CardHeader} title={project.name} subheader = {project.description}>
                                        </CardHeader>


                                        <CardContent>
                                            <div className={classes.TechUsed}>
                                                <Typography variant='h6'className={classes.h6} style = {{display:'flex', alignItems:'center'}}>{(project.technologyused).at(0)}</Typography>
                                                <Typography variant='h6'className={classes.h6} style = {{display:'flex', alignItems:'center'}}>{(project.technologyused).at(1)}</Typography>
                                            </div>
                                            <Container className={classes.ProjectContainer}>
                                            <Typography variant = 'h4' className={classes.h4}>{project.name}</Typography>

                                                
                                                <img src={project.image} className={classes.ProjectImage} alt="" />

                                            </Container>


                                        </CardContent>
                                    </Card>
                                </a>
                                </Grid>

                        )
                    })}

            </Grid>

        </Container>

    </body>
  )
}

export default Project
