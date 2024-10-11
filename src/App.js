import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Explore from './pages/Explore/Explore';
import { Navigate, Route, Routes } from 'react-router-dom';
import Zingchart from './pages/Zingchart/Zingchart';
import Radio from './pages/Radio/Radio';
import { useEffect, useState } from 'react';
import { uselistItem1, uselistItem2 } from './features/Menu/components/listItems';
import Category from './pages/Category/Category';
import Auth from './components/Login/Auth';
import LoginPage from './components/Login/LoginPage';
import { useAuth } from './provider/AuthProvider';

function App() {
  const [activeItem, setActiveItem] = useState(2);
  const listItem1 = uselistItem1;
  const listItem2 = uselistItem2;

  const { isLoggedIn, login } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/auth" />
  }

  return (
    <div className="App">
      <SideBar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        listItem1={listItem1}
        listItem2={listItem2}
      />
      <main>
        <Header
          activeItem={activeItem.toString()}
          setActiveItem={setActiveItem}
          menuItems={listItem1}
        />
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/category' element={<Category />} />
          <Route path='/zing-chart' element={<Zingchart />} />
          <Route path='/radio' element={<Radio />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
