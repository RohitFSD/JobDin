import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import {BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import PostJob from './Component/PostJob';
import Search from './Component/Search';
function App() {
  return (
    <div>
       <Router>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<PostJob/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
       </Router>
    </div>
   
  );
}

export default App;
