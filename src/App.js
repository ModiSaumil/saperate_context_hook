import logo from './logo.svg';
import './App.css';
import AppContext from './appContext';
import { Header } from './header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import User from './user';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
