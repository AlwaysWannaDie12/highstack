import {TextField, Typography, Grid, Button, Divider, Autocomplete, Paper, Chip} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import PostBodyTextArea from '../components/PostBodyTextArea';
import CloseIcon from '@mui/icons-material/Close';





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

const StyledPaper = styled(Paper)(({theme}) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.dark
}))

const StyledChip = styled(Chip)(({theme}) => ({
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.contrastTextDark,
}))

const Products = [
  "DMS",
  "CAA",
  "CRD",
  "EIPP",
  "CLS"
]

const tags = [
  "JS",
  "Java",
  "Python",
  "Git",
  "ExtJS",
  "React",
  "Spring"
]



function AskQuestion(props) {

  const [questionTitle,setQuestionTitle] = useState('');
  const [questionBody, setQuestionBody] = useState('');
  const [product, setProduct] = useState('');
  const [selectedTags, setSelectedTags] = useState('');

  function sendQuestion(ev) {
    ev.preventDefault();
    console.log('Title: '+questionTitle);
    console.log('Body: '+questionBody);
    console.log('Tags: '+selectedTags);
    console.log('Product: '+product);

    // axios.post('http://localhost:3030/questions', {
    //   title: questionTitle,
    //   content: questionBody,
    //   tags: tags.map(tag => tag.id),
    // }, {withCredentials:true})
    //   .then(response => {
    //     console.log(response.data);
    //     setRedirect('/questions/'+response.data[0]);
    //   });
  }
  

  return (
    <HomeGrid container spacing={3}>
      <Area item sx={12}>
        <form onSubmit={ev => sendQuestion(ev)}>
        <StyleText variant="h5" color="inherit" component='div'>
                        Ask a public Question:{<br/>}{<br/>}
                        <Divider/>
        <br/>
          <StyleText variant="h6" color="inherit" component='div'>
            Title:<br/>
        
          <StyleText variant="caption" color="inherit" component='div'>
            Be specific and imagine you’re asking a question to another person{<br/>}
            <TextArea value={questionTitle} onChange={e => setQuestionTitle(e.target.value)} variant="outlined" size="small" color="secondary" sx={{ input: { color: 'white' } }} ></TextArea>
                  {<br/>}
                  {<br/>}{<br/>}
                  
              <StyleText variant="h6" color="inherit" component='div'>
                       Body:<br/>
                <StyleText variant="caption" color="inherit" component='div'>
                       Include all the information someone would need to answer your question. You can use <b><a href="https://commonmark.org/help/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color: 'inherit'}}>Markdown</a></b> here.
                       {<br/>}
                       <PostBodyTextArea
                          value={questionBody}
                          handlePostBodyChange={value => setQuestionBody(value)} />
                        {<br/>}
                        {<br/>}{<br/>}
                        <StyleText variant="h6" color="inherit" component='div'>
                          Tags:<br/>
                          <StyleText variant="caption" color="inherit" component='div'>
                            Add up to 5 tags to describe what your question is about

                            <Autocomplete
                                multiple
                                PaperComponent={StyledPaper}
                                options={tags}
                                onChange={(event,value) => setSelectedTags(value)}
                                renderTags={(value, getTagProps) =>
                                  value.map((option, index) => (
                                    <StyledChip variant="standard" label={option} {...getTagProps({ index })} />
                                  ))
                                }
                                renderInput={(params) => (
                                  <TextArea
                                    {...params}
                                    variant="outlined" size="small" color="secondary" sx={{ input: { color: 'white' } }}
                                  />
                                )}
                              />
                            {<br/>}
                        {<br/>}{<br/>}
                          <StyleText variant="h6" color="inherit" component='div'>
                          Product:<br/>
                          <StyleText variant="caption" color="inherit" component='div'>
                          <Autocomplete
                              disablePortal
                              PaperComponent={StyledPaper}
                              onChange={(event,value) => setProduct(value)}
                              options={Products}
                              sx={{ width: '100%' }}
                              renderInput={(params) => <TextArea variant="outlined" size="small" color="secondary" sx={{ input: { color: 'white' } }} {...params} />}
                            />
                            {<br/>}
                        {<br/>}{<br/>}
                        <StyledButton variant="contained" size="medium" type={'submit'}>Submit your Question</StyledButton>
                      </StyleText>
                    </StyleText>
                  </StyleText>
                </StyleText>
              </StyleText>
            </StyleText>
          </StyleText>
        </StyleText>
      </StyleText>
      </form>                          
      </Area>
     
      </HomeGrid>
  )
}

export default AskQuestion