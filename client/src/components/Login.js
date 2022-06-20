import {Paper, Slide, IconButton, Typography, TextField, Grid, InputAdornment} from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "../theme/theme";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginForm from "./LoginForm";





function Login(props) {

    return (props.trigger) ? (<LoginForm trigger = {props.trigger} action={props.action} Login={props.Login} error={props.error}/>):null;
       
}

export default Login