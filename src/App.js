import React,{ useState } from 'react';
import Button from './components/UI/Button';

import './App.css';
import DemoOutput from './components/UI/Demo/DemoOutput';

function App() {

  const [showParagraph,setShowParagraph] = useState(false);

  console.log("App Running")

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) =>!prevShowParagraph );
  }

  return (
    <div className='app'>
      <h2>Hi There</h2>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!!</Button>
    </div>
  );
}

export default App;
