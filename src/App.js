import Home from './component/Home';
import TVshows from './component/TVshows';
import MoviePage from './component/MoviePage';
import News from './component/News';
import MyList from './component/MyList';
import Languages from './component/Languages';
import Error from './component/Error';
import Kids from './component/Kids';
import Notifications from './component/Notifications';
import User from './component/User';
import SharedLayout from './component/SharedLayout';
import Login from './component/Login';
import PageForm from './component/PageForm'
import Remember from './component/Remember'
// import Forgot from './component/Forgot';
import './App.css';
import LandingPage from './pages/LandingPage';
// import UserPage from './pages/UserPage';
import { Routes, Route } from "react-router-dom";
// import Homepage from './component/Homepage';
import { createTheme, ThemeProvider } from '@mui/material';
import ForgotPassword from './component/ForgotPassword';

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
    <div className='overall-container'>
      <ThemeProvider theme={theme}>
        <div className='path-container'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Error' element={<Error/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/TVshows' element={<TVshows/>}/>
            <Route path='/MoviePage' element={<MoviePage/>}/>
            <Route path='/User' element={<User/>}/>
            <Route path='/PageForm' element={<PageForm/>}/>
            <Route path='/Remember' element={<Remember/>}/>
            <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
            <Route path='/News' element={<News/>}/>
            <Route path='/MyList' element={<MyList/>}/>
            <Route path='/Languages' element={<Languages/>}/>
            <Route path='/Notifications' element={<Notifications/>}/>
            <Route path='/Kids' element={<Kids/>}/>
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
