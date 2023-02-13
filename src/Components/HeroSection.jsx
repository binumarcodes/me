import { Typography, makeStyles, Container, List, ListItem, Button, Icon, IconButton, Card, CardActionArea, CardMedia, CardContent, Grid } from '@material-ui/core'
import { CloudDownloadOutlined, GitHub, Instagram, LinkedIn, Twitter, WhatsApp  } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import AboutMe from './AboutMe'

const useStyles = makeStyles((theme)=>({
    body:{
        paddingTop:'10rem',
        backgroundColor: theme.palette.secondary.main,
        height: 'auto',
    },
    HeroSection:{
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
        maxWidth: '5rem',
        lineHeight: '7rem'
    },
    track:{
        display:'flex',
        alignItems: 'center',
        color:'rgba(255, 255, 255, 0.5)',
        fontSize:'1.5rem',
        fontWeight: 100,
        cursor: 'pointer',
        margin: '2rem 0'
    },
    menuItem:{
        // color: 'white',
        padding: 0,
        '&:hover':{
            color: theme.palette.secondary.light,
            fontWeight: 700, 
            transition: 'all ease-in-out .5s'
        },
    },
   dot:{
        height: '.4rem',
        width: '.2rem',
        backgroundColor: 'yellow',
        margin: '0rem 1rem'
    },
    h2:{
        fontSize:'3rem',
        fontWeight: 700
    },
    p:{
        fontSize:'1.5rem',
        fontWeight: 100,
        cursor: 'pointer'


    },
        image:{
            height: '100%',
            width: '100%',
        },
    whatsAppBtn:{
        display:'flex',
        borderColor: theme.palette.secondary.light,
        color: theme.palette.secondary.light,
        fontWeight: 500
    },
    icon:{
        fontSize: '2.5rem',
        color:'rgba(255, 255, 255, 0.5)',
        marginRight: '2rem',
    },
    social:{
        textAlign: 'left'
    },
    card:{
        // height: '20rem',
        padding: '2rem',
        backgroundColor:'transparent',
        border: '1px solid',
        borderColor: theme.palette.secondary.light,
        transition: 'all ease-in-out .2s',
        '&:hover':{
            backgroundColor: "rgba(123, 74, 226, 0.05)",
            transition: 'all ease-in-out .2s'
        }
    },
    SectionContainer:{
        display: 'flex',
        justifyContent: 'center'
    },
    section:{
        marginTop: '15rem',
        padding: '10rem 0rem',
        // borderTop: '1px solid',
        border: '1px solid',
        borderColor: 'rgba(123, 74, 226, 0.2)',
        borderLeft: 'none',
        borderRight: 'none'
    },
    gridcontainer:{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2rem'
    },
    gridcontainer2:{
        // width: '70%',
        marginTop: '5rem',
        padding: '3rem 0rem',
        borderRadius: '1.6rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        backgroundColor: "rgba(123, 74, 226, 0.05)",
    }



}))
function HeroSection() {
    const [currentImage, setCurrentImage] = useState('/Images/Memoji.png');
    const [isAnimating, setIsAnimating] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
          if (isAnimating) return;
    
          setIsAnimating(true);
    
          if (window.scrollY > 50) {
            setTimeout(() => {
              setCurrentImage('/Images/AnotherImage.png');
              setIsAnimating(false);
            }, 500);
          } else {
            setTimeout(() => {
              setCurrentImage('/Images/Memoji.png');
              setIsAnimating(false);
            }, 500);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [isAnimating]);
    
    const classes = useStyles()
  return (
    <body className={classes.body}>
        <Container className={classes.HeroSection}>
            <div className={classes.brief}>
                <Typography variant='h6'className={classes.h6} style = {{display:'flex', alignItems:'center'}}> Greetings!<span><img src="/Images/wave.png"  style = {{height:'2rem', paddingLeft:'.5rem'}}alt="" srcset="" /></span></Typography>
                <Typography variant='h1'className={classes.h1}> Ibrahim Aliyu</Typography>
                <div className={classes.track}>
                    <span className={classes.menuItem}>Front-End Developer</span>
                    <span className={classes.dot}></span>
                    <span className={classes.menuItem}>UI Designer</span>
                </div>
                <div className={classes.social}>
                    <GitHub className={classes.icon}/>
                    <LinkedIn className={classes.icon}/>
                    <Instagram className={classes.icon}/>
                    <Twitter className={classes.icon}/>
                </div>

            </div>
            <div className={classes.memeoji}>
            <img src={currentImage} className={`${classes.image} ${isAnimating ? 'transition' : ''}`} alt="" srcset="" />

            </div>
            <div className={classes.downloadCv}>
                <Button variant='text'className={classes.p} color = 'primary' endIcon = {<CloudDownloadOutlined/>}> Download CV</Button>
                <Button variant='outlined'className={classes.whatsAppBtn} startIcon = {<WhatsApp/>} style = {{borderRadius:'1rem'}}> LETS HAVE A CONVERSATION</Button>
            </div>
        </Container>
        <section className={classes.section}>
            <Container>
                <Container>
                    <Container>
                        <Container>
                            <Container>
                                <Container>
                                    <Grid container md= {12} className = {classes.gridcontainer}>
                                        <Grid item md = {3}>
                                            <Card className = {classes.card}>
                                                <CardActionArea>
                                                    <img src="/Images/CodeIcon.svg" alt="" srcset="" className={classes.CardIcon} />
                                                    <CardContent>
                                                        <Typography variant='body1' className={classes.p} color ='primary'>2 Years Experience</Typography>
                                                        <Typography variant='h2' className={classes.h2} color ='primary'>Programmer</Typography>

                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>

                                        </Grid>
                                        <Grid item md = {3}>
                                            <Card className = {classes.card}>
                                                <CardActionArea>
                                                    <img src="/Images/ProjectsIcon.svg" alt="" srcset="" className={classes.CardIcon} />
                                                    <CardContent>
                                                        <Typography variant='body1' className={classes.p} color ='primary'>1 Year Experience</Typography>
                                                        <Typography variant='h2' className={classes.h2} color ='primary'>Working</Typography>

                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                        <Grid item md = {3}>
                                            <Card className = {classes.card}>
                                                <CardActionArea>
                                                    <img src="/Images/DesignIcon.svg" alt="" srcset="" className={classes.CardIcon} />
                                                    <CardContent>
                                                        <Typography variant='body1' className={classes.p} color ='primary'>1/2 Years Experience</Typography>
                                                        <Typography variant='h2' className={classes.h2} color ='primary'>Designer</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    </Grid>
                            
                                    <Grid container md= {12} className = {classes.gridcontainer2}>
                                        <Grid item md ={3}>
                                            <Typography variant='body1' style={{color:'#7B4AE2'}} className={classes.p}> Developer</Typography>
                                            <Typography variant='h2' style={{color:'#7B4AE2'}} className={classes.h2}> Front-End</Typography>
                                            
                                        </Grid>
                                        <Grid item md = {3}>
                                            <Typography variant='body1' style={{color:'#7B4AE2'}} className={classes.p}>Dozens of Projects and </Typography>
                                            <Typography variant='h2' style={{color:'#7B4AE2'}} className={classes.h2}>Experience</Typography>
                                        </Grid>
                                        <Grid item md = {3}>
                                            <Typography variant='body1' style={{color:'#7B4AE2'}} className={classes.p}>A Free Lance Designer</Typography>
                                            <Typography variant='h2' style={{color:'#7B4AE2'}} className={classes.h2}> UI</Typography>

                                        </Grid>
                                    </Grid>
                            
                                </Container>
                            </Container>
                        </Container>        
                    </Container>
                </Container>


            </Container>
        </section>
    </body>
  )
}

export default HeroSection
