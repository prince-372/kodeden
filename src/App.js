import './App.css';
import Course from './components/Course';
import Header from './components/Header';
import Mynav from './components/Mynav';
import 'bootstrap/dist/css/bootstrap.css';
import Software from './components/Software';
import Program from './components/Program';
import Student from './components/Student';
import Kodeden from './components/Kodeden';
import Wesec from './components/Wesec';
import { useEffect, useState } from 'react';
import Priloder from './components/Priloder';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Backtotop from './components/Backtotop';

function App() {
  const [open, setopen] = useState(true);
  useEffect(()=>{
    setopen(true)
    setTimeout(()=>{
      setopen(false)
    },3000)
  },[])
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, 
    });
  }, []);
  return (
    <>
      {open ? (
        <Priloder/>
      ) : (
    <>
     <div className='bg-headerimg'>
      <Mynav/>
      <Header/>
      </div>
      <Course/>
      <Software/>
      <Program/>
      <Student/>
      <Kodeden/>
      <Wesec/>
      <Backtotop/>
    </>
    )}
    </>
  );
}

export default App;
