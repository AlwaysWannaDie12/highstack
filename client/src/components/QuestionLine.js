import {Grid, Paper, Typography, Stack, IconButton, Tooltip} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "../theme/theme";
import VisibilityIcon from '@mui/icons-material/Visibility';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Bar = styled(Paper)(({theme}) => ({
    width: '90%',
    backgroundColor: theme.palette.primary.main,
    height:'80px',  
    padding:'20px 20px',
}));

const Stats = styled(Paper)(({theme}) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    position: 'relative',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
}));

const QuestionText = styled(Paper)(({theme}) => ({  
    padding: "25px",
    textAlign: 'left',
    position: 'relative',
    display: 'flex',
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    overflow: 'hidden',
    whiteSpace: 'nowrap',

}));

function QuestionLine(props) {
  return (
        <Bar elevation={0}>
        <Stack direction="row" spacing={3}>
            <Stats elevation={0}>
                <Typography variant="h6" color="inherit" component='div'>{props.views}</Typography>
                <Tooltip title="Views">
                    <IconButton>
                        <VisibilityIcon />
                    </IconButton>
                </Tooltip>
            </Stats>
            <Stats elevation={0}>
                <Typography variant="h6" color="inherit" component='div'>{props.answers}</Typography>
                <Tooltip title="Answers">
                    <IconButton>
                        <QuestionAnswerIcon />
                    </IconButton>
                </Tooltip>
            </Stats>
            <Stats elevation={0}>
                <Typography variant="h6" color="inherit" component='div'>{props.likes}</Typography>
                <Tooltip title="Likes">
                    <IconButton>
                        <ThumbUpIcon />
                    </IconButton>
                </Tooltip>
            </Stats>
            <QuestionText elevation={0}>
                <Typography variant="h6" color="inherit" component='div'>{props.title}</Typography>

            </QuestionText>

         </Stack>
        </Bar>
    
  )
}

export default QuestionLine