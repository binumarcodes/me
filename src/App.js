import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';


const theme = createMuiTheme({
  palette:{
    primary:{
      main: "#FFFFFF"
    },
    secondary:{
      main:'#090E16',
      light:'#7B4AE2',
      dark: "#090E16"
    },
    success:{
      main:'#4AE290'
    }
  },
  typography:{
    fontFamily:'Raleway',

  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
        <HeroSection/>
        <AboutMe/>
      </div>

    </ThemeProvider>
  );
}

export default App;
