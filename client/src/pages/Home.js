import {IconButton, Typography, Stack, Grid, Button} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "../theme/theme";
import {ReactComponent as Search} from '../static/search.svg';
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import HRC from '../static/logo.png';
import QuoteList from '../components/QuoteList';
import RolesList from '../components/RolesList';
import QuestionTable from '../components/QuestionTable';

 
const HomeGrid=styled(Grid)(({theme}) => ({
  marginTop: '30px',
  marginLeft: '50px',
  marginRight: '50px',
  backgroundColor: theme.palette.primary.light,
  height: '100%',
  padding: '50px',
  display: 'absolute',
  color: theme.palette.primary.contrastText,
  width: '80%',
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
  "CLS",
  "Credit"
];


function Home(props) {

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
        
        <Grid item xs={12}>
          <Area>
            <QuestionTable title="Top Questions" height="300px" padding={true}/>
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
            <StyledButton variant="contained" size="small" component={Link} to="/askQuestion">Ask Questions</StyledButton>
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
            <StyledButton variant="contained" size="small" component={Link} to="/topQuestions">Answer Questions</StyledButton>
          </Typography>
          </Area> 
        </Grid>
      </HomeGrid>
    </ThemeProvider>
    
  )
}

export default Home