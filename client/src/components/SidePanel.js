import {Paper, Grid, IconButton, Tooltip} from '@mui/material';
import { ThemeProvider, styled} from '@mui/material/styles';
import { theme } from '../theme/theme';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import QuizIcon from '@mui/icons-material/Quiz';
import GradingIcon from '@mui/icons-material/Grading';
import AssessmentIcon from '@mui/icons-material/Assessment';
import StyleIcon from '@mui/icons-material/Style';
import ChatIcon from '@mui/icons-material/Chat';
import {Link} from 'react-router-dom';



const SidePanelPaper = styled(Paper)(({theme}) => ({ 
    justifyContent: 'space-evenly',
    position: 'sticky',
    width: '5%',
    minHeight:'inherit',
    height: 'inherit',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    padding: '150px 0px',
    zIndex: 999,
}));

function SidePanel(props) {
  return (props.toggle) ? (
        <SidePanelPaper square elevation={0} >
        <Grid container spacing={10}>
            <Grid item xs={12}>
                <Tooltip title="Ask Question">
                    <IconButton component={Link} to="/askQuestion" color="success">
                        <QuizIcon />
                    </IconButton>
                </Tooltip> 
            </Grid>
            <Grid item xs={12}>
                <Tooltip title="Questions" component={Link} to="/topQuestions" color="success">
                    <IconButton>
                        <GradingIcon/>
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item xs={12}>
                <Tooltip title="Products" component={Link} to="/products" color="success">
                    <IconButton>
                        <AssessmentIcon/>
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item xs={12}>
                <Tooltip title="Tags" component={Link} to="/tags" color="success">
                    <IconButton>
                        <StyleIcon/>
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item xs={12}>
                <Tooltip title="Connect" component={Link} to="/connect" color="success">
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                </Tooltip>
            </Grid>
        </Grid>
        </SidePanelPaper>
    
  ) : (
    <SidePanelPaper square elevation={0} sx={{marginLeft:'-100px'}}>
    </SidePanelPaper>
  );
    
}

export default SidePanel