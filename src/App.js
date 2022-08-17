import Home from './component/Home';
import Forgot from './component/Forgot';
import SharedLayout from './component/SharedLayout';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/forgot' element={<Forgot/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
