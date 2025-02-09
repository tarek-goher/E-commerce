import { Container,  } from "react-bootstrap";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import WindowIcon from '@mui/icons-material/Window';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Accordion, AccordionSummary, Box, Drawer,Stack, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Close,  ElectricBikeOutlined, LaptopChromebookOutlined, MenuBookOutlined, SportsEsportsOutlined } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/Inbox';
import Links from "./links";





// import DraftsIcon from '@mui/icons-material/Drafts';

function Header3() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: "top" | "left" | "bottom" | "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  return (
    <Container className="contact">
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color: theme.palette.text.secondary,
            width: "222px",
          }}
        >
          <WindowIcon />
          <Typography sx={{ p: 0, textTransform: "capitalize", mx: "8px" }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <ArrowForwardIosIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{ ".MuiPaper-root": { width: "220px" } }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>

        </Menu>
      </Box>

    
  
      {useMediaQuery('(min-width:1200px)') && (
        <Stack gap={3} direction={"row"} alignItems={"center"} sx={{m:"auto"}}>
           <Links title={"Home"} />
           <Links title={"Mega menu"} />
           <Links title={"Full screen menu"} />
           <Links title={"pages"} />
           <Links title={"user account"} />
           <Links title={"vendor"} />
        </Stack>
      )}



      {useMediaQuery('(max-width:1200px)') && (
        <IconButton onClick={toggleDrawer("top", true)}>
        <MenuIcon  />
      </IconButton>
      )}
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{height:"100%" ,".MuiPaper-root":{height:"atuo", }}}
      >
     <Box className="" sx={{ width:"444",mx:"auto",mt:"6px" , position:"relative", p:10}} >
         <IconButton  onClick={toggleDrawer("top", false)}  sx={{  ":hover" :{rotate:"360deg", transition:"0.3s"} ,position:"absolute", top:0 ,right:"115px"}}>
           <Close />
         </IconButton>
         {[
          {mainlink: "Home" , Sublink:["link1","link2" , "link3"]},
          {mainlink: "Mega menu" , Sublink:["link1","link2" , "link3"]},
          {mainlink: "Full screen menu" , Sublink:["link1","link2" , "link3"]},
          {mainlink: "pages" , Sublink:["link1","link2" , "link3"]},
          {mainlink: "user account" , Sublink:["link1","link2" , "link3"]},
          {mainlink: "vendor" , Sublink:["link1","link2" , "link3"]},
        
         
        ].map((item) => {
          return(
            <Accordion  key={item.mainlink} elevation={0} sx={{bgcolor:"initial" ,".MuiButtonBase-root":{width:"260px" }}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">{item.mainlink}</Typography>
            </AccordionSummary>
            <List sx={{my:0,py:0}}>
            {item.Sublink.map((index)=>{
             return(
              <ListItem sx={{my:0,py:0}}  key={index} >
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
              
                <ListItemText primary={index} />
              </ListItemButton>
            </ListItem>
             )
            } )}
            </List>
          </Accordion>
          )
         })}
     </Box>
      </Drawer>
    </Container>
  );
}

export default Header3;
