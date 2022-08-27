import Home from './component/Home';
import TVshows from './component/TVshows';
import Movies from './component/Movies';
import News from './component/News';
import MyList from './component/MyList';
import Languages from './component/Languages';
import Error from './component/Error';
import Kids from './component/Kids';
import Notifications from './component/Notifications';
import User from './component/User';
import SharedLayout from './component/SharedLayout';
import Login from './component/Login';
// import Forgot from './component/Forgot';
import './App.css';
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import { Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette :{
    primary: {
      main:'#fefefe'
    },
    secondary:{
      main:'#808080'
    }
  }
})


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </ThemeProvider>   
    </div>
  );
}

export default App;
