
import Header from '../src/components/navbars'
import Header2 from '../src/components/Nav2'
import Header3 from '../src/components/Nav3'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/Nav.css'
import Typography from "@mui/material/Typography";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Outlet } from "react-router-dom";
import Hero from './hero/hero';
import Mein from './mein/mein';
import Foter from './foter/foter';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Typography variant="h3">
           <Header/>
           <Header2/>
          <Box  bgcolor={""}>
             <Header3/>
             <Hero/> 
             <Mein/>
          </Box>
           <Foter/>
          </Typography>
          <Outlet />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
