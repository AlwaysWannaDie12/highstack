import {Paper, Button, IconButton, Typography, TextField, Grid, InputAdornment} from "@mui/material";
import React, { useState, useEffect } from "react";
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "../theme/theme";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPaper = styled(Paper)(({theme}) => ({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',   
    justifyContent: 'center',
    width: '20rem',
    height: 'fit-content',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    padding: '15px',
    zIndex: 999,
    filter: "blur(0) saturate(1)",
}));


function LoginForm(props) {


    const [details, setDetails] = useState({ldap:"", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        props.Login(details);
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
        <ThemeProvider theme={theme}>
            <Paper sx={{
                width:'100%',
                height:'100%',
                position:'fixed',
                backgroundColor: theme.palette.primary.blur,
                zIndex: 888,
            }}
            onClick={props.action}
            square
            ></Paper>
            <LoginPaper elevation={4}>
                <Grid container spacing={4} ref={props.forwardref}>
                    <Grid item xs={12}>
                        <Typography variant="h5" color="inherit" component="div" sx={{"margin-top":"20px"}}>
                            Login
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined" 
                            label="LDAP"  
                            id="ldap" 
                            onChange={e => setDetails({...details, ldap: e.target.value})} 
                            value={details.ldap} 
                            color= "secondary"
                            error= {(props.error!=="")}
                            sx={{
                                width:"100%",
                                input: { color: 'white' },
                            }}
                            
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined" 
                            label="Password" 
                            type={showPassword ? "text" : "password"} 
                            color= "secondary"
                            error= {(props.error!=="")}
                            sx={{
                                width:"100%",
                                input: { color: 'white' },
                            }} 
                            InputProps={{ 
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                    >
                                      {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                )
                              }}
                              id="password" 
                              onChange={e => setDetails({...details, password: e.target.value})} 
                              value={details.password}
                              />
                    </Grid>
                    <Grid item xs={12} justifyContent="center">
                        <Paper elevation={8} sx={{
                            width:"fit-content",
                            marginLeft:"8.5rem",
                            backgroundColor: theme.palette.primary.contrastText,
                            ...(props.error!=="" && {
                                backgroundColor: theme.palette.primary.error,
                            }),
                            marginBottom: "20px", 
                            }}>
                            <IconButton  onClick={submitHandler} >
                                <ChevronRightIcon/>
                            </IconButton>
                        </Paper>
                    </Grid>
                    

                    {props.children}
                </Grid>
            </LoginPaper>
        </ThemeProvider>
  )
}

export default LoginForm