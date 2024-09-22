import React, { useState, useEffect } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import './App.css'; 
import Cursor from './components/Cursor/Cursor';

function App() {
  const [name, setName] = useState("");
  const [enterPress, setEnterPress] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Backspace" && enterPress == 0) {
        setName((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter") {
        setEnterPress((state) => !state);
      } else if (e.key.length === 1 && enterPress == 0) {
        setName((prev) => prev + e.key);
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [enterPress, setEnterPress]); 
  

  return (
    <div className="overflow-hidden h-svh flex flex-col">
      <div className='absolute z-0'>
        <Cursor/>
      </div>
      <div className="text-5xl h-40 text-center p-4 font-sans text-neutral-400 font-extrabold">
        <div className={`${enterPress ? "hidden " : ""}`}>
          <span className='block mb-4 text-orange-400'>Who are you?</span>
          <span>{name}</span>
          <span className="blinking-cursor text-5xl text-center  text-neutral-400 font-bold">|</span>
        </div>
        <div className={`${!enterPress ? "hidden " : ""} blinking-name text-7xl text-center mt-20 text-neutral-400 font-bold`}>
          Hi {name}!
        </div>
        
      </div>
      <div className='z-10'>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
