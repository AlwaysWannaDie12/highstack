import {IconButton, Typography, Stack, Grid, Button} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "../theme/theme";

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

function AskQuestion() {
  return (
    <HomeGrid>
      <Typography variant="h5" color="inherit" component='div' 
                sx={{
                    float:'left'}}>
                        Ask a public Question:
      </Typography>
    </HomeGrid>
  )
}

export default AskQuestion