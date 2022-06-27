import {List, ListItem, ListItemText, ListItemButton, Box, Typography, ListSubheader,ListItemIcon, Divider,Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from "axios";   
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "../theme/theme";
import VisibilityIcon from '@mui/icons-material/Visibility';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

   

function QuestionTable(props) {
    const [QuestionData, setQuestionData] = useState([]);

    const loadQuestion = () => {
        axios.post('http://localhost:4000/getAllQuestions',{
            product : props.product
          }).then(response =>{
            console.log(response.data);
            setQuestionData(response.data);
        });
    }

    useEffect(() => {
        loadQuestion();
   }, []);

  return (
      <ThemeProvider theme={{theme}}>
        <Box sx={{
            width:'100%', 
            bgcolor:theme.palette.primary.dark,
            overflow:'auto',
            borderRadius:0.8,
            maxHeight:props.height,
            "&::-webkit-scrollbar": {
                width: 5
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: theme.palette.primary.dark
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.primary.contrastTextDark,
                borderRadius: 2
              }}}>
            <List subheader={
                <ListSubheader color='inherit' sx={{bgcolor:theme.palette.primary.dark}}>
                    {props.title}
                </ListSubheader>
            }>
            {QuestionData.map(question => {
                return (
                    <ListItem disablePadding={props.padding}>
                        <ListItemButton>
                            <ListItemIcon>
                                <VisibilityIcon fontSize="small"/>
                                <Typography variant="subtitle2" color="inherit" component='div' align="center" marginLeft='2px'>
                                    {question.views}
                                </Typography>
                            </ListItemIcon>
                            <ListItemIcon>
                                <QuestionAnswerIcon fontSize="small"/>
                                <Typography variant="subtitle2" color="inherit" component='div' align="center" marginLeft='2px'>
                                    {question.answers}
                                </Typography>
                            </ListItemIcon> 
                            <ListItemIcon>
                                <ThumbUpIcon fontSize="small"/>
                                <Typography variant="subtitle2" color="inherit" component='div' align="center" marginLeft='2px'>
                                    {question.likes}
                                </Typography>
                            </ListItemIcon> 
                            <Divider orientation="vertical" variant="middle" flexItem light />
                            <ListItemIcon>
                            <Typography variant="subtitle2" color="inherit" align="center" marginLeft='2px' width="100%">
                                    {question.product}
                            </Typography>
                            </ListItemIcon>
                            <Divider orientation="vertical" variant="middle" flexItem light />
                            <ListItemText primary={question.question_title} sx={{marginLeft:'20px'}}/>
                            <Chip label={question.tags} size="small" sx={{color:theme.palette.primary.contrastTextDark}}/>
                        </ListItemButton>
                    </ListItem>
                );
            })}

            </List>
        </Box>
    </ThemeProvider>
  )
}

export default QuestionTable
