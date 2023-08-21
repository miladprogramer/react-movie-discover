import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/Main-Nav';
import {
BrowserRouter, Route,Routes

} from "react-router-dom";

import Movies from './pages/Movies';
import Search from './pages/Search';
import Trending from './pages/Trending';
import Series from './pages/Series';



function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
   
    <div className="app">
     <Routes>
        <Route path="/" Component={Trending} />
        <Route path="/Movies" Component={Movies} />
        <Route path="/Series" Component={Series} />
        <Route path="/Search" Component={Search} />
        </Routes>
    </div>
    
    <SimpleBottomNavigation />
    </BrowserRouter>
    </>
  );
}

export default App;
