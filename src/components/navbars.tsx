import { useContext, useState } from "react";
import { ColorModeContext } from "../theme";
import { Box, IconButton, ListItem, Typography, useTheme } from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import { Stack } from "@mui/material"; // تعديل الاستيراد
// import FacebookIcon from '@mui/icons-material/Facebook';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import List from "@mui/material/List";
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Container } from "react-bootstrap";

const options = ["AR", "EN"];

const Home = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    _event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "#2B3455",
        py: "4px",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems="center" className="head1">
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23f57",
              borderRadius: "12px",
              fontSize: "10PX",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            HOT
          </Typography>
          <Typography
            sx={{
              fontSize: "10PX",
              fontWeight: 600,
              color: "#fff",
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined
                  sx={{
                    mb: "10px",
                    fontSize: "16px",
                    color: "#fff",
                  }}
                  className="ico-light"
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined className="icons" fontSize="small" />
              </IconButton>
            )}
          </div>

          <List
            className="tex"
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <ListItemText
                sx={{
                  ".MuiButtonBase-root": { fontSize: "10px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <TwitterIcon
            sx={{
              fontSize: "16px",
              mx: 1,
              color: "#fff",
            }}
          />
          <FacebookOutlinedIcon
            sx={{
              fontSize: "16px",
              mx: 1,
              color: "#fff",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              mx: 1,
              color: "#fff",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
