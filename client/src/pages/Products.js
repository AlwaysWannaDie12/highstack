import {Box,Typography,Tab,Tabs, Grid} from '@mui/material';
import PropTypes from 'prop-types';
import { ThemeProvider, styled } from '@mui/material/styles';
import QuestionLine from '../components/QuestionLine';
import QuestionTable from '../components/QuestionTable';
import { theme } from "../theme/theme";
import { useEffect, useState } from 'react';
import axios from "axios";   


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
    textAlign: 'center',
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      { (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



function Products() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
      <HomeGrid container spacing={3}>
      
                {/* <QuestionTable title="Questions" height="600px"/> */}

                <Box sx={{ width: '100%' }}>
            
               <Tabs 
                component={Box} 
                boxShadow={5}
                backgroundColor={theme.palette.primary.dark} 
                borderRadius={0.5}
                textColor="secondary" 
                indicatorColor="secondary" 
                value={value} 
                onChange={handleChange} 
                aria-label="basic tabs example"
                sx={{
                  width:'100%',
                  alignSelf:'center'
                }}
              >
                          <Tab label="All Products" {...a11yProps(0)} />
                          <Tab label="DMS" {...a11yProps(1)} />
                          <Tab label="CAA" {...a11yProps(2)} />
                          <Tab label="EIPP" {...a11yProps(3)} />
                          <Tab label="CRD" {...a11yProps(4)} />
                          <Tab label="CLS" {...a11yProps(5)} />
                        </Tabs>
                      
                      <TabPanel value={value} index={0}>
                        <QuestionTable height="600px" product=""/>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <QuestionTable height="600px" product="DMS"/>
                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        <QuestionTable height="600px" product="CAA"/>
                      </TabPanel>
                      <TabPanel value={value} index={3}>
                        <QuestionTable height="600px" product="EIPP"/>
                      </TabPanel>
                      <TabPanel value={value} index={4}>
                        <QuestionTable height="600px" product="CRD"/>
                      </TabPanel>
                      <TabPanel value={value} index={5}>
                        <QuestionTable height="600px" product="CLS"/>
                      </TabPanel>
                </Box>
            
            </HomeGrid>
        
  )
}

export default Products