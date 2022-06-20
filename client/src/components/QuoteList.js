import {Typography} from '@mui/material';
import {useState, useEffect} from 'react';
import {Fade,Grid} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "../theme/theme";

const MessageText =[
    "If somebody somewhere has the right answer, suddenly you have it too. Collaborate better in a remote-first world.",
    "Shorten the time between initial idea and complete product. Take delays and misinformation out of the equation.",
    "People come and people go, but if you capture their contributions in one central place, that expertise sticks around."
]


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


  
function QuoteList() {

const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() =>
      setIndex(index => index+1),
      5000 // every 5 seconds
    );
    return () => window.clearTimeout(intervalId);
  }, []);


  return (
    <ThemeProvider theme={theme}>
        <Area>
            <Typography variant="h6" color="inherit" component='div' align="center" sx={{width:'inherit'}}>
                {MessageText[index%MessageText.length]}
            </Typography>
      </Area>
    </ThemeProvider>
  )
}

export default QuoteList