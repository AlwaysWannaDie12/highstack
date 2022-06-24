import {List, Paper, Typography, Stack, Grid} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import QuestionLine from '../components/QuestionLine';
import QuestionTable from '../components/QuestionTable';
import { theme } from "../theme/theme";


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


const QuestionArea = styled(Stack)(({ theme }) => ({
    marginTop: '50px',
    height: '500px',
    overflowY: 'scroll',
    backgroundColor: theme.palette.primary.shadow,
    borderRadius: theme.shape.borderRadius,
    paddingLeft: '15px',
    paddingTop: '15px',
    zIndex:3,
}));

function Questions() {
  return (
    <ThemeProvider theme={theme}>
            <HomeGrid >
                <QuestionTable title="Questions" height="600px"/>
            </HomeGrid>
        
    </ThemeProvider>
  )
}

export default Questions


{/* <QuestionArea spacing={3}>
                    <QuestionLine {...Question}/>
                    <QuestionLine/>
                    <QuestionLine/>
                    <QuestionLine/>
                    <QuestionLine/>
                    <QuestionLine/>
                    <QuestionLine/>
                    <QuestionLine/>
                </QuestionArea> */}