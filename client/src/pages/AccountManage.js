import {Paper, Typography, Grid, Button, Divider, IconButton, Tooltip, Stack} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "../theme/theme";
import Avatar from 'react-avatar';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';

const HomeGrid=styled(Grid)(({theme}) => ({
  marginTop: '30px',
  marginLeft: '50px',
  marginRight: '50px',
  backgroundColor: theme.palette.primary.light,
  height: '100%',
  padding: '50px',
  display: 'absolute',
  color: theme.palette.primary.contrastText,
  width: '80%',
  borderRadius: theme.shape.borderRadius,
  zIndex:2,
  textAlign: 'left',
}));

const StyleText =  styled(Typography)(({theme}) =>({
  float: 'left',
  width:'100%',
  alignSelf: 'center',
}))

const UserStack = styled(Paper)(({theme}) => ({
  display: 'flex',
  color: 'inherit',
  background:theme.palette.primary.dark,
  padding: '10px',
}));

const DetailStack = styled(Paper)(({theme}) => ({
  display: 'flex',
  color: 'inherit',
  background:theme.palette.primary.main,
  padding: '30px',
}));

const StyledButton = styled(Button)(({theme}) => ({
  color: theme.palette.secondary.light,
  backgroundColor: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.contrastTextDark,
  },
  alignSelf: 'center',
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'inherit',
  background:theme.palette.primary.main,
}));


function AccountManage(props) {
  return (
    <ThemeProvider theme={theme}>
      <HomeGrid>
        <UserStack>
          <Avatar name={props.user.name} size="80" round="8px"/>
          <StyleText variant="h5" color="inherit" component='div' sx={{marginLeft:'20px'}}>{props.user.name}</StyleText>
          <Tooltip title="Edit Profile">
            <IconButton color="success">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
            <IconButton color="success">
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </UserStack>
        <br/>
        <UserStack>
          <Grid container spacing={2}>
            <Grid item xs={4}>
            Stats:
              <DetailStack>
                <Grid spacing={4}>
                <StyleText variant="caption" color="inherit" component='div'>
                  <Grid item xs={6}>
                    Reputation
                  </Grid>
                  <Grid item xs={6}>
                    Reputation
                  </Grid>
                  </StyleText>
                </Grid>
                </DetailStack>
            </Grid>
            <Grid item xs={8}>
            <DetailStack>
              About:
            </DetailStack>
            </Grid>
            <Grid item xs={4}>
            <DetailStack>
              Badges:
              </DetailStack>
            </Grid>
            <Grid item xs={8}>
            <DetailStack>
              Questions:
              </DetailStack>
            </Grid>
          </Grid>
        </UserStack>
      </HomeGrid>
    </ThemeProvider>
  )
}

export default AccountManage