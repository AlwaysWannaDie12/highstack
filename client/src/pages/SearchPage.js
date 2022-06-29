import {List, Paper, Typography, Stack, Grid} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import QuestionLine from '../components/QuestionLine';
import QuestionTable from '../components/QuestionTable';
import { theme } from "../theme/theme";
import { useLocation} from 'react-router-dom';
import { useEffect } from 'react';


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
    textAlign: 'center',
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

function SearchPage(props) {
    const location = useLocation();


  return (
            <HomeGrid >
              <Area>
              <QuestionTable title="Questions" height="600px" product="" search={location.state.search}/>
              </Area>
            </HomeGrid>
        
  )
}

export default SearchPage
