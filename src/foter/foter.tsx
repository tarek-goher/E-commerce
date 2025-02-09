import { Box, Typography,Button } from "@mui/material";



export default function Foter() {
  return (
    <Box
    sx={{
        mt:5,
        bgcolor:"#2B3445",
        py:1.3,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    }}
    >
        <Typography sx={{fontSize:18}}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        >
            Designed and develped by 
             <Button 
             variant="text"
             color="primary"
             sx={{
                textTransform:"capitalize",
                mx:0.5,
                fontSize:"18px",
                color:"#ff7790"
             }}
              >
                
                 Tarek abdelkarem
               
             </Button>
             ©2024

        </Typography>
    </Box>
  )
}
