import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
// import { AddAlarm } from "@mui/icons-material";
export default function Mein() {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();
  return (
    <Container>
      <Stack
        gap={3}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          mt: 9,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography variant="h6">Selcted Products</Typography>
          <Typography variant="body1" fontWeight={300}>
            All our arrivals in a exclusive bramd selection
          </Typography>
        </Box>
        <Box>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            color="error"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233 , 69 , 96 , 0.5) !important",
                color: "#e94560",
                backgroundColor: "initial !important",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="btn-mein"
              value="left"
              aria-label="left aligned"
            >
              All products
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              className="btn-mein"
              value="center"
              aria-label="centered"
            >
              MEN category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="btn-mein"
              value="right"
              aria-label="right aligned"
            >
              Women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>

      <Stack direction={"row"}   flexWrap={"wrap"} justifyContent={"space-between"} >
       {["aaa", "bbb","ccc", ].map((item) =>{
        return(
            <Card key={item} sx={{ maxWidth: 333
             , mt:6 ,
              ":hover .MuiCardMedia-root":{scale:"1.1" ,
               transition:"0.35s", 
               rotate:"1deg"}}} >
            <CardMedia
              component="img"
            //   alt="green iguana"
              height="277"
              image="src\assets\img-mien\Mens NASA Space Bear Print O-Neck Casual Loose Short Sleeve T-Shirt.png"
            />
            <CardContent>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography>T-shirt</Typography>
                <Typography>$12.99</Typography>
              </Stack>
              <Typography>
                Lizards are a widespread group of squamate reptiles with over
                6.000 species, ranging across all continents except ntarctica
              </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:"space-between",}}>
              <Button size="large" sx={{textTransform:"capitalize"}}>
                  <AddShoppingCartOutlinedIcon sx={{mr:1}} fontSize="small"/>
                  add to cart
              </Button>
              <Rating name="read-only" value={4.5} precision={0.5} readOnly />
            </CardActions>
          </Card>
        )
       })}
      </Stack>
    </Container>
  );
}
