import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from "../../components/header/header.styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
    backgroundColor: 'black'

  },
}));

export default function Dropdown() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
        <MenuIcon />

        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    
                <LogoContainer to="/designoutfit">
             
                <MenuItem onClick={handleClose}>Design your own outfit</MenuItem>

                </LogoContainer>
                <LogoContainer to="/jewellery">
             
                <MenuItem onClick={handleClose}>Jewellery</MenuItem>

             </LogoContainer>
             <LogoContainer to="/tailoring">
             
             <MenuItem onClick={handleClose}>Custom Tailoring</MenuItem>

             </LogoContainer>
             <LogoContainer to="/designathome">
             
             <MenuItem onClick={handleClose}>Get services at Home</MenuItem>

             </LogoContainer>
             <LogoContainer to="/signup">
             
             <MenuItem onClick={handleClose}>Subscription</MenuItem>

             </LogoContainer>
             <LogoContainer to="/signup">
             
             <MenuItem onClick={handleClose}>My Account</MenuItem>

             </LogoContainer>

             <LogoContainer to="/signup">
             
             <MenuItem onClick={handleClose}>Log Out</MenuItem>

             </LogoContainer>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
