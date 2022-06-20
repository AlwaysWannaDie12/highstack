import {AppBar,Toolbar, IconButton, Typography, TextField} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "../theme/theme";
import {Link} from "react-router-dom";



const CustomAppbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    display: 'grid',
    gridTemplateColumns: '10rem 1fr 6rem',
    gridColumnGap: '25px',
    padding: '10px',
}));

const SearchBar = styled(TextField)(({theme}) =>({
    marginTop: '5px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.light,    
}))
    
function Header(props) {


  return (
    <ThemeProvider theme={theme}>
        <CustomAppbar position="static" sx={{zIndex:"6"}}>
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={props.drawer}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component={Link} to="/" sx={{textDecoration:'none'}}>high<b>Stack</b></Typography>
                
            </Toolbar>
            <SearchBar variant="filled" size="small" label="Search" color="secondary" sx={{ input: { color: 'white' } }}/>
            {props.nav.name!=="" ? (
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} component={Link} to="/user">
                    <ManageAccountsIcon/>
                </IconButton>
            ) : (
                 <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={props.action}>
                    <LoginIcon/>
                </IconButton>
            )}
           
        </CustomAppbar>
    </ThemeProvider>
        
  )
}

export default Header