import {Typography} from '@mui/material';
import {useState, useEffect} from 'react';
import {Fade,Grid} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "../theme/theme";
import ImageSender from './ImageSender';


const Area = styled(Grid)(({ theme }) => ({
    marginTop: '0px',
    height: '100%',
    width: 'auto',
    backgroundColor: theme.palette.primary.shadow,
    borderRadius: theme.shape.borderRadius,
    padding: '30px',
    zIndex:3,
    display: 'block',
    alignItems: 'center',
    overflow: "hidden",
  }));


  
function QuoteList() {

const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() =>
      setIndex(index => index+1),
      4500 // every 1.5 seconds
    );
    return () => window.clearTimeout(intervalId);
  }, []);


  return (
        <Area>
          <Fade in={index%5===0 || index%5===1 || index%5===2 || index%5===3 || index%5===4}>
            <div><ImageSender index={index%5}/></div>
          </Fade>
      </Area>
  )
}

export default QuoteList