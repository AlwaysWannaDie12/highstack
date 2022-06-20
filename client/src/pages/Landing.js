import {IconButton, Paper, Typography, Stack, Grid, Button} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "../theme/theme";
import {ReactComponent as Search} from '../static/search.svg';
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from 'react';
import HRC from '../static/logo.png'
import QuoteList from '../components/QuoteList';
import RolesList from '../components/RolesList';

 
const HomeGrid=styled(Grid)(({theme}) => ({
  marginTop: '30px',
  marginLeft: '50px',
  marginRight: '50px',
  backgroundColor: theme.palette.primary.light,
  height: '900px',
  padding: '50px',
  display: 'absolute',
  color: theme.palette.primary.contrastText,
  width: 'auto',
  borderRadius: theme.shape.borderRadius,
  zIndex:2,
}));

const Area = styled(Grid)(({ theme }) => ({
  marginTop: '0px',
  height: '100%',
  width: 'auto',
  backgroundColor: theme.palette.primary.shadow,
  borderRadius: theme.shape.borderRadius,
  padding: '30px',
  zIndex:3,
  display: 'flex',
  alignItems: 'center',
  overflow: "hidden",
    
}));

const StyledButton = styled(Button)(({theme}) => ({
  color: theme.palette.secondary.light,
  backgroundColor: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.contrastTextDark,
  },
}));

const TEXTS = [
  "DMS",
  "CAA",
  "EIPP",
  "Credit"
];


function Landing(props) {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() =>
      setIndex(index => index + 1),
      1500 // every 1.5 seconds
    );

    return () => window.clearTimeout(intervalId);
  }, []);



  return (
    <ThemeProvider theme={theme}>

      <HomeGrid container spacing={3}>
        
        <Grid item xs={6}>
          <Area>
            <Typography variant="h5" color="inherit" component='div'>
            <Search style={{height: 80, width: 50}}/><br/>
              Find the best answer to your technical question and help others answer theirs.
              <br/><br/>
              <StyledButton variant="contained" size="large"  onClick={props.action}><b>Log In</b></StyledButton>
            </Typography>
            
          </Area> 
        </Grid>
        <Grid item xs={6}>
          <Area>
            <Typography variant="h5" color="inherit" component='div' align="center" sx={{width:'100%'}}>
              <img style={{height:40, width: 'auto'}} src={HRC}/><br/>
              Have a question regarding {" "}
              <TextTransition springConfig={presets.gentle} inline='true' direction='down' style={{}} >
                <h2 style={{color:theme.palette.primary.contrastTextLight}}>{TEXTS[index % TEXTS.length]}</h2>
              </TextTransition>
              {""}?
              <br/>
            <Typography variant="h6" color="inherit" component='div' align="center" sx={{width:'100%'}}>
              Get started with high<b>Stack</b> and join the community of knowledge and solutions all over <b>HighRadius Corporation.</b>
            </Typography>
            </Typography>
            
          </Area> 
        </Grid>
        <Grid item xs={3}>
          <QuoteList/>
        </Grid>
        <Grid item xs={3}>
          <RolesList/> 
        </Grid>
        <Grid item xs={3}>
          <Area>
          <Typography variant="h6" color="inherit" component='div' align="center" sx={{width:'100%'}}>
            <Typography variant="h1" color="inherit" component='div' align="center" sx={{width:'100%'}}>
              17
            </Typography>
              Questions Asked <br/><br/>
            <StyledButton variant="contained" size="small" onClick={props.action}>Ask Questions</StyledButton>
          </Typography>
          </Area> 
        </Grid>
        <Grid item xs={3}>
          <Area>
          <Typography variant="h6" color="inherit" component='div' align="center" sx={{width:'100%'}}>
            <Typography variant="h1" color="inherit" component='div' align="center" sx={{width:'100%'}}>
              9
            </Typography>
              Questions Answered <br/><br/>
            <StyledButton variant="contained" size="small" onClick={props.action}>Answer Questions</StyledButton>
          </Typography>
          </Area> 
        </Grid>
      </HomeGrid>
    </ThemeProvider>
    
  )
}

export default Landing