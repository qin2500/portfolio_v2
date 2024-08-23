import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  
    const handleDrawerOpen = () => {
      setDrawerOpen(true);
    };
  
    const handleDrawerClose = () => {
      setDrawerOpen(false);
    };
  
    return (
      <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar className='flex justify-center w-[100%]'>
            <Box display='flex' justifyContent='center' className='w-fit  mt-4' >
                {/* <Typography variant="h6" className='mr-[30%]'>
                    Anthony Qin
                </Typography> */}
                {isMobile ? (
                    <>
                    {/* <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
                        <Box display='flex' flexDirection='column' p={3}>
                        <Button color="inherit" href="#home" onClick={handleDrawerClose}>Home</Button>
                        <Button color="inherit" href="#experience" onClick={handleDrawerClose}>Experience</Button>
                        <Button color="inherit" href="#projects" onClick={handleDrawerClose}>Projects</Button>
                        </Box>
                    </Drawer> */}
                    </>
                ) : (
                    <div className="flex">
                        <Box  className=" ml-10% bg-blue-600 bg-opacity-60 rounded-lg">
                            <Button color="inherit" href="#home">Home</Button>
                            <Button color="inherit" href="#experience">Experience</Button>
                            <Button color="inherit" href="#projects">Projects</Button>
                        </Box>
                        <div className=' flex ml-2 items-center'>
                            <Button color="inherit" className='bg-slate-300 bg-opacity-60 rounded-lg' href="#projects">Resume</Button>

                        </div>
                    </div>
                )}
            </Box>
            
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Navbar;