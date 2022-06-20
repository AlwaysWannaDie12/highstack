import {Card, Paper, Typography, Stack, Grid} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import QuestionLine from '../components/QuestionLine';
import { theme } from "../theme/theme";

const HomeGrid=styled(Grid)(({theme}) => ({
    marginTop: '80px',
    marginLeft: '140px',
    marginRight: '50px',
    backgroundColor: theme.palette.primary.light,
    height: '600px',
    padding: '20px',
    display: 'absolute',
    color: theme.palette.primary.contrastText,
    width: 'auto',
    borderRadius: theme.shape.borderRadius,
    zIndex:2,
}));


const QuestionArea = styled(Stack)(({ theme }) => ({
    marginTop: '50px',
    height: '80%',
    overflow: 'scroll',
    backgroundColor: theme.palette.primary.shadow,
    borderRadius: theme.shape.borderRadius,
    paddingLeft: '15px',
    paddingTop: '15px',
    zIndex:3,
}));


function TopQuestions() {
  return (
    <ThemeProvider theme={theme}>
            <HomeGrid >
            <Typography variant="h5" color="inherit" component='div' 
                sx={{
                    float:'left'}}>
                        Top Questions:
                </Typography>
                <QuestionArea spacing={3}>
                    <QuestionLine/>
                    <QuestionLine/>
                    <QuestionLine/>
                    <QuestionLine/>
                    <QuestionLine/>
                    <QuestionLine/>
                    <QuestionLine/>
                    <QuestionLine/>
                </QuestionArea>
            </HomeGrid>
        
    </ThemeProvider>
  )
}

export default TopQuestions