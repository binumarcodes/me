import { Card, CardActionArea, CardContent, CardHeader, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    section:{
        backgroundColor: theme.palette.secondary.main,
        paddingTop: '15rem',
        [theme.breakpoints.down('sm')]:{
            paddingTop: '5rem'
        }

    },
    h1:{
        color: theme.palette.primary.main,
        fontWeight: 700,
        maxWidth: '100%',
        lineHeight: '7rem',
        marginRight: 'auto',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]:{
            fontSize: '3rem'
        }
    },
    h2:{
        fontSize:'3rem',
        fontWeight: 700,
        color: 'white',
        margin: '5rem 0rem',
        [theme.breakpoints.down('sm')]:{
            fontSize: '2rem',
            margin: '1rem 0'
        }
    },
    h4:{
        color: theme.palette.secondary.light,
        [theme.breakpoints.down('sm')]:{
            fontSize: '1.5rem',
        }

    },
    h6:{
        backgroundColor: "rgba(123, 74, 226, 0.05)",
        padding: '.5rem 1rem',
        color: theme.palette.secondary.light,
        borderRadius: '1.6rem',
        width: 'fit-content'
    },
    card:{
        background: 'transparent',
        border: '1px solid',
        borderColor: "rgba(123, 74, 226, 0.5)",
        color: 'white',
        textAlign: 'left',
        marginBottom: '2rem', 
        '&:hover': {
            backgroundColor: "rgba(123, 74, 226, 0.05)",
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
    CardContent:{
        display: 'flex',
        justifyContent: 'space-between'
    }




}))

const Professional = [
    {
        header: 'Frontend developer at iT Central',
        subheader: 'I develop websites and web applications using Vanilla Javascript and React JS, alongside technologies such as Redux and Material-UI to enhance the user experience.',
        Duration: '3 months +',
        timeframe: 'September 2022 - Date'
    },
    {
        header: 'Frontend developer at Schoola',
        subheader: "I developed Schoola's main website which was developed using frontend tools and libraries, that helped create a user-friendly interface and improve the overall user experience.",
        Duration: '5 months',
        timeframe: 'May - October 2022'
    },
]
const academic = [
    {
        header: 'Bayero University Kano',
        subheader: 'Currently, I am enrolled in the Faculty of Computing, where I am majoring in Information Technology.',
        Duration: '4 Years',
        timeframe: 'March 2018 - Date'
      
    },
    {
        header: 'Future Leaders International School',
        subheader: 'I really dont know why i am adding this here, just to fill up space i guess. But this is actually the school i finished from',
        Duration: '5 Years',
        timeframe: 'September 2013 - August 2018'
       
    }
]

function Career() {
    const classes = useStyles()
  return (
    <section className={classes.section}>
            <Typography variant='h6'className={classes.h6} style = {{margin: 'auto', display: 'flex', alignItems: 'center'}}>Career!<span><img src="/Images/technologist.png"  style = {{height:'3rem', paddingLeft:'.5rem'}}alt="" srcset="" /></span></Typography>
            <Typography variant='h1' className={classes.h1}>Current Path</Typography>
        <Container className={classes.CareerContainer}>
            <Grid container md  = {12} spacing = {4}>
                <Grid item md = {6}>
                <Typography variant='h2' className={classes.h2}>Professional</Typography>
                    {Professional.map((each)=>{
                        return(
                            <Card className = {classes.card}>
                                <CardHeader  classes = {{title: classes.CardTitle, subheader: classes.CardSubheader}} className={classes.CardHeader} title={each.header} subheader = {each.subheader}/>
                                <CardActionArea disabled>
                                    <CardContent className={classes.CardContent}>
                                        <Typography variant='h4' className={classes.h4 } color ='primary'>{each.Duration}</Typography>
                                        <Typography variant='h4' className={classes.h4 } color ='primary'>{each.timeframe}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        )

                    })}

                    
                </Grid>
                <Grid item md = {6}>
                    <Typography variant='h2' className={classes.h2}>Academic</Typography>
                    {academic.map((each) =>{
                        return(

                        <Card className = {classes.card}>
                            <CardHeader  classes = {{title: classes.CardTitle, subheader: classes.CardSubheader}} className={classes.CardHeader} title={each.header} subheader = {each.subheader}/>
                            <CardActionArea disabled>
                                <CardContent className={classes.CardContent}>
                                    <Typography variant='h4' className={classes.h4 } color ='primary'>{each.Duration}</Typography>
                                    <Typography variant='h4' className={classes.h4 } color ='primary'>{each.timeframe}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        )
                    })}

                    
                </Grid>
            </Grid>
        
        </Container>

    </section>
  )
}

export default Career
