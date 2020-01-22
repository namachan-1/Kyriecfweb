import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const classes = {
    root: {
      flexGrow: 1,
    },
    nav: {
      backgroundColor: 'black',
    },
    tab: {
      color: 'white'
    }
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Paper styles={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        style={classes.nav}
      >
        <Tab style={classes.tab} label="Item One" />  {/* selects TabPanel at index 0 */}
        <Tab style={classes.tab} label="Item Two" />
        <Tab style={classes.tab} label="Item Three" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Component 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Component 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Component 3
      </TabPanel>
    </Paper>
  );
}