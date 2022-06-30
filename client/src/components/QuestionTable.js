import {List, ListItem, ListItemText, ListItemButton, Box, Typography, ListSubheader,ListItemIcon, Divider,Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from "axios";   
import {styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { a } from 'react-spring';


const QBox = styled(Box)(({theme}) => ({
            width:'100%', 
            bgcolor:theme.palette.primary.dark,
            overflow:'auto',
            borderRadius:0.8,
            "&::-webkit-scrollbar": {
                width: 5
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: theme.palette.primary.dark
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.primary.contrastTextDark,
                borderRadius: 2,
              }
}))

const SubHeader = styled(ListSubheader)(({theme}) => ({
    backgroundColor:theme.palette.primary.dark
}))

const TagChip = styled(Chip)(({theme}) => ({
    color:theme.palette.primary.contrastTextDark
}))
   


function QuestionTable(props) {
    const [QuestionData, setQuestionData] = useState([]);

    const loadQuestion = () => {
        axios.post('http://localhost:4000/getAllQuestions',{
            product : props.product,
            search : props.search
          }).then(response =>{
            console.log(response.data);
            setQuestionData(response.data);
        });
    }

    let tags = [];

    useEffect(() => {
        loadQuestion();
   }, []);

   

  return (
        <QBox sx={{maxHeight:props.height}}>
            <List subheader={
                <SubHeader color='inherit'>
                    {props.title}
                </SubHeader>
            }>
            {QuestionData.map(question => {
                tags = question.tags.split(",");
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
                            {tags.map(tag =>{
                                return(
                                    <TagChip label={tag} size="small"/>
                                )
                            })}
                        </ListItemButton>
                    </ListItem>
                );
            })}

            </List>
        </QBox>
  )
}

export default QuestionTable
