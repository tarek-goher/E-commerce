import { ExpandMore, KeyboardArrowRightOutlined } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

//  import React from 'react'
 
interface LinksProps {
  title: string;
}

export default function Links({ title }: LinksProps)
 {
   return (
    <Box className="" sx={{ position:"relative", cursor:"pointer",display:"flex",alignItems:"center" , ":hover .paper":{display:"block" ,zIndex:10,  }}}>
     <Typography variant="body1">
       {title}
     </Typography>
   
    <ExpandMore  sx={{fontSize:"16px", ml:1}}/>

    <Box className="paper" sx={{
        display:"none",
        position:"absolute",
         top:"100%", minWidth:"170px" , left:"50%",transform:"translatex(-50%)", }}>
      <Paper sx={{mt:3}} >
        <nav aria-label="secondary mailbox folders">
            <List   sx={{".MuiTypography-root":{fontSize:"15px"}}}>




              <ListItem disablePadding>
                <ListItemButton sx={{
                 display:"flex",
                 p:0,
                 px:1.5,
                  }} >
                  <ListItemText primary="Dashbord" sx={{   "&.MuiTypography-root":{
                      fontSize:"15px",
                      fontWeight:300,
                    }}} />
                     <Box flexGrow={1}/>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{position:"relative" , "&:hover .bot":{display:"block"}}}  >
                <ListItemButton  sx={{
                 display:"flex",
                 p:0,
                 px:1.5,
                  }} >
                  <ListItemText primary="products"  sx={{ "&.MuiTypography-root":{
                      fontSize:"15px",
                      fontWeight:300,
                    }}} />

                    <Box flexGrow={1}/>
                    <KeyboardArrowRightOutlined fontSize='small'/>
                   
                </ListItemButton>
                <Box className='bot' sx={{display:"none",position:"absolute" , transform:"-50%",top:0,left:"100%"}}>
                <Paper 
                sx={{ml:1, minWidth:150}}> 
                  <nav aria-label="secondary mailbox folders" >
        <List sx={{".MuiTypography-root":{fontSize:"15px",fontWeight:300}}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Add Product" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Edit Product" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton  sx={{
                 display:"flex",
                 p:0,
                 px:1.5,
                  }} >
                  <ListItemText sx={{"&.MuiTypography-root":{fontSize:"15px", fontWeight:300}}} primary="Order" />
                </ListItemButton>
              </ListItem>
              
              <ListItem disablePadding>
                <ListItemButton  sx={{
                 display:"flex",
                 p:0,
                 px:1.5,
                  }} >
                  <ListItemText sx={{"&.MuiTypography-root":{fontSize:"15px", fontWeight:300}}} primary="Profile" />
                </ListItemButton>
              </ListItem>

             
            </List>
          </nav>
      </Paper>
    </Box>
  </Box>
   )
 }


 















