import { Outlet } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { createContext, useState } from 'react';

export const ReadContext = createContext();

function App() {
  const [read, setRead] = useState([]);
  console.log(read);
  return (
    <>
      <NavBar></NavBar>
      <ReadContext.Provider value={[read, setRead]}>
        <Outlet></Outlet>
      </ReadContext.Provider>
      <Footer></Footer>
    </>
  );
}

export default App;
