import {AppBar,Toolbar, IconButton, Typography, TextField,Switch} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { styled } from '@mui/material/styles';
import {Link,useNavigate} from "react-router-dom";
import { useState } from "react";


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        left: 12,
      },
      '&:after': {
        
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
    '& .MuiSwitch-switchBase': {
      color: 'white',
    }
  }));



const CustomAppbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    display: 'grid',
    gridTemplateColumns: '10rem 1fr 6rem 6rem',
    gridColumnGap: '25px',
    padding: '10px',
}));

const SearchBar = styled(TextField)(({theme}) =>({
    marginTop: '5px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.light,  
    width:'100%'  
}))
    
function Header(props) {

    const [searchContent, setSearchContent] = useState('');

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/search', {state:{search:searchContent}});
    };

  return (
        <CustomAppbar position="static" sx={{zIndex:"6"}}>
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={props.drawer}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component={Link} to="/" sx={{textDecoration:'none'}}>high<b>Stack</b></Typography>
                
            </Toolbar>
            <form style={{width:'1fr'}} onSubmit={handleSubmit}>
            <SearchBar variant="filled" size="small" label="Search" color="secondary" sx={{ input: { color: 'white' } }}
            onChange={event => setSearchContent(event.target.value)} value={searchContent}/>
            </form>
            {props.nav.name!=="" ? (
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} component={Link} to="/user">
                    <ManageAccountsIcon/>
                </IconButton>
            ) : (
                 <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={props.action}>
                    <LoginIcon/>
                </IconButton>
            )}

            <MaterialUISwitch
            
            checked={props.isDarkMode}
            onChange={props.handleDark}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{marginTop:'10px'}}
            />
           
        </CustomAppbar>
        
  )
}

export default Header