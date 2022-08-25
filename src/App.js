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
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
// import Forgot from './component/Forgot';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          {/* <Route index element={<Home/>} /> */}
          <Route index element={<Login/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/TVshows' element={<TVshows/>} />
          <Route path='/Movies' element={<Movies/>} />
          <Route path='/News' element={<News/>} />
          <Route path='/MyList' element={<MyList/>} />
          <Route path='/Languages' element={<Languages/>} />
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Kids' element={<Kids/>} />
          <Route path='/Notifications' element={<Notifications/>} />
          <Route path='/User' element={<User/>} />
          <Route path='*' element={<Error/>} />
          {/* <Route path='/Forgot' element={<Forgot/>} /> */} 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
