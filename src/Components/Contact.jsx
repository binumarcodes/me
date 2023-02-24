import { Button, Container, IconButton, makeStyles, Typography } from '@material-ui/core'
import { SendOutlined, WhatsApp, FileCopy, ArrowUpward, ArrowUpwardSharp, ArrowUpwardOutlined } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    section:{
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down('sm')]:{
            paddingTop: '5rem '
        }

    },
    h6:{
        backgroundColor: "rgba(123, 74, 226, 0.05)",
        padding: '.5rem 1rem',
        color: theme.palette.secondary.light,
        borderRadius: '1.6rem',
        width: 'fit-content',
        margin: 'auto'
    },
    h1:{
        color: theme.palette.primary.main,
        fontWeight: 700,
        maxWidth: '100%',
        lineHeight: '7rem',
        marginRight: 'auto',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]:{
            fontSize: '3rem',
        }

    },
    whatsAppBtn:{
        display:'flex',
        borderColor: theme.palette.secondary.light,
        color: theme.palette.secondary.light,
        fontWeight: 500,
        width: 'fit-content',
        [theme.breakpoints.down('sm')]:{
            margin: 'auto'
        }

    },  
    email:{
        color: theme.palette.secondary.light,
        cursor: "pointer"
    },
    Contact:{
        display: 'flex',
        justifyContent: 'center',
        gap: '10rem',
        marginTop: '5rem',
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
            gap: '2rem',
            marginTop: '0rem'
        }

    },
    icon:{
        color: theme.palette.secondary.light
    },
    p:{
        fontSize:'1.5rem',
        fontWeight: 100,
        cursor: 'pointer'
    },
    ToTop:{
        marginTop: '10rem',
        fontSize: '1rem',
        fontWeight: '400',
        color: theme.palette.secondary.light, 
        [theme.breakpoints.down('sm')]:{
            marginTop: '3rem'
        }

    },
    link:{
        textDecoration: 'none'

    }


}))
function Contact() {
const classes = useStyles()
  return (
    <section className={classes.section}>
        <Container className = {classes.container}>
            <Typography variant='h6' className={classes.h6}>Contact Me</Typography>
            <Typography variant='h1'className={classes.h1}>Let's Talk!</Typography>
            <div className={classes.Contact}>
                <Button variant='outlined'className={classes.whatsAppBtn} startIcon = {<WhatsApp/>} style = {{borderRadius:'1rem'}}> LETS HAVE A CONVERSATION</Button>
                <div className={classes.email}>
                    <SendOutlined className={classes.icon}/>
                    <Typography variant='body1'className={classes.p}>i.aliyu019@gmail.com</Typography>
                    <FileCopy/>
                </div>

            </div>

                  <a href='#HeroSection' className={classes.link}><Button endIcon = {<ArrowUpwardOutlined/>}  className = {classes.ToTop}> Go to the top</Button></a>

        
        </Container>

    </section>
  )
}

export default Contact
