import React from 'react';
import {Button, Toolbar, AppBar} from '@material-ui/core';
import {styled} from '@material-ui/core/styles';


const MyToolbar = styled(Toolbar)({
  background: 'black',
  color: 'white',
});

const NavLink = (props) => {
  // ref is the id (same as props.label) that the header of each section should have if this is a single page application,
  // otherwise handleClick is unnecessary and navbar can have links to other pages
//  function handleClick(ref) {
//    const element = document.getElementById(ref);
//
//    element.scrollIntoView({
//      behavior: 'smooth',
//      block: 'start',
//    });
//  }

  return (
    <Button
      style={{color: 'white', marginRight: '2%'}}
//      onClick={() => handleClick(props.label)}
    >
      {props.label}
    </Button>
  )
}

const NavBar = () => {
  return(
  <div>
    <AppBar position="static">
      <MyToolbar>
        <NavLink label={'About'}/>
        <NavLink label={'Church'}/>
        <NavLink label={'Rides'}/>
        <NavLink label={'Contact'}/>
      </MyToolbar>
    </AppBar>
  </div>
  )
}
export default NavBar;