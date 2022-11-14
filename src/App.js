import React,{ useState,useCallback } from 'react';
import Button from './components/UI/Button';

import './App.css';
import DemoOutput from './components/UI/Demo/DemoOutput';

function App() {

  const [showParagraph,setShowParagraph] = useState(false);
  const [allowToggle,setAllowToggle] = useState(false);

  console.log("App Running")

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagraph((prevShowParagraph) =>!prevShowParagraph);
    }
  },[allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className='app'>
      <h2>Hi There</h2>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!!</Button>
    </div>
  );
}

export default App;
