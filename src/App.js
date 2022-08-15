import Home from './component/Home';
import SharedLayout from './component/SharedLayout';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
