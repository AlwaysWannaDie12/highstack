import { Box, Button, Container, Grid, Link, TextField, Typography, Paper, Drawer, Slide} from '@mui/material';
import './App.css';
import Header from './components/Header';
import { ThemeProvider, styled} from '@mui/material/styles';
import { darkTheme, lightTheme } from './theme/SwitchTheme';
import Login from './components/Login';
import { useEffect, useState, useRef} from 'react';
import SidePanel from './components/SidePanel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Landing from './pages/Landing';
import AccountManage from './pages/AccountManage';
import AskQuestion from './pages/AskQuestion';
import Questions from './pages/Questions';
import Products from './pages/Products';
import Tags from './pages/Tags';
import Connect from './pages/Connect';
import Axios from 'axios';
import SearchPage from './pages/SearchPage';



const Body = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  overflow: 'auto',
  height: 'inherit',
  display: 'flex',
  minHeight:'100vh'
}));


function App() {

  const [buttonPopup, setButtonPopup] = useState(false);

  const [user, setUser] = useState({ldap: "", name: "HRC Test", password: ""});
  const [error, setError] = useState("");
  const [isDarkMode,setIsDarkMode] = useState(true);

  const handleDark = () => {
    setIsDarkMode(!isDarkMode);
  }

  const theme = (isDarkMode?darkTheme:lightTheme);

  const ldapLogin = details => {
    console.log(details);
    Axios.post("http://localhost:4000/login", {
      ldap : details.ldap,
      password : details.password
    }).then((response) => {
        console.log(response.data.message);
        if (response.message==="Wrong Credentials"){
          setError("Incorrect Details");
        }
        setUser({
              ldap: details.ldap,
              password: details.password,
              name: response.data.message,
            })
        setButtonPopup(!buttonPopup);

    });
  }

  


  const Logout = () =>{
    console.log("Logout");
  }


  
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };



  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
          action={() => setButtonPopup(!buttonPopup)} 
          nav={user} 
          drawer={() => toggleDrawer()} 
          isDarkMode = {isDarkMode}
          handleDark = {handleDark}
        />

       
          <Body maxWidth="100%" disableGutters={true} bgcolor={theme.palette.primary.main}>
          
            
            <Login trigger = {buttonPopup} action={() => setButtonPopup(!buttonPopup)} Login={ldapLogin} error={error}/>
            
            {user.name!=="" ? (
              <SidePanel toggle={open}/>
            ):(
              <SidePanel toggle={null}/>
            )}
            
            <Routes forceRefresh={true}>
            {user.name!=="" ? (
              <Route path="/" element={<Home/>} />
            ):(
              <Route path="/" element={<Landing action={() => setButtonPopup(!buttonPopup)}/>}/>
            )}
            <Route path="/user" element={<AccountManage user={user}/>}/>
            <Route path="/askQuestion" element={<AskQuestion user={user}/>}/>
            <Route path="/topQuestions" element={<Questions/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/tags" element={<Tags/>}/>
            <Route path="/connect" element={<Connect/>}/>   
            <Route path="/search" element={<SearchPage/>}/>           
            </Routes>

           
            </Body>
          </BrowserRouter>

        
      </ThemeProvider>
      
    </div>
  );
}

export default App;
