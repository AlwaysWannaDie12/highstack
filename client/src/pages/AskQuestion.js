import {TextField, Typography, Grid, Button, Divider, Autocomplete} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
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
  textAlign: 'left',
}));

const Area = styled(Grid)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.shadow,
  borderRadius: theme.shape.borderRadius,
  padding: '40px',
  zIndex:3,
  display: 'relative',
  alignItems: 'left',
  overflow: "hidden",
  height: 'fit-content',
}));

const TextArea = styled(TextField)(({theme}) =>({
  width: '100%',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.light,    
}))

const StyleText =  styled(Typography)(({theme}) =>({
  float:'left',
  width:'100%',
}))

const StyledButton = styled(Button)(({theme}) => ({
  color: theme.palette.secondary.light,
  backgroundColor: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.contrastTextDark,
  },
}));


function AskQuestion(props) {

  return (
    <ThemeProvider theme = {theme}>
    <HomeGrid container spacing={3}>
      <Area item sx={12}>
        <StyleText variant="h5" color="inherit" component='div'>
                        Ask a public Question:{<br/>}{<br/>}
                        <Divider/>
        <br/>
          <StyleText variant="h6" color="inherit" component='div'>
            Title:<br/>
        
          <StyleText variant="caption" color="inherit" component='div'>
            Be specific and imagine you’re asking a question to another person{<br/>}
            <TextArea variant="outlined" size="small" color="secondary" sx={{ input: { color: 'white' } }} ></TextArea>
                  {<br/>}
                  {<br/>}{<br/>}
                  
              <StyleText variant="h6" color="inherit" component='div'>
                       Body:<br/>
                <StyleText variant="caption" color="inherit" component='div'>
                       Include all the information someone would need to answer your question
                       {<br/>}
                       <TextArea variant="outlined" size="small" 
                        color="secondary" multiline inputProps={{ style: { color: "white" } }}
                        rows={15} maxRows={20} ></TextArea>
                        {<br/>}
                        {<br/>}{<br/>}
                        <StyleText variant="h6" color="inherit" component='div'>
                          Tags:<br/>
                          <StyleText variant="caption" color="inherit" component='div'>
                            Add up to 5 tags to describe what your question is about
                            <TextArea variant="outlined" size="small" color="secondary" sx={{ input: { color: 'white' } }} ></TextArea>
                            {<br/>}
                        {<br/>}{<br/>}
                          <StyleText variant="h6" color="inherit" component='div'>
                          Product:<br/>
                          <StyleText variant="caption" color="inherit" component='div'>
                            <TextArea variant="outlined" size="small" color="secondary" sx={{ input: { color: 'white' } }} ></TextArea>
                            {<br/>}
                        {<br/>}{<br/>}
                        <StyledButton variant="contained" size="medium">Review your Question</StyledButton>
                      </StyleText>
                    </StyleText>
                  </StyleText>
                </StyleText>
              </StyleText>
            </StyleText>
          </StyleText>
        </StyleText>
      </StyleText>

      </Area>
     
      </HomeGrid>
    </ThemeProvider>
  )
}

export default AskQuestion